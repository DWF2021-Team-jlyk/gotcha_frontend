import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import MyList from "../../components/BoardMyList";

const listStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = () => {
    const [lists, setLists] = useState([
        {
            title: "listname1",
            cards: ["card1", "card2", "card3", "card4", "card5", "card6", "card7"],
        },
        {title: "listname2", cards: ["card1", "card2", "card3", "card4"]},
        {title: "listname3", cards: ["card1", "card2", "card3"]},
        {title: "listname4", cards: ["card1", "card2", "card3"]},
    ]);

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                    setLists([
                        ...lists,
                        {title: "listTest", cards: ["test1", "test2", "test3"]},
                    ]);
                }}
            >
                + Add Another List
            </Button>

            <div style={listStyle}>
                {lists.map((list, index) => {
                    return <div key={index}>
                        <MyList list={list} key={index}/>
                    </div>
                })}
                <div style={{margin: 10}}>

                </div>
            </div>
        </>
    );
};

export default WorkList;
