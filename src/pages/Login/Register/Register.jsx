import React, { useContext, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const from = location.state?.from?.pathname || "/chefsInfo/0";

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, photo, email, password, confirm);

    // validate

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter");
      return;
    } else if (password !== confirm) {
      setError("Passwords do not match");
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please add at least one number");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add at least one special characters");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate(from, { replace: true });
        setError("");
        toast.success("Registration successful");

        profileUpdate(createdUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://img.freepik.com/premium-photo/realistic-ilustration-closeup-variety-food-during-iftar-meal-ramadan-generative-ai_669798-2416.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img className="h-8 sm:h-10" src={logo} alt="" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Arabian Delights 🧆
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Roaming the world's best Arabian chef's recipes, showcasing the
              finest and most authentic flavors of Arabian cuisine.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <img className="h-8 sm:h-10" src={logo} alt="" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Arabian Delights 🧆
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Roaming the world's best Arabian chef's recipes, showcasing the
                finest and most authentic flavors of Arabian cuisine.
              </p>
            </div>

            <form
              onSubmit={handleRegister}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="Name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="photoUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>

                <input
                  type="text"
                  id="photoUrl"
                  name="photo"
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="confirm"
                  required
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-full">
                <p className="text-error font-medium">
                  <small>{error}</small>
                </p>
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    onClick={handleAccepted}
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    required
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    By creating an account, you agree to our{" "}
                    <Link
                      to="/terms"
                      className="text-gray-700 hover:underline font-medium"
                    >
                      terms and conditions
                    </Link>
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={!accepted}
                  type="submit"
                  className={`inline-block shrink-0 rounded-md border border-warning bg-warning px-12 py-3 text-sm font-medium  transition hover:bg-transparent hover:text-warning focus:outline-none focus:ring active:text-yellow-400 ${
                    !accepted ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link className="hover:underline ml-2 text-error" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
