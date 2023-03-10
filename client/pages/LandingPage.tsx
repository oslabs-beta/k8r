import '../stylesheets/landingPage.css'
import logo from '../assets/logo.png'
import googleSignIn from '../assets/googleSignIn.png'

function LandingPage() {

  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const usernameInput: HTMLInputElement | null = document.querySelector('#usernameInput');
    const passwordInput: HTMLInputElement | null = document.querySelector('#passwordInput');
  }

  return (
    <div className="landingPage">
      <div className="logoContainer">
        <img id="k8rLogo" src={logo} alt="K8R Logo - A robot butler holds the K8R logo on a silver platter." />
      </div>
      <div className="verticalLine"></div>
      <div className="rightSideContainer">
        <div className="loginContainer">
          <div className="googleOAuthContainer">
            <a
              id="googleOAuthButton"
              href={`/auth/google`}
            >
              <img src={googleSignIn} className="googleSignInImg" alt="Google Sign In Button" />
            </a>
          </div>
          <form id="loginForm" onSubmit={submitLogin}>
            <input id="usernameInput" name="username" className="loginInput" type="text" placeholder="username" />
            <input id="passwordInput" name="password" className="loginInput" type="password" placeholder="password" />
            <button id="loginButton" type="submit" className="button-64">Connect</button>
          </form>
          <div className="forgotPasswordContainer">
            <a href="www.google.com" className="forgotPasswordLink">Forgot your password?</a>
            <a href="www.google.com">Register New Account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
