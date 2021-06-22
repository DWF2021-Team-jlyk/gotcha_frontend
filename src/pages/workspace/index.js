import React from "react";
import {Nav} from "react-bootstrap";
import "../../layout/css/Layout.css"
import WorkspaceNav from "./WorkspaceNav";
import {Paper, Tab, Tabs} from "@material-ui/core";

const Workspace = () => {
    return (
        <div className="content">
            <Paper position="static">
                <Tabs value="test" centered>
                    <Tab label="WorkSpace" value="test">test</Tab>
                    <Tab label="calender" value="test">test</Tab>
                    <Tab label="Notification" value="test">test</Tab>
                </Tabs>
            </Paper>
        </div>
    )
}

export default Workspace;