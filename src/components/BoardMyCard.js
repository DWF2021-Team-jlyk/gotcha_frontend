import Card from 'react-bootstrap/Card'
import React from 'react';

const MyCard = ({body}) => {

    return (
        <Card>
            <Card.Body>
                {body}
            </Card.Body>
        </Card>
    )
}

export default MyCard;