import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Switch, useHistory} from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";
import '../../../layout/css/Login.css';

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
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  style: {
    // display: "flex",
    // position: "absolute",
    // top: "23%",
    // left: "50%",
    // transform: "translateX(-50%)",
  },
  formDiv: {
    width: 800,
    height: 400,
    backgroundColor: 'white',
    border: '1px solid white',
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow:'2px 4px 5px 2px lightgray',
  }
}));

const Pwdfind = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault();
    axios.post('/user/pwdFind',{
      "user_id": data.email,
    }).then(res => {
      console.log(res)
      if(res.data === true) {
        alert("이메일을 확인해 주시기 바랍니다.")
        history.push('/Login')
      }else if (res.data === false) {
        alert("가입하지 않은 이메일입니다.")
      }     
    });
  }
  return (
    <>
    <div className="title" style={{marginTop: '185px',marginBottom: '50px'}}>GotCha</div>  
    <div className={classes.formDiv}>
    <Container component="main" maxWidth="xs" className={classes.style}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          비밀번호 찾기
        </Typography>
          <br/>
          이메일을 입력하세요. 새로운 비밀번호를 발송합니다.
      
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} method="post" noValidate>
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
        
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send New Password
          </Button>
          <Switch>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">
                  Sign in
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
};

export default Pwdfind;
