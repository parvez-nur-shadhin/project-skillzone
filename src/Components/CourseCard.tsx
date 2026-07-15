"use client";

import Image from "next/image";
import React from "react";
import { FiClock, FiTag, FiUser, FiExternalLink } from "react-icons/fi";
import { Course } from "@/type/types";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-content/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <figure className="relative pt-[56.25%] overflow-hidden rounded-t-2xl bg-base-300">
          <Image
            height={600}
            width={300}
            src={course.thumbnailUrl}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </figure>

        <div className="card-body p-6 gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="badge badge-primary badge-sm gap-1 capitalize font-semibold tracking-wide px-3 py-2">
              <FiTag className="w-3 h-3" /> {course.category}
            </span>
            <span className="text-xs text-base-content/50 flex items-center gap-1 font-medium">
              <FiClock className="w-3.5 h-3.5" /> {course.duration} Hours
            </span>
          </div>

          <h2 className="card-title text-lg font-bold text-base-content line-clamp-2 min-h-[3.5rem] leading-snug">
            {course.title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <FiUser className="w-4 h-4 text-primary shrink-0" />
            <span className="font-medium truncate">
              By {course.instructorName}
            </span>
          </div>

          <p className="text-sm text-base-content/60 line-clamp-3 leading-relaxed mt-1">
            {course.description}
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-2 border-t border-base-content/5 bg-base-50/50 rounded-b-2xl flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider font-bold text-base-content/40">
            Price
          </span>
          <span className="text-xl font-black text-primary">
            {course.price === 0
              ? "Free"
              : `$${Number(course.price).toFixed(2)}`}
          </span>
        </div>
        <Link href={`/courses/${course._id}`} className="btn btn-secondary btn-sm gap-1 shadow-sm font-bold">
          View Details
          <FiExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
