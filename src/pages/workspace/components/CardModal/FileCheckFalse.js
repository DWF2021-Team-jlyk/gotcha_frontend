import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCardFile, updateCardFile } from '../../../../modules/cardFile';

const FileCheckFalse = (props) => {
  const { file } = props;

  const dispatch = useDispatch();

  const updateFileIschecked = useCallback(
    (fileIsChecked) => {
      dispatch(
        updateCardFile({
          ...file,
          file_ischecked: fileIsChecked,
        }),
      );
    }, []);


  return <div style={{display:'flex'}}>
      <Form.Check
      type="checkbox"
      id="autoSizingCheck"
      className="mb-2"
      onClick={() =>
        updateFileIschecked('1')
      }
    />
    <div
        style={{ marginLeft: 5, width: '100%', minWidth: 200 }}
      >
        {file.file_name}
      </div>

  </div>;
};

export default FileCheckFalse;
