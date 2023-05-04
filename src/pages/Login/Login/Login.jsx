import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log("login page location", location);

  const from = location.state?.from?.pathname || "/chefsInfo/0";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError("");
        event.target.reset();
        toast.success("Login successful");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        toast.error(error.message + "🔥");
      });
  };

  return (
    <div className="flex flex-col mx-auto mb-0 mt-8 max-w-md">
      <h2 className="text-5xl font-bold border-b border-gray-100 pb-5">
        Login
      </h2>
      <form onSubmit={handleLogin} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              required
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              name="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              required
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <p className="text-error font-medium">
            <small>{error}</small>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Don't have an account?
            <Link className="hover:underline ml-2 text-error" to="/register">
              Register
            </Link>
          </p>

          <button
            type="submit"
            className="inline-block rounded-lg bg-warning px-5 py-3 text-sm font-medium"
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex-grow mt-8">
        <Link to="/chefsInfo/0">
          <button
            onClick={handleGithubSignIn}
            className="inline-flex items-center gap-3 justify-start rounded-full ps-2 pr-8 py-1 hover:shadow-sm w-full mx-auto text-center bg-slate-50 border-2 border-slate-100 transition-colors hover:bg-transparent hover:text-black focus:outline-none focus:ring active:opacity-75"
          >
            <FaGithub className="h-7 w-7 mr-28" />
            <span className="text-sm font-medium">Continue with Github</span>
          </button>
        </Link>
      </div>
      <div className="flex-grow mt-2">
        <Link>
          <button
            onClick={handleGoogleSignIn}
            className="inline-flex items-center gap-3 justify-start rounded-full ps-2 pr-8 py-1 hover:shadow-sm w-full mx-auto text-center bg-slate-50 border-2 border-slate-100 transition-colors hover:bg-transparent hover:text-black focus:outline-none focus:ring active:opacity-75"
          >
            <FcGoogle className="h-7 w-7 mr-28" />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
