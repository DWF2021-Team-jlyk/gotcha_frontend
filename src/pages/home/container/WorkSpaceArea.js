import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WorkSpaceCard from '../components/WorkSpaceCard';
import { connect } from 'react-redux';
import { changeWorkspaceFav } from '../../../modules/workspace';

const workspaceStyle = {
  style: {
    width: 1050,
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
  },
};

const WorkSpaceArea = ({
                         areaType,
                         workspaces,
                         changeWorkspaceFav,
                       }) => {
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
          {console.log(workspaces)}
          {
            workspaces
              .filter(workspace => workspace.role_id === areaType)
              .map(workspace =>
                <WorkSpaceCard
                  workspaces={workspace}
                  ws_id={workspace.ws_id}
                  ws_name={workspace.ws_name}
                  is_fav={workspace.is_fav}
                  onToggle={changeWorkspaceFav}
                  key={workspace.ws_id}
                />,
              )
          }
        </Row>
      </Card.Body>
    </Card>
  );
};


export default connect(
  state => ({
    workspaces: state.workspaces,
  }),
  {
    changeWorkspaceFav,
  },
)(WorkSpaceArea);