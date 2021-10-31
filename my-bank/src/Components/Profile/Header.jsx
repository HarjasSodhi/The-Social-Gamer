let Header = (props) => {
    return (
        <header>
            <div class="container">
                <div class="profile">
                    <div class="profile-image">
                        <img src="https://www.looper.com/img/gallery/the-uniform-theory-that-will-change-how-you-watch-squid-game/l-intro-1633370365.jpg" alt="" />
                    </div>
                    <div class="profile-user-settings">
                        <h1 class="profile-user-name">{props.currUser.name}</h1>
                        <button class="btn profile-settings-btn" aria-label="profile settings"><i
                            class="uil uil-setting"></i></button>
                    </div>
                    <div class="profile-bio">
                        <p class="lorem" ><span class="profile-real-name">{props.currUser.name}</span> {props.currUser.about}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;