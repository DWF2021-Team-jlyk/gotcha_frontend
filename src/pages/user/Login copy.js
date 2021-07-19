import React from 'react';
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
import { Link, Switch, useHistory} from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";
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
      marginTop: theme.spacing(3),
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
      // position: "absolute",
      // top: "23%",
      // left: "50%",
      // transform: "translateX(-50%)",
    },
    formDiv: {
      width: 800,
      height: 430,
      backgroundColor: 'white',
      border: '1px solid white',
      position: "absolute",
      top: "30%",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow:'2px 4px 5px 2px lightgray',
    }
  }));

  export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
      e.preventDefault();
      
      // const url = '/login'
      
      const datas = { 
        "user_id": data.email,
        "user_pwd": data.password
      };
      const headers = {
        'content-type': 'application/json'
      }
      // const options = {
      //   method: 'POST',
      //   headers: { 'content-type': 'application/json' },
      //   data: JSON.stringify(datas),
      //   url,
      // };
      axios.post('/login',datas,headers).then(res => {
        console.log('res',res);
        // console.log(Object.keys(res.headers))
        console.log(res.headers.authorization)
        sessionStorage.setItem("accessToken",res.headers.authorization)
        history.push({
          pathname: '/',
          state: {user_id: data.email}
        })
      }).catch(error => {
        alert("아이디나 비밀번호가 일치하지 않습니다.")
        console.log('err', error)
      });
      // history.push("/home") 
    };

    // const onSubmit1 = (e) => {
      
    //   alert("click");
    //   history.push("/home")
    // }

    return (
      <>
      <div className="title" style={{marginTop: '185px',marginBottom: '50px'}}>GotCha</div>  
      <div className={classes.formDiv}>
      <Container className={classes.style} component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              {
                ...register("email",
                    {
                        required: true,
                        pattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
                    })
            }
        />
        {errors.email?.type === 'required' && "email is required"
        || errors.email?.type === 'pattern' && "사용할 수 없는 이메일입니다."}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })} 
            />
              {errors.password && "password is required"}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Switch>
            <Grid container>
              <Grid item xs>
                <Link to="/Pwdfind" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/Join" variant="body2">
                   {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Switch>
          </form>
        </div>
        <Box mt={11}>
          <Copyright />
        </Box>
      </Container>
      </div>
      </>
    );
  }
  