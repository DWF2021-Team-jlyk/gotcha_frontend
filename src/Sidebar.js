import "./sidenav.css"
import React from "react";
import styled from "styled-components";

const sidebar = styled.div`
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
`;

const Sidebar = () =>{
    return (
        <div className="sidenav"></div>
    )
}


export default Sidebar;