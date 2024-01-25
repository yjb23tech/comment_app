

const Card = () => {

    function handleClick(e) {
        e.preventDefault()
        console.log("Connection between eventListener and eventHandler has been made")
    }

    return (
        <div className="album-card">
            <img  className="album-image" src="" />
            <input className="album-comment-field" type="text" placeholder="leave a comment :D" />
            <button className="album-comment-btn" onClick={handleClick}>SHARE NOW</button>
        </div>
    )
}

export default Card; 