import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";

const App = () => {
    return (
        <BrowserRouter>
            <RouteSwitch />
        </BrowserRouter>
    );
};

export default App;
