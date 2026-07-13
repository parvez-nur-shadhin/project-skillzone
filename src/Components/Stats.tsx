'use client'
import { FiUsers, FiVideo, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="py-20 bg-base-100 border-y border-base-content/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-base-content/60 mb-6 text-center lg:text-left">
                            Our graduates get hired at
                        </h3>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale">
                            <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-black tracking-tighter cursor-pointer">TECHCORP</motion.span>
                            <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-bold tracking-widest cursor-pointer">INNOVATE</motion.span>
                            <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-serif italic font-bold cursor-pointer">GlobalSys</motion.span>
                            <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-bold tracking-tight cursor-pointer">DataFlow</motion.span>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="stats stats-vertical sm:stats-horizontal shadow-sm border border-base-content/5 bg-base-200/50 w-full">
                            <div className="stat place-items-center">
                                <div className="stat-figure text-primary">
                                    <FiUsers className="w-8 h-8" />
                                </div>
                                <div className="stat-title">Active Students</div>
                                <div className="stat-value">50K+</div>
                            </div>
                            
                            <div className="stat place-items-center">
                                <div className="stat-figure text-secondary">
                                    <FiVideo className="w-8 h-8" />
                                </div>
                                <div className="stat-title">Video Lessons</div>
                                <div className="stat-value">1,200</div>
                            </div>
                            
                            <div className="stat place-items-center">
                                <div className="stat-figure text-accent">
                                    <FiAward className="w-8 h-8" />
                                </div>
                                <div className="stat-title">Success Rate</div>
                                <div className="stat-value">94%</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Stats;