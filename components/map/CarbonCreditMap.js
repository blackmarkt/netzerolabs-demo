import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import carbonMapStyles from '../../styles/Map.module.css'

const CarbonCreditMap = ({ mapData }) => {
    const mapContainer = useRef(null);
    // const [zoom, setZoom] = useState(0.0);
    const [carbonMapData, setCarbonMapData] = useState(mapData);
    const [carbonMap, setCarbonMap] = useState(null);

    mapboxgl.accessToken = 
        "pk.eyJ1IjoibWFya3RibGFjayIsImEiOiJjanZzY2w2cnYwZzcxM3ltZjZyYmZvMzZmIn0.4nBm1lPx-HffkRCfaI4_uQ";

    // mapboxgl.accessToken = process.env.NEXT_MAPBOX_KEY;
    
    // console.log('MAP DATA ', mapData)

    useEffect(() => {
        if (carbonMap == undefined) {
            let map = new mapboxgl.Map({
                container: mapContainer.current,
                projection: 'equirectangular',
                style: "mapbox://carbonMapStyles/marktblack/cl9ak59tt000715t2bb8k9ao2",
                zoom:0.35,
                // center: [-77.034084142948, 38.909671288923], 
                minZoom:0.035,
                interactive: false,
                dragPan: false,
                attributionControl: false
            });
            setCarbonMapData(mapData);
            setCarbonMap(mapContainer.current);

            map.on("load", function () {
                map.setProjection('equirectangular');
                
                map.resize();

                map.addSource('project-source', {
                    'type': 'geojson',
                    'data': mapData,
                });

                map.addLayer({
                    'id': 'project-layer',
                    'type': 'circle',
                    'source': 'project-source',
                    'minZoom': '0.15',
                    'paint': {
                        'circle-color': 'red',
                        'circle-blur':8,
                        'circle-radius':10
                    }
                });

            });

            const popupOffsets = {
                'top': [0, -350],
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

            map.on('mouseenter', 'project-layer', (e) => {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';
                 
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.name;
                const id = e.features[0].properties.id;
                 
                popup.setLngLat(coordinates).setHTML('<p className={carbonMapStyles.mapTxt}>IP:</p>' + id).addClassName('map-popup').addTo(map);
            });
                 
            map.on('mouseleave', 'project-layer', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
        }
    }, []);

    return (
        <div className={carbonMapStyles.mapOuterContainer}>
            <div ref={mapContainer} style={{ height: '100%', width:'85%' }} className={carbonMapStyles.mapContainer}/>  
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

export default CarbonCreditMap;