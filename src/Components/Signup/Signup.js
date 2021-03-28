import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useGlobalContext } from '../../Contexts/Auth';
import { useHistory } from 'react-router-dom';

import Input from './Input';
import useStyles from './Styles';
import Alert from '../Alert/Alert';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const Signup = () => {

    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const { signup, login } = useGlobalContext();
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' })
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    const showPassword = () => setIsPasswordHidden(password => !password);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setSubmitted(true);
        if (isSignup) {
            if (formData.password.length < 7 && formData.confirmPassword.length < 7) return setSubmitted(false);
            if (!passwordsMatch) {
                try {
                    const response = await signup(formData.email, formData.password);
                    console.log(response);
                    history.push('/');
                } catch (error) {
                    setError(true);
                    console.log(error);
                }
                return setSubmitted(false);
            }
        } else {
            try {
                const response = await login(formData.email, formData.password);
                console.log(response);
                history.push('/');
            } catch (error) {
                setError(true);
                console.log(error);
            }
            return setSubmitted(false);
        }
    }

    useEffect(() => {
        if (isSignup) {
            if (formData.password !== formData.confirmPassword) {
                setPasswordsMatch(true);
            } else {
                setPasswordsMatch(false);
            }
        }
    }, [formData, isSignup])

    return (
        <Grid container justify='center'>
            <Paper className={classes.root} align='center' elevation={2} >
                <form onSubmit={handleSubmit}>
                    <LockOpenIcon className={classes.title}/>
                    <Typography variant='h2' align='center'>{isSignup ? 'SIGN UP' : 'SIGN IN'}</Typography>
                    <Input name='email' label='Email' handleChange={handleChange} autoFocus required/>
                    <Input name='password' label='Password' type={isPasswordHidden ? 'password' : 'text'} handleChange={handleChange} showPassword={showPassword} isPasswordHidden={isPasswordHidden} required/>
                    {
                        isSignup && (
                            <>
                                <Input name='confirmPassword' label='Confirm your password' type='password' handleChange={handleChange} required/>
                                {formData.password.length > 0 ? passwordsMatch ? (<Alert msg={formData.password.length < 7 ? "Passwords must be at least 6 characters long!" :"Passwords do not match!" }/>) : (<Alert msg="Passwords match!" success/>) : null}
                            </>
                        )
                    }
                    {error && (<Alert msg='Incorrect details!'/>)}
                    <Button variant='contained' color='secondary' size='large' fullWidth type='submit' disabled={submitted ? true : false}>{isSignup ? 'REGISTER' : 'LOG IN'}</Button>
                    <Button variant='text' color='primary' size='large' fullWidth onClick={() => setIsSignup(state => !state)}>{isSignup ? 'Already have an account?' : 'Register an account'}</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;