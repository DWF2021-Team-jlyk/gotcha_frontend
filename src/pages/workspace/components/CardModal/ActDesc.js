import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCardAct, updateCardAct } from '../../../../modules/cardAct';

const ActDesc = ({ cardAct, cardId, acts }) => {
  const [editable, setEditable] = useState(false);
  const cardInputEL = useRef();
  const [changeDesc, setChangeDesc] = useState(cardAct.act_desc);
  const [desc , setDesc] = useState('');
    
  const dispatch = useDispatch();

  //수정 focus
  const handleEditable = async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  };

  //수정시 바뀌는 값 set
  const editDesc = useCallback((e) => {
    setChangeDesc(e.target.value);
  },[]);

  const actDelete = useCallback(
    (act_id) =>
      dispatch(
        deleteCardAct({
          act_id: act_id,
        }),
      ),
    [dispatch],
  );

  const actUpdate = useCallback(
    (card_id, user_id, islog, act_desc, act_id) =>
      dispatch(
        updateCardAct({
          card_id: card_id,
          user_id: user_id,
          islog: islog,
          act_desc: act_desc,
          act_id: act_id,
        }),
      ),
    [dispatch],
  );

  //acts로
  useEffect(() => {
    setChangeDesc(cardAct.act_desc)
  }, [cardAct]);

  const save = (card_id, user_id, islog, act_desc, act_id) => {
    actUpdate(card_id, user_id, islog, act_desc, act_id);
    setEditable(false);
  };

  return (
    <div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <input
          style={{
            border: '1px solid #ced4da',
            fontSize: '.95rem',
            padding: 5,
            borderRadius: 4,
          }}
          defaultValue={changeDesc}
          disabled={!editable}
          ref={cardInputEL}
          onChange={editDesc}
        />


        {editable && (
          <Button
            style={{
              marginLeft: 10,
              fontSize: '.8rem',
              backgroundColor: '#7986CB',
              border: '1px solid #7986CB',
            }}
            onClick={() =>{
                save(cardId, 'user01@naver.com', 0, changeDesc, cardAct.act_id)
              }
            }
          >
            Save
          </Button>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 3,
          fontSize: '.8rem',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={handleEditable}>
          Edit
        </div>

        <div
          style={{ marginLeft: 6, cursor: 'pointer' }}
          onClick={() => actDelete(cardAct.act_id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default ActDesc;
