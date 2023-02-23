import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "./AuthForm.module.css";

export function AuthForm() {
  const [loginMode, setLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function toggleAuthMode() {
    setLoginMode((prevState) => !prevState);
  }

  function createUser(email: string, password: string) {
    axios
      .post("/api/auth/signup", { email, password })
      .then((res) => console.log(res.data))
      .catch((err) =>
        console.error(
          err.response?.data?.message || err.message || "Something went wrong"
        )
      );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!loginMode) return createUser(email, password);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result) router.replace("/profile");
  }

  return (
    <section className={styles.auth}>
      <h1>{loginMode ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.actions}>
          <button>{loginMode ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={toggleAuthMode}
          >
            {loginMode ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
