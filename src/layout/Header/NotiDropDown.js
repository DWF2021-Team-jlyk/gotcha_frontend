import React, {useRef, useState} from "react";
import {IoIosNotificationsOutline} from "react-icons/all";
import {Overlay, Popover} from "react-bootstrap";


const NotiDropDown = () => {
    const [showNoti, setShowNoti] = useState(false);
    const onClick = () => setShowNoti(!showNoti);
    const target = useRef(null);

    return (
        <>
            <IoIosNotificationsOutline
                color="white"
                size="30"
                id="NotiButton"
                onClick={onClick}
                ref={target}
            />
            <Overlay
                target={target.current}
                show={showNoti}
                placement="bottom"
            >
                <div>
                    sample
                </div>
            </Overlay>
        </>
    )
};

export default NotiDropDown;