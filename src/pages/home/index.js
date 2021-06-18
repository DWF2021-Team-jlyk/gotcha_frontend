import React from "react";
import "../../layout/css/Layout.css";
import WorkSpaceCard from "../../components/WorkSpaceCard";
import {Button, Card, Row} from "react-bootstrap";
import {Box} from "@material-ui/core";

const Home = ({classes}) => {
    return (
        <Box>
            <Box>
                <WorkSpaceCard title="test"/>
            </Box>
        </Box>
    )
}

export default Home;