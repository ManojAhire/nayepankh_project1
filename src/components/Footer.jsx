import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[rgb(38,32,30)] text-white">
            <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-4">NayePankh Foundation</h3>
                    <p className="text-gray-300 leading-7">
                        Creating opportunity, compassion, and lasting change for communities across India.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-[8px] text-orange-400 mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/impact" className="hover:text-white">Impact</Link></li>
                        <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-[8px] text-orange-400 mb-4">Get Involved</h4>
                    <p className="text-gray-300 leading-7 mb-6">
                        Join us in building a brighter future through service, compassion, and action.
                    </p>
                    <div className="flex gap-3">
                        <Link to="/volunteer" className="bg-white text-black px-5 py-3 text-sm hover:bg-orange-500 hover:text-white transition-all duration-300">Volunteer</Link>
                        <Link to="/contact" className="border border-white px-5 py-3 text-sm hover:border-orange-500 hover:text-orange-400 transition-all duration-300">Contact</Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 px-8 py-4 text-center text-sm text-gray-400">
                © 2026 NayePankh Foundation. All rights reserved.
            </div>
        </footer>
    );
}