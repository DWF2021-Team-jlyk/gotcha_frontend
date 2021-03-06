import React, { useCallback, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import WorkSpaceCard from '../components/WorkSpaceCard';
import { useSelector } from 'react-redux';
import { FaUserCog, FaUsers } from 'react-icons/fa';


const workspaceStyle = {
  style: {
    width: 970,
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
  },
};

const WorkSpaceArea = ({ areaType }) => {
  const workspaces = useSelector(state => state.workspace.workspaces);

  const getAreaTitle = (areaType) => {
    return areaType === 1 ?
      <div style={{display:'flex'}}><div style={{marginLeft:330}}><FaUserCog size='25' style={{ marginRight: 20 }} /></div><div style={{marginTop:3}}>개설한 WORKSPACE</div></div> :
      <div style={{display:'flex'}}><div style={{marginLeft:330}}><FaUsers size='25' style={{marginRight: 20 }} /></div><div style={{marginTop:3}}>참여 중인 WORKSPACE</div></div>;
  };
  return (
    <Card style={workspaceStyle.style}>
      <Card.Header>
        <h3 style={{ textAlign: 'center' }}>{getAreaTitle(areaType)}</h3>
      </Card.Header>

      <Card.Body className='workspaces'>
        <Row md={3}>
          {
            workspaces
              .filter(workspace => workspace.role_id === areaType)
              .map(workspace =>
                <WorkSpaceCard
                  workspace={workspace}
                  key={workspace.ws_id}
                />
              )
          }
        </Row>
      </Card.Body>
    </Card>
  );
};


export default WorkSpaceArea;