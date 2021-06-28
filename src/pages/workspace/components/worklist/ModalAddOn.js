import React from 'react';
import { Button } from 'react-bootstrap';

export const FunctionalAddOn = () => {
  return (
    <>
      {['Member', 'Checklist', 'Date', 'File'].map((value, index) => {
        return (
          <div key={index}>
            <Button
              variant='secondary'
              style={{
                width: '150px',
                textAlign: 'left',
                marginTop: '5px',
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
              variant='secondary'
              style={{
                width: '150px',
                textAlign: 'left',
                marginTop: '5px',
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