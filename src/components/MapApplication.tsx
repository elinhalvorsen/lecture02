import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";

//Denne forteller at det er grader og ikke meter
useGeographic();
const map = new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    view: new View({
        center: [10, 59],
        zoom: 8,
    }),
});

const MapApplication = () => {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);

    return (
        <>
            <header>
                <h1>Kart</h1>
            </header>
            <nav>Actions</nav>
            <main ref={mapRef}>
                <p>Mitt første kart</p>
            </main>
        </>
    );
};
export default MapApplication;
