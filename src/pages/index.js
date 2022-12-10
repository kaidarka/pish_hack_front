import React from 'react';
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects/Projects";
import EmployeesRouter from "./Employees";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"/>
            <Route path="/projects" element={<Projects/>} />
            <Route path="/employees" element={<EmployeesRouter/>} />
        </Routes>
    );
};

export default AppRouter;
