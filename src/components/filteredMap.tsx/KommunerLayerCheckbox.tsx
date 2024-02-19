import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from "react";
import { GeoJSON } from "ol/format";
const KommunerLayerCheckbox = ({
    setLayers,
}: {
    setLayers: Dispatch<SetStateAction<Layer[]>>;
}) => {
    const kommuneLayer = useMemo(
        () =>
            new VectorLayer({
                source: new VectorSource({
                    url: "/kommuner.json",
                    format: new GeoJSON(),
                }),
            }),
        []
    );
    const [checked, setChecked] = useState(false);

    return (
        <>
            <label>
                <input
                    type={"checkbox"}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                {checked ? "Gjem " : "Vis "}
                kommuner
            </label>
        </>
    );
};
export default KommunerLayerCheckbox;
