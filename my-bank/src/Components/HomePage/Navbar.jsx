import { Link } from 'react-router-dom';

let Navbar = () => {
    return (
        <nav class="navbar">
            <div class="brand-title"><img src="/images/logo2.png" alt="" /></div>
            <div class="search-bar">
                <i class="uil uil-search sl"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects" />
            </div>
            <Link to="/" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </Link>
            <div class="navbar-links">
                <ul>
                    <li><Link to="/home"><i class="uil uil-home"></i> Home</Link></li>
                    <li><Link to="/chat"><i class="uil uil-message"></i> Messages</Link></li>
                    <li><Link to="/profile"><i class="uil uil-user"></i> My Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar