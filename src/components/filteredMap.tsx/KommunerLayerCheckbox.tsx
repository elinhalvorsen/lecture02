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
import { Map, MapBrowserEvent } from "ol";

interface KommuneProperies {
    kommunenummer: string;
    navn: { sprak: string; navn: string }[];
}
const KommunerLayerCheckbox = ({
    setLayers,
    map,
}: {
    setLayers: Dispatch<SetStateAction<Layer[]>>;
    map: Map;
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

    const handleClick = (e: MapBrowserEvent<MouseEvent>) => {
        const feactures = kommuneLayer
            .getSource()
            ?.getFeaturesAtCoordinate(e.coordinate);
        const firstFeature = feactures?.length ? feactures[0] : undefined;
        if (firstFeature) {
            const kommuneProperies =
                firstFeature.getProperties() as KommuneProperies;
            alert(kommuneProperies.navn.find((n) => n.sprak === "nor")!.navn);
        }
    };

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (checked) {
            setLayers((old) => [...old, kommuneLayer]);
            map.on("click", handleClick);
        } else {
            setLayers((old) => old.filter((l) => l === kommuneLayer));
        }
    }, [checked]);
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
