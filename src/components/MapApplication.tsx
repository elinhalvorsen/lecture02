import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map } from "ol";
const map = new Map();

const MapApplication = () => {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        map.setTarget(mapRef.current);
    }, []);

    return (
        <>
            <header>
                <nav>
                    <h1>Mitt første kart</h1>
                </nav>
            </header>
            <main ref={mapRef}></main>
        </>
    );
};
export default MapApplication;
