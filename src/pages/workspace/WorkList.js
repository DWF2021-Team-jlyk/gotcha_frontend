import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import WorkListCardList from "./components/worklist/WorkListCardList";
import axios from 'axios';
import WorkSpaceData from "../../DummyData/WorkSpaceData";

const listStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = (props) => {
    const {lists, cards, setLists, setCards} = props;
    console.log("WorkListCard",cards)
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                    setLists([
                        ...lists,
                        {
                            list_id: lists[lists.length-1].list_id+1,
                            list_name:"testList"
                        }
                    ]);
                }}
            >
                + Add Another List
            </Button>

            <div style={listStyle}>
                {lists.map((list, index) => {
                    return <div key={index}>
                        <WorkListCardList
                            lists={lists}
                            list={list}
                            listId={list.list_id}
                            cards={cards}
                            setList={setLists}
                        />
                    </div>
                })}
                <div style={{margin: 10}}>

                </div>
            </div>
        </>
    );
        };

export default WorkList;
