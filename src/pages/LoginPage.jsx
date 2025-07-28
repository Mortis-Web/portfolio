import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthContext } from "../hooks/AuthContext";
import { FiLogIn } from "react-icons/fi";

const LoginPage = () => {
  const { handleLogin } = useAuthContext();
  const userEmail = useRef();
  const userPassword = useRef();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="min-h-screen flex justify-center items-center">
      <form onSubmit={(e)=> handleLogin(e,userEmail,userPassword)} className="container  justify-center items-center text-center flex flex-col gap-8">
        <h2 className="text-5xl flex items-center gap-1 text-(--colorPrime) font-bold my-6">  login to Dashboard<FiLogIn/></h2>
        <div className=" flex flex-col gap-1 items-start justify-start max-w-120 w-full">
          <label htmlFor="email" className="text-lg">email address<span className="text-(--colorPrime)">*</span></label>
          <input
          ref={userEmail}
          placeholder="enter email 3mo mortis"
            type="email"
            name="email"
            id="email"
            className="dark:bg-white bg-(--black) text-white dark:text-black rounded-xl py-4 px-6 w-full"
            required
          />
        </div>
        <div className=" flex flex-col gap-1 items-start justify-start max-w-120 w-full">
          <label htmlFor="password" className="text-lg">password<span className="text-(--colorPrime)">*</span></label>
          <div className="w-full flex relative items-center justify-center">
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute text-(--colorPrime) z-10 right-6 top-4 cursor-pointer text-2xl"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <input
          placeholder="enter password 3mo mortis"
            ref={userPassword}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="dark:bg-white bg-(--black) text-white dark:text-black rounded-xl py-4 px-6 w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          style={{margin:'0'}}
          className="max-w-100 btn w-full rounded-2xl p-4 text-xl bg-(--primary) text-white font-bold"
        >
          Login now!
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
