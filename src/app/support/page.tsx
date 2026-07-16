"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FiHelpCircle,
  FiMail,
  FiMessageSquare,
  FiBookOpen,
  FiSend,
  FiLayers,
} from "react-icons/fi";

const SupportPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Dispatching support ticket...");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.update(toastId, {
      render:
        "Ticket received! Our system mentors will respond within 24 hours.",
      type: "success",
      isLoading: false,
      autoClose: 4000,
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-base-content tracking-tight flex items-center justify-center gap-2">
            <FiHelpCircle className="text-primary" /> Skillzone Help Center
          </h1>
          <p className="text-xs sm:text-sm text-base-content/60">
            Search operational documentation templates, resolve connection
            bottlenecks, or drop our engineering advocates a direct transmission
            line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-lg font-bold text-base-content flex items-center gap-2 mb-2">
              <FiBookOpen className="text-primary w-4 h-4" /> Frequently Asked
              Questions
            </h2>

            <div className="join join-vertical w-full bg-base-100 border border-base-content/5 shadow-sm rounded-xl">
              <div className="collapse collapse-arrow join-item border-b border-base-content/5">
                <input type="radio" name="support-accordion" defaultChecked />
                <div className="collapse-title text-sm font-bold text-base-content flex items-center gap-2">
                  How do I claim access tokens for courses?
                </div>
                <div className="collapse-content text-xs text-base-content/75 leading-relaxed">
                  All access tokens generate automatically immediately upon
                  payment confirmation. Navigate to your dashboard array matrix,
                  select your purchased module, and pull down the code
                  dependencies directly into your system framework.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border-b border-base-content/5">
                <input type="radio" name="support-accordion" />
                <div className="collapse-title text-sm font-bold text-base-content">
                  Can I change my instructor credentials later?
                </div>
                <div className="collapse-content text-xs text-base-content/75 leading-relaxed">
                  Absolutely. Security parameters can be re-indexed under your
                  core Profile Configuration tab. Update your verification
                  payload, and Better Auth will seamlessly align matching
                  dataset nodes.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border-b border-base-content/5">
                <input type="radio" name="support-accordion" />
                <div className="collapse-title text-sm font-bold text-base-content">
                  What is the standard dynamic course refund window?
                </div>
                <div className="collapse-content text-xs text-base-content/75 leading-relaxed">
                  Skillzone provides an open, unconditional 14-day tracking
                  matrix warranty. If a specific structural instruction paradigm
                  falls short of expectations, file a query parameter below for
                  an immediate fallback.
                </div>
              </div>

              <div className="collapse collapse-arrow join-item">
                <input type="radio" name="support-accordion" />
                <div className="collapse-title text-sm font-bold text-base-content">
                  My MongoDB server instances are rejecting course routes.
                </div>
                <div className="collapse-content text-xs text-base-content/75 leading-relaxed">
                  Verify your environment variables file includes
                  `NEXT_PUBLIC_API_URL` targeting your local Express core port
                  (`http://localhost:8000`). Clear client session cookies,
                  execute standard npm reboots, and retry database
                  transmissions.
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-base-100 p-6 rounded-xl border border-base-content/5 shadow-sm space-y-4"
          >
            <div className="border-b border-base-content/5 pb-3">
              <h2 className="text-base font-bold text-base-content flex items-center gap-2">
                <FiMessageSquare className="text-primary w-4 h-4" /> Open
                Support Ticket
              </h2>
              <p className="text-[11px] text-base-content/50 mt-0.5">
                Stuck in an environment loop? Write us a message.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold">
                    Email Node
                  </span>
                </label>
                <div className="relative flex items-center">
                  <FiMail className="absolute left-3.5 text-base-content/40 w-4 h-4" />
                  <input
                    required
                    type="email"
                    placeholder="you@domain.com"
                    className="input input-bordered input-sm w-full pl-10 focus:outline-primary text-xs h-9"
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold">
                    Inquiry Type
                  </span>
                </label>
                <div className="relative flex items-center">
                  <FiLayers className="absolute left-3.5 text-base-content/40 w-4 h-4 pointer-events-none" />
                  <select
                    required
                    className="select select-bordered select-sm w-full pl-10 focus:outline-primary text-xs h-9"
                  >
                    <option value="billing">Billing & Access Matrix</option>
                    <option value="technical">Database & Server Glitch</option>
                    <option value="instructor">
                      Instructor Portal Verification
                    </option>
                    <option value="other">General Framework Question</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold">
                    Detailed Report
                  </span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the deployment variables, error logs, or request details..."
                  className="textarea textarea-bordered textarea-sm w-full focus:outline-primary text-xs leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-sm w-full font-bold flex items-center justify-center gap-1 h-9 mt-2 text-xs"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <>
                    <FiSend /> Dispatch Ticket
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
