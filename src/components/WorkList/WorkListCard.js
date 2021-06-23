import Card from 'react-bootstrap/Card'
import React, {useState} from 'react';
import styled from "styled-components";
import loadable from "@loadable/component";
import {Col, Row} from "react-bootstrap";
import {AiFillEdit} from "react-icons/all";

const WorkListCardModal = loadable(() => import("./WorkListCardModal"))

const WorkListCard = ({body}) => {
    const [openModal, setOpenModal] = useState(false);
    const [editable,setEditable] = useState(false);
    const handleModal = () => {
        setOpenModal(false);
    }
    const onClick = () => {
        if(editable === false)
            setOpenModal(true);
    }
    const onEditable= () => setEditable(true);
    const handleDisEditable = () => setEditable(false);
    return (
        <>
            <Card style={{marginBottom: ".5rem",}}>
                <Card.Body>
                    <Row>
                        <Col sm={10}>
                            <div
                                onClick={onClick}
                                onBlur={handleDisEditable}
                                contentEditable={editable}
                                style={{
                                    height:"inherit"
                                }}
                            >
                                {body}
                            </div>
                        </Col>
                        <Col sm={1}>
                            <AiFillEdit
                                onClick={onEditable}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {
                openModal
                &&
                <WorkListCardModal
                    cardName={body}
                    show={openModal}
                    handle={handleModal}
                />
            }
        </>
    );
};

export default WorkListCard;