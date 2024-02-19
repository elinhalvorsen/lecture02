import React from "react";
import ReactDOM from "react-dom/client";
import MapApplication from "./components/MapApplication";

import "./main.css";
import "ol/ol.css";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <>
        <MapApplication />
        <ToastContainer />
    </>
);
