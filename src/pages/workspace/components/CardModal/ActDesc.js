import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCardAct, updateCardAct } from '../../../../modules/cardAct';
import TextField from '@material-ui/core/TextField';

const ActDesc = ({ cardAct, cardId, acts }) => {
  const [editable, setEditable] = useState(false);
  const cardInputEL = useRef();
  const [changeDesc, setChangeDesc] = useState(cardAct.act_desc);
  const [desc, setDesc] = useState('');
  const userInfo = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  //수정 focus
  const handleEditable = async (e) => {
    await setEditable(true);
    cardInputEL.current.focus();
  };

  //수정시 바뀌는 값 set
  const editDesc = useCallback((e) => {
    setChangeDesc(e.target.value);
  }, []);

  const actDelete = useCallback(
    () => dispatch(deleteCardAct({act_id: cardAct.act_id})),
    [acts],
  );

  const actUpdate = useCallback(
    (desc) => {
      dispatch(updateCardAct({...cardAct,act_desc: desc}));
      setEditable(false);
    },
    [cardAct],
  );

  //acts로
  useEffect(() => {
    setChangeDesc(cardAct.act_desc);
  }, [cardAct, acts]);


  return (
    <div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline
          maxRows={10}
          as="textarea"
          size="small"
          style={{
            // border: '1px solid #ced4da',
            fontSize: '.95rem',
            padding: 5,
            borderRadius: 4,
            width: 490,
            
          }}
          disabled={!editable}
          ref={cardInputEL}
          defaultValue={changeDesc}
          onChange={editDesc}
        ></TextField>

        {editable && (
          <Button
            style={{
              marginLeft: 10,
              fontSize: '.8rem',
              backgroundColor: '#7986CB',
              border: '1px solid #7986CB',
            }}
            onClick={()=>actUpdate(changeDesc)}
          >
            Save
          </Button>
        )}
      </div>

      {(cardAct.islog === '0' || userInfo.userId === cardAct.user_id) && (
        <div
          style={{
            display: 'flex',
            marginLeft: 8,
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
      )}
    </div>
  );
};

export default ActDesc;
