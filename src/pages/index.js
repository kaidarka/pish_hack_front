import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudentsRouter from "./Students";
import AuthRouter from "./Auth";
import Projects from "./Projects";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/profile"/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/students" element={<StudentsRouter/>}/>
      <Route path="/companies"/>
      <Route path="/admin"/>
      <Route path="/auth/*" element={<AuthRouter/>}/>
    </Routes>
  );
};

export default AppRouter;
