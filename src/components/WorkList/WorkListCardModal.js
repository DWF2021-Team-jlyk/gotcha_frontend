import React from "react";
import {Button, Col, Modal, ModalBody, ModalFooter, Row} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import styled from "styled-components";

const modal = styled.div`
  display: flex;
`;

const WorkListCardModal = (props) => {
    return (
        <Modal
            size={"lg"}
            show={props.show}
            onHide={props.handle}
            style={{marginTop: "100px"}}
        >
            <ModalHeader
                closeButton
                style={{
                    background: "#aaaaaa"
                }}
            >
                <h2>{props.cardName}</h2>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col sm={9}>
                        <h5>Description</h5>
                        <div contentEditable>

                        </div>
                        <h5>Activity</h5>
                    </Col>
                    <Col sm={3}>
                        <div>
                            ADD TO CARD
                            {
                                ["Member", "Checklist", "Date", "File"]
                                    .map((value, index) => {
                                        return (
                                            <div key={index}>
                                                <Button
                                                    variant="secondary"
                                                    style={{
                                                        width: "150px",
                                                        textAlign: "left",
                                                        marginTop: "5px"
                                                    }}
                                                >
                                                    {value}
                                                </Button>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <br/>
                        <div>
                            ACTIONS
                            {
                                ["Move", "Copy"]
                                    .map((value, index) => {
                                        return (
                                            <div key={index}>
                                                <Button
                                                    variant="secondary"
                                                    style={{
                                                        width: "150px",
                                                        textAlign: "left",
                                                        marginTop: "5px"
                                                    }}
                                                >
                                                    {value}
                                                </Button>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary">Save</Button>
                <Button variant="danger">Delete</Button>
                <Button variant="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default WorkListCardModal;