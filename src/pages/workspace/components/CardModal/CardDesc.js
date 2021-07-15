import React, { useState, useEffect, useCallback } from 'react';
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai';
import { Button, Form } from 'react-bootstrap';
import { cardUpdate } from '../../../../modules/workspaceCard';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../../modules/cardModal';

const CardDesc = (props) => {
  const { card } = props;
  const [desc, setDesc] = useState(false);
  const [changeDesc, setChangeDesc] = useState('');

  const dispatch = useDispatch();

  const updateDesc = useCallback(changeDesc =>
      dispatch(cardUpdate({ ...card, card_desc: changeDesc })),
    [dispatch],
  );

  useEffect(() => {
    setChangeDesc(card?.card_desc);
  }, [card]);

  const saveDesc = useCallback(()=>{
    setDesc(!desc);
    dispatch(cardUpdate({...card,card_desc:changeDesc}));
    dispatch(updateCard({...card,card_desc:changeDesc}));
  },[card]);

  return (
    <>
      <h5 style={{ marginTop: 30, marginBottom: 20 }}>
        <AiFillEdit /> Description{' '}
      </h5>

      {desc === false ? (
        // Description값 보여주기
        <div
          onClick={(e) => {
            setDesc(!desc);
          }}
        >
          <Form.Control
            as='textarea'
            // defalueValue={card?.card_desc}
            value={changeDesc}
            style={{ height: '100px', resize: 'none' }}
            disabled
          />
        </div>
      ) : (
        // Description값 수정하기
        <div>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              as='textarea'
              style={{ height: '180px' }}
              onChange={(e) => setChangeDesc(e.target.value)}
            >
              {changeDesc}
            </Form.Control>
            <div style={{ marginTop: 5, float: 'right' }}>
              <Button
                onClick={saveDesc}
                style={{
                  backgroundColor: '#7986CB',
                  border: '1px solid #7986CB',
                }}
              >
                Save
              </Button>
              <AiOutlineClose
                style={{ marginLeft: 10, fontSize: 26 }}
                onClick={(e) => {
                  setDesc(!desc);
                }}
              />
            </div>
          </Form.Group>
        </div>
      )}
    </>
  );
};

export default CardDesc;
