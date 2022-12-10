import React from 'react';
import {Route, Routes} from "react-router-dom";
import Projects from "./Projects/Projects";
import StudentsRouter from "./Students";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/profile"/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/students" element={<StudentsRouter/>}/>
      <Route path="/companies" element={}/>
      <Route path="/admin" element={}/>
    </Routes>
  );
};

export default AppRouter;
