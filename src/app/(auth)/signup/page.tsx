"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiImage,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import { SignUpFormType } from "@/type/types";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>();
  const onSubmit = async (data: SignUpFormType) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.imageUrl,
    });
    if (res) {
      toast.success("Successfully Signed in");
      redirect("/");
    }
    if (!res) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="card w-full max-w-md bg-base-100 shadow-xl border border-base-content/5 z-10"
      >
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Skillzone
            </Link>
            <h2 className="text-2xl font-bold mt-4 tracking-tight">
              Create your account
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Start leveling up your career today.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <div className="relative flex items-center">
                <FiUser className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.name ? "border-error" : ""}`}
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.email ? "border-error" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Profile Image URL
                </span>
              </label>
              <div className="relative flex items-center">
                <FiImage className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.imageUrl ? "border-error" : ""}`}
                  {...register("imageUrl", {
                    required: "Image URL is required",
                    pattern: {
                      value: /^https?:\/\/.+/i,
                      message:
                        "Must be a valid URL starting with http:// or https://",
                    },
                  })}
                />
              </div>
              {errors.imageUrl && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.imageUrl.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative flex items-center">
                <FiLock className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`input input-bordered w-full pl-12 pr-12 focus:outline-primary ${errors.password ? "border-error" : ""}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-base-content/40 hover:text-base-content transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full group text-base font-bold"
              >
                Sign Up
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>

          <div className="divider text-xs text-base-content/40 my-6">OR</div>

          <p className="text-center text-sm text-base-content/70">
            Already have an account?{" "}
            <Link
              href="/login"
              className="link link-hover link-primary font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
