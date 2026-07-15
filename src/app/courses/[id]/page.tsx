"use client";

import React, { useState, useEffect, use } from "react";
import {
  FiClock,
  FiTag,
  FiUser,
  FiBookOpen,
  FiChevronRight,
} from "react-icons/fi";
import { Course } from "@/type/types";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

const DetailsPage = ({ params }: PageProps) => {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${courseId}`,
        );
        if (!response.ok) {
          if (response.status === 404)
            throw new Error("Course could not be found");
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-semibold text-base-content/60">
          Loading course information...
        </p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
        <div className="alert alert-error max-w-md shadow-md font-semibold text-sm">
          <span>⚠️ {error || "Course data is unavailable."}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-base-100 p-3 rounded-xl shadow-sm border border-base-content/5">
            <figure className="relative pt-[56.25%] overflow-hidden rounded-lg bg-base-300">
              <Image
                src={course.thumbnailUrl}
                alt={course.title}
                height={300}
                width={600}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>
          </div>

          <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-3">
            <h2 className="text-lg font-bold flex items-center gap-2 border-b border-base-content/10 pb-2">
              <FiBookOpen className="text-primary" />
              Course Overview
            </h2>
            <p className="text-base-content/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {course.description}
            </p>
          </div>
        </div>

        <div className="space-y-4 lg:sticky lg:top-8">
          <div className="bg-base-100 rounded-xl shadow-md border border-base-content/5 p-5 space-y-4">
            <div>
              <span className="badge badge-primary badge-sm gap-1 capitalize font-bold mb-2">
                <FiTag className="w-3 h-3" /> {course.category}
              </span>
              <h1 className="text-lg font-extrabold text-base-content leading-snug">
                {course.title}
              </h1>
            </div>

            <div className="bg-base-200/60 p-3 rounded-lg flex items-center justify-between">
              <span className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                Tuition
              </span>
              <span className="text-2xl font-black text-primary">
                {course.price === 0
                  ? "Free"
                  : `$${Number(course.price).toFixed(2)}`}
              </span>
            </div>

            <div className="space-y-2 text-xs border-y border-base-content/5 py-3">
              <div className="flex justify-between items-center">
                <span className="text-base-content/50 flex items-center gap-1">
                  <FiUser className="text-primary" /> Instructor:
                </span>
                <span className="font-semibold text-base-content truncate max-w-[150px]">
                  {course.instructorName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base-content/50 flex items-center gap-1">
                  <FiClock className="text-primary" /> Duration:
                </span>
                <span className="font-semibold text-base-content">
                  {course.duration} Hours
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button className="btn btn-primary btn-sm w-full font-bold flex items-center justify-center gap-1 group text-sm h-10">
                Enroll Now
                <FiChevronRight className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="btn btn-outline btn-sm w-full border-base-content/20 font-bold h-10 hover:bg-base-200 text-xs">
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
