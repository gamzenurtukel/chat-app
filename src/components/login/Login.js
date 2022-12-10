import "./Login.scss";
import LottieLogin from "../lottieLogin";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-lottie">
          <LottieLogin />
        </div>
        <div className="login-form">
          <form className="form-container">
            <input className="form-input-user" />
            <input className="form-input-password" />
            <button className="form-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
