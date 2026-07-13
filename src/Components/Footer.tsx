'use client'
import Link from 'next/link';
import { 
    FiGithub, 
    FiTwitter, 
    FiLinkedin, 
    FiMail, 
    FiPhone, 
    FiMapPin, 
    FiSend
} from 'react-icons/fi';

const Footer = () => {
    const currentYear:number = new Date().getFullYear();

    return (
        <footer className="bg-base-300 text-base-content border-t border-base-content/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
                    <div className="max-w-md">
                        <Link href="/" className="text-4xl font-extrabold tracking-tight text-primary ">
                            Skillzone
                        </Link>
                        <p className="mt-4 text-base-content/70 leading-relaxed">
                            Join over 50,000 students leveling up their careers. Get the latest course updates and industry news straight to your inbox.
                        </p>
                    </div>
                    <form className="w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="join w-full sm:w-96 shadow-sm">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="input input-bordered join-item w-full focus:outline-primary" 
                                required
                            />
                            <button type="submit" className="btn btn-primary join-item group">
                                Subscribe
                                <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    <nav className="flex flex-col gap-4">
                        <h6 className="text-sm font-bold uppercase tracking-widest text-base-content/90 mb-2">Explore</h6>
                        <Link href="/courses" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">All Courses</Link>
                        <Link href="/instructors" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">Our Instructors</Link>
                        <Link href="/about" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">About Us</Link>
                        <Link href="/pricing" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">Pricing Plans</Link>
                    </nav>
                    <nav className="flex flex-col gap-4">
                        <h6 className="text-sm font-bold uppercase tracking-widest text-base-content/90 mb-2">Support</h6>
                        <Link href="#" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">Help Center</Link>
                        <Link href="#" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit">FAQ</Link>
                    </nav>
                    <nav className="flex flex-col gap-4 lg:col-span-2">
                        <h6 className="text-sm font-bold uppercase tracking-widest text-base-content/90 mb-2">Contact Us</h6>
                        <div className="flex flex-col gap-4 text-base-content/80">
                            <a href="mailto:support@skillzone.com" className="flex items-center gap-3 hover:text-primary transition-colors duration-300 w-fit">
                                <span className="bg-base-100 p-2 rounded-full shadow-sm"><FiMail /></span>
                                support@skillzone.com
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-primary transition-colors duration-300 w-fit">
                                <span className="bg-base-100 p-2 rounded-full shadow-sm"><FiPhone /></span>
                                01XXXXXXXXX
                            </a>
                            <div className="flex items-center gap-3">
                                <span className="bg-base-100 p-2 rounded-full shadow-sm"><FiMapPin /></span>
                                123 Tech Avenue, Suite 400, Dhaka
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent mb-8"></div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-base-content/60 font-medium">
                        © {currentYear} Skillzone Inc. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-3">
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300"
                            aria-label="Twitter"
                        >
                            <FiTwitter className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-primary-content transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;