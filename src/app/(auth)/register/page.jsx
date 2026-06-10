"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  // 1. Email/Password Registration Function
  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const { email, name, photo, password } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signup successful");
    }
  }; // Fixed: properly closed handleRegisterFunc here

  // 2. Google Sign-In Function (Moved outside of handleRegisterFunc)
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data, "data");
  };

  // Shared classes for all inputs to keep your code clean
  const inputFields = "input w-full bg-blue-950 text-white placeholder-slate-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-xl bg-white shadow-md max-w-md w-full">
        <h2 className="font-bold text-3xl text-center mb-6 text-slate-800">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* Name Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-slate-700 mb-1">Name</legend>
            <input
              type="text"
              className="input bg-amber-50"
              placeholder="Type here name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Photo URL Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-slate-700 mb-1">Photo URL</legend>
            <input
              type="text"
              className="input bg-amber-50"
              placeholder="Type here photo url"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* Email Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold text-slate-700 mb-1">Email</legend>
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
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password Field */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend font-semibold text-slate-700 mb-1">Password</legend>
            <div className="relative">
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
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-white"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </fieldset>

          {/* Submit Button */}
          <button className="btn w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 rounded-md transition duration-200 mt-2">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-black">
          Don't have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Login
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

export default RegisterPage;