import React,{ useState } from 'react';
import { AiFillEdit, AiOutlineClose} from 'react-icons/ai';
import {
    Button,
    Form
  } from 'react-bootstrap';

const CardDesc = ({ cardDTO }) => {
const [desc, setDesc] = useState(false);

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
            as="textarea"
            value={cardDTO?.card_name}
            style={{ height: '100px', resize: 'none' }}
            disabled
          />
        </div>
      ) : (
        // Description값 수정하기
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" style={{ height: '180px' }}>
              {cardDTO.card_name}
            </Form.Control>
            <div style={{ marginTop: 5, float: 'right' }}>
              <Button
                onClick={(e) => {
                  setDesc(!desc);
                }}
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
