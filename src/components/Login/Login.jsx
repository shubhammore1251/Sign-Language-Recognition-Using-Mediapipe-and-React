import React, { useEffect } from "react";
import "./Login.css";
import LoginImg from "../../assests/login.svg";
import GoogleIcon from "../../assests/google_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authaction";
import { useNavigate } from "react-router-dom";

const Login = ({notifyMsg}) => {
  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  
  const accessToken = useSelector(state=>state.auth.accessToken);

  const user = useSelector(state => state.auth?.user);

  useEffect(() => {   
    if(accessToken){
    navigate("/");
    notifyMsg("success", `Welcome! ${user?.name}, You Logged in Successfully`)
  }

}, [accessToken,navigate,user,notifyMsg])

  const handleClick = () => {
    dispatch(login());
  }

  return (
    <div className="signlang_login-container section__margin">
      <div>
        <div className="signlang_login-img">
          <img src={LoginImg} alt="login" />
        </div>

        <div className="signlang_login-data">
          <h2 className="gradient__text">Get Started by Login !</h2>
          <button onClick={handleClick}>
            <img src={GoogleIcon} alt="google-icon" />
            <h3>Login</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
