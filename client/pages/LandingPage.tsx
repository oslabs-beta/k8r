import '../stylesheets/landingPage.css'
import logo from '../assets/logo.png'

function LandingPage() {

  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const usernameInput: HTMLInputElement | null = document.querySelector('#usernameInput');
    const passwordInput: HTMLInputElement | null = document.querySelector('#passwordInput');

    console.log('The username submitted was ', usernameInput?.value);
    console.log('The username submitted was ', passwordInput?.value);
    console.log('You hit submit');
  }

  return (
    <div className="landingPage">
      <div className="logoContainer">
        <img id="k8rLogo" src={logo} alt="K8R Logo - A robot butler holds the K8R logo on a silver platter." />
      </div>
      <div className="verticalLine"></div>
      <div className="loginContainer">
        <div className="googleOauth" style={{ color: 'white' }}>Google OAuth Goes Here</div>
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
