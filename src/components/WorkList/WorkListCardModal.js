import React from "react";
import {Modal, ModalBody} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import styled from "styled-components";

const modal = styled.div`
    display: flex;
`;

const WorkListCardModal = (cardName, cardId) => {
    return (
        <Modal>
            <ModalHeader>
                {cardName}
            </ModalHeader>
            <ModalBody>

            </ModalBody>
        </Modal>
    )
}

export default WorkListCardModal;