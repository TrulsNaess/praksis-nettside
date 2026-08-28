export default function BedriftPage() {
    const tasks = [
        "Behovskartlegging og analyse av eksisterende arbeidsflyt",
        "Design og arkitektur for et skalerbart inventory-system",
        "Implementasjon av lagerstyring med sanntidsoppdateringer",
        "Demo av kassesystem (håndtering av innskudd og uttak)",
        "Mulighet for å utvide funksjonalitet til rom-basert inventory",
        "Testing, dokumentasjon og forberedelse av pitch til Thon sentralt",
    ];

    return (
        <section className="space-y-16">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">Bedriften</h1>
                <h2 className="text-2xl font-semibold text-red-700">
                    Thon Hotel Kristiansand
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Oppgaver og rammer for praksisperioden
                </p>
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-700 p-10 rounded-xl space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Om Thon Hotel Kristiansand</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Thon Hotel Kristiansand er et moderne hotell i Kristiansand som søker å effektivisere 
                    sin lagerstyring og varebeholdning. Hotellet har identifisert behovet for en digital 
                    løsning som kan gi ansatte bedre oversikt og redusere manuelle prosesser i deres daglige operasjoner.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Moderne Hotell</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Kristiansand</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Innovativ</p>
                    </div>
                </div>
            </div>

            {/* Tasks Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Oppgaver i Praksis</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    I praksisperioden skal vi utvikle en profesjonell prototype for et inventory-/stock-system. 
                    Arbeidet er rettet mot å demonstrere en operasjonell løsning som kan videreutvikles for produksjon. 
                    Oppgavene våre inkluderer:
                </p>
                <div className="grid gap-4">
                    {tasks.map((task, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-start gap-4 bg-white border-l-4 border-red-700 p-5 rounded-lg hover:shadow-md transition"
                        >
                            <span className="text-red-700 font-bold text-2xl flex-shrink-0">{idx + 1}</span>
                            <span className="text-gray-700 pt-1">{task}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scope & Freedom */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Rammer og Frihet</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Vi har relativt frie tøyler i hvordan løsningen utformes. Målet er å levere en tydelig, 
                        brukbar prototype og et beslutningsgrunnlag for eventuell implementering. Vi tilpasser 
                        løsningen etter behov underveis i samarbeid med hotellet.
                    </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Potensial for Utvidelse</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Dersom prosjektet blir vellykket, ønsker Thon å evaluere løsningen for implementering 
                        på sine andre hoteller. Dette gir praksisprosjektet betydelig potensial for å påvirke 
                        Thons operasjoner på tvers av flere lokasjoner.
                    </p>
                </div>
            </div>

            {/* Working Context */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-10 space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">Arbeidsramme</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="text-red-700 font-bold text-lg">Arbeidssted</div>
                            </div>
                            <div>
                                <p className="text-gray-600">Konferanserom på Thon Hotel Kristiansand</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="text-red-700 font-bold text-lg">Varighet</div>
                            </div>
                            <div>
                                <p className="text-gray-600">Praksisperioden våren 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="text-red-700 font-bold text-lg">Kontaktperson</div>
                            </div>
                            <div>
                                <p className="text-gray-600">Dedikert kontakt fra Thon for behovskartlegging og tilbakemeldinger</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="text-red-700 font-bold text-lg">Mål</div>
                            </div>
                            <div>
                                <p className="text-gray-600">Levere tydelig, brukbar prototype og pitch-materiell</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
