import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/logo2.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/actions/authaction";

const Navbar = ({ notifyMsg }) => {
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.auth?.user);

  const { accessToken } = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && user) {
      notifyMsg(
        "success",
        `Welcome! ${user?.name}, You Logged in Successfully`
      );
    }
  }, [isLoggedIn, user, notifyMsg]);

  const handleLogin = () => {
    dispatch(login());
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    notifyMsg("success", "Logged Out Successfully !");
  };

  return (
    <div className="signlang_navbar  gradient__bg">
      <div className="singlang_navlinks">
        <div className="signlang_navlinks_logo">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>

        <div className="signlang_navlinks_container">
          <p>
            <Link to="/">Home</Link>
          </p>

          <p>
            <Link to="/detect">Detect</Link>
          </p>

          {/* <p>
            <Link to="/guide">Guide</Link>
          </p> */}

          {accessToken && (
            <p>
              <Link to="/dashboard">Dashboard</Link>
            </p>
          )}
        </div>

        <div className="signlang_auth-data">
          {accessToken ? (
            <>
              <img src={user?.photoURL} alt="user-icon" />
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>

      <div className="signlang__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="signlang__navbar-menu_container scale-up-center">
            <div className="signlang__navbar-menu_container-links">
              <p>
                <Link to="/">Home</Link>
              </p>

              <p>
                <Link to="/detect">Detect</Link>
              </p>

              {accessToken && (
                <p>
                  <Link to="/dashboard">Dashboard</Link>
                </p>
              )}
            </div>

            <div className="signlang__navbar-menu_container-links-authdata">
              {accessToken ? (
                <>
                  <img src={user?.photoURL} alt="user-icon" />
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
