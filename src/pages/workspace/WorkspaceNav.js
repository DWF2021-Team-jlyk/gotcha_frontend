import React from "react";
import {Nav} from "react-bootstrap";


const WorkspaceNav = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="/board">
            <Nav.Item>
                <Nav.Link href="/board">board</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default WorkspaceNav;