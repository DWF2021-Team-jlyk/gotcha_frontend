import {Button, Col, Form, Modal, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import React from "react";
import UserAvatar from "../../components/UserAvatar";

const WorkSpaceSettingModal = ({workspace, clicked, handleClose, role}) => {
    return (
        <Modal
            size={"lg"}
            show={clicked}
            onHide={handleClose}
            style={{marginTop: "100px"}}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    {workspace.name} 환경 설정
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group>
                        <Form.Label>WorkSpace Name</Form.Label>
                        <Row>

                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    defaultValue={workspace.name}
                                    disabled={role !== "ADMIN"}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>WorkSpace Members</Form.Label>

                        <Row>
                            <Col sm={8}>
                                <Form.Control
                                    type="email"
                                    disabled={role !== "ADMIN"}
                                />
                            </Col>
                            <Col sm={4}>
                                <Button
                                    disabled={role !== "ADMIN"}
                                > add Member</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                <Row>
                    {
                        ["Test1@naver.com", "Test2@naver.com", "Test3@naver.com"]
                            .map(((value, index) => {
                                return <UserAvatar user_id={value} key={index}/>
                            }))
                    }
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button variant="danger" onClick={handleClose}>
                    Leave Workspace
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={handleClose}
                    disabled={workspace.role !== "ADMIN"}
                >
                    Save Changes
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default WorkSpaceSettingModal;