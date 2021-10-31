let Post = (props) => {
    return (
        <div class="gallery-item" tabindex="0">
                        <img src={props.img}  class="gallery-image" alt="" />
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i
                                        class="uil uil-heart"></i> 56</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i
                       class="uil uil-comment"></i> 2</li>
                </ul>
            </div>
        </div>

    )
}
export default Post;