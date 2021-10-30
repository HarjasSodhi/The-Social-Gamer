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
                    <li><Link href="/home"><i class="uil uil-home"></i> Home</Link></li>
                    <li><Link href="/chat"><i class="uil uil-message"></i> Messages</Link></li>
                    <li><Link href="/profile"><i class="uil uil-user"></i> My Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar