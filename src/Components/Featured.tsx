"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CourseCard, type Course } from "@/Components/CourseCard";
import { FiArrowRight,  } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const FeaturedCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
        );
        if (response.ok) {
          const data = await response.json();
          setCourses(data.slice(-4).reverse());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-base-100 flex justify-center items-center">
        <span className="loading loading-spinner loading-md text-primary"></span>
      </div>
    );
  }

  if (courses.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
        >
          <div className="space-y-2">
            <div className="badge badge-primary font-bold gap-1 text-xs">
              <GiSparkles className="w-3 h-3" /> New Releases
            </div>
            <h2 className="text-3xl font-black text-base-content tracking-tight">
              Featured Courses
            </h2>
            <p className="text-sm text-base-content/60 max-w-xl">
              Dive into our newest professional training modules designed to
              elevate your workflow and expand your functional skillset.
            </p>
          </div>
          <Link
            href="/courses"
            className="btn btn-primary btn-outline btn-sm font-bold gap-2 group text-xs shrink-0"
          >
            View All Catalogue{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course._id} variants={itemVariants}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
