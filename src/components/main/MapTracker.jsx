import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './MapTracker.scss';
import TrackTable from "./tracking/TrackTable";

function MapTracker(){

    const mapInstance = useRef(null);
    const carMarkerRef = useRef(null);
    const directionsRendererRef = useRef(null);
    const apiKey = import.meta.env.VITE_API_GOOGLE_API_KEY;
    console.log(apiKey);
    useEffect(() => {
        const loaderCredential = {
            apiKey: apiKey,
            version: "weekly"
        };

        const loader = new Loader(loaderCredential);
        loader.importLibrary('maps')
              .then(({Map}) => {

                mapInstance.current = new Map(document.getElementById("R2Map"),{
                    center: { lat: 33.207, lng: -96.701 },
                    zoom: 13,
                  });

                  directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
                  directionsRendererRef.current.setMap(mapInstance.current);
              })
              .catch((e) => {
                console.log(`Error loading maps: ${e}`);
            });
        
        return () => {
            console.log("Map component clean up!");
            const srcUrl = document.querySelector("div#R2Map");
            if (srcUrl){
                //document.body.removeChild(srcUrl);
            }
        };
    }, []);

    function selectedTrackItem(sourceLocation, targetLocation){
        console.log(sourceLocation, targetLocation);
        const { DirectionsService } = window.google.maps;
        const directionService = new DirectionsService();


        directionService.route({
            origin: sourceLocation,
            destination: targetLocation,
            travelMode: "DRIVING",
        }, (response, status) => {
            if (status === "OK") {
                directionsRendererRef.current.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        });

    };
   
    return (
        <div className="flex flex-col">
            <TrackTable onSelectedTrack={selectedTrackItem}></TrackTable>
            <div id="R2Map"></div>
        </div>

    );
}
export default MapTracker;