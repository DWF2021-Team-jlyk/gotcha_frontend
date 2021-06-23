import React, {useState} from "react";
import {IoMdAdd} from "react-icons/all";
import WorkSpaceAddModal from "./WorkSpaceAddModal";

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
            <WorkSpaceAddModal
                clicked={clicked}
                handleClose={handleClose}
            />
        </>
    )
}

export default WorkSpaceAddButton;