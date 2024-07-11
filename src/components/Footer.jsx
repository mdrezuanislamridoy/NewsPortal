
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Section 1: Logo and About */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            convallis libero in dui sollicitudin, quis blandit nisi posuere.
                            Mauris non risus nec nulla fermentum fringilla.
                        </p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-gray-400">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-gray-400">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Contact Information */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm leading-relaxed">
                            123 Main Street, City, Country
                            <br />
                            Email: info@example.com
                            <br />
                            Phone: +123-456-7890
                        </p>
                    </div>

                    {/* Section 4: Social Media and Newsletter */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                        <form className="mt-4">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <div className="flex">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Legal and Copyright */}
            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-400">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} NewsPortal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
