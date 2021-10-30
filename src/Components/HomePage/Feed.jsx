import Post from './Post'

let Feed = () => {
    return (
        <div class="themess">
            <main>
                <div class="container">
                    <div class="left">
                        <a class="profile">
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" />
                            </div>
                            <div class="handle">
                                <h4>Ria</h4>
                                <p class="text-muted">
                                    @ria
                                </p>
                            </div>
                        </a>
                        <label for="create-post" class="btn btn-primary">Create Post</label>
                    </div>
                    <div class="middle">
                        <form class="create-post">
                            <div class="profile-photo">
                                <img src="./images/profile-1.jpg" />
                            </div>
                            <input type="text" placeholder="What's on your mind, Ria?" id="create-post" />
                            <input type="submit" value="Post" class="btn btn-primary" />
                        </form>
                        <div class="feeds">
                            <Post />
                            <Post />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Feed;