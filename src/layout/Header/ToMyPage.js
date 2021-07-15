import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import {IoPersonCircleOutline,} from "react-icons/all";
import { getUserInfo } from '../../modules/userInfo';

const ToMyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <>
      <Link to="/mypage">
        <IoPersonCircleOutline color="#FFFFFF" size="30" />
      </Link>
    </>
  );
};

export default ToMyPage;