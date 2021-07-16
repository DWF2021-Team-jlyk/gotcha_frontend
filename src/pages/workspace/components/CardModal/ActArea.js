import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ActDesc from './ActDesc';
import { deleteCardAct, postCardAct } from '../../../../modules/cardAct';
import AvatarIcon from '../../../../Functions/AvatarIcon';

// 컴포넌트 합치기..

const ActArea = ({ cardAct, cardId }) => {
  const acts = useSelector(state=>state.cardAct.acts);
  useEffect(() => {
  }, [cardAct]);

  return (
    <>
      {cardAct.map((value) => {
        return (
          <div
            style={{ display: 'flex', marginBottom: 7 }}
            key={value.act_id}
          >
            <div>
              <Avatar
                style={{ margin: '10px 10px 0px 5px' }}
                defaultValue={AvatarIcon(value.user_id)}
              />
            </div>
            <div>
              <div style={{ marginTop: 7, fontSize: '.9rem' }}>
                <b>{value.user_id}</b>{' '}
                <span style={{ fontSize: '0.8rem' }}>
                  {value.created_date}
                  {value.isedit === "1" ? (<span><b> (edit)</b></span>) : null}
                </span>
              </div>
              <ActDesc key={value.act_id} cardId={cardId} acts={cardAct} cardAct={value} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ActArea;
