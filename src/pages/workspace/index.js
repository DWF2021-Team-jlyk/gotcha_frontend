import React from "react";
import {Nav} from "react-bootstrap";
import "../../layout/css/Layout.css"
import WorkspaceNav from "./WorkspaceNav";
import {Paper, Tab, Tabs} from "@material-ui/core";
import TabPanel from "./TabPanel";
import Board from "./Board";
import MyCalendar from "../calendar";
import MyTable from "../board";


const Workspace = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div style={{margin: "10px"}}>
            <Paper position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="board" value={0}/>
                    <Tab label="calender" value={1}/>
                    <Tab label="Notification" value={2}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Board/>
                </TabPanel>
                <TabPanel value={value} index={1}><MyCalendar/></TabPanel>
                <TabPanel value={value} index={2}><MyTable/></TabPanel>
            </Paper>
        </div>
    )
}

export default Workspace;