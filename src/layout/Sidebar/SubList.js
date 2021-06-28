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


const textCut = (txt, len, lastTxt) => {
  if (len == '' || len == null) {
    // 기본값
    len = 20;
  }
  if (lastTxt == '' || lastTxt == null) {
    // 기본값
    lastTxt = '...';
  }
  if (txt.length > len) {
    txt = txt.substr(0, len) + lastTxt;
  }
  return txt;
};

const SubList = ({ workspaces, open, category }) => {
  const classes = useStyles();

  return (
    <Collapse className={classes.sub} in={open} timeout="auto" unmountOnExit>
      {/* workspace.ws_id로 axios 이용해서 값받아오기 */}
      {workspaces.map((workspace) => {
        return (
          <List key={workspace.ws_id} component="div" disablePadding>
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
                  <ListItemText primary= {textCut(workspace.ws_name,13,"...")}/>
                </Link>
              </Button>
              {category !== 'FAVORITE' && (
                <SettingWorkspace workspace={workspace} role={category} />
              )}
            </ListItem>
          </List>
        );
      })}
    </Collapse>
  );
};

export default SubList;
