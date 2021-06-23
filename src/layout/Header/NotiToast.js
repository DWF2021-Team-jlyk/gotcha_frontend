import React, {useState} from "react";
import {IoIosNotificationsOutline} from "react-icons/all";
import {Toast} from "react-bootstrap";

const NotiToast = () => {
    const [showNoti, setShowNoti] = useState(false);
    const onClick = () => {
        setShowNoti(true);
    }
    const closeToast = () => {
        setShowNoti(false);
    }
    return (
        <>
            <IoIosNotificationsOutline
                color="white"
                size="30"
                onClick={onClick}
            />
            <Toast></Toast>
        </>
    )
}

export default NotiToast;