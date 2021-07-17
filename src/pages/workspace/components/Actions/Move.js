import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { postWorkspaces } from '../../../../modules/workspace';
import { updateCardWsMove, updateCardMove, updateNowPosition } from '../../../../modules/workspaceCard';
import { insertCardAct } from '../../../../modules/cardAct';
import axios from 'axios';

const buttonStyle = {
  width: 120,
  backgroundColor: '#3f51b5',
  color: 'white',
  marginBottom: 8,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CardMove({ card, ws_id }) {
  //select box에 들어갈 전체 워크스페이스
  const workspaces = useSelector((state) => state.workspace.workspaces);

  //log에 필요한 userid
  const userId = useSelector(state => state.userInfo.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postWorkspaces());
  }, []);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  //select box에서 선택한 workspace ws_id
  const [selectWsId, setSelectWsId] = useState(ws_id);
  const [selectListId, setSelectListId] = useState();
  const [lists, setLists] = useState([{}]);
  const [position, setPosition] = useState();
  const [selectPosition, setSelectPosition] = useState();

  //select box 선택한 값 저장
  const wsIdChange = (event) => {
    setSelectWsId(event.target.value);
  };

  //select box에 list 불러오기(select box에서 워크스페이스를 선택할 때 실행된다)
  useEffect(() => {
    const url = '/main/wsList/list';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': sessionStorage.getItem('accessToken'),
      },
      data: {
        ws_id: selectWsId,
      },
      url,
    };

    axios(options).then((res) => {
      setLists(res.data);
    });

  }, [selectWsId]);

  const listIdChange = (event) => {
    setSelectListId(event.target.value);
  };

  //select box에서 리스트를 선택하면, maxposition값을 불러온다
  useEffect(() => {
    const url = '/cardDetail/Action/selectMaxPosition';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        "Authorization":sessionStorage.getItem("accessToken"),
      },
      data: {
        ws_id: selectWsId,
        list_id: selectListId,
      },
      url,
    };

    axios(options).then((res) => {
      setPosition(res.data + 2);
    });


  }, [selectListId]);

  const positionChange = (event) => {
    setSelectPosition(event.target.value);
  };

  //log
  const insertLog = (card_id, user_id, islog, act_desc) => {
    dispatch(
      insertCardAct({
        card_id: card_id,
        user_id: user_id,
        islog: islog,
        act_desc: act_desc,
      }),
    );
  };

  const move = useCallback(
    (ws_id, list_id, position, card_id, nowList_id, nowPosition) => {
      //같은 워크스페이스에서 list만 변경 될 때
      if (ws_id === selectWsId) {
        dispatch(
          updateCardMove({
            ws_id: ws_id,
            list_id: list_id,
            position: position,
            card_id: card_id,
          }),
        );

        dispatch(
          updateNowPosition({
            list_id: nowList_id,
            position: nowPosition,
          }),
        );
      } else {
        //워크스페이스도 변경
        dispatch(
          updateCardWsMove({
            ws_id: ws_id,
            list_id: list_id,
            position: position,
            card_id: card_id,
          }),
        );

        dispatch(
          updateNowPosition({
            list_id: nowList_id,
            position: nowPosition,
          }),
        );
      }
    },
  );

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={buttonStyle}>
        <AiOutlineArrowRight /> &nbsp; Move
      </Button>

      <Overlay
        show={show}
        target={target}
        placement='right'
        container={ref.current}
        containerPadding={40}
      >
        <Popover id='popover-contained'>
          <Popover.Title as='h3'>
            {' '}
            <b>Move Card</b>{' '}
          </Popover.Title>

          <Popover.Content>
            <div style={{ marginTop: 10 }}>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='age-native-simple'>
                    Workspace 선택
                  </InputLabel>

                  <Select
                    native
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectWsId}
                    onChange={wsIdChange}
                  >
                    <option aria-label='None' value={ws_id}>
                      현재 workspace
                    </option>

                    {workspaces.map((value, key) => {
                      return (
                        <option key={value.list_id} value={value.ws_id}>{value.ws_name}</option>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='age-native-simple'>List 선택</InputLabel>

                  <Select
                    native
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectListId}
                    onChange={listIdChange}
                  >
                    <option aria-label='None' value='' />

                    {lists?.map((value, key) => {
                      return (
                        <option key={value.list_id} value={value.list_id}>{value.list_name}</option>
                      );
                    })

                    }
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor='age-native-simple'>
                    Position 선택
                  </InputLabel>

                  <Select
                    native
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectPosition}
                    onChange={positionChange}
                  >
                    <option aria-label='None' value='' />

                    {[...Array(position)].map((n, index) => {
                      console.log({ Array });
                      return (
                        <option aria-label='None' key={index} value={index}>
                          {index}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <Button
                style={{
                  backgroundColor: '#7986CB',
                  border: '1px solid #7986CB',
                  color: 'white',
                  margin: 8,
                  float: 'right',
                }}
                onClick={() => {
                  move(
                    selectWsId,
                    selectListId,
                    selectPosition,
                    card.card_id,
                    card.list_id,
                    card.position,
                  );
                  const result = lists.filter((list) => list.list_id == selectListId);
                  const desc = userId + '(이)가 card를' + result[0].list_name + '(으)로 이동하였습니다.';
                  insertLog(card.card_id, userId, '1', desc);
                }}
              >
                {' '}
                Move{' '}
              </Button>
              <br></br>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
