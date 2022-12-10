import React from 'react';
import {Route, Routes, redirect, useNavigate} from "react-router-dom";
import LoginContainer from "./containers/Login";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/user";

const AuthRouter = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  if (isAuth)
    navigate("/")

  return (
    <Routes>
      <Route path="/login" exact element={<LoginContainer/>}/>
    </Routes>
  );
};

export default AuthRouter;
