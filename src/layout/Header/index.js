import React from "react";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IoPersonCircleOutline,} from "react-icons/all";
import NotiButton from "./NotiButton";
import WorkSpaceAddButton from "./WorkSpaceAddButton";
import headerImg from "../../image/gc_header.png";

const Header = () => {

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
            {/*<Form className="d-flex">*/}
            {/*    <FormControl*/}
            {/*        type="search"*/}
            {/*        placeholder="Search"*/}
            {/*        className="mr-2"*/}
            {/*        aria-label="Search"*/}
            {/*        style={{*/}
            {/*            marginRight: 10,*/}
            {/*            width: 300,*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <Button variant="light" style={{color: "#3f51b5"}}>*/}
            {/*        Search*/}
            {/*    </Button>*/}
            {/*</Form>*/}
            <div
                style={{
                    marginRight: 20,
                }}
            >
                <WorkSpaceAddButton/>
                &ensp;
                <NotiButton/>
                &ensp;
                <Link to="/mypage">
                    <IoPersonCircleOutline color="#FFFFFF" size="30"/>
                </Link>
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
        const accessToken = sessionStorage.getItem("accessToken")
        if(accessToken !== null || accessToken !== '') {
            sessionStorage.removeItem("accessToken")
        }
    }
};

export default Header
;
