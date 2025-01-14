import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './MapTracker.scss';

function MapTracker(){

    useEffect(() => {

        const loader = new Loader({apiKey: "",version: "weekly"});
        loader.importLibrary('maps')
              .then(({Map}) => {
                new Map(document.getElementById("R2Map"),{
                    center: { lat: 33.207, lng: -96.701 },
                    zoom: 13,
                  });
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
   

    return (
    <div id="R2Map"></div>
    );
}
export default MapTracker;