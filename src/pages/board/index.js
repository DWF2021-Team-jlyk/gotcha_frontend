import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { Switch, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { postboard } from '../../modules/board';

const myButton = () => {
        return (
        <Link to="/board_content">
            <Button variant="outlined" color="primary" style={{ float: 'right' }}>
            글쓰기
            </Button>
        </Link>
        );
    };

export function MyTable(props){
    const { ws_id } = props;
    console.log('board index ws_id',ws_id);
//   const boards = useSelector((state) => state.workspaceBoard.boards);
//   console.log('board index boards', boards);
    const columns = [
    { field: 'id', headerName: '글 번호', width: 130 },
    { field: 'board_title', headerName: '글 제목', width: 130 },
    { field: 'user_id', headerName: '작성자', width: 130 },
    { field: 'board_reg_time', headerName: '작성시간', width: 200},
    { field: 'board_mod_time', headerName: '수정시간', width: 200},
    { field: 'board_content', headerName: '글 내용', width: 400 },   
    ];
    const[rows,setRows]=useState([]);

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postboard(ws_id));
  }, [ws_id]);

  

    useEffect(async(e)=>{
            const url = '/board';

        const options = {
        method: 'POST',
        headers: {
        "Authorization": sessionStorage.getItem('accessToken'),
        'content-type' : 'application/json',
        },
        data:
            {ws_id:ws_id},
        url,
        };

    const response = await axios(options);
    console.log('board response.data',response.data);
    setRows(response.data);
    },[ws_id]);

    console.log('board rows',rows);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            components={{ Footer: myButton }}
            />
            
        </div>
    );
};

