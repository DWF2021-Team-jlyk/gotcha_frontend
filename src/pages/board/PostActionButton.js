import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from './board_content/palette';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showboardPost } from '../../modules/boardId';
import { useHistory } from 'react-router';
import { deleteboard } from '../../modules/board';

const PostActionButtonBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
    margin-right: 0;
    `;

const ActionButton = styled.button`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: ${palette.gray[6]};
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover{
        background: ${palette.cyan[7]};
    }
    & + & {
        margin-left: 0.25rem;
    }
    `;

const PostActionButtons = ({id, ws_id}) =>{

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(()=>{
        dispatch(showboardPost(id));
    },[id]);

    const deletePost = useCallback(()=>{
        dispatch(deleteboard(id));
        alert('포스트 삭제 완료')
        history.push(`/workspace/${ws_id}`);
    },[dispatch]);

    return(
        <PostActionButtonBlock>
            <Link to ={`${id}/update`}>
            <ActionButton>수정</ActionButton>
            </Link>
            <ActionButton onClick={deletePost}>삭제</ActionButton>
        </PostActionButtonBlock>
    );
};

export default PostActionButtons;