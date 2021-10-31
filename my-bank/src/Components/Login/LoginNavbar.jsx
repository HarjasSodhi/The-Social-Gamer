import {Link} from 'react-router-dom'
let LoginNavbar=()=>{
    return (
        <nav class="navbar">
        <div class="brand-title"><img src="./images/logo2.png" alt="" /></div>
        <Link to="/" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </Link>
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