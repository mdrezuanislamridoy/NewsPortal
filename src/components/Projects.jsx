
const projects = [
    {
        id: 1,
        title: "Project Alpha",
        description: "A revolutionary project that changes the way we see the world.",
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2MzkwODMzOTQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 2,
        title: "Project Beta",
        description: "An innovative project that aims to solve everyday problems.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2MzkwODMzOTQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 3,
        title: "Project Gamma",
        description: "A creative project that brings new perspectives to light.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG5hdHVyZXxlbnwwfHx8fDE2MzkwODMzOTQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 4,
        title: "Project Delta",
        description: "An exciting project focused on technological advancements.",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG5hdHVyZXxlbnwwfHx8fDE2MzkwODMzOTQ&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
        id: 5,
        title: "Project Epsilon",
        description: "A project dedicated to environmental sustainability.",
        image: "https://images.unsplash.com/photo-1464375117522-1311d0a27de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG5hdHVyZXxlbnwwfHx8fDE2MzkwODMzOTQ&ixlib=rb-1.2.1&q=80&w=1080"
    }
];

const Projects = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Our Projects</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Explore the innovative projects our team has been working on.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                className="w-full h-48 object-cover rounded-t-lg"
                                src={project.image}
                                alt={`${project.title} image`}
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
