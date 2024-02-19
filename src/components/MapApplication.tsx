import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import KommunerLayerCheckbox from "./filteredMap.tsx/KommunerLayerCheckbox";
import Layer from "ol/layer/Layer";

//Denne forteller at det er grader og ikke meter
useGeographic();
const map = new Map({
    view: new View({
        center: [10, 59],
        zoom: 8,
    }),
});

const MapApplication = () => {
    const [layers, setLayers] = useState<Layer[]>([
        new TileLayer({ source: new OSM() }),
    ]);
    useEffect(() => {
        map.setLayers(layers);
    }, [layers]);

    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);

    return (
        <>
            <header>
                <h1>Kart</h1>
            </header>
            <nav>
                <KommunerLayerCheckbox setLayers={setLayers} />
            </nav>
            <main ref={mapRef}>
                <p>Mitt første kart</p>
            </main>
        </>
    );
};
export default MapApplication;
