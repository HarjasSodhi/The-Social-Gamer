import Navbar from '../Components/HomePage/Navbar'
import Footer from '../Components/HomePage/Footer'
import "../Components/Profile/Profile.css"
import Header from '../Components/Profile/Header'
import Post from '../Components/Profile/Post'

let Profile = () => {
    return (
        <>
            <Navbar />
            <div class="themessProfile">
                <Header />
                <main>
                    <div class="container">
                        <div class="gallery">
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
export default Profile;