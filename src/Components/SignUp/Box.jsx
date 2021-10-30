import { Redirect } from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../../App'
let Box = () => {
    let user = useContext(userContext);

    return (
            user.state!=null  ? <Redirect to="/home" /> :
                <div class="themessSignUp">
                    <div class="form">
                        <div class="sign-up-form">
                            <a href="#" class="form-cancel">
                                <i class="uil uil-times"></i>
                            </a>
                            <strong>Sign Up</strong>
                            <form>
                                <input type="text" placeholder="Username" name="username" class="signin" required />
                                <input type="email" placeholder="Email" class="signin" name="email" required />
                                <input type="password" placeholder="Password" class="signin" name="password" required />
                                <input type="text" placeholder="Games" class="signin" name="games" required />
                                <input type="text" placeholder="About me" class="signin" name="about" required />
                                <input type="Submit" value="Sign In" class="signin" onClick={(e) => {
                                    e.preventDefault();
                                    let inps = document.querySelectorAll('.signin');
                                    fetch('http://localhost:8000/api/use/signin', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            name: inps[0].value,
                                            email: inps[2].value,
                                            password: inps[3].value,
                                            game: inps[4].value,
                                            about: inps[5].value
                                        }),
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            if(data.token==undefined){
                                                alert('Email id already exists');
                                            }
                                            else{
                                                console.log('Success:', data.token);
                                            }
                                            user.setstate(data.token);
                                        })
                                        .catch((error) => {
                                            console.error('Error:', error);
                                        })
                                }} />
                            </form>
                            <div class="form-btns">
                                <a href="/login" class="already-acount">Already Have Account?</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Box;