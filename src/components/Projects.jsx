import { Component } from "react";

class Projects extends Component {
    render() {
        const projects = [
            { id: 1, title: "Project A", description: "Description for Project A", image: "https://via.placeholder.com/300" },
            { id: 2, title: "Project B", description: "Description for Project B", image: "https://via.placeholder.com/300" },
            { id: 3, title: "Project C", description: "Description for Project C", image: "https://via.placeholder.com/300" },
            { id: 4, title: "Project D", description: "Description for Project D", image: "https://via.placeholder.com/300" },
            { id: 5, title: "Project E", description: "Description for Project E", image: "https://via.placeholder.com/300" },
            { id: 6, title: "Project F", description: "Description for Project F", image: "https://via.placeholder.com/300" },
        ];

        return (
            <div className="bg-gray-200 min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
