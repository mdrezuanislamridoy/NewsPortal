import { Component } from "react";

class ContactPage extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to backend or displaying a success message
        console.log("Form submitted:", this.state);
        // Reset form fields
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };

    render() {
        return (
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8 sm:px-10">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;
