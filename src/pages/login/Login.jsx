import "./login.scss";
import { Link } from "react-router-dom";
import {
  Facebook,
  GitHub,
  Google,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { useContext } from "react";
import { activeLinkContext } from "../../context/activeLinkContext";

const Login = () => {
  const { dispatchLink } = useContext(activeLinkContext);

  return (
    <div className="login">
      <div className="loginPage-navbar">
        <h2>LOGIN PAGE</h2>
        <Link to="/" onClick={() => dispatchLink({ type: "1" })}>
          <h3>
            <KeyboardArrowLeft /> Back to Dashboard
          </h3>
        </Link>
      </div>
      <div className="form-container">
        <form>
          <div className="icon-container">
            <h2>Sign In</h2>
            <div className="icons">
              <span>
                <Facebook />
              </span>
              <span>
                <GitHub />
              </span>
              <span>
                <Google />
              </span>
            </div>
          </div>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <div className="remember-me">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span>Remember me</span>
          </div>

          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
