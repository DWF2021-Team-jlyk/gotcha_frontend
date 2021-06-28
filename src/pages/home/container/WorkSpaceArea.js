import React, { useCallback } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WorkSpaceCard from '../components/WorkSpaceCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeWorkspaceFav } from '../../../modules/workspaces';

const workspaceStyle = {
  style: {
    width: 1050,
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
  },
};

const WorkSpaceArea = ({ areaType}) => {
  const workspaces = useSelector(state=> state.workspaces)
  const dispatch = useDispatch();
  const onToggle = useCallback(
    ws_id=>dispatch(changeWorkspaceFav(ws_id)),
    [dispatch])
  const getAreaTitle = (areaType) => {
    return areaType === 1 ? 'Admin' : 'Member';
  };
  return (
    <Card style={workspaceStyle.style}>
      <Card.Header>
        <h3 style={{ textAlign: 'center' }}>{getAreaTitle(areaType)}</h3>
      </Card.Header>

      <Card.Body className='workspaces'>
        <Row>
          {
            workspaces
              .filter(workspace => workspace.role_id === areaType)
              .map(workspace =>
                <WorkSpaceCard
                  workspace={workspace}
                  key={workspace.ws_id}
                  onToggle={e=>onToggle(workspace.ws_id)}
                />)
          }
        </Row>
      </Card.Body>
    </Card>
  );
};


export default WorkSpaceArea;