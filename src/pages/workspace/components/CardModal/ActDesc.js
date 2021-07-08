import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCardAct, updateCardAct } from '../../../../modules/cardAct';

const ActDesc = ({ cardAct, cardId }) => {
  const [editable, setEditable] = useState(false);
  const cardInputEL = useRef(cardAct.act_desc);
  const [changeDesc, setChangeDesc] = useState('');
  const [desc , setDesc] = useState(cardAct.act_desc);

  const handleEditable = async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  };

  const editDesc = (e) => {
    setChangeDesc(e.target.value);
  };
  const dispatch = useDispatch();

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

  useEffect(() => {
    setDesc(cardAct.act_desc)
  }, [cardAct]);

  const save = (card_id, user_id, islog, act_desc, act_id) => {
    actUpdate(card_id, user_id, islog, act_desc, act_id);
    setEditable(false);
  };

  return (
    <>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <input
          style={{
            border: '1px solid #ced4da',
            fontSize: '.95rem',
            padding: 5,
            borderRadius: 4,
          }}
          defaultValue={desc}
          disabled={!editable}
          ref={cardInputEL}
          onChange={editDesc}
        ></input>

        {editable && (
          <Button
            style={{
              marginLeft: 10,
              fontSize: '.8rem',
              backgroundColor: '#7986CB',
              border: '1px solid #7986CB',
            }}
            onClick={() =>
              save(cardId, 'user01@naver.com', 0, changeDesc, cardAct.act_id)
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
    </>
  );
};

export default ActDesc;
