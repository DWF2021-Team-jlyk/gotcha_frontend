import React, {useState} from "react";
import {IoMdAdd} from "react-icons/all";
import WorkSpaceAddModal from "./WorkSpaceAddModal";
import loadable from "@loadable/component";

const WorkSpaceModal = loadable(()=>import('../../components/WorkSpaceModal'));

const WorkSpaceAddButton = () => {
    const [clicked, setClicked] = useState(false);
    const handleClose = () => setClicked(false);
    return (
        <>
            <IoMdAdd
                color="white"
                size="30"
                onClick={()=>setClicked(true)}
            />
            <WorkSpaceModal
                clicked={clicked}
                handleClose={handleClose}
            />
        </>
    )
}

export default WorkSpaceAddButton;