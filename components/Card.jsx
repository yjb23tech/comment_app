import song_img from "../public/images/track_8_song_art.png"

const Card = () => {

    function handleClick(e) {
        e.preventDefault()
        console.log("Connection between eventListener and eventHandler has been made")
    }

    return (
        <div className="song-card">
            <img  className="song-image" src={song_img} />
            <input className="song-comment-field" type="text" placeholder="leave a comment :D" />
            <button className="song-comment-btn" onClick={handleClick}>SHARE NOW</button>
        </div>
    )
}

export default Card; 