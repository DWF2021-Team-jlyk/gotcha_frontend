import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory} from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    display: "flex",
    position: "absolute",
    top: "23%",
    left: "50%",
    transform: "translateX(-50%)",
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
      alert("이메일을 확인해 주시기 바랍니다.")
      console.log(res)
      history.push('/Login')
    });
  }
  return (
    <Container component="main" maxWidth="xs" className={classes.style}>
  
      <div className={classes.paper}>
  
          이메일을 입력하세요, 새로운 비밀번호를 발송합니다.
      
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
        
        </form>
      </div>
    </Container>
  
  );
};

export default Pwdfind;
