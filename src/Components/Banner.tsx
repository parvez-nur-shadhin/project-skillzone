import Link from 'next/link';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const Banner = () => {
    return (
        <div>
        <section className="relative hero min-h-[70vh] bg-base-200 overflow-hidden" id="hero">
            <div className="hero-content text-center z-10 px-4">
                <div className="max-w-2xl mt-8">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Master Your Future with <span className="text-primary">Skillzone</span>
                    </h1>
                    <p className="py-6 text-lg md:text-xl opacity-90">
                        Unlock hundreds of expert-led courses. Whether you are looking to code, design, or manage, we have the tools to elevate your career.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link href="/courses" className="btn btn-primary btn-lg group">
                            Explore Courses
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link href="/about-us" className="btn btn-outline btn-lg">
                            How it Works
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#features" aria-label="Scroll to next section">
                    <FiChevronDown className="h-8 w-8 text-base-content/50 hover:text-primary transition-colors cursor-pointer" />
                </a>
            </div>
        </section>
        </div>
    );
};

export default Banner;