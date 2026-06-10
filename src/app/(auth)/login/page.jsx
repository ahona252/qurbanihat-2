"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    

    if (res) {
      alert("Signin successful");
    }
  };

    const handleGoogleSignin = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
  
      console.log(data, "data");
    };
  

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center text-blue-950 mb-6">
          Login to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-blue-950">Email</legend>
            <input
              type="email"
              className="input bg-amber-50"
              placeholder="Type here email"
              autoComplete="off"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-blue-950">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input bg-amber-50"
              placeholder="Type here password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-blue-950 text-white">Login</button>
        </form>

        <p className="mt-4 text-center text-black">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
                <div className="mt-6 border-t pt-4">
          <h2 className="font-bold text-lg mb-4 text-center text-slate-800">OR</h2>
          <button
            className="btn border border-blue-500 text-blue-500 w-full flex items-center justify-center gap-2 py-2 rounded-md hover:bg-blue-50 transition"
            onClick={handleGoogleSignin}
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;