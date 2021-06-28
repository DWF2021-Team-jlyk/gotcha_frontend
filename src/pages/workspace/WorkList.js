import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import WorkListCardList from "./components/worklist/WorkListCardList";
import axios from 'axios';
// import Array from ''
import WorkSpaceData from "../../DummyData/WorkSpaceData";
import { useDispatch } from 'react-redux';
import { postList } from '../../modules/workspaceList';

const listStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = (props) => {
const {lists, cards} = props
    return (
        <>
            <Button
                variant="contained"
                color="primary"
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
                           // setList={setLists}
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
