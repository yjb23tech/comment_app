import song_img from "../public/images/track_8_song_art.png"

const Card = () => {

    function handleClick(e) {
        e.preventDefault()
        let inputEl = document.getElementById("input-field")
        console.log(inputEl.value)
    }

    return (
        <div className="song-card util-box-border-blue">
            <img  className="song-image" src={song_img} />
            <input id="input-field" className="song-comment-field util-box-border-red" type="text" placeholder="leave a comment :D" />
            <button className="song-comment-btn util-box-border-red" onClick={handleClick}>SHARE NOW</button>
        </div>
    )
}

export default Card; 