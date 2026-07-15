"use client";

import React from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiUsers,
  FiAward,
  FiTarget,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="badge badge-primary badge-sm font-bold tracking-wider uppercase px-3 py-2">
            Welcome to Skillzone
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-base-content tracking-tight">
            Empowering Minds, <br />
            <span className="text-primary">Shaping Digital Futures</span>
          </h1>
          <p className="text-base-content/75 text-base sm:text-lg leading-relaxed">
            Skillzone is an open ecosystem designed to bridge the gap between
            world-class knowledge and ambitious learners. We curate high-impact
            learning experiences to unlock your potential, wherever you are in
            the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-1">
            <div className="text-3xl font-black text-primary">50+</div>
            <div className="text-xs uppercase tracking-wider font-bold text-base-content/50">
              Verified Modules
            </div>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-1">
            <div className="text-3xl font-black text-secondary">12,000+</div>
            <div className="text-xs uppercase tracking-wider font-bold text-base-content/50">
              Active Students
            </div>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-1">
            <div className="text-3xl font-black text-accent">94%</div>
            <div className="text-xs uppercase tracking-wider font-bold text-base-content/50">
              Career Transition Rate
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-base-content">
              Our Core Pillars
            </h2>
            <p className="text-xs text-base-content/50 mt-1">
              The fundamental values driving our educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <FiTarget className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-base-content">
                Impactful Content
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                We cut the fluff. Every single dynamic module is architected
                alongside industry mentors to ensure immediate utility in
                professional fields.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <FiUsers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-base-content">
                Community First
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Learning is never isolated. Join specialized discussion
                ecosystems, collaborate on source arrays, and scale with fellow
                system developers.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-content/5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FiShield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-base-content">
                Self-Paced Control
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                No stress parameters or mandatory structural sync gates. Control
                your timeline and rewatch dynamic code asset guides precisely
                when you need them.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl p-8 shadow-md border border-base-content/5 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-base-content">
            Ready to upgrade your skillset?
          </h3>
          <p className="text-xs text-base-content/60 max-w-md mx-auto">
            Explore our completely open catalogue of engineering, optimization,
            management, and technical framework architectures.
          </p>
          <div className="pt-2">
            <Link
              href="/courses"
              className="btn btn-primary btn-sm px-6 h-10 font-bold flex items-center justify-center gap-2 max-w-xs mx-auto group shadow-sm"
            >
              Browse The Courses
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
