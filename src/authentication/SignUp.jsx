import React, { useRef } from 'react';
import '../plugins/font-awesome.js'
import '../plugins/animate.css'
import '../plugins/font-awesome.css'
import '../plugins/jquery.min.js'
import '../css/sign-style.css'

const SignUp = () => {
  const blockOneRef = useRef(null);
  const blockTwoRef = useRef(null);
  const registerRef = useRef(null);
  const loginRef = useRef(null);
  const register2Ref = useRef(null);
  const login2Ref = useRef(null);

  const signIn = () => {
    blockOneRef.current.style.animation = "move-right-one 2s ease-out forwards";
    blockOneRef.current.style.zIndex = "0";
    blockTwoRef.current.style.animation = "move-left-one 2s ease-out forwards";
    registerRef.current.style.animation = "move-up-one 2s ease-out forwards";
    loginRef.current.style.animation = "move-up-two 2s ease-out forwards";
    loginRef.current.style.visibility = "visible";
    register2Ref.current.style.animation = "move-up-one 2s ease-out forwards";
    login2Ref.current.style.animation = "move-up-two 2s ease-out forwards";
    login2Ref.current.style.visibility = "visible";
  };

  const signUp = () => {
    blockOneRef.current.style.animation = "move-left-two 2s ease-out forwards";
    blockOneRef.current.style.zIndex = "1";
    blockTwoRef.current.style.animation = "move-right-two 2s ease-out forwards";
    registerRef.current.style.animation = "move-down-one 2s ease-out forwards";
    loginRef.current.style.animation = "move-down-two 2s ease-out forwards";
    register2Ref.current.style.animation = "move-down-one 2s ease-out forwards";
    login2Ref.current.style.animation = "move-down-two 2s ease-out forwards";
  };

  return (
    <div className="sidis-boxed">
      <section className="sidis-sign">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div className="sidis-logo">
            <a href="index.html">Sidis</a>
          </div>

          <div className="sidis-block sidis-one" id="blockOne" ref={blockOneRef}>
            <div className="sidis-register flex column-center" id="register" ref={registerRef}>
              <div className="sidis-heading">welcome back</div>
              <div className="sidis-emphasis">
                to keep connected with us, please fill in your personal info
              </div>
              <div className="sidis-button sidis-cta" onClick={signIn}>sign in</div>

              <div className="sidis-icon sidis-one"><i className="fas fa-book-open"></i></div>
              <div className="sidis-icon sidis-two"><i className="fas fa-school"></i></div>
              <div className="sidis-icon sidis-three"><i className="fas fa-scroll"></i></div>
              <div className="sidis-icon sidis-four"><i className="fas fa-satellite"></i></div>
              <div className="sidis-icon sidis-five"><i className="fas fa-notes-medical"></i></div>
            </div>

            <div className="sidis-login flex column-center" id="login" ref={loginRef}>
              <div className="sidis-heading">hey there!</div>
              <div className="sidis-emphasis">
                join sidis today and start out on your educational journey
              </div>
              <div className="sidis-button sidis-cta" onClick={signUp}>sign up</div>

              <div className="sidis-icon sidis-one"><i className="fas fa-pager"></i></div>
              <div className="sidis-icon sidis-two"><i className="fas fa-passport"></i></div>
              <div className="sidis-icon sidis-three"><i className="fas fa-clock"></i></div>
              <div className="sidis-icon sidis-four"><i className="fas fa-coffee"></i></div>
              <div className="sidis-icon sidis-five"><i className="fas fa-database"></i></div>
            </div>
          </div>

          <div className="sidis-block sidis-two" id="blockTwo" ref={blockTwoRef}>
            <div className="sidis-register flex column-center" id="register2" ref={register2Ref}>
              <div className="sidis-heading">create account</div>

              <div className="sidis-options flex row-between">
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-google-plus-g"></i></a>
              </div>

              <div className="sidis-emphasis">or use your email account</div>

              <form className="flex column-center">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" className="sidis-button sidis-cta" value="sign up" />
              </form>
            </div>

            <div className="sidis-login flex column-center" id="login2" ref={login2Ref}>
              <div className="sidis-heading">welcome back</div>

              <div className="sidis-options flex row-between">
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="sidis-button sidis-icon flex row-center"><i className="fab fa-google-plus-g"></i></a>
              </div>

              <div className="sidis-emphasis">or use your email account</div>

              <form className="flex column-center">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" className="sidis-button sidis-cta" value="sign in" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
