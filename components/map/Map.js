import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import Axios from "axios"
// import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../styles/Map.module.css'

const Map = ({ mapData }) => {
    const mapContainer = useRef(null);
    // const [zoom, setZoom] = useState(0.0);
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
                style: "mapbox://styles/marktblack/cl9ak59tt000715t2bb8k9ao2",
                zoom:0.35,
                // center: [-77.034084142948, 38.909671288923], 
                minZoom:0.035,
                // interactive: false,
                dragPan: false,
                attributionControl: false
            });
            setData(mapData);
            setMap(mapContainer.current);

            map.on("load", function () {
                map.setProjection('equirectangular');
                
                map.resize();

                map.addSource('node-source', {
                    'type': 'geojson',
                    'data': mapData.map_data,
                });

                map.addLayer({
                    'id': 'node-layer',
                    'type': 'circle',
                    'source': 'node-source',
                    'minZoom': '0.35',
                    'paint': {
                        'circle-color': mapData.map_color,
                        'circle-blur':6,
                        'circle-radius':8
                    }
                });

            });

            const popupOffsets = {
                'top': [100, -350],
                'top-left': [0, 0],
                'top-right': [0, 0],
            }

             // Create a popup, but don't add it to the map yet.
             const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'map-popup',
                anchor: 'top',
                offset: popupOffsets,
            });

            map.on('mouseenter', 'node-layer', (e) => {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';
                 
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.nodeId;
                const ipAddress = e.features[0].properties.ipAddress.split(":")[0];
                 
                popup.setLngLat(coordinates).setHTML('<p className={styles.mapTxt}>IP:</p>' + ipAddress).addClassName('map-popup').addTo(map);
            });
                 
            map.on('mouseleave', 'node-layer', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
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