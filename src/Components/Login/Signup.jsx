import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export default function Signup() {
  let navigate = useNavigate();

  const handleSignup = (e) => {
    // get values from all fields and send a post request
    const { value: username } = document.getElementById("username") 
    const { value: email } = document.getElementById("email")
    const { value: confirmEmail } = document.getElementById("confirm_email")
    const { value: password } = document.getElementById("password")
    const { value: confirmPassword } = document.getElementById("confirm_password")
    axios.post("/new-user", {
      username, email, confirmEmail, password, confirmPassword
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  };
  
    return (
    <>
      <div className="grid w-screen justify-items-center pt-10">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
            <div className="flex flex-col items-center justify-between">
              <label className="  text-xl">Welcome</label>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="true"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="email"
                type="text"
                placeholder="Email"
                autoComplete="true"
                />
                 <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm_email"
              >
                Confirm Email
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="confirm_email"
                type="text"
                placeholder="Confirm Email"
                autoComplete="true"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                autoComplete="true"
                />
                 <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm_password"
                type="password"
                placeholder="******************"
                autoComplete="true"
              />
              <p className=" text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/login">
                <div
                    className="inline-block align-baseline font-bold text-sm hover:yellow"
                >
                  Already have an account?
                </div>
              </Link>
            </div>
            <div className="flex flex-col h-12 mt-3">
              <button
                className="bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-2 px-4 rounded "
                  type="button"
                  onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
