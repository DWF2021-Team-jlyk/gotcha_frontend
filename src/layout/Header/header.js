import React from "react";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {Icon} from "@material-ui/core";
import {IoIosNotificationsOutline, IoMdAdd, IoPersonCircleOutline} from "react-icons/all";

const style = {}


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
                <Button variant="primary">ToGo</Button>
            </Form>
            <div style={{
                marginRight: 20
            }}>
                <IoMdAdd
                    color="white"
                    size="30"
                    onClic
                />
                <IoIosNotificationsOutline
                    color="white"
                    size="30"
                    onClick
                />
                <Link to="/mypage">
                    <IoPersonCircleOutline
                        color="#FFFFFF"
                        size="30"
                    />
                </Link>
                <Link
                    to="/Login"
                    style={{
                        marginLeft: 10,
                        fontSize: 15,
                        color: "#ffffff",
                        textDecoration:"none",
                    }}
                >
                    LOG OUT
                </Link>
            </div>
        </Navbar>
    )
}

export default Header;