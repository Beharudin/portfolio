import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" exact
                    element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
