import { servicesType } from '@/type/types';
import { 
    FiCode, 
    FiTrendingUp, 
    FiLayers, 
    FiBriefcase, 
    FiAward, 
    FiSmartphone,
    FiArrowRight
} from 'react-icons/fi';


const services: servicesType[] = [
    {
        icon: FiCode,
        title: "Web & Software Development",
        description: "Master languages like TypeScript, Python, and Next.js. Build robust full-stack applications from scratch.",
        color: "text-primary",
        badge: "Popular"
    },
    {
        icon: FiLayers,
        title: "UI/UX & Product Design",
        description: "Learn user-centric design principles, wireframing, and interactive prototyping using Figma and modern design tools.",
        color: "text-secondary",
        badge: "Updated"
    },
    {
        icon: FiTrendingUp,
        title: "Digital Marketing & Growth",
        description: "Scale businesses using advanced SEO tactics, data analytics, conversion optimization, and strategic content pipelines.",
        color: "text-accent",
        badge: null
    },
    {
        icon: FiCpu,
        title: "AI & Data Science",
        description: "Dive deep into machine learning algorithms, big data frameworks, data visualization, and predictive modeling.",
        color: "text-info",
        badge: "New"
    },
    {
        icon: FiAward,
        title: "Certified Career Paths",
        description: "Follow structural learning tracks curated by industry executives designed to fast-track your path to employment.",
        color: "text-success",
        badge: null
    },
    {
        icon: FiBriefcase,
        title: "1-on-1 Mentorship",
        description: "Get weekly code reviews, resume deep-dives, and mock technical interviews with seasoned tech professionals.",
        color: "text-warning",
        badge: "Exclusive"
    }
];

import { FiCpu } from 'react-icons/fi';

const Services = () => {
    return (
        <section className="py-24 bg-base-200/50 relative overflow-hidden" id="services">
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 xl:px-0 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="badge badge-primary badge-outline font-semibold tracking-wider uppercase mb-3 px-4 py-3 text-xs">
                        What We Offer
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Explore Our Specialized <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tracks</span>
                    </h2>
                    <p className="text-base-content/70 text-lg">
                        We deliver hyper-focused programs engineered to transform absolute beginners into industry-ready professionals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index} 
                                className="card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="card-body p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl bg-base-200 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300 ${service.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        {service.badge && (
                                            <span className="badge badge-sm font-medium bg-base-200 text-base-content/80 border-none px-2.5 py-3">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="card-title text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-base-content/75 leading-relaxed text-sm mb-6">
                                        {service.description}
                                    </p>
                                    <div className="card-actions justify-end mt-auto">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                                            Learn More 
                                            <FiArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;