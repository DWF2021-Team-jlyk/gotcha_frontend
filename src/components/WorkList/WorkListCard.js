import Card from 'react-bootstrap/Card'
import React, {useState} from 'react';
import styled from "styled-components";
import loadable from "@loadable/component";

const WorkListCardModal = loadable(()=>import("./WorkListCardModal"))

const WorkListCard = ({body}) => {
    const [openModal, setOpenModal] = useState(false);
    const onClick = () => {
        setOpenModal(true);
    }
    return (
        <Card style={{
            marginBottom: ".5rem",
        }}>
            <Card.Body onClick={e=>alert("test")}>
                {body}
            </Card.Body>
        </Card>
    )
}

export default WorkListCard;