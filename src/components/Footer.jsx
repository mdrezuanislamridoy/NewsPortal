const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p className="text-sm">
                            We are a leading company in providing the best quality products and services.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Team</a></li>
                            <li><a href="#" className="hover:underline">Projects</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p className="text-sm">
                            Email: info@company.com<br />
                            Phone: (123) 456-7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <ul className="text-sm">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
