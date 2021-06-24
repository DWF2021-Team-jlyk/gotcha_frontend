import React from "react";
import {Avatar} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";


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
        <Col>
            <Row>
                <Col>
                    <Avatar
                        onClick={event => {
                        }}
                        style={{margin: "10px 10px 0px 5px"}}>
                        {avatarIcon(props.user_id)}
                    </Avatar>
                </Col>
                <Col>
                    <span>
                        {props.user_id}
                    </span>
                    <Row>
                        <Col>
                            To admin
                        </Col>
                        <Col>추방하기</Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default UserAvatar;