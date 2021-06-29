import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import MyList from "../../components/WorkList/WorkListCardList";
import axios from 'axios';
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

const WorkList = () => {
    const [lists, setLists] = useState([

    ]);
    
    const url = '/workspace2'
    const datas = {
        "ws_id": 1,
        "list_id": 1,
        "token": sessionStorage.getItem('authorization'),
    };
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(datas),
        url,
    };

    axios(options)
        .then((res) => {
            console.log(res)
        }, [])
        .catch(error => {
            console.log(error)
        });



    return (
        <>
            {/* <Button
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
