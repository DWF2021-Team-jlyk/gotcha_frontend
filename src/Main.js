import React from "react";
import "./Layout/css/sidenav.css"
import {Navbar} from "react-bootstrap";

const Main = () => {
    return (
        <div className="main">
            <Navbar>
                <Navbar.Brand>Gotcha</Navbar.Brand>
            </Navbar>
        </div>

    )
}

export default Main;