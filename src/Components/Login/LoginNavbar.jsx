let LoginNavbar=()=>{
    return (
        <nav class="navbar">
        <div class="brand-title"><img src="./images/logo2.png" alt="" /></div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="../login page/index.html"><i class="uil uil-signin"></i>Login</a></li>
                <li><a href="../sign-up/index.html"><i class="uil uil-user"></i>Sign Up</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default LoginNavbar;