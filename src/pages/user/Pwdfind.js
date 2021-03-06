import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Link, Switch, useHistory} from 'react-router-dom';
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
}));

const Pwdfind = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
  
      <div className={classes.paper}>
  
          Insert your E-mail. We will send new password.
      
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} method="post">
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
          || errors.email?.type === 'pattern' && "????????? ??? ?????? ??????????????????."}

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
