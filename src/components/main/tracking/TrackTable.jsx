
import { useEffect, useState } from "react";
import axios from "axios";



function TrackTable(){
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
                <table className="w-full table-fixed border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Source Address</th>
                        <th>Destination Address</th>
                    </tr>
                </thead>
                <tbody>
                    {recordData.data.map(item => (
                        <tr className="p-3 w" key={item.id}>
                            <td>{item.userInfo.lastName}, {item.userInfo.firstName} {item.userInfo.middleName}</td>
                            <td>{item.sourceAddress}</td>
                            <td>{item.targetAddress}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>

    );
}

export default TrackTable;