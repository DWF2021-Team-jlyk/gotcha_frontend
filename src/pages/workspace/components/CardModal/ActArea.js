import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ActDesc from './ActDesc';
import { deleteCardAct } from '../../../../modules/cardAct';

const avatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase()) returnStr += id.charAt(i);
  }
  return returnStr;
};

// 컴포넌트 합치기..

const ActArea = ({ cardAct, cardId }) => {
  useEffect(() => {}, [cardAct]);
  return (
    <>
      {cardAct.map((value, key) => {
        return (
          <>
            <div style={{ display: 'flex', marginBottom: 7 }}>
              <div>
                <Avatar
                  // onClick={(event) => {}}
                  style={{ margin: '10px 10px 0px 5px' }}
                >
                  {avatarIcon(value.user_id)}
                </Avatar>
              </div>

              <div>
                <div style={{ marginTop: 7, fontSize: '.9rem' }}>
                  <b>{value.user_id}</b>{' '}
                  <span style={{ fontSize: '0.8rem' }}>
                    {value.created_date}
                    {value.isedit == 1 ? (
                      <span>
                        <b> (edit)</b>
                      </span>
                    ) : null}
                  </span>
                </div>
                <ActDesc cardId={cardId} cardAct={value} />
                
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ActArea;
