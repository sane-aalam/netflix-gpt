import React, { useState, useRef } from "react";
import Logo from "./Logo";
// import the validation data
import FormDataValidation from "../utils/Validation";

function Header() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);

  // use of useRef(hook)
  const email = useRef(null);
  const password = useRef(null);

  const HandleFormButtonClick = () => {
    console.log("form button is clicked!");

    const confirmEmail = email.current.value;
    const confirmPassword = password.current.value;

    const massage = FormDataValidation(confirmEmail, confirmPassword);
    console.log(massage);
    setErrorMassage(massage);
  };

  function toggleSignInForm() {
    console.log("singIn is clicked!");
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="header">
      <Logo />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
          alt="background-image"
        />
      </div>

      <div className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
        <h2 className="text-3xl font-bold mb-6 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <p className="text-red-600 pb-6">
          Desclaimer : This is just a dummy project to showcase my skills & for
          learning purpose. This is not an actual streaming website, do not
          enter your actual credential here.
        </p>

        {/* To Stop byDefault Even.Prevent */}
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col gap-4"
        >
          {isSignInForm ? null : (
            <input
              type="Full Name"
              placeholder="Enter Full Name"
              className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-white focus:ring-2 focus:ring-white"
            />
          )}
          {isSignInForm ? null : (
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-white focus:ring-2 focus:ring-white"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-white focus:ring-2 focus:ring-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-1 focus:ring-2 focus:ring-white"
          />
          <p className="text-red-600 pb-6">{errorMassage}</p>

          <button
            onClick={HandleFormButtonClick}
            className="bg-red-600 hover:bg-red-700 transition-colors p-3 w-full rounded font-semibold"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        </form>

        <div className="text-gray-400 text-sm mt-6">
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "already registered? sign up now"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
