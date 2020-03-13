import React, { useState, useEffect  } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import L from 'leaflet';

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
    
const greenIcon = new L.Icon({
  iconUrl: 'https://image.flaticon.com/icons/svg/567/567863.svg',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [50, 82],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [82, 82]
});
    
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
                               <Marker icon={greenIcon} key={`marker-${idx}`} position={position}>
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