import React from 'react'
// import '../css/about.css'
import '../css/style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="flex row-between top">

                    <div className="flex column-start">
                        <div className="heading">company</div>
                        <Link to='/'>Home</Link>
                        <Link to='/'>pricing</Link>
                        <Link to='/'>compare plans</Link>
                        <Link to='/'>contact us</Link>
                        <Link to='/'>partners</Link>
                    </div>

                    <div className="flex column-start">
                        <div className="heading">community</div>
                        <Link to='/'>learners</Link>
                        <Link to='/'>developers</Link>
                        <Link to='/'>blog</Link>
                        <Link to='/'>faq's</Link>
                        <Link to='/'>help center</Link>
                    </div>

                    <div className="flex column-start">
                        <div className="heading">support</div>
                        <Link to='/'>volunteer</Link>
                        <Link to='/'>donate</Link>
                        <Link to='/'>investors</Link>
                        <Link to='/'>directory</Link>
                        <Link to='/'>affliates</Link>
                        <Link to='/'>report abuse</Link>
                    </div>

                    <div className="flex column-start">
                        <div className="heading">legal</div>
                        <Link to='/'>terms of service</Link>
                        <Link to='/'>privacy policy</Link>
                        <Link to='/'>accessibility policy</Link>
                        <Link to='/'>data security</Link>
                        <Link to='/'>cookies</Link>
                        <Link to='/'>sitemap</Link>
                    </div>

                </div>
                <hr />
                <div className="flex row-between bottom">
                    <div className="copyright">
                        &copy;2021 <i>Sidis</i>. All rights reserved.
                    </div>
                    <div className="social">
                    <Link to='/'><i className="fab fa-facebook-f"></i></Link>
                    <Link to='/'><i className="fab fa-twitter"></i></Link>
                    <Link to='/'><i className="fab fa-instagram"></i></Link>
                    <Link to='/'><i className="fab fa-telegram-plane"></i></Link>
                    <Link to='/'><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer