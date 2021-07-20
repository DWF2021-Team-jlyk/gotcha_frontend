import React, { useCallback, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, FormControl, Overlay, Popover } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';

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
      <FaSearch size='24' color='white' style={{ marginTop: 7, marginRight: 9 }} />
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
            <Popover.Content as={'div'} style={{ maxHeight: 500, overflowY: 'scroll' }}>
              {workspaces
                .filter(ws => ws.ws_name.indexOf(search) >= 0)
                .map(ws =>
                  <div
                    key={ws.ws_id}
                  >
                    <Link
                      key={ws.ws_id}
                      to={`/workspace/${ws.ws_id}`}
                      style={{ fontSize: 18, color: 'black', textDecoration: 'none' }}
                    >
                      <span style={{fontSize:'.9rem', padding:2}}>- {ws.ws_name}</span>
                    </Link>
                    <hr/>
                  </div>,
                )}
            </Popover.Content>
          </Popover>
        )}
      </Overlay>
    </Form>
  );
};

export default SearchWorkspace;