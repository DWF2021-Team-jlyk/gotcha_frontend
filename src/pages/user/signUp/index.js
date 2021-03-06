import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../../layout/css/Login.css';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            &nbsp;GotCha
            &nbsp;{new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
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
    formDiv: {
        width: 800,
        height: 480,
        backgroundColor: 'white',
        border: '1px solid white',
        position: "absolute",
        top: "26%",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow:'2px 4px 5px 2px lightgray',
      }
}));

function Join() {
    const history = useHistory();
    const classes = useStyles();

    // 입력한 값을 검사 할 수 있는 Hook
    const {register, formState: {errors}, handleSubmit} = useForm();

    // submit
    const onSubmit = (data, e) => {
        e.preventDefault();
        const url = '/user/joinCheck'
        const datas = {
            "user_id": data.email,
            "user_name": data.username,
            "user_pwd": data.password
        };
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            data: JSON.stringify(datas),
            url,
        };

        axios(options).then((res) => {
            if (res.data === false) {
                alert("이미 가입한 아이디입니다.");
            } else {
                history.push({
                    pathname: '/Code',
                    state: {user_id: data.email}
                });
            }
        }, []);
    }

    return (
        <>
        <div className="title" style={{marginTop: '150px',marginBottom: '50px'}}>GotCha</div>  
        <div className={classes.formDiv}>
        <Container className={classes.style} component="main" maxWidth="xs">
            
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Join
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} method="post" noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                {...register("username", {required: true})}
                            />
                            {errors.username && "username is required"}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="특수문자,대문자,소문자를 포함한 8자리 이상"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password",
                                    {
                                        required: true,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
                                    })
                                }
                            />
                            {
                                errors.password?.type === 'required' && "password is required"
                                ||
                                errors.password?.type === 'pattern' && "형식에 맞지 않습니다."
                            }
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
                            <Link to="/Login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={11}>
                <Copyright/>
            </Box>
        </Container>
        </div>
        </>
    );
}


export default Join;