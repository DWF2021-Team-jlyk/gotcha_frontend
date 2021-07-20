import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import NotiButton from "./NotiButton";
import WorkSpaceAddButton from "./WorkSpaceAddButton";
import ToMyPage from "./ToMyPage";
import SearchWorkspace from './SearchWorkspace';
import headerImg from "../../image/gc_header.png";
import { useDispatch } from "react-redux";
import { initWorkspace } from "../../modules/workspace";
const Header = () => {
    const dispatch = useDispatch();
    return (
        <Navbar
            variant="dark"
            className="justify-content-between"
            sticky="top"
            style={{
                background: "#3F51B5",
            }}
        >
            <Navbar.Brand
                as={Link}
                to="/"
                style={{
                    marginLeft: 20,
                }}
            >
                <img src={headerImg} alt={"gotcha"} width="50"/>
                GotCha
            </Navbar.Brand>
            <SearchWorkspace/>
           
            <div
                style={{
                    marginRight: 20,
                }}
            >
                <WorkSpaceAddButton/>
                &ensp;
                <NotiButton/>
                &ensp;
                <ToMyPage/>
                &ensp;
                <Link
                    to="/Login"
                    style={{
                        marginLeft: 10,
                        fontSize: 15,
                        color: "#ffffff",
                        textDecoration: "none",
                    }}
                    onClick={onClick}
                >
                    LOGOUT
                </Link>
            </div>
        </Navbar>
    );
    function onClick() {
        dispatch(initWorkspace());
        const accessToken = sessionStorage.getItem("accessToken")
        if(accessToken !== null || accessToken !== '') {
            sessionStorage.removeItem("accessToken")
        }
    }
};

export default Header
;
