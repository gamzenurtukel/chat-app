import "./LottieSingUp.scss";

import Lottie from "react-lottie";
import singUp from "../../lottie/singUp.json";

function LottieSingUp() {
  return (
    <div className="lottie-sing-up">
      <Lottie
        speed={0.2}
        options={{
          animationData: singUp,
          loop: true,
          autoplay: true,
        }}
      />
    </div>
  );
}

export default LottieSingUp;
