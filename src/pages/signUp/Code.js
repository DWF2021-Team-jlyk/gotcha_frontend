import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../../layout/css/Login.css';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/">
        GotCha
        </Link>{' '} */}
        &nbsp;GotCha 
        &nbsp;{new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    style: {
      position: "absolute",
      top: "23%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  }));

  export default function Code() {
    
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    //submit
    const onSubmit = (data,e) =>{
      e.preventDefault();
      
      const url = '/main/code'
        const datas = { 
            "code":data.code,
            "user_id":location.state.user_id,
        };
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify(datas),
          url,
        };

        axios(options).then((res) => {
            if(res.data === true) {
                alert("회원가입 완료")
                history.push('/')
            }else {
                alert("코드가 일치하지 않습니다.")
            }
        },[]);
    }

    return (
    
      <Container className={classes.style} component="main" maxWidth="xs">
        <div className="title">GotCha</div>        
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate method="post">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="code"
              label="Code"
              name="code"
              autoComplete="code"
              autoFocus
            //   value={code}
            //   onChange={onChange}
              inputProps={{
                maxLength: 6,
              }}
              {...register("code", {required: true, maxLength: 6, pattern:/^[0-9]+$/})} 
              />
                {errors.code?.type === 'required' && "code is required" 
                 || errors.code?.type === 'maxLength' && "옳바르지 않은 코드입니다.(6자리 입력)"
                 || errors.code?.type === 'pattern' && "숫자만 입력가능합니다."}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              확인
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      
    );

  }
  