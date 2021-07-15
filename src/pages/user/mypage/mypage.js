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
    border: "2px solid #000",
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

  

  // username 변경 input
  function userNameInput(e) {
    setChangeUserName(e.target.value)
  }

  // username 변경 버튼활성화
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

  // 비밀번호 변경 input
  function passwordInput(e) {
    const {value, name} = e.target;
    console.log(name,":",value)
    setPassword({
      ...password,
      [name]: value
    });
  };
   
  // 현재 비밀번호 check(password 변경)
  function currentPwdonBlur() {
    if(currentPassword.length > 0) {
      apiAxios('/home/checkCurrentPwd',{
        "user_pwd": currentPassword,
      })
      .then(res => {
        console.log(res)
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

  // 이전 비밀번호 사용 체크(password 변경)
  useEffect(() => {
    if(currentPassword.length > 0 && 
      changePassword.length > 0 &&
      currentPassword === changePassword) {
      setCheckPrePwd(true)      
    }else {
      setCheckPrePwd(false)
    }
  },[changePassword])

  // password 변경 btn 활성화
  useEffect(() => {
    console.log(currentPassword)
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

  // password 변경 btn
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
      alert("변경할 비밀번호가 일치하지 않습니다.")
    }else if(reg.test(changePassword) === false) {
      alert("특수문자,대문자,소문자를 포함한 8자리 이상 이어야 합니다.")
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
  
  // 회원탈퇴 btn
  function leaveBtn(e) {
    e.preventDefault();
    apiAxios('/home/withdrawal').then(res => {
      if(res.data === false) {
        alert('권한이 ADMIN인 WORKSPACE가 존재합니다. \n권한을 양도한 후 다시 시도해 주시기바랍니다.')
        leavehandleClose();
      }
    })
  }

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
              defaultValue={userName}
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
              onKeyUp={checkUsernameValid}
              onChange={userNameInput}
            />
          </td>
          <td>
            <Button variant="contained" color="primary" 
              disabled={isActive} onClick={userNameClick}>
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
              name="currentPassword"
              id="outlined-required"
              placeholder="현재 비밀번호 입력"
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
                  비밀번호가 일치하지 않습니다.
                </td>
              </tr>
        }
        <tr>
          <td>변경할 비밀번호</td>
          <td>
            <TextField
              required
              type="password"
              name="changePassword"
              value={changePassword}
              id="outlined-required"
              placeholder="변경할 비밀번호 입력"
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
              현재 비밀번호는 사용할 수 없습니다.
            </td>
          </tr>
          : 
          null
        }
        <tr>
          <td>변경할 비밀번호 확인</td>
          <td>
            <TextField
              required
              type="password"
              name="checkPassword"
              value={checkPassword}
              id="outlined-required"
              placeholder="변경할 비밀번호 확인 입력"
              variant="outlined"
              size="small"
              onChange={passwordInput}
            />
          </td>
          <td>
            <Button variant="contained" color="primary" 
            disabled={isActive} onClick={passwordBtn}>
              변경하기
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );

  const leaveBody = (
    <div className={classes.paper}>
      <div className="modaltitle" id="simple-modal-title">
        회원탈퇴
      </div>

      <table id="simple-modal-description" className={classes.tableStyle}>
        <tr>
          <td>비밀번호를 입력해주세요</td>
          <td>
            <TextField
              required
              id="outlined-required"
              type="password"
              placeholder="비밀번호 입력"
              variant="outlined"
              size="small"
              onChange={leavePwdInput}
            />
          </td>
          <td>
            <Button variant="contained" color="primary" disabled={isActive} onClick={leaveBtn}>
              탈퇴하기
            </Button>
          </td>
        </tr>
        {   
              isResult ? 
              null
              : 
              <tr>
                <td></td> 
                <td className={classes.pwdFalseFont}>
                  비밀번호가 일치하지 않습니다.
                </td>
                <td></td>
              </tr>
        }
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
                style={{ fontSize: 18 }}
              />{" "}
            </td>

            <td>
              <Button
                variant="contained"
                color="primary"
                onClick={leavehandleOpen}
              >
                &emsp;&emsp;회원탈퇴&emsp;&emsp;
              </Button>

              <Modal
                open={leaveopen}
                className={classes.modal}
                onClose={leavehandleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {leaveBody}
              </Modal>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mypage;
