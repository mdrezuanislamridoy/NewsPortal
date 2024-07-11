
const teamMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "CEO",
        image: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        id: 2,
        name: "Bob Smith",
        role: "CTO",
        image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        id: 3,
        name: "Ella Brown",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
        id: 4,
        name: "David Wilson",
        role: "Developer",
        image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        id: 5,
        name: "Grace Thompson",
        role: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/15.jpg"
    },
    {
        id: 6,
        name: "Henry Miller",
        role: "HR Manager",
        image: "https://randomuser.me/api/portraits/men/16.jpg"
    }
];

const Team = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Meet the amazing people behind our company.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                className="w-32 h-32 rounded-full mx-auto"
                                src={member.image}
                                alt={`${member.name} profile`}
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="mt-2 text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
