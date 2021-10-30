import {useState} from 'react';
let Box = () => {
    let [name,setName]=useState();
    let [password,setPassword]=useState();
    return (
        <div class="themessLogin">
            <div class="form">
                <div class="login-form">
                    <a href="#" class="form-cancel">
                        <i class="uil uil-times"></i>
                    </a>
                    <strong>Log In</strong>
                    <form>
                        <input type="email" placeholder="Example@gmail.com" value={name} name="email" required onChange={(e)=>{
                            setName(e.currentTarget.value);
                        }} />
                        <input type="password" placeholder="Password" value={password} name="password" required onChange={(e)=>{
                            setPassword(e.currentTarget.value);
                        }} />
                        <input type="submit" value="Log In" onClick={(e)=>{
                            e.preventDefault();

                        }}/>
                    </form>
                    <div class="form-btns">
                        <a href="#" class="forget">Forget Your Password?</a>
                        <a href="../sign-up/index.html" class="sign-up-btn">Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box;