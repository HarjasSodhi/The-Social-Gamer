import './HomePage.css'
import {Link} from 'react-router-dom' 

let Footer =()=>{
    return(
        <footer class="footer-distributed1">

            <div class="footer-right">

                <a href="#"><i class="uil uil-facebook-f"></i></a>
                <a href="#"><i class="uil uil-twitter"></i></a>
                <a href="#"><i class="uil uil-linkedin"></i></a>
                <a href="#"><i class="uil uil-github"></i></a>

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <Link to="/home">Home</Link>

                    <Link to="/chat">Messages</Link>

                    <Link to="/profile">My Proflie</Link>
                </p>

                <p>Gamers Social &copy; 2021</p>
            </div>
        </footer>
    )
}
export default Footer