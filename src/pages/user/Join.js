import React, {useState, useCallback} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../layout/css/Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©'}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Join() {
  const history = useHistory();
  const classes = useStyles();
  
  const [inputs, setInputs] = useState({
    email:'',
    username:'',
    password:'',
  });

  // 중복 검사
  const [overlap,setOverlap] = useState(false);

  const { email, username, password } = inputs;

  // joinSubmit
  const JoinCheck = useCallback((e) => {

    e.preventDefault();

    const url = '/main/joinForm'
    const data = { 
      "user_id": email,
      "user_name": username,
      "user_pwd": password
     };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(data),
      url,
    };

    axios(options).then((res) => {
      console.log(res)
      console.log(res.data);
      //window.sessionStorage.setItem("joinCode",res.data);
      history.push('/Code');
    },[]);

    // if(overlap === true){
    //   axios(options).then(history.push('/'));
    // }else {
    //   alert("이미 가입한 Email입니다.")
    // }
    
  },[inputs]);
  
  // const {handleSubmit, register} = useForm();
  // const onSubmit = (data, e) => console.log(data, e);

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
        <form className={classes.form} onSubmit={JoinCheck} method="post">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                // ref={register({ required: true })}
                name="email"
                value={email}
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                // ref={register({ required: true })}
                value={username}
                autoComplete="username"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                // ref={register({ required: true })}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Join
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

  function onChange(e) {
    const {value, name} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    })
  }
}



export default Join;