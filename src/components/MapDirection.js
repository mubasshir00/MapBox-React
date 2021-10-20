import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import './MapboxDirection.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibXViYXNzaGlyMDAiLCJhIjoiY2t1emE2cGFlM2hsajJ3cXIxaG9zcHQ0aCJ9.e0x0NgPmZIy7HxYf1cg4tA';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.429399, 23.815354],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map">
                
            </div>
        </div>
    )
}

export default MapDirection
