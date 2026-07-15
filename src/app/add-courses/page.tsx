"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiImage,
  FiTag,
  FiAlignLeft,
  FiUser,
  FiPlusCircle,
} from "react-icons/fi";
import { CourseInputTypes } from "@/type/types";
import { authClient } from "@/lib/auth-client";

const AddCourses = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CourseInputTypes>({
    defaultValues: {
      uid: user?.id || "",
      category: "",
    },
  });

  useEffect(() => {
    if (user?.id) {
      setValue("uid", user.id);
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<CourseInputTypes> = async (
    data: CourseInputTypes,
  ) => {
    const toastId = toast.loading("Creating your course...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      toast.update(toastId, {
        render: "Course successfully added to Skillzone!",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      reset({
        uid: user?.id || "",
        category: "",
      });
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to add course. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

  if (isPending) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-semibold text-base-content/60">
          Verifying session credentials...
        </p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
        <div className="alert alert-warning max-w-md shadow-md font-semibold text-sm">
          <span>⚠️ You must be logged in to create a course.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-base-100 rounded-2xl shadow-xl border border-base-content/5 p-8 sm:p-12"
      >
        <div className="mb-10 text-center sm:text-left border-b border-base-content/10 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight flex items-center justify-center sm:justify-start gap-3">
            <FiPlusCircle className="text-primary w-8 h-8" />
            Create New Course
          </h1>
          <p className="text-base-content/60 mt-2 text-sm sm:text-base">
            Fill in the details below to publish a new course to the Skillzone
            directory.
          </p>
        </div>

        <input type="hidden" {...register("uid")} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Course Title</span>
            </label>
            <div className="relative flex items-center">
              <FiBookOpen className="absolute left-4 text-base-content/40 w-5 h-5" />
              <input
                type="text"
                placeholder="e.g., Ultimate React & Next.js Masterclass"
                className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.title ? "border-error" : ""}`}
                {...register("title", { required: "Course title is required" })}
              />
            </div>
            {errors.title && (
              <label className="label py-1">
                <span className="label-text-alt text-error">
                  {errors.title.message}
                </span>
              </label>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Instructor Name</span>
              </label>
              <div className="relative flex items-center">
                <FiUser className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="e.g., Jane Doe"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.instructorName ? "border-error" : ""}`}
                  {...register("instructorName", {
                    required: "Instructor name is required",
                  })}
                />
              </div>
              {errors.instructorName && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.instructorName.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <div className="relative flex items-center">
                <FiTag className="absolute left-4 text-base-content/40 w-5 h-5 pointer-events-none z-10" />
                <select
                  className={`select select-bordered w-full pl-12 focus:outline-primary ${errors.category ? "border-error" : ""}`}
                  {...register("category", {
                    required: "Please select a category",
                  })}
                >
                  <option value="" disabled>
                    Select course category
                  </option>
                  <option value="development">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="business">Business & Tech</option>
                </select>
              </div>
              {errors.category && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.category.message}
                  </span>
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Course Price (USD)</span>
              </label>
              <div className="relative flex items-center">
                <FiDollarSign className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g., 99.99 (0 for free)"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.price ? "border-error" : ""}`}
                  {...register("price", {
                    required: "Price is required",
                    min: {
                      value: 0,
                      message: "Price cannot be a negative value",
                    },
                    valueAsNumber: true,
                  })}
                />
              </div>
              {errors.price && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.price.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Estimated Duration</span>
              </label>
              <div className="relative flex items-center">
                <FiClock className="absolute left-4 text-base-content/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="e.g., 8 weeks (45 hours)"
                  className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.duration ? "border-error" : ""}`}
                  {...register("duration", {
                    required: "Estimated duration is required",
                  })}
                />
              </div>
              {errors.duration && (
                <label className="label py-1">
                  <span className="label-text-alt text-error">
                    {errors.duration.message}
                  </span>
                </label>
              )}
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Thumbnail Image URL</span>
            </label>
            <div className="relative flex items-center">
              <FiImage className="absolute left-4 text-base-content/40 w-5 h-5" />
              <input
                type="url"
                placeholder="https://example.com/thumbnail.png"
                className={`input input-bordered w-full pl-12 focus:outline-primary ${errors.thumbnailUrl ? "border-error" : ""}`}
                {...register("thumbnailUrl", {
                  required: "Thumbnail URL is required",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message:
                      "Must be a valid URL starting with http:// or https://",
                  },
                })}
              />
            </div>
            {errors.thumbnailUrl && (
              <label className="label py-1">
                <span className="label-text-alt text-error">
                  {errors.thumbnailUrl.message}
                </span>
              </label>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Course Description</span>
            </label>
            <div className="relative flex items-start">
              <FiAlignLeft className="absolute left-4 top-4 text-base-content/40 w-5 h-5" />
              <textarea
                placeholder="Provide a detailed roadmap, target audience, and expectations of the course..."
                className={`textarea textarea-bordered w-full pl-12 h-32 focus:outline-primary leading-relaxed ${errors.description ? "border-error" : ""}`}
                {...register("description", {
                  required: "Course description is required",
                  minLength: {
                    value: 20,
                    message: "Description must be at least 20 characters long",
                  },
                })}
              />
            </div>
            {errors.description && (
              <label className="label py-1">
                <span className="label-text-alt text-error">
                  {errors.description.message}
                </span>
              </label>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t border-base-content/10">
            <button
              type="button"
              onClick={() => reset({ uid: user?.id || "", category: "" })}
              className="btn btn-ghost border-base-content/20 hover:bg-base-200 order-2 sm:order-1 font-bold"
            >
              Reset Form
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary px-8 order-1 sm:order-2 font-bold flex gap-2"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Publish Course"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddCourses;
