import Post from './Post'
import { Redirect, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useContext } from 'react';
import { userContext } from '../../App'

let Feed = () => {
    const [data, setdata] = useState([])
    const [usee, setusee] = useState([])
    const [postt, setpostt] = useState("")
    let user = useContext(userContext);
    
    const handlesub=async(e)=>{
        e.preventDefault();
                               const res= await fetch('/api/post/user/create', {
                                    method: 'POST',
                                    headers: {
                                        'token':user.state
                                        ,'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ "postStatus":postt }),
                                })
                                const dat=await res.json();
                                console.log(dat)
    }
    async function ne(){
        const det= await fetch('/api/post/user/allpost');
        const resdata = await det.json();
        setdata(resdata);
    }
    async function nee(){
        const det= await fetch('/api/use/getdata', {
            headers:{
                "token":user.state
            }
        });
        const resdata = await det.json();
        setusee(resdata);
    }
    console.log(usee)
    useEffect(()=>{
        ne();
        nee();
    },[])
    return (
        user.state==null  ? <Redirect to="/login" /> :
        <div class="themess">
            <main>
                <div class="container">
                    <div class="left">
                        <Link class="profile">
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" alt="x" />
                            </div>
                            <div class="handle" >
                                <h4>{usee.name}</h4>
                                <p class="text-muted">
                                    {usee.about}
                                </p>
                            </div>
                        </Link>
                        <label for="create-post" class="btn btn-primary">Create Post</label>
                    </div>
                    <div class="middle">
                        <form class="create-post" onSubmit={handlesub} method='POST'>
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" alt="x" />
                            </div>
                            <input type="text" placeholder="Whats on your mind, Ria?" name='postStatus' id="create-post" onChange={(e)=>{
                                setpostt(e.currentTarget.value)
                            }} />
                            <input type="submit" value="Post" class="btn btn-primary" />
                        </form>
                        <div class="feeds">
                            {
                                data.map((e)=>{
                                    return(
                                        <Post name={e.name} postStatus={e.postStatus}   date={e.date}    game={e.game}    />

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Feed;