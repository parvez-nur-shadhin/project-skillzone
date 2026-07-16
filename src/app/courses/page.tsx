"use client";

import React, { useState, useEffect, useMemo } from "react";
import { CourseCard } from "@/Components/CourseCard";
import type { Course } from "@/type/types";
import { FiSearch, FiFilter, FiBookOpen } from "react-icons/fi";

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
        );

        if (!response.ok) {
          throw new Error("Failed to load course catalogue");
        }

        const data = await response.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message || "An expected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        course.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructorName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [courses, searchTerm, selectedCategory]);

  const uniqueCategories = useMemo(() => {
    const categories = courses.map((c) => c.category.toLowerCase());
    return ["all", ...Array.from(new Set(categories))];
  }, [courses]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-semibold text-base-content/60 animate-pulse">
          Loading Skillzone catalogue...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
        <div className="alert alert-error max-w-md shadow-lg font-semibold">
          <span>
            ⚠️ Error: {error}. Please ensure your Express backend is running.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center md:text-left border-b border-base-content/10 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center justify-center md:justify-start gap-3">
              <FiBookOpen className="text-primary w-8 h-8" />
              Explore Courses
            </h1>
            <p className="text-base-content/60 mt-2 text-sm">
              Discover high-quality development, design, and business modules
              verified by Skillzone.
            </p>
          </div>
          <div className="badge badge-neutral font-bold px-4 py-3">
            Total Available: {filteredCourses.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-base-100 p-4 rounded-xl shadow-md border border-base-content/5">
          <div className="form-control md:col-span-2 w-full">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 text-base-content/40 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title, instructor, or keywords..."
                className="input input-bordered w-full pl-12 focus:outline-primary bg-base-200/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="form-control w-full">
            <div className="relative flex items-center">
              <FiFilter className="absolute left-4 text-base-content/40 w-5 h-5 pointer-events-none z-10" />
              <select
                className="select select-bordered w-full pl-12 focus:outline-primary capitalize bg-base-200/50"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-base-100 rounded-2xl border border-dashed border-base-content/20 max-w-2xl mx-auto shadow-sm">
            <p className="text-lg font-semibold text-base-content/60">
              No matches found
            </p>
            <p className="text-xs text-base-content/40 mt-1">
              Try adapting your keywords or modifying your chosen filter
              categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="btn btn-sm btn-outline btn-primary mt-4 font-bold"
            >
              Reset Active Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
