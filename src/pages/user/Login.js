import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createGlobalStyle } from 'styled-components';
import { CenterFocusStrong } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom';
import '../../layout/css/Login.css';
import {useForm} from "react-hook-form";

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

  export default function Login() {

    const style = {
      color: "red"
    }

    const classes = useStyles();
    const history = useHistory();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit1 = (data,e) => {
      e.preventDefault();
      alert('dd');
      console.log(data.lastName);
      // const url = '/login'
      // const datas = { 
      //   "user_id": data.email,
      //   "user_name": data.username,
      //   "user_pwd": data.password
      // };
      // const options = {
      //   method: 'POST',
      //   headers: { 'content-type': 'application/json' },
      //   data: JSON.stringify(datas),
      //   url,
      // };
      // axios.post(options)
      // history.push("/home") 
    };

    // const onSubmit1 = (e) => {
      
    //   alert("click");
    //   history.push("/home")
    // }

    return (
    
      <Container className={classes.style} component="main" maxWidth="xs">
        <div className="title">GotCha</div>        
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit1)} method='post' noValidate>
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
              {...register("email", { required: true })} 
            />
              {errors.email && "email is required"}
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
            {/* <input type="text" {...register("firstName", { required: true, maxLength: 20 })}/> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login11
            </Button>
            <Switch>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
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
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      
    );
  }
  