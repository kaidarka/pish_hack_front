import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudentProfileContainer from "./containers/StudentProfile";

const ProfileRouter = () => {
  console.log(1213)
  return (
    <Routes>
      <Route path="/" exact element={<StudentProfileContainer/>}/>
    </Routes>
  );
};

export default ProfileRouter;
