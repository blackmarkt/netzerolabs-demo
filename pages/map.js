import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Axios from "axios";
import styles from '../styles/Home.module.css'


var i = 0;

const Map = ({ mapData }) => {
    i += 1;
    console.log(mapData, i);
    const mapContainer = useRef(null);
    const [zoom, setZoom] = useState(0.5);
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
            console.log('DATA', data);

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
        <main className={styles.main}>
            <div ref={mapContainer} style={{ height: '100vh', width:'100vh' }} className="map-container"/>  
        </main>
    );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://netzerolabs.s3.us-west-1.amazonaws.com/node_tracker_geojson_100622_101022.geojson"
  );

  return {
    props: {
        mapData: data.data,
    },
    // revalidate: 10,
  };
};

export default Map;