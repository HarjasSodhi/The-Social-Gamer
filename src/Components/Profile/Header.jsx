let Header = () => {
    return (
        <header>
            <div class="container">
                <div class="profile">
                    <div class="profile-image">
                        <img src="./Profile/profile-1.jpg" alt="" />
                    </div>
                    <div class="profile-user-settings">
                        <h1 class="profile-user-name">ria</h1>
                        <button class="btn profile-settings-btn" aria-label="profile settings"><i
                            class="uil uil-setting"></i></button>
                    </div>
                    <div class="profile-bio">
                        <p class="lorem" ><span class="profile-real-name">Ria</span> Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;