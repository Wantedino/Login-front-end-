import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './containers/home';
import Users from './containers/Users';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/usuarios" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
