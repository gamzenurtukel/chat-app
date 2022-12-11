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
            <input
              className="form-input-user"
              placeholder="User name"
              name="username"
            />
            <input
              className="form-input-password"
              placeholder="Password"
              name="password"
            />
            <button className="form-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
