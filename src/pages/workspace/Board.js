import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "@material-ui/core/Button";
import CardList from "../../components/BoardCardList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyList from "../../components/BoardMyList";
import { Icon } from "@material-ui/core";

const listStyle = {
  overflowX: "scroll",
  display: "flex",
};

const Board = () => {
  const [lists, setLists] = useState([
    {
      title: "listname1",
      cards: ["card1", "card2", "card3", "card4", "card5", "card6", "card7"],
    },
    { title: "listname2", cards: ["card1", "card2", "card3", "card4"] },
    { title: "listname3", cards: ["card1", "card2", "card3"] },
    { title: "listname4", cards: ["card1", "card2", "card3"] },
  ]);

  return (
    <div style={listStyle}>
      <Col>
        {lists.map((list, index) => {
          return <MyList list={list} key={index} />;
        })}

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            setLists([
              ...lists,
              { title: "listTest", cards: ["test1", "test2", "test3"] },
            ]);
          }}
        >
          + Add Another List
        </Button>
      </Col>
    </div>
  );
};

export default Board;
