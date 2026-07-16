'use client'

import { FiTarget, FiTerminal, FiBriefcase } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';

const HowItWorks = () => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (index:number) => ({
            opacity: 1, 
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="py-24 bg-base-200 overflow-hidden" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                        Your Path to Success
                    </h2>
                    <p className="text-base-content/70 text-lg">
                        We have streamlined the learning process so you can focus on building skills and landing your dream job.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0 opacity-20 origin-left"
                    ></motion.div>

                    {[
                        { icon: FiTarget, title: "1. Choose a Track", color: "text-primary", bg: "bg-primary/10", text: "Select a specialized career path based on your goals, whether it's coding, design, or marketing." },
                        { icon: FiTerminal, title: "2. Learn & Build", color: "text-secondary", bg: "bg-secondary/10", text: "Watch expert-led videos and build real-world portfolio projects with weekly mentor reviews." },
                        { icon: FiBriefcase, title: "3. Get Hired", color: "text-accent", bg: "bg-accent/10", text: "Graduate with a certified diploma, a polished resume, and exclusive access to our hiring partners." }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8 }}
                            className="card bg-base-100 shadow-sm border border-base-content/5 relative z-10"
                        >
                            <div className="card-body items-center text-center p-8">
                                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center ${item.color} mb-4 shadow-inner`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="card-title text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-base-content/70 text-sm">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;