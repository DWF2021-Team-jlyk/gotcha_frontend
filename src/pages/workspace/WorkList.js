import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import WorkListCardList from "./components/worklist/WorkListCardList";
import axios from 'axios';
import WorkSpaceData from "../../DummyData/WorkSpaceData";
import { useDispatch } from 'react-redux';
import { postList } from '../../modules/workspace';

const listStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "auto",
    margin: "10px",
    whiteSpace: "nowrap"
};

const WorkList = (props) => {
    const {lists, ws_id} = props;
    const dispatch = useDispatch();
    // useEffect(()=>{dispatch(postList(ws_id))});
    console.log(dispatch(postList(ws_id)));

    // const [lists, setLists] = useState(WorkSpaceData.lists);
    // const url = '/workspace2'
    // const datas = {
    //     "list_id": 1
    // };
    // const options = {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/json' },
    //     data: JSON.stringify(datas),
    //     url,
    // };
    //
    // axios(options)
    //     .then((res) => {
    //         console.log(res)
    //     }, [])
    //     .catch(error => {
    //         console.log(error)
    //     });
    return (
        <>
            <Button
                variant="contained"
                color="primary"
            >
                + Add Another List
            </Button>

            {/*<div style={listStyle}>*/}
            {/*    {lists.map((list, index) => {*/}
            {/*        return <div key={index}>*/}
            {/*            <WorkListCardList*/}
            {/*                lists={lists}*/}
            {/*                list={list}*/}
            {/*                listId={list.list_id}*/}
            {/*                // cards={cards}*/}
            {/*                // setList={setLists}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    })}*/}
            {/*    <div style={{margin: 10}}>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*/!* <h1>{lists.list_id}</h1>*/}
            {/*<h1>{lists.user_id}</h1>*/}
            {/*<h1>{lists.list_name}</h1>*/}
            {/*<h1>{lists.is_fav}</h1> *!/*/}
        </>
    );
};

export default WorkList;
