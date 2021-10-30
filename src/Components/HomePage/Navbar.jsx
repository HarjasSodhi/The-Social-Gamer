import { Link } from 'react-router-dom';

let Navbar = () => {
    return (
        <nav class="navbar">
            <div class="brand-title"><img src="/images/logo2.png" alt="" /></div>
            <div class="search-bar">
                <i class="uil uil-search sl"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects" />
            </div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="navbar-links">
                <ul>
                    <li><a href="/home"><i class="uil uil-home"></i> Home</a></li>
                    <li><a href="/chat"><i class="uil uil-message"></i> Messages</a></li>
                    <li><a href="/profile"><i class="uil uil-user"></i> My Profile</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar