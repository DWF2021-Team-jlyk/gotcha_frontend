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
            {/* <h1>{lists.list_id}</h1>
            <h1>{lists.user_id}</h1>
            <h1>{lists.list_name}</h1>
            <h1>{lists.is_fav}</h1> */}
        </>
    );
};

export default WorkList;
