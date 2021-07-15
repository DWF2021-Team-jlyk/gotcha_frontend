import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { GrAttachment } from 'react-icons/gr';
import CardFileForm from '../CardModal/CardFileForm';
import { useSelector, useDispatch } from 'react-redux';
import { postCardFile } from '../../../../modules/cardFile';
import FileCheckTrue from './FileCheckTrue';
import FileCheckFalse from './FileCheckFalse';
import { insertCardAct } from '../../../../modules/cardAct';

const CardFile = (props) => {
  const { cardId } = props;
  console.log('CardFile cardId', cardId);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const files = useSelector((state) => state.cardFile.files);
  console.log('CardFile files', files);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCardFile(cardId));
  }, [cardId]);


  const handleClick = () => {
    setShow(!show);
  };


  return (
    <>
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <h5>
          <GrAttachment /> Files
        </h5>
      </div>

      <div>
        {files.map((file, index) => {
          return (
            <div
              style={{ display: 'flex' }}
              key={index}
            >
              <div style={{ padding: 5 }}>
                  <FileCheckTrue file={file} cardId={cardId} />
                {/*{file.file_ischecked === '1' ? (*/}
                {/*) : (*/}
                {/*  <FileCheckFalse file={file} />*/}
                {/*)}*/}
              </div>
            </div>
          );
        })}
      </div>

      <div ref={ref}>
        <Button
          onClick={(e) => {
            handleClick();
            setTarget(e.target);
          }}
        >
          + Add a file
        </Button>

        <Overlay
          show={show}
          target={target}
          placement='right'
          container={ref.current}
          containerPadding={40}
        >
          {(props) => (
            <Popover id='popover-contained' {...props}>
              <Popover.Title as='h3'>
                {' '}
                <b>File 첨부</b>{' '}
              </Popover.Title>

              <Popover.Content>
                <CardFileForm
                  show={show}
                  target={target}
                  handleClick={handleClick}
                  cardId={cardId}
                />
              </Popover.Content>
            </Popover>
          )}
        </Overlay>
      </div>
    </>
  );
};

export default CardFile;
