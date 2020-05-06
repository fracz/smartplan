import React, {useState, useEffect} from 'react';
import axios from './utils/API'

const Devices = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        axios.get('/channels')
            .then(response => {
                setDevices(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    return (
        <div>
            <h2>Your devices: </h2>
            <ul style={{border: "1px solid #00d051", borderRadius: "25px", margin: 15, padding: 10, listStyleType: "none"}} onClick={event => alert(getEventTarget(event).innerHTML)}>
                {devices.map(device => (
                    <li style={{margin: 10, padding: 10, borderBottom: "1px solid #00d051"}}>
                        ID{device.id} name: {device.caption}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Devices
