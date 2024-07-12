import { Component } from "react";

class Team extends Component {
    render() {
        const teamMembers = [
            { id: 1, name: "John Doe", role: "CEO", image: "https://via.placeholder.com/300" },
            { id: 2, name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/300" },
            { id: 3, name: "Bob Johnson", role: "Designer", image: "https://via.placeholder.com/300" },
            { id: 4, name: "Alice Brown", role: "Developer", image: "https://via.placeholder.com/300" },
            { id: 5, name: "Michael Green", role: "Marketing", image: "https://via.placeholder.com/300" },
            { id: 6, name: "Linda White", role: "HR", image: "https://via.placeholder.com/300" },
        ];

        return (
            <div className="bg-gray-200 min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={member.image} alt={member.name} className="w-full h-48 object-cover object-center rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
