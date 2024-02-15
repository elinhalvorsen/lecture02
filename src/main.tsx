import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")!);

const MapApplication = () => {
    return (
        <>
            <header>
                <h1>Mitt første kart</h1>
                <nav></nav>
            </header>
        </>
    );
};
root.render(<MapApplication />);
