import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import MyList from "../../components/WorkList/WorkListCardList";
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
    const [lists, setLists] = useState([]);
    //const [receiver, setReceiver] = useState(false);
    const url = '/workspace/list'
    const datas = {
        "list_id": 1
    };
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(datas),
        url,
    };

    useEffect(()=>{
        axios(options)
        .then((res) => {
            console.log(res)
            setLists([...lists, ...res.data])
            console.log(lists);
        })
        .catch(error => {
            console.log(error)
        });
    },[]);
    
    

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
                        <MyList list={list} key={index} id={index} setList={setLists}/>
                    </div>
                })}
                <div style={{margin: 10}}>

                </div>
            </div> */}

            {/* test용 receiver 
            <button 
                onClick={()=>setReceiver(!receiver)}
            >receiver</button> */}
            {
                lists.map((list)=>{
                    return <>
                        <h1>{list.list_id}</h1>
                        <h1>{list.user_id}</h1>
                        <h1>{list.list_name}</h1>
                        <h1>{list.is_fav}</h1>
                        
                    </>
                })
            }
        </>
    );
};

const WorkCard = ()=>{
    const [cards, setCards] = useState([]);
    const url = "/workspace/card";
    const datas = {"card_id" : 1};
    const options = {
        method: "POST",
        header: "content-type:application/json",
        data: JSON.stringify(datas),
        url,
    }

    useEffect (()=>{
        axios(options)
        .then((res)=>{
            console.log(res)
            setCards([...cards, ...res.data])
            console.log(cards)
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);
    
    return(
        <>
        <h1>{cards.card_id}</h1>
        <h1>{cards.card_name}</h1>
        <h1>{cards.list_id}</h1>
        <h1>{cards.ws_id}</h1>
        </>
    );
};

export default WorkCard;
