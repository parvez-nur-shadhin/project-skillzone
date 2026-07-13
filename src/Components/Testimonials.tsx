import { testimonialsType } from "@/type/types";
import Image from "next/image";

const Testimonials = () => {
    const testimonials:testimonialsType[] = [
    {
        name: "Sarah Jenkins",
        role: "Frontend Developer",
        company: "TechFlow",
        image: "https://i.pravatar.cc/150?img=47",
        quote: "The Next.js and TypeScript track completely transformed how I build applications. I landed a mid-level role within two months of completing the curriculum.",
        rating: 5
    },
    {
        name: "Marcus Chen",
        role: "UX Designer",
        company: "Creative Studio",
        image: "https://i.pravatar.cc/150?img=11",
        quote: "Skillzone doesn't just teach theory; they teach practical, real-world application. The portfolio I built here got me multiple freelance clients instantly.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Data Analyst",
        company: "FinTech Solutions",
        image: "https://i.pravatar.cc/150?img=5",
        quote: "The 1-on-1 mentorship was a game changer. My mentor reviewed my Python scripts every week, pointing out optimizations I never would have learned otherwise.",
        rating: 4
    }
];
    return (
        <section className="py-24 bg-base-100 relative" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="badge badge-primary badge-outline font-semibold tracking-wider uppercase mb-3 px-4 py-3 text-xs">
                        Student Success
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Don't Just Take Our <span className="text-primary">Word</span> For It
                    </h2>
                    <p className="text-base-content/70 text-lg">
                        Join thousands of professionals who have successfully pivoted or accelerated their careers with Skillzone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="card bg-base-200/50 border border-base-content/5 hover:border-secondary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="card-body p-8 flex flex-col h-full">
                                
                                <div className="rating rating-sm mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <input 
                                            key={i}
                                            type="radio" 
                                            name={`rating-${index}`} 
                                            className={`mask mask-star-2 ${i < testimonial.rating ? 'bg-warning' : 'bg-base-300'}`} 
                                            disabled
                                        />
                                    ))}
                                </div>

                                <p className="text-base-content/80 text-lg italic leading-relaxed mb-8 flex-grow">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <Image width={48} height={48} src={testimonial.image} alt={`${testimonial.name} profile`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base group-hover:text-secondary transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-base-content/60">
                                            {testimonial.role} @ {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;