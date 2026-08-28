import Link from "next/link";

type ColorType = "blue" | "purple" | "green";

export default function HomePage() {
    const sections: Array<{
        title: string;
        href: string;
        description: string;
        color: ColorType;
    }> = [
        {
            title: "Studentene",
            href: "/studentene",
            description: "Møt Mads og Truls – to studenter fra UiA med solid erfaring fra samarbeid.",
            color: "blue",
        },
        {
            title: "Prosjektet",
            href: "/prosjekt",
            description: "Se detaljer om inventory-appen, funksjonalitet og målsetninger.",
            color: "purple",
        },
        {
            title: "Bedriften",
            href: "/bedrift",
            description: "Lær om Thon Hotel Kristiansand og oppgavene vi skal løse i praksis.",
            color: "green",
        },
    ];

    const colorClasses: Record<ColorType, string> = {
        blue: "hover:border-blue-600 hover:shadow-blue-200",
        purple: "hover:border-purple-600 hover:shadow-purple-200",
        green: "hover:border-green-600 hover:shadow-green-200",
    };

    return (
        <section className="space-y-20">
            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl blur-3xl opacity-40"></div>
                <div className="relative text-center space-y-6 py-12">
                    <h1 className="text-6xl font-black text-gray-900 tracking-tighter">
                        Praksis 2026
                    </h1>
                    <h2 className="text-3xl font-bold text-red-700">
                        Thon Hotel Kristiansand
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
                        To studenter fra Universitetet i Agder utvikler en moderne inventory-app 
                        som skal transformere lagerstyrningen ved Thon Hotel Kristiansand.
                    </p>
                </div>
            </div>

            {/* Section Cards */}
            <div className="grid md:grid-cols-3 gap-8">
                {sections.map((section, idx) => (
                    <Link key={idx} href={section.href} className="no-underline group">
                        <div className={`bg-white border-2 border-gray-200 rounded-xl p-8 h-full hover:shadow-2xl transition-all duration-300 cursor-pointer space-y-4 ${colorClasses[section.color]}`}>
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-bold text-red-700 group-hover:translate-x-1 transition">
                                    {section.title}
                                </h3>
                                <span className="text-2xl opacity-0 group-hover:opacity-100 transition">→</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed min-h-16">
                                {section.description}
                            </p>
                            <div className="pt-4 text-red-700 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                                Les mer <span className="inline-block group-hover:translate-x-1 transition">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Info Section */}
            <div className="bg-white border-l-4 border-red-700 p-10 rounded-xl shadow-lg space-y-5">
                <h3 className="text-3xl font-bold text-gray-900">Hva vi gjør</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    I praksisperioden utvikler vi en profesjonell løsning for lagerstyring som skal 
                    gi Thon Hotel Kristiansand bedre kontroll over varebeholdning, redusere feil i 
                    operasjoner og effektivisere daglig drift. Vi fokuserer både på den tekniske 
                    implementasjonen og på å skape en løsning som faktisk fungerer i praksis.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                        <h4 className="font-bold text-red-700 text-lg">Mål</h4>
                        <p className="text-gray-600">Prototype som kan pitches til Thon sentralt</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-red-700 text-lg">Fokus</h4>
                        <p className="text-gray-600">Inventory-styring og demo-kassesystem</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
