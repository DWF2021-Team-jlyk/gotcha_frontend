import React, {useState, useRef} from "react";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {
    IoIosNotificationsOutline,
    IoMdAdd,
    IoPersonCircleOutline,
} from "react-icons/all";
import NotiButton from "./NotiButton";
import WorkSpaceAddButton from "./WorkSpaceAddButton";

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
                GotCha
            </Navbar.Brand>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    style={{
                        marginRight: 10,
                        width: 300,
                    }}
                />
                <Button variant="light" style={{color: "#3f51b5"}}>
                    Search
                </Button>
            </Form>
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
                >
                    LOGOUT
                </Link>
            </div>
        </Navbar>
    );
};

export default Header;
