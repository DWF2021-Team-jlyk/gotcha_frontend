import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "./isLogin";

// 작성자 : 장승업
// 작성일 : 2021-07-05
// 로그인한 사용자 접근 허용
// 로그인하지 않은 사용자 로그인 페이지로 리다이렉트
const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('rest',rest)
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /login page
      <Route
        {...rest}
        render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/Login" />)}
      />
    );
  };
  
  export default PrivateRoute;