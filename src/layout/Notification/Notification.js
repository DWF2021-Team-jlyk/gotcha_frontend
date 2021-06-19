import React from "react";
import {Card} from "react-bootstrap";

export default function Notification(props) {
  return (
    <div>
      <Card>
        <Card.Header>
          Notification
        </Card.Header>
          <Card.Body>
            {[0,1,2,3,4,5,6,7,8,9,10,11].map(value=>{
              return <Card key={value} style={{padding:"10px", margin:"5px"}}>{value}</Card>
            })}
          </Card.Body>
      </Card>
    </div>
  );
}
