import "./LottieLogin.scss";

import Lottie from "react-lottie";
import login from "../../lottie/login.json";

function LottieLogin() {
  return (
    <div className="lottie-login">
      <Lottie
        speed={0.3}
        options={{
          animationData: login,
          loop: true,
          autoplay: true,
        }}
      />
    </div>
  );
}

export default LottieLogin;
