import Google from "../img/google.png";
import Facebook from "../img/facebook.png";

const Login = () => {
  const google = () => {
    window.open("http://localhost:8002/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8002/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
