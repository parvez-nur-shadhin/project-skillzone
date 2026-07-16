"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FiBookOpen, FiPlus, FiGrid } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { Course } from "@/type/types";
import { ManageCourseCard } from "@/Components/ManageCourseCard";
import { redirect } from "next/navigation";

const ManageCourses = () => {
  const { data: session, isPending: isAuthLoading } = authClient.useSession();
  const user = session?.user;

  if(!user){
    redirect("/signup");
  };

  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserCourses = async () => {
    if (!user?.id) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/`,
      );
      if (!response.ok) throw new Error("Failed to load dashboard data matrix");

      const data: Course[] = await response.json();
      const userOwnedCourses = data.filter(
        (course: any) => course.uid === user.id,
      );
      setCourses(userOwnedCourses);
    } catch (err: any) {
      toast.error(err.message || "Failed to sync directory parameters.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthLoading && user) {
      fetchUserCourses();
    }
  }, [user, isAuthLoading]);

  const handleDelete = async (courseId: string) => {
    if (
      !confirm(
        "Are you sure you want to permanently delete this course from Skillzone?",
      )
    )
      return;

    const toastId = toast.loading("Removing index references...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseId}`,
        {
          method: "DELETE",
        },
      );
      console.log(response);
      if (!response.ok) throw new Error("Server rejected request parameters");

      setCourses((prev) => prev.filter((c) => c._id !== courseId));

      toast.update(toastId, {
        render: "Course safely terminated from active indices.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (err: any) {
      toast.update(toastId, {
        render: err.message || "Deletion sequence failed.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  if (isAuthLoading || (user && isLoading)) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-semibold text-base-content/60">
          Verifying security parameters...
        </p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
        <div className="alert alert-warning max-w-md shadow-md font-semibold text-sm">
          <span>
            ⚠️ Administrative tools require valid authentication cookies. Please
            sign in.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-base-100 p-6 rounded-xl border border-base-content/5 shadow-sm gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 text-primary hidden sm:block">
              <FiGrid className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-base-content flex items-center gap-2 sm:gap-0">
                <FiBookOpen className="text-primary sm:hidden" /> Course
                Instructor Center
              </h1>
              <p className="text-xs text-base-content/60 mt-0.5">
                Modify active directory paths, audit assets, or append fresh
                engineering templates.
              </p>
            </div>
          </div>
          <Link
            href="/courses/add"
            className="btn btn-primary btn-sm font-bold flex items-center gap-1 h-10 shadow-sm shrink-0 w-full sm:w-auto"
          >
            <FiPlus /> New Course Module
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="bg-base-100 rounded-xl border border-base-content/5 p-16 text-center space-y-3 shadow-sm">
            <div className="text-base-content/30 text-5xl font-light">
              Zero Modules Found
            </div>
            <p className="text-xs text-base-content/50 max-w-xs mx-auto leading-relaxed">
              You currently possess no operational catalog directories
              associated with this profile array. Create one to get started.
            </p>
            <div className="pt-2">
              <Link
                href="/courses/add"
                className="btn btn-outline btn-sm font-bold border-base-content/20"
              >
                Build First Module
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <ManageCourseCard
                key={course._id}
                course={course}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCourses;
