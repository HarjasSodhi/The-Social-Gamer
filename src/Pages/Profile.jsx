import Navbar from '../Components/HomePage/Navbar'
import Footer from '../Components/HomePage/Footer'
import "../Components/Profile/Profile.css"
import Header from '../Components/Profile/Header'
import Post from '../Components/Profile/Post'
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../App'
import { Redirect } from 'react-router-dom'

let Profile = () => {
    let user = useContext(userContext);    
    const[currUser,setCurrUser]=useState({});

    useEffect(() => {
        fetch('/api/use/getdata',{
            headers: {
                'token': user.state,
            }
        }).then((res)=>{
            console.log("hello");
            return res.json();
        }).then((json)=>{
            console.log(json);
            setCurrUser(json);
        }).catch((err)=>{
            console.log(err);
        })
        
    }, []);
    return (
        user.state==null?<Redirect to ='/login'/>:
        <>
            <Navbar />
            <div class="themessProfile">
                <Header currUser={currUser}/>
                <main>
                    <div class="container">
                        <div class="gallery">
                            <Post img='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6041579d3f27a0cd194da4d4%2F0x0.jpg'/>
                            <Post img='https://www.bournemouth.ac.uk/sites/default/files/styles/bournemouth_wysiwyg/public/assets/images/video-games.jpg?itok=juqhBuPX'/>
                            <Post img='https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWluZyUyMHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'/>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
export default Profile;