import "./register.scss";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { activeLinkContext } from "../../context/activeLinkContext";

const Register = () => {
  const { dispatchLink } = useContext(activeLinkContext);

  return (
    <div className="register">
      <div className="back-btn">
        <Link to="/" onClick={() => dispatchLink({ type: "1" })}>
          <h3>
            <KeyboardArrowLeft /> Back to Dashboard
          </h3>
        </Link>
      </div>
      <div className="left">
        <h1>Welcome To Our Site</h1>
        <h2>Start your Journey Here</h2>
      </div>
      <div className="right">
        <div className="form-container">
          <form>
            <h2>Sign Up</h2>
            <span>Enter your email and password to register</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="terms">
              <input className="checkbox" type="checkbox" />
              <p>
                I agree the <span>Terms and Conditions</span>
              </p>
            </div>
            <button type="submit">Sign Up</button>
            <p className="login-link">
              Already have an account?
              <Link to="/login">
                <span>Sign In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
