import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "./isLogin";

// 작성자 : 장승업
// 작성일 : 2021-07-05
// 로그인한 사용자 접근 제한
// 로그인, 회원가입, 코드 page 접근 제한(restricted = true)
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
      />
    );
  };
  
  export default PublicRoute;