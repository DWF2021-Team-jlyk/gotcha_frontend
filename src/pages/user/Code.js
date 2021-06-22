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
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../layout/css/Login.css';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/">
        GotCha
        </Link>{' '} */}
        GotCha 
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
  }));

  export default function Code() {
    const history = useHistory();
    const classes = useStyles();
    const [code, setCode] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const url = '/main/code'
        const data = { 
            "code":code
        };
        const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(data),
        url,
        };

        axios(options).then((res) => {
            //window.sessionStorage.setItem("joinCode",res.data);
            //history.push('/');
        },[]);
        // const joinCode = window.sessionStorage.getItem('joinCode');
        // //alert(joinCode)
        // if(joinCode === code) {
        //     alert("true")
        // }else {
        //     alert("false")
        // }
    }
    return (
    
      <Container component="main" maxWidth="xs">
        <div className="title">GotCha</div>        
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
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
              value={code}
              onChange={onChange}
            />
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

    function onChange(e) {
        setCode(e.target.value)
    }

  }
  