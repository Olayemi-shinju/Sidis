import { useState } from 'react'
import "../plugins/animate.css"
// import "../plugins/personal.css"
import "../plugins/owl.theme.default.min.css"
import "../plugins/owl.carousel.min.css"
import "../plugins/font-awesome"
import "../css/style.css"
import "../css/style.css"
const PopUpForm = () => {
    const [show, setShow] = useState(false);

    const open = () => {
        setShow(true)
    }

    const close = () => {
        setShow(false)
    }
    return (
        <div>
            <button className="open-chat-button" onClick={open}>
                <i className="fas fa-comment-alt"></i>
            </button>

            {
                <div className={`${show === true ? 'block' : 'hidden'}`}>
                    <div className="chat-popup" id="chatForm">
                        <form action="/action_page.php" className="chatform-container">
                            <h2>Send us a message</h2>
                            <textarea placeholder="Type message.." name="msg" required></textarea>

                            <div className="alternate-chat flex row-start">
                                <div className="icon"><i className="fas fa-microphone"></i></div>
                                <div className="icon"><i className="fas fa-camera-retro"></i></div>
                                <div className="icon"><i className="fas fa-video"></i></div>
                            </div>
                            <button type="submit" className="chatbtn">Send</button>
                            <button type="button" className="chatbtn cancel" onClick={close}>Close</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default PopUpForm