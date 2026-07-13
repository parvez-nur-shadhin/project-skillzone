'use client'
import { motion } from 'framer-motion';
import { faqsType } from '@/type/types';

const FAQ = () => {
    const faqs:faqsType[] = [
        {
            q: "Do I need prior experience to join a track?",
            a: "Not at all. Our foundational courses are designed for absolute beginners. We start with the basics and progressively introduce more advanced concepts as you build your confidence."
        },
        {
            q: "How long does it take to complete a course?",
            a: "It depends on your pace. Most students who dedicate 10-15 hours a week complete a full career track in 3 to 4 months. You have lifetime access to the materials, so you can learn at your own speed."
        },
        {
            q: "Is there a money-back guarantee?",
            a: "Yes. We offer a 14-day no-questions-asked refund policy. If you feel the platform isn't the right fit for you within the first two weeks, just let our support team know."
        },
        {
            q: "Do I get a certificate upon completion?",
            a: "Yes, every completed career track grants you a verified, shareable digital certificate that you can add directly to your LinkedIn profile and resume."
        }
    ];

    return (
        <section className="py-24 bg-base-100 overflow-hidden" id="faq">
            <div className="max-w-4xl mx-auto px-4 xl:px-0">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base-content/70 text-lg">
                        Everything you need to know about the product and billing.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="collapse collapse-plus bg-base-200/50 border border-base-content/5"
                        >
                            <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
                            <div className="collapse-title text-lg font-bold">
                                {faq.q}
                            </div>
                            <div className="collapse-content text-base-content/70">
                                <p>{faq.a}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;