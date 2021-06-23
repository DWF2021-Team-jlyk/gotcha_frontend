import React, {useEffect} from 'react';
import { DataGrid, GridFooter } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';
import Content from '../board_content';

//DataGrid footer에 글쓰기 버튼 넣기

const MyButton = () => {
  return(
    
      <Button variant="outlined" color="primary" style={{float:"right"}}
      href="/board_content">
        글쓰기
      </Button>
    
  );
}


const columns = [
  { field: 'id', headerName: '글 번호', width: 130 },
  { field: 'title', headerName: '글 제목', width: 130 },
  { field: 'content', headerName: '글 내용', width: 400 },
  { field: 'writer', headerName: '작성자', width: 130 },
  { field: 'date', headerName: '작성시간', width: 200},
];

const rows = [
  {id:1, title:'제목1', content:'내용1', writer:'작성자1', date:`${new Date()}`},
  {id:2, title:'제목2', content:'내용2', writer:'작성자2', date:`${new Date()}`},
  {id:3, title:'제목3', content:'내용3', writer:'작성자3', date:`${new Date()}`},
  {id:4, title:'제목4', content:'내용4', writer:'작성자4', date:`${new Date()}`},
  {id:5, title:'제목5', content:'내용5', writer:'작성자5', date:`${new Date()}`},
  {id:6, title:'제목6', content:'내용6', writer:'작성자6', date:`${new Date()}`},
  {id:7, title:'제목7', content:'내용7', writer:'작성자7', date:`${new Date()}`}
];

const MyTable=()=>{
  return (
    <div style={{ height: 400, width: '100%' }}>
        {<DataGrid 
        rows={rows} columns={columns} pageSize={5} checkboxSelection 
        components={{Footer:MyButton}}
        />
          }
        
    </div>
    
  );
}

export default MyTable;
