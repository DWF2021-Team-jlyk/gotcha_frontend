import React from "react";
import {Button, Col, Form, Modal, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

const WorkSpaceAddModal = (props) => {
    return (
        <Modal
            size={"lg"}
            show={props.clicked}
            onHide={props.handleClose}
            style={{marginTop: "100px"}}
        >
            <ModalHeader closeButton>
                <ModalTitle>WorkSpace 추가하기</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group>
                        <Form.Label>WorkSpace Name</Form.Label>
                        <Row>
                            <Col sm={8}>
                                <Form.Control type="text"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>WorkSpace 멤버</Form.Label>
                        <Row>
                            <Col sm={8}>
                                <Form.Control type="email"/>
                            </Col>
                            <Col sm={4}>
                                <Button>멤버 초대하기</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="danger" onClick={props.handleClose}>
                    취소하기
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    추가하기
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default WorkSpaceAddModal;