import React , {useState} from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { Avatar } from '@material-ui/core';
import {
  Button,
  Form
} from 'react-bootstrap';

const avatarIcon = (id) => {
  let returnStr = id.charAt(0);
  for (let i = 1; i < id.length; i++) {
    if (id.charAt(i) === '@') break;
    if (id.charAt(i) === id.charAt(i).toUpperCase()) returnStr += id.charAt(i);
  }
  return returnStr;
};

const CardAct = ({ cardAct }) => {
  const [showLog, setShowLog] = useState(false);

  const onClickShowLog = () => {
    setShowLog(!showLog);
  };

  return (
    <>
      <div style={{ display: 'flex', marginTop: 60, marginBottom: 5 }}>
        <h5>
          <AiOutlineAlignLeft /> Activity{' '}
        </h5>

        <Button
          style={{
            backgroundColor: '#7986CB',
            border: '1px solid #7986CB',
            marginLeft: 377,
          }}
          onClick={onClickShowLog}
        >
          {showLog === true ? <span>Hide Log</span> : <span>Show Log</span>}
        </Button>
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div style={{ display: 'flex' }}>
          <Avatar
            onClick={(event) => {}}
            style={{ margin: '10px 10px 0px 5px' }}
          >
            {avatarIcon('user01@naver.com')}
          </Avatar>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <Form.Control
              type="text"
              placeholder="Write a comment..."
              style={{ width: 445, marginRight: 10, height: 40 }}
            />
            <Button
              style={{
                backgroundColor: '#7986CB',
                border: '1px solid #7986CB',
                height: 40,
              }}
            >
              입력
            </Button>
          </div>
        </div>
      </Form.Group>

      <div style={{ height: 200 }}>
        {showLog === true ? (
          <>
            {cardAct.map((value, key) => {
              return (
                <>
                  <div style={{ display: 'flex', marginBottom: 7 }}>
                    <div>
                      <Avatar
                        onClick={(event) => {}}
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
                        </span>
                      </div>
                      <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <span
                          style={{
                            border: '1px solid #ced4da',
                            fontSize: '.95rem',
                            padding: 5,
                            borderRadius: 4,
                          }}
                        >
                          {value.act_desc}
                        </span>
                      </div>
                      <div style={{ marginTop: 3, fontSize: '.8rem' }}>
                        Edit Delete
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            {cardAct.map((value, key) => {
              if (value.islog == 0) {
                return (
                  <>
                    <div style={{ display: 'flex', marginBottom: 7 }}>
                      <div>
                        <Avatar
                          onClick={(event) => {}}
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
                          </span>
                        </div>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                          <span
                            style={{
                              border: '1px solid #ced4da',
                              fontSize: '.95rem',
                              padding: 5,
                              borderRadius: 4,
                            }}
                          >
                            {value.act_desc}
                          </span>
                        </div>
                        <div style={{ marginTop: 3, fontSize: '.8rem' }}>
                          Edit Delete
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </>
        )}
      </div>
    </>
  );
};

export default CardAct;
