import React, {useState} from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import {IconButton} from "@material-ui/core";
import {Form, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {Button} from "react-bootstrap";
import WorkSpaceSettingModal from "./WorkSpaceSettingModal";

const SettingWorkspace = ({workspace, role}) => {
    const [clicked, setClicked] = useState(false);
    const handleClose = () => setClicked(false);
    return (
        <>
            <IconButton onClick={() => {
                setClicked(true);
            }}>
                <SettingsIcon/>
            </IconButton>
            <WorkSpaceSettingModal
                role={role}
                workspace={workspace}
                clicked={clicked}
                handleClose={handleClose}
            />
        </>
    )
}
export default SettingWorkspace