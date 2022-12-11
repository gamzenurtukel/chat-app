import "./SingUp.scss";

import LottieSingUp from "../lottieSingUp/LottieSingUp";

function SingUp() {
  return (
    <div className="sing-up">
      <div className="sing-up-container">
        <div className="sing-up-lottie">
          <LottieSingUp />
        </div>
        <div className="sing-up-form">
          <form className="form-container">
            <input
              className="form-input-username"
              placeholder="User name"
              name="username"
            />
            <input
              className="form-input-email"
              placeholder="E-mail"
              name="email"
            />
            <input
              className="form-input-password"
              placeholder="Password"
              name="password"
            />
            <button className="form-button">Sing Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
