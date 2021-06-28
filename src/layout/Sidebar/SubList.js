import { Button, Collapse, ListItem, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import SettingWorkspace from './SettingWorkspace';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sub: {
    paddingBottom: 20,
  },
}));

const SubList = ({ workspaces, open, category }) => {
  const classes = useStyles();
  return (
    <Collapse className={classes.sub} in={open} timeout='auto' unmountOnExit>
      {
        workspaces.map(workspace => {
          return (
            <List key={workspace.ws_id} component='div' disablePadding>
              <ListItem className={classes.nested}>
                <Button>
                  <Link
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      underline: 'none',
                    }}
                    to={`/workspace/${workspace.ws_id}`}
                  >
                    <ListItemText primary={workspace.ws_name} />
                  </Link>
                </Button>
                {category !== 'FAVORITE' &&
                <SettingWorkspace workspace={workspace} role={category} />}
              </ListItem>
            </List>
          );
        })
      }
    </Collapse>
  );
};

export default SubList;