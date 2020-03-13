import React, { useState, useEffect  } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

export default function Mymap(){
    const [state, setState] = useState({
        markers: []
    });
    
    const position = [44.559711, 6.087204];

    function addMarker(e){
        const {markers} = state;
        markers.push(Object.values(e.latlng));
        setState({markers});
    }

    function deleteMarker(idx){
        const {markers} = state;
        markers.splice(idx,1);
        setState({markers});
    }

    return (<>
        <div>Nombre de markers <strong>{state.markers.length}</strong></div>
        <Map center={position} zoom={13}  
            style={{ height: '100vh', with: '100%'}}
            onClick={addMarker}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            {state.markers.map((position, idx) => 
                               <Marker key={`marker-${idx}`} position={position}>
                                   <Popup>
                                      <span>{}</span>
                                       <div>{position[0]}</div><br/>
                                       <div>{position[1]}</div><br/>
                                       <button onClick={() => deleteMarker(idx)}>Supprimer</button>
                                   </Popup>
                               </Marker>
                              )}
        </Map>
    </>)

};