import Image from "next/image";

const students = [
    {
        name: "Mads Furås Malmin",
        age: 22,
        hometown: "Nærbø",
        role: "Frontend og brukeropplevelse",
        interests: "Design, frontend, teknologi og idéutvikling",
        contribution:
            "Arbeider hovedsakelig med frontend, brukeropplevelse, struktur og utforming av løsningen. Bidrar også med idéutvikling og dokumentasjon.",
        focus:
            "Opptatt av å utvikle en løsning som er enkel, oversiktlig og effektiv å bruke i arbeidshverdagen.",
        image: "/mads.jpg",
        imageClass: "object-cover object-[center_40%]",
    },
    {
        name: "Truls Næss",
        age: 25,
        hometown: "Enebakk",
        role: "Backend og prosjektkoordinering",
        interests: "Backend, database, systemutvikling og prosjektarbeid",
        contribution:
            "Arbeider hovedsakelig med backend, database og teknisk struktur, og bidrar med koordinering av utviklingsarbeidet.",
        focus:
            "Fokuserer på en robust teknisk løsning og god sammenheng mellom systemets ulike deler.",
        image: "/truls.png",
        imageClass: "object-cover object-[center_40%]",
    },
];

export default function StudentenePage() {
    return (
        <section className="space-y-16">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-black text-gray-950">Om oss</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
                    Vi er to studenter fra Universitetet i Agder som jobber sammen i
                    praksisprosjektet ved Thon Hotel Kristiansand.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {students.map((student) => (
                    <div key={student.name} className="surface-card overflow-hidden flex flex-col h-full">
                        <div className="h-72 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 relative overflow-hidden">
                            {student.image ? (
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className={student.imageClass || "object-cover object-center"}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            ) : (
                                <span className="text-gray-500 font-semibold text-lg">
                                    Bilde kommer
                                </span>
                            )}
                        </div>

                        <div className="p-7 flex flex-col flex-1">
                            <div>
                                <div className="inline-block bg-red-50 text-red-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                    {student.role}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-950">
                                    {student.name}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-5">
                                <div className="soft-card p-4">
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                                        Alder
                                    </p>
                                    <p className="mt-2 font-bold text-gray-950">
                                        {student.age} år
                                    </p>
                                </div>
                                <div className="soft-card p-4">
                                    <p className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                                        Hjemsted
                                    </p>
                                    <p className="mt-2 font-bold text-gray-950">
                                        {student.hometown}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h3 className="font-bold text-gray-950">
                                    Interesser og kompetanse
                                </h3>
                                <p className="mt-2 text-gray-600 leading-7">
                                    {student.interests}
                                </p>
                            </div>

                            <div className="mt-5">
                                <h3 className="font-bold text-gray-950">
                                    Bidrag i prosjektet
                                </h3>
                                <p className="mt-2 text-gray-600 leading-7">
                                    {student.contribution}
                                </p>
                            </div>

                            <blockquote className="mt-auto pt-4">
                                <div className="border-l-4 border-red-700 pl-5 py-4 bg-red-50 rounded-r-lg text-gray-700 leading-7">
                                    {student.focus}
                                </div>
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border-l-4 border-red-700 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-950">Samarbeid</h2>
                <p className="mt-4 text-gray-600 leading-7">
                    Vi har jobbet sammen i flere fag og prosjekter gjennom studiene våre.
                    Erfaringen vår viser at vi har et sterkt og produktivt samarbeid. Vi
                    dekker både frontend-, backend- og prosjektledelsesaspekter, som gjør
                    oss til et godt balansert team for dette praksisprosjektet.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
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
                        <p className="text-sm text-gray-600">Delt visjon og verdier</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
