import React, { useEffect, useRef, useState } from 'react';
import Creator from '../../tool/Creator';
import mAxios from '../../utils/API';
import DevicesPage from '../Devices/DevicesPage';
import Tool from '../../Tool';
import Location from '../../tool/model/Location';
import { Route, Switch } from 'react-router-dom';
import Level from '../../tool/model/Level';
import NewLevelModal from '../../components/DrawTool/NewLevelModal';
import NewDeviceModal from '../../components/Devices/NewDeviceModal';
import Manager from '../Manager/Manager';

const DrawTool = (props) => {
    const creationCanvas = useRef(null);
    const [creator, setCreator] = useState(null);
    const [location, setLocation] = useState(null);
    const [showAddLevelModal, setShowAddLevelModal] = useState(false);
    const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);

    const change = (cr) => {
        creationCanvas.current = cr.canvas;

        const creator = new Creator(creationCanvas.current);

        creator.setBackgroundImage("https://www.roomsketcher.com/wp-content/uploads/2015/11/RoomSketcher-2-Bedroom-Floor-Plans.jpg");
        creator.setRooms(cr.getRooms());
        creator.setDevices(cr.getDevices());
        creator.drawCanvas();
        setCreator(creator);
    };

    /*
    * This method must be created seperately as we cannot save image with background image behind our drawing
    * as it gives us SecurityError (if you want to know in details read about CORS)
    * */
    const changeCondignation = (cr) => {
        creationCanvas.current = cr.canvas;

        const creator = new Creator(creationCanvas.current);

        creator.setRooms(cr.getRooms());
        creator.setDevices(cr.getDevices());
        creator.drawCanvas();
        setCreator(creator);
    };

    const addNewLevel = (levelName, blueprintUrl) => {
        const preLocation = location; 
        preLocation.levels.push(new Level(null, levelName, blueprintUrl, [], preLocation.levels.length)); 
        setLocation(preLocation); 
        setShowAddLevelModal(false)
    }

    const addNewDevice = (deviceName, color, deviceId) => {
        creator.addDeviceCommand(deviceName, color, deviceId);
        setShowAddDeviceModal(false);
    }

    useEffect(() => {
        const creator = new Creator(creationCanvas.current);
        setCreator(creator);

        const query = window.location.search;
        const params = new URLSearchParams(query);
        const locationId = params.get('locationId');
        if(locationId != null) {
            mAxios.get('/locations/' + locationId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then(response => {
                const location = response.data;
                setLocation(location);

                if(location.levels.length === 0) {
                    setShowAddLevelModal(true);
                } else {
                    if(location.levels[0].blueprintUrl != null) {
                        creator.setBackgroundImage(location.levels[0].blueprintUrl);
                    }
                    creator.setRooms(location.levels[0].rooms);
                    creator.drawCanvas();
                }
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            setLocation(new Location(0, props.locationName ? props.locationName : "Unknown", []));
            setShowAddLevelModal(true);
        }
        setShowAddDeviceModal(true);
    }, []);

    return (
        <Switch>
            <Route path="/draw/devices">
                <DevicesPage setShowAddDeviceModal={setShowAddDeviceModal} change={changeCondignation} creationCanvas={creationCanvas} parentCreator={creator}/>
                { showAddDeviceModal ? <NewDeviceModal addNewDevice={addNewDevice} showModal={showAddDeviceModal} setShowModal={setShowAddDeviceModal}/> : null}
            </Route>
            <Route path="/draw/manager">
                <Manager change={changeCondignation} creationCanvas={creationCanvas} parentCreator={creator}/>
            </Route>
            <Route path="/draw">
                <Tool location={location} setShowAddLevelModal={setShowAddLevelModal} change={change} creationCanvas={creationCanvas} parentCreator={creator}/>
                { showAddLevelModal ? <NewLevelModal addNewLevel={addNewLevel} showModal={showAddLevelModal} setShowModal={setShowAddLevelModal} /> : null }
            </Route>
        </Switch>
    );
};

export default DrawTool;