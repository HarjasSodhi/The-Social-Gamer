import {Link} from 'react-router-dom'
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
                <li><Link to="/login"><i class="uil uil-signin"></i>Login</Link></li>
                <li><Link to="/signup"><i class="uil uil-user"></i>Sign Up</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default LoginNavbar;