import { useRef } from "react";

const SignIn = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("api/signin", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input type="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <button> sign in</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            return props.loginHandler();
          }}
        >
          login
        </button>
      </div>
    </>
  );
};

export default SignIn;
