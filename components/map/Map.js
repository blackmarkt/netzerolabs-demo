import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../styles/Map.module.css'

const Map = ({ mapData }) => {
    const mapContainer = useRef(null);
    const [zoom, setZoom] = useState(0.01);
    const [data, setData] = useState(null);
    const [map, setMap] = useState(null);

    mapboxgl.accessToken = 
        "pk.eyJ1IjoibWFya3RibGFjayIsImEiOiJjanZzY2w2cnYwZzcxM3ltZjZyYmZvMzZmIn0.4nBm1lPx-HffkRCfaI4_uQ";

    useEffect(() => {
        if (map == undefined) {
            let map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/marktblack/cl8xmd54n000014pp4ec2wuh1",
                zoom:zoom,
                // interactive: false,
                attributionControl: false
            });
            setData(mapData);
            setMap(mapContainer.current);

            map.on("load", function () {

                map.resize();

                // map.addSource('node-source', {
                //     'type': 'geojson',
                //     'data': mapData,
                // });

                // map.addLayer({
                //     'id': 'node-layer',
                //     'type': 'symbol',
                //     'source': 'node-source',
                //     "layout": {
                //         "icon-image": "monument",
                //         "text-field": "{title}",
                //         "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                //         "text-offset": [0, 0.6],
                //         "text-anchor": "top"
                //     }
                // });
            });
        }
    });

    return (
        <div className={styles.mapOuterContainer}>
            <div ref={mapContainer} style={{ height: '100%', width:'85%' }} className={styles.mapContainer}/>  
        </div>
    );
};

export default Map;