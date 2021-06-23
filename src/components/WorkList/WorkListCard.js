import Card from 'react-bootstrap/Card'
import React, {useState} from 'react';
import styled from "styled-components";
import loadable from "@loadable/component";

const WorkListCardModal = loadable(() => import("./WorkListCardModal"))

const WorkListCard = ({body}) => {
    const [openModal, setOpenModal] = useState(false);
    const onClick = () => {
        setOpenModal(true);
    }
    return (
        <>
            <Card style={{
                marginBottom: ".5rem",
            }}
                  onClick={onClick}
            >
                <Card.Body>
                    {body}
                </Card.Body>
            </Card>
            {openModal && <WorkListCardModal/>}
        </>
    );
};

export default WorkListCard;