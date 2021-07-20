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
      <div><FaUserCog size='25' style={{ marginRight: 20 }} /> 내가 개설한 Workspace</div> :
      <div><FaUsers size='25' style={{ marginRight: 20 }} />참여 중인 Workspace</div>;
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