import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MyList from "../../components/BoardMyList";
import axios from 'axios';


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
        "list_id": 1
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
                        <MyList list={list} key={index}/>
                    </div>
                })}
                <div style={{margin: 10}}>

                </div>
            </div> */}
            <h1>{lists.list_id}</h1>
            <h1>{lists.user_id}</h1>
            <h1>{lists.list_name}</h1>
            <h1>{lists.is_fav}</h1>
        </>
    );
};

export default WorkList;
