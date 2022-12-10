import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudentsRouter from "./Students";
import ProjectsRouter from "./Projects";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/profile"/>
      <Route path="/projects" element={<ProjectsRouter/>}/>
      <Route path="/students" element={<StudentsRouter/>}/>
      <Route path="/companies"/>
      <Route path="/admin"/>
    </Routes>
  );
};

export default AppRouter;
