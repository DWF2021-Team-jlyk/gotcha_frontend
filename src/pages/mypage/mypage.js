import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Chip from "@material-ui/core/Chip";
import Badge from "react-bootstrap/Badge";
import "../../layout/css/mypage.css";
import { grey } from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableStyle: {
    borderCollapse: "separate",
    borderSpacing: "1rem",
  },

  mypagePosition: {
    position: "absolute",
    top: "18%",
    left: "55%",
    transform: "translateX(-50%)",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  chipStyle: {
    padding: theme.spacing(2),
  },
}));

const Mypage = () => {
  const classes = useStyles();

  const [useropen, setuserOpen] = React.useState(false);
  const [passwordopen, setpasswordOpen] = React.useState(false);

  const userhandleOpen = () => {
    setuserOpen(true);
  };

  const userhandleClose = () => {
    setuserOpen(false);
  };

  const passwordhandleOpen = () => {
    setpasswordOpen(true);
  };

  const passwordhandleClose = () => {
    setpasswordOpen(false);
  };

  //유저네임 변경 모달 바디
  const usernameBody = (
    <div className={classes.paper}>
      <div className="modaltitle" id="simple-modal-title">
        USERNAME
      </div>
      <table id="simple-modal-description" className={classes.tableStyle}>
        <tr>
          <td>현재 username</td>
          <td>
            <TextField
              disabled
              id="outlined-required"
              defaultValue="현재 username"
              variant="outlined"
              size="small"
            />
          </td>
        </tr>

        <tr>
          <td>변경할 username</td>
          <td>
            <TextField
              required
              id="outlined-required"
              placeholder="변경할 username"
              variant="outlined"
              size="small"
            />
          </td>
          <td>
            <Button variant="contained" color="primary">
              변경하기
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );

  //비밀번호 변경 모달 바디
  const passwordBody = (
    <div className={classes.paper}>
      <div className="modaltitle" id="simple-modal-title">
        PASSWORD
      </div>

      <table id="simple-modal-description" className={classes.tableStyle}>
        <tr>
          <td>현재 비밀번호 입력</td>
          <td>
            <TextField
              required
              type="password"
              id="outlined-required"
              placeholder="현재 비밀번호 입력"
              variant="outlined"
              size="small"
            />
          </td>
        </tr>
        <tr>
          <td>변경할 비밀번호</td>
          <td>
            <TextField
              required
              type="password"
              id="outlined-required"
              placeholder="변경할 비밀번호 입력"
              variant="outlined"
              size="small"
            />
          </td>
        </tr>
        <tr>
          <td>변경할 비밀번호 확인</td>
          <td>
            <TextField
              required
              id="outlined-required"
              type="password"
              placeholder="변경할 비밀번호 확인 입력"
              variant="outlined"
              size="small"
            />
          </td>
          <td>
            <Button variant="contained" color="primary" disabled>
                변경하기
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );

  const [name, setName] = useState('');
  const getName = async () => {
      const result = await axios.get("/name") //url요청
      await setName(result.data)
  }
  useEffect(()=>{
      getName()
  },[]);

  return (
    <div className={classes.mypagePosition}>
      <h1 className="title">MyPage</h1>
      <div className="shadow">
        <table className={classes.tableStyle}>
          <tr>
            <td style={{ textAlign: "center" }}>
              <Chip
                label="&nbsp;e-mail&nbsp;"
                variant="outlined"
                color="primary"
                style={{ fontSize: 18, padding: 15, marginRight: 20 }}
              />
            </td>
            <td style={{ fontSize: 18 }}>boyoung1104@naver.com</td>
          </tr>

          <tr>
            <td>
              <Chip
                label="username"
                variant="outlined"
                color="primary"
                style={{ fontSize: 18, padding: 5 }}
              />{" "}
            </td>
            <td style={{ fontSize: 18 }}>
              {name}
              <Button
                variant="contained"
                color="primary"
                onClick={userhandleOpen}
                style={{ marginLeft: 14 }}
              >
                변경
              </Button>
            </td>
            <td>
              <Modal
                open={useropen}
                className={classes.modal}
                onClose={userhandleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {usernameBody}
              </Modal>
            </td>
          </tr>

          <tr>
            <td>
              <Chip
                label="password"
                variant="outlined"
                color="primary"
                style={{ fontSize: 18, padding: 5 }}
              />{" "}
            </td>

            <td>
              <Button
                variant="contained"
                color="primary"
                onClick={passwordhandleOpen}
              >
                password 변경
              </Button>
              <Modal
                open={passwordopen}
                className={classes.modal}
                onClose={passwordhandleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {passwordBody}
              </Modal>
            </td>
          </tr>

          <tr>
            <td>
              <Chip
                label="&emsp;&nbsp;leave&emsp;&nbsp;"
                variant="outlined"
                color="primary"
                style={{ fontSize: 18}}
              />{" "}
            </td>

            <td>
              <Button
                variant="contained"
                color="primary"
              >
                &emsp;&emsp;회원탈퇴&emsp;&emsp;
              </Button>
            
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mypage;