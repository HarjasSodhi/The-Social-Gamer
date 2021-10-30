import Post from './Post'
import { Redirect } from 'react-router-dom'
import {useState, useEffect} from 'react'
// import { useContext } from 'react';
// import { userContext } from '../../App'

let Feed = () => {

    const handlesub=async(e)=>{
        e.preventDefault();
                                fetch('http://localhost:8000/api/use/login', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2JiYmJiYzllOWJhNjhjYjk0N2NhYiIsImlhdCI6MTYzNTQ5ODkzOX0.QLYj5aooLp8YOFCrs94G0bHBkyRoyjPUPQpwl-WoyGc'
                                    },
                                    body: JSON.stringify({ postStatus:postt }),
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        if(data.token==undefined){
                                            alert('Email id or password wrong');
                                        }
                                        else{
                                            console.log('Success:');
                                        }
                                        // user.setstate(data.token);
                                    })
                                    .catch((error) => {
                                        alert('Error:', error);
                                    });
    }
    const [data, setdata] = useState([])
    const [usee, setusee] = useState([])
    const [postt, setpostt] = useState("")
    async function ne(){
        const det= await fetch('http://localhost:8000/api/post/user/allpost');
        const resdata = await det.json();
        setdata(resdata);
    }
    async function nee(){
        const det= await fetch('http://localhost:8000/api/use/getdata', {
            headers:{
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2JiYmJiYzllOWJhNjhjYjk0N2NhYiIsImlhdCI6MTYzNTQ5ODkzOX0.QLYj5aooLp8YOFCrs94G0bHBkyRoyjPUPQpwl-WoyGc"
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
    // let user = useContext(userContext);
    return (
        // user.state==null  ? <Redirect to="/login" /> :
        <div class="themess">
            <main>
                <div class="container">
                    <div class="left">
                        <a class="profile">
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" />
                            </div>
                            <div class="handle" >
                                <h4>{usee.name}</h4>
                                <p class="text-muted">
                                    {usee.about}
                                </p>
                            </div>
                        </a>
                        <label for="create-post" class="btn btn-primary">Create Post</label>
                    </div>
                    <div class="middle">
                        <form class="create-post" onSubmit={handlesub}>
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" />
                            </div>
                            <input type="text" placeholder="What's on your mind, Ria?" name='postStatus' id="create-post" onChange={(e)=>{
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