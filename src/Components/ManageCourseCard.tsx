"use client";

import React from "react";

import { FiEye, FiTrash2, FiClock, FiTag, FiDollarSign } from "react-icons/fi";
import Link from "next/link";
import { CourseCardProps } from "@/type/types";

// interface CourseCardProps {
//   course: Course;
//   onDelete: (id: string) => void;
// }

export const ManageCourseCard: React.FC<CourseCardProps> = ({ course, onDelete }) => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-content/5 overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 group">
      {/* Thumbnail Image Header */}
      <figure className="relative aspect-video bg-base-300 overflow-hidden">
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 badge badge-neutral bg-base-900/80 text-white font-bold backdrop-blur-xs px-2.5 py-1 border-0 capitalize text-[10px] tracking-wide">
          {course.category}
        </span>
      </figure>

      {/* Core Body Content */}
      <div className="card-body p-5 space-y-3">
        <div className="space-y-1">
          <h2
            className="card-title text-base font-bold text-base-content line-clamp-1 group-hover:text-primary transition-colors"
            title={course.title}
          >
            {course.title}
          </h2>
          <p className="text-xs text-base-content/60 truncate">
            Instructor:{" "}
            <span className="font-semibold">{course.instructorName}</span>
          </p>
        </div>

        {/* Meta Matrix Row */}
        <div className="flex items-center justify-between border-t border-b border-base-content/5 py-2.5 text-xs text-base-content/70">
          <div className="flex items-center gap-1">
            <FiClock className="text-base-content/40" />
            <span>{course.duration}</span>
          </div>

          <div className="font-black text-sm">
            {course.price === 0 ? (
              <span className="text-success uppercase tracking-wider text-xs">
                Free
              </span>
            ) : (
              <span className="flex items-center text-primary">
                <FiDollarSign className="w-3.5 h-3.5 -mr-0.5 shrink-0" />
                {Number(course.price).toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Dashboard Action Triggers */}
        <div className="card-actions justify-end gap-2 pt-1">
          <Link
            href={`/courses/${course._id}`}
            className="btn btn-ghost btn-sm btn-square hover:bg-base-200 text-base-content/70"
            title="View Course"
          >
            <FiEye className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onDelete(course._id)}
            className="btn btn-ghost btn-sm btn-square text-error hover:bg-error/10"
            title="Delete Course"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
