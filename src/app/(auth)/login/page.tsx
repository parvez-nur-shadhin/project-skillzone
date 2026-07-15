"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { LoginFormType } from "@/type/types";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const onSubmit = async (data: LoginFormType) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
    });
    if (res) {
      toast.success("Welcome to Skillzone");
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
              SkillZone
            </Link>
            <h2 className="text-2xl font-bold mt-4 tracking-tight">
              Sign in to your account
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Continue leveling up your career.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                Sign In
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>

          <div className="divider text-xs text-base-content/40 my-6">OR</div>

          <p className="text-center text-sm text-base-content/70">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="link link-hover link-primary font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
