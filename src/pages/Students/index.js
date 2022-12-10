import React from 'react';
import { Route, Routes } from "react-router-dom";
import Listing from "./containers/Listing";

const StudentsRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Listing/>}/>
        </Routes>
    );
};

export default StudentsRouter;
