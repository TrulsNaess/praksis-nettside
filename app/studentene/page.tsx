export default function StudentenePage() {
    const students = [
        {
            name: "Mads Furås Malmin",
            age: 22,
            hometown: "Nærbø",
            interests: "Ideer, frontend, UX",
            bio: "Brenner for brukeropplevelse og kreativt frontend-arbeid.",
            role: "Frontend & UX",
        },
        {
            name: "Truls Næss",
            age: 25,
            hometown: "Enebakk",
            interests: "Prosjektledelse, database, fullstack",
            bio: "Erfaren prosjektleder med sterk backend og fullstack kompetanse.",
            role: "Backend & Project Lead",
        },
    ];

    return (
        <section className="space-y-16">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">Studentene</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Vi er to studenter fra Universitetet i Agder med erfaring fra flere felles prosjekter
                    og fag. Vi har et sterkt samarbeid og komplementerer hverandre godt faglig.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {students.map((student, idx) => (
                    <div key={idx} className="group">
                        {/* Image Placeholder with hover effect */}
                        <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-300 overflow-hidden mb-8 group-hover:shadow-xl transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-t from-red-700/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                            <div className="text-center z-10">
                                <span className="text-gray-500 text-lg font-medium">Bildeplassplass</span>
                            </div>
                        </div>

                        {/* Student Info */}
                        <div className="space-y-5">
                            <div>
                                <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                                    {student.role}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition">
                                    {student.name}
                                </h2>
                            </div>

                            <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
                                <p className="flex items-center gap-3 text-gray-700">
                                    <span className="font-semibold text-gray-900 min-w-20">Alder:</span> {student.age}
                                </p>
                                <p className="flex items-center gap-3 text-gray-700">
                                    <span className="font-semibold text-gray-900 min-w-20">Hjemsted:</span> {student.hometown}
                                </p>
                                <p className="flex items-start gap-3 text-gray-700">
                                    <span className="font-semibold text-gray-900 min-w-20 pt-1">Interesser:</span> 
                                    <span>{student.interests}</span>
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-red-700 pl-5 py-2 italic text-gray-700 text-lg bg-red-50 px-5 rounded-r-lg">
                                "{student.bio}"
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>

            {/* Collaboration Section */}
            <div className="bg-white border-l-4 border-red-700 p-10 rounded-xl shadow-lg space-y-6 mt-16">
                <h2 className="text-3xl font-bold text-gray-900">Samarbeid</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Vi har jobbet sammen i flere fag og prosjekter gjennom studiene våre. Erfaringen vår viser at vi
                    har et sterkt og produktivt samarbeid. Vi dekker både frontend-, backend- og prosjektledelsesaspekter,
                    som gjør oss til et godt balansert team for dette praksisprosjektet.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                    <div className="bg-gray-50 p-5 rounded-lg text-center border-t-2 border-red-700">
                        <p className="font-semibold text-gray-900 mb-1">Bevist samarbeid</p>
                        <p className="text-sm text-gray-600">Flere prosjekter siden 2. semester</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg text-center border-t-2 border-red-700">
                        <p className="font-semibold text-gray-900 mb-1">Komplementært</p>
                        <p className="text-sm text-gray-600">Frontend og backend kompetanse</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg text-center border-t-2 border-red-700">
                        <p className="font-semibold text-gray-900 mb-1">Sterkt team</p>
                        <p className="text-sm text-gray-600">Delt vision og verdier</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
