import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef } from "react";
const Login = (props) => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const result = await signIn("credentials", {
      redirect: false,
      password,
      email,
      callbackUrl: "/",
    });
    console.log(result);
    router.push(result.url);
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
      <button
        onClick={() => {
          props.signInHandler();
        }}
      >
        SignIn
      </button>
    </>
  );
};

export default Login;
