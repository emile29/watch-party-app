import './SignInPage.scss';
import React, { useEffect, useState } from "react";
import { 
    Button,
    TextField,
} from "@mui/material";
import { useHistory } from 'react-router-dom';
import * as UserAPI from 'api/user';

export default function SignInPage() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

    }, []);

    const signIn = (e) => {
        e.preventDefault();
        UserAPI.signIn(username, password, (err, res) => {
            if (err) console.log(err[0]);
            else {
                if (!res[0]) {
                    document.getElementById('invalid-cred-warning').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('invalid-cred-warning').style.display = 'none';
                    }, 5000);
                } else {
                    setUsername('');
                    setPassword('');
                    console.log('signedIn', res);
                }
            }
        });
    }

    const toSignUp = () => {
        history.push('sign-up');
    }

    return (
        <div className="sign-in-page">
            <div className='sign-in-box'>
                <div className='header1'>
                    Sign In
                </div>
                <form id='form' onSubmit={(e)=>signIn(e)}>
                <TextField 
                    className='textfield'
                    size='small'
                    label='Username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                >
                </TextField>
                <TextField 
                    className='textfield'
                    size='small'
                    label='Password'
                    value={password}
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                >
                </TextField>
                <div className='sign-up-message'>
                    <span>Not registered yet? </span> 
                    <span className='sign-up-btn' onClick={()=>toSignUp()}>Sign up</span>
                </div>
                <div 
                    id='invalid-cred-warning' 
                    style={{display:'none', color:'red'}}
                >
                   Invalid username or password!
                </div>
                <Button type='submit' className='btn' variant='outlined' size='small'>sign in</Button>
                </form>
            </div>
        </div>
    )
}