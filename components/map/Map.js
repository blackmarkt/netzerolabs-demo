import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import Axios from "axios"
// import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../styles/Map.module.css'

const Map = ({ mapData }) => {
    const mapContainer = useRef(null);
    const [zoom, setZoom] = useState(0.01);
    const [data, setData] = useState(null);
    const [map, setMap] = useState(null);

    mapboxgl.accessToken = 
        "pk.eyJ1IjoibWFya3RibGFjayIsImEiOiJjanZzY2w2cnYwZzcxM3ltZjZyYmZvMzZmIn0.4nBm1lPx-HffkRCfaI4_uQ";
    
    console.log('MAP DATA ', mapData)

    useEffect(() => {
        if (map == undefined) {
            let map = new mapboxgl.Map({
                container: mapContainer.current,
                projection: 'equirectangular',
                // style: "mapbox://styles/marktblack/cl8xmd54n000014pp4ec2wuh1",
                style: "mapbox://styles/marktblack/cl9ak59tt000715t2bb8k9ao2",
                zoom:zoom,
                // interactive: false,
                attributionControl: false
            });
            setData(mapData);
            setMap(mapContainer.current);

            map.on("load", function () {
                map.setProjection('equirectangular');

                // disable map zoom when using scroll
                map.scrollZoom.disable();
                
                map.resize();

                map.addSource('node-source', {
                    'type': 'geojson',
                    'data': mapData.map_data,
                });

                map.addLayer({
                    'id': 'node-layer',
                    'type': 'circle',
                    'source': 'node-source',
                    'paint': {
                        'circle-color': mapData.map_color,
                        'circle-blur':4,
                        'circle-radius':5
                    }
                    // "layout": {
                    //     "icon-image": "monument",
                    //     "text-field": "{title}",
                    //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    //     "text-offset": [0, 0.6],
                    //     "text-anchor": "top"
                    // }
                });
            });
        }
    }, []);

    return (
        <div className={styles.mapOuterContainer}>
            <div ref={mapContainer} style={{ height: '100%', width:'85%' }} className={styles.mapContainer}/>  
        </div>
    );
};

// export const getStaticProps = async () => {
//     const data = await Axios.get(
//       "https://netzerolabs.s3.us-west-1.amazonaws.com/node_tracker_geojson_100622_101022.geojson"
//     );
  
//     return {
//       props: {
//           mapData: data.data,
//       },
//       // revalidate: 10,
//     };
// };

export default Map;