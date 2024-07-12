import { Component } from "react";

class UserPage extends Component {
    render() {
        return (
            <div className="bg-gray-200 min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">User Dashboard</h2>
                    <p className="text-gray-700">Welcome to the user dashboard. You can view news here but cannot post any news.</p>
                </div>
            </div>
        );
    }
}

export default UserPage;
