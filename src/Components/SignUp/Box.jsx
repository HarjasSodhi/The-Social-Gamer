let Box = () => {
    return (
        <div class="themessSignUp">
            <div class="form">
                <div class="sign-up-form">
                    <a href="#" class="form-cancel">
                        <i class="uil uil-times"></i>
                    </a>
                    <strong>Sign Up</strong>
                    <form>
                        <input type="text" placeholder="Username" name="username" required />
                        <input type="file" id="img" name="pic" accept="image/*" />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <input type="text" placeholder="Games" name="games" required />
                        <input type="text" placeholder="About me" name="about" required />
                        <input type="Submit" value="Sign In" />
                    </form>
                    <div class="form-btns">
                        <a href="../login page/index.html" class="already-acount">Already Have Account?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box;