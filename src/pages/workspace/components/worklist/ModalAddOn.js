import React from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineArrowRight} from 'react-icons/ai';

export const FunctionalAddOn = () => {
  return (
    <>
      {['Member', 'Checklist', 'Date', 'File'].map((value, index) => {
        return (
          <div key={index}>
            <Button
              style={{
                width: '150px',
                textAlign: 'left',
                marginTop: '5px',
                backgroundColor:"#3f51b5"
              }}
            >
              {value}
            </Button>
          </div>
        );
      })}
    </>

  );
};

export const ActionAddOn = () => {
  return (
    <>
      {['Move', 'Copy'].map((value, index) => {
        return (
          <div key={index}>
            <Button
              style={{
                width: '150px',
                textAlign: 'left',
                marginTop: '5px',
                backgroundColor:"#3f51b5"
              }}
            >
              {value}
            </Button>
          </div>
        );
      })}
    </>
  );
};