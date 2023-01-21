import '../stylesheets/landingPage.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';

function LandingPage() {

  const [googleBool, setGoogleBool] = useState(false);

  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const usernameInput: HTMLInputElement | null = document.querySelector('#usernameInput');
    const passwordInput: HTMLInputElement | null = document.querySelector('#passwordInput');

    console.log('The username submitted was ', usernameInput?.value);
    console.log('The username submitted was ', passwordInput?.value);
    console.log('You hit submit');
  }

  useEffect(() => {
    console.log('got to use effect')
  }, [googleBool])

  return (
    <div className="landingPage">
      <div className="logoContainer">
        <img id="k8rLogo" src={logo} alt="K8R Logo - A robot butler holds the K8R logo on a silver platter." />
      </div>
      <div className="verticalLine"></div>
      <div className="loginContainer">
        <div className="googleOAuthContainer">
          <a
            id="googleOAuthButton"
            href={`/auth/google`}
          >
            Login With Google
          </a>
          {/* <div id="g_id_onload"
            data-client_id="687595826738-q8nfrogiqm094mr04ir15mqqh20a6prj.apps.googleusercontent.com"
            data-context="use"
            data-ux_mode="popup"
            data-login_uri="http://localhost:8888/k8r-auth"
            data-auto_prompt="false">
          </div>
          <div className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
          </div> */}
        </div>
        <form id="loginForm" onSubmit={submitLogin}>
          <input id="usernameInput" name="username" className="loginInput" type="text" placeholder="username" />
          <input id="passwordInput" name="password" className="loginInput" type="password" placeholder="password" />
          <button id="loginButton" type="submit">Connect</button>
        </form>
        <div className="forgotPasswordContainer">
          <a href="www.google.com" className="forgotPasswordLink">Forgot your password?</a>
          <span>-</span>
          <a href="www.google.com">Question?</a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
