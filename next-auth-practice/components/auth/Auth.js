import { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin(true);
  };
  const signInHandler = () => {
    setIsLogin(false);
  };

  return (
    <>
      {isLogin && <Login signInHandler={signInHandler} />}
      {!isLogin && <SignIn loginHandler={loginHandler} />}
    </>
  );
};

export default Auth;
