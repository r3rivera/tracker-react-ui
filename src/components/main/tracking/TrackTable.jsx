
import { useEffect, useState } from "react";
import axios from "axios";



function TrackTable({onSelectedTrack}){
    let [recordData, setRecordData] = useState(null);

    useEffect(() => {
        const fetchTracks = async () => {
            try{
                const response = await axios.get('http://proyekto.r2-rivera.com:8082/tracker');
                setRecordData(response?.data);
            }catch(err){
                console.log("Error with fetch");
            }finally{
                console.log("clean up");
            }
        };
        fetchTracks();
    },[]);

    if(recordData && <div>ERROR</div>)
    return(

            <div className="w-full">
                <table className="w-full table-fixed border-collapse ">
                <thead className="font-extrabold bg-slate-500 py-6">
                    <tr>
                        <th>Name</th>
                        <th>Source Address</th>
                        <th>Destination Address</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody className="">
                    {recordData.data.map(item => (
                        <tr className="hover:bg-white/5 cursor-pointer" key={item.id} onClick={() => onSelectedTrack(item.sourceLocation, item.targetLocation)}>
                            <td className="pl-3 py-2">{item.userInfo.lastName}, {item.userInfo.firstName} {item.userInfo.middleName}</td>
                            <td className="pl-3 py-2">{item.sourceAddress}</td>
                            <td className="pl-3 py-2">{item.targetAddress}</td>
                            <td className="pl-3 py-2">{JSON.stringify(item.sourceLocation)}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>

    );
}

export default TrackTable;