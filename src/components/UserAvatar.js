import React from "react";
import {Avatar} from "@material-ui/core";


const UserAvatar = (props) => {
    const avatarIcon = (id) => {
        let returnStr = id.charAt(0);
        for (let i = 1; i < id.length; i++) {
            if (id.charAt(i) === "@")
                break;
            if (id.charAt(i) === id.charAt(i).toUpperCase())
                returnStr += id.charAt(i);
        }
        return returnStr;
    }

    return (
        <>
            <Avatar
                onClick={event => {

                }}
                style={{margin: "10px 10px 0px 5px"}}>
                {avatarIcon(props.user_id)}
            </Avatar>
        </>
    )
}

export default UserAvatar;