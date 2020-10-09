import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signin = () => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div class="login">
      <div className="login_logo">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png"
        />
        <img
          alt=""
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
        />
      </div>
      <Button type="submit" onClick={signin}>
        Login With Google Account
      </Button>
      <div className="login_Button"></div>
    </div>
  );
}

export default Login;
