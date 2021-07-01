import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import WorkListCardList from "./components/worklist/WorkListCardList";
import WorkListCardModal from './components/worklist/WorkListCardModal';

const listStyle = {
    width: "97%",
    height: "inherit",
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = (props) => {
const {lists, cards} = props
const [modalTest,setModalTest] = useState(false);
    return (
        <>
            <Button
                variant="contained"
                color="primary"
            >
                + Add Another List
            </Button>

            <Button
                variant="contained"
                color="primary"
                onClick={e=>{setModalTest(!modalTest)}}
            >
                modalTest
            </Button>
            {modalTest&&<WorkListCardModal show={modalTest}/>}
            <div style={listStyle}>
               {lists.map((list, index) => {
                   return <div key={index} style={{height:750}}>
                       <WorkListCardList
                           lists={lists}
                           list={list}
                           listId={list.list_id}
                           cards={cards}
                           // setList={setLists}
                       />
                   </div>
               })}
            </div>
            
        </>
    );
        };

export default WorkList;
