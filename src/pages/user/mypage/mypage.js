import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Chip from "@material-ui/core/Chip";
import "./mypage.css";
import axios from "axios";
import apiAxios from "../../../lib/apiAxios"
import { red } from "@material-ui/core/colors";

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

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  chipStyle: {
    padding: theme.spacing(2),
  },

  pwdTrueFont: {
    color: "blue",
    fontSize: "12px",
  },

  pwdFalseFont: {
    color: "red",
    fontSize: "12px",
  },
}));

const Mypage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [useropen, setuserOpen] = React.useState(false);
  const [passwordopen, setpasswordOpen] = React.useState(false);
  const [leaveopen, setleaveOpen] = React.useState(false);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [changeUserName, setChangeUserName] = useState('');
  const [password, setPassword] = useState({
    currentPassword: '',
    changePassword: '',
    checkPassword: '',
  });
  const [leavePwd,setLeavePwd] = useState('');
  const [isActive, setIsActive] = useState();
  const [isResult, setIsResult] = useState();
  const [checkPrePwd, setCheckPrePwd] = useState(false);
  const userhandleOpen = () => {
    setChangeUserName('')
    setIsActive(true)
    setuserOpen(true);
  };

  const userhandleClose = () => {
    setuserOpen(false);
  };

  const passwordhandleOpen = () => {
    setPassword({
      currentPassword: '',
      changePassword: '',
      checkPassword: '',
    })
    setIsResult(true);
    setIsActive(true);
    setCheckPrePwd(false);
    setpasswordOpen(true);
  };

  const passwordhandleClose = () => {
    setpasswordOpen(false);
  };

  const leavehandleOpen = () => {
    setIsResult(true)
    setIsActive(true)
    setleaveOpen(true);
  };

  const leavehandleClose = () => {
    setleaveOpen(false);
  };

  // mypage user info
  useEffect(()=>{
    apiAxios('/home/myPage',{
      "accessToken":sessionStorage.getItem("accessToken")
    })
    .then(res=>{
      setUserId(res.data.user_id)
      setUserName(res.data.user_name) 
    })
  },[])

  

  // username ?????? input
  function userNameInput(e) {
    setChangeUserName(e.target.value)
  }

  // username ?????? ???????????????
  function checkUsernameValid(e) {
    if(e.target.value.length > 0) {
      setIsActive(false)
    }else if(e.target.value.length === 0) {
      setIsActive(true)
    }
  }

  // update username btn
  function userNameClick(e) {
    e.preventDefault();
    apiAxios('/home/updateUserName',{
        "user_name":changeUserName,
      }).then(()=>{
        setuserOpen(false);
        setUserName(changeUserName)
      })
  }

  const { currentPassword, changePassword, checkPassword } = password;

  // ???????????? ?????? input
  function passwordInput(e) {
    const {value, name} = e.target;
    setPassword({
      ...password,
      [name]: value
    });
  };
   
  // ?????? ???????????? check(password ??????)
  function currentPwdonBlur() {
    if(currentPassword.length > 0) {
      apiAxios('/home/checkCurrentPwd',{
        "user_pwd": currentPassword,
      })
      .then(res => {
        if(res.data === true) {
          setIsResult(true)
          if(changePassword.length > 0
            && checkPassword.length > 0) {
            setIsActive(false)
          }
        }else if(res.data === false){
          setIsResult(false)
          setIsActive(true)
        }
      })
    }
  }

  // ?????? ???????????? ?????? ??????(password ??????)
  useEffect(() => {
    if(currentPassword.length > 0 && 
      changePassword.length > 0 &&
      currentPassword === changePassword) {
      setCheckPrePwd(true)      
    }else {
      setCheckPrePwd(false)
    }
  },[changePassword])

  // password ?????? btn ?????????
  useEffect(() => {
    if( currentPassword.length > 0
      && changePassword.length > 0
      && checkPassword.length > 0
      && isResult === true
      && checkPrePwd === false) {
        setIsActive(false)
    } else {
      setIsActive(true)
    }
  },[password])

  // password ?????? btn
  function passwordBtn(e) {
    e.preventDefault();
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    
    if(isResult === true && 
      changePassword === checkPassword && 
      reg.test(changePassword) === true) {
        apiAxios('/home/changePwd',{
          "user_pwd": changePassword,
        }).then(() => {
          sessionStorage.removeItem("accessToken")
          history.push('/Login')
        })
    }else if(changePassword !== checkPassword) {
      alert("????????? ??????????????? ???????????? ????????????.")
    }else if(reg.test(changePassword) === false) {
      alert("????????????,?????????,???????????? ????????? 8?????? ?????? ????????? ?????????.")
    }
  }

  function leavePwdInput(e) {
    setLeavePwd(e.target.value)
  }

  useEffect(()=>{
    // setIsActive(true)
    apiAxios('/home/checkCurrentPwd',{
      "user_pwd": leavePwd
    }).then(res=>{
      if(res.data === true) {
        setIsResult(true)
        setIsActive(false)
      }else if(leavePwd.length > 0 && res.data === false){
        setIsResult(false)
        setIsActive(true)
      }else if(leavePwd.length === 0) {
        setIsResult(true)
      }
    });
  },[leavePwd])
  
  // ???????????? btn
  function leaveBtn(e) {
    e.preventDefault();
    apiAxios('/home/withdrawal').then(res => {
      if(res.data === false) {
        alert('????????? ADMIN??? WORKSPACE??? ???????????????. \n????????? ????????? ??? ?????? ????????? ?????????????????????.')
        leavehandleClose();
      }
    })
  }

  //???????????? ?????? ?????? ??????
  const usernameBody = (
    <div className={classes.paper}>
      <div className="modaltitle" id="simple-modal-title">
        USERNAME
      </div>
      <table id="simple-modal-description" className={classes.tableStyle}>
        <tr>
          <td>?????? username</td>
          <td>
            <TextField
              disabled
              id="outlined-required"
              defaultValue={userName}
              variant="outlined"
              size="small"
            />
          </td>
        </tr>

        <tr>
          <td>????????? username</td>
          <td>
            <TextField
              required
              id="outlined-required"
              placeholder="????????? username"
              variant="outlined"
              size="small"
              onKeyUp={checkUsernameValid}
              onChange={userNameInput}
            />
          </td>
          <td>
            <Button variant="contained" color="primary" 
              disabled={isActive} onClick={userNameClick}>
              ????????????
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );

  //???????????? ?????? ?????? ??????
  const passwordBody = (
    <div className={classes.paper}>
      <div className="modaltitle" id="simple-modal-title">
        PASSWORD
      </div>

      <table id="simple-modal-description" className={classes.tableStyle}>
        <tr>
          <td>?????? ???????????? ??????</td>
          <td>
            <TextField
              required
              type="password"
              name="currentPassword"
              id="outlined-required"
              placeholder="?????? ???????????? ??????"
              variant="outlined"
              size="small"
              onChange={passwordInput}
              value={currentPassword}
              onBlur={currentPwdonBlur}
            />
          </td>
        </tr>
        {   
              isResult ? 
              null
              : 
              <tr>
                <td></td> 
                <td className={classes.pwdFalseFont}>
                  ??????????????? ???????????? ????????????.
                </td>
              </tr>
        }
        <tr>
          <td>????????? ????????????</td>
          <td>
            <TextField
              required
              type="password"
              name="changePassword"
              value={changePassword}
              id="outlined-required"
              placeholder="????????? ???????????? ??????"
              variant="outlined"
              size="small"
              onChange={passwordInput}
            />
          </td>
        </tr>
        {   
          checkPrePwd ? 
          <tr>
            <td></td> 
            <td className={classes.pwdFalseFont}>
              ?????? ??????????????? ????????? ??? ????????????.
            </td>
          </tr>
          : 
          null
        }
        <tr>
          <td>????????? ???????????? ??????</td>
          <td>
            <TextField
              required
              type="password"
              name="checkPassword"
              value={checkPassword}
              id="outlined-required"
              placeholder="????????? ???????????? ?????? ??????"
              variant="outlined"
              size="small"
              onChange={passwordInput}
            />
          </td>
          <td>
            <Button variant="contained" color="primary" 
            disabled={isActive} onClick={passwordBtn}>
              ????????????
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );

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
            <td style={{ fontSize: 18 }}>{userId}</td>
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
              {userName}
              <Button
                variant="contained"
                color="primary"
                onClick={userhandleOpen}
                style={{ marginLeft: 14 }}
              >
                ??????
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
                password ??????
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
        </table>
      </div>
    </div>
  );
};

export default Mypage;
