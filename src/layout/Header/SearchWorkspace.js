import React, { useCallback, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, FormControl, Overlay, Popover } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchWorkspace = () => {
  const ref = useRef(null);
  const workspaces = useSelector(state => state.workspace.workspaces);
  const [search, setSearch] = useState('');
  const [target, setTarget] = useState(null);
  const [show, setShow] = useState(false);
  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const handleFocus = useCallback((e) => {
    setShow(true);
    setTarget(e.target);
  }, []);
  const handleBlur = useCallback((e) => {
    setShow(false);
  }, []);
  return (
    <Form className='d-flex'>
      <div ref={ref}></div>
      <FormControl
        type='search'
        placeholder='Search'
        className='mr-2'
        aria-label='Search'
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          marginRight: 10,
          width: 300,
        }}
      />
      <Overlay
        container={ref.current}
        target={target}
        show={show}
        placement='bottom'
      >
        {(props) => (
          <Popover id='search-container' {...props}>
            <Popover.Content>
              {workspaces
                .filter(ws=>ws.ws_name.indexOf(search) >= 0)
                .map(ws =>
                <div
                  key={ws.ws_id}
                  style={{width:1200}}
                >
                  <Link
                    key={ws.ws_id}
                    to={`/workspace/${ws.ws_id}`}
                    style={{fontSize:20,}}
                  >
                    {ws.ws_name}
                  </Link>
                </div>,
              )}
            </Popover.Content>
          </Popover>
        )}
      </Overlay>
      <Button
        variant='light'
        style={{ color: '#3f51b5' }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchWorkspace;