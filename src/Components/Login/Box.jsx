import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { userContext } from '../../App'
let Box = () => {
    let user = useContext(userContext);
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    return (
        user.state != null ? <Redirect to='/home' /> :
            <div class="themessLogin">
                <div class="form">
                    <div class="login-form">
                        <a href="#" class="form-cancel">
                            <i class="uil uil-times"></i>
                        </a>
                        <strong>Log In</strong>
                        <form>
                            <input type="email" placeholder="Example@gmail.com" value={name} name="email" required onChange={(e) => {
                                setName(e.currentTarget.value);
                            }} />
                            <input type="password" placeholder="Password" value={password} name="password" required onChange={(e) => {
                                setPassword(e.currentTarget.value);
                            }} />
                            <input type="submit" value="Log In" onClick={(e) => {
                                e.preventDefault();
                                fetch('http://localhost:8000/api/use/login', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ email: name, password: password }),
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        if(data.token==undefined){
                                            alert('Email id or password wrong');
                                        }
                                        else{
                                            console.log('Success:', data.token);
                                        }
                                        user.setstate(data.token);
                                    })
                                    .catch((error) => {
                                        alert('Error:', error);
                                    });
                            }} />
                        </form>
                        <div class="form-btns">
                            <a href="#" class="forget">Forget Your Password?</a>
                            <a href="/signup" class="sign-up-btn">Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Box;