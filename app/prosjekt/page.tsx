export default function ProsjektPage() {
    const features = [
        {
            title: "Live oppdatering",
            desc: "Sanntidsoppdatering av varebeholdning ved salg og påfyll",
        },
        {
            title: "Oversikt",
            desc: "Inventar fordelt på rom og kategorier for enkel administrasjon",
        },
        {
            title: "Brukervennlig",
            desc: "Intuitivt brukergrensesnitt designet for ansatte på hotellet",
        },
        {
            title: "Kassasystem",
            desc: "Demo av kassesystem for praktisk test i daglig drift",
        },
        {
            title: "Skalerbar",
            desc: "Mulig utvidelse til rom-basert inventory-styring",
        },
        {
            title: "Pitch-klar",
            desc: "Forberedt for presentasjon til Thon sentralt",
        },
    ];

    return (
        <section className="space-y-16">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">Prosjektet</h1>
                <h2 className="text-2xl font-semibold text-red-700">
                    Inventory App for Thon Hotel Kristiansand
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    En moderne løsning for lagerstyring tilpasset hotellets behov
                </p>
            </div>

            {/* Purpose Section */}
            <div className="bg-white border-l-4 border-red-700 p-10 rounded-xl shadow-lg space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Formål</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Vi utvikler en profesjonell inventory-app som gir hotellets ansatte sanntidsoppdateringer 
                    av varebeholdning ved salg og påfyll. Løsningen skal redusere manuelt arbeid, minimere feil 
                    og effektivisere driften på hotellet.
                </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Hovedfunksjoner</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-700 hover:shadow-lg transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-700 transition">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Target & Context */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Målgruppe</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Ansatte ved Thon Hotel Kristiansand som forvalter inventar, varebeholdning og 
                        salg. Løsningen skal være enkel å bruke og effektiv i daglig drift.
                    </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Pitch til Thon Sentralt</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Dersom prosjektet blir vellykket, har Thon ønsket at vi pitcher løsningen til 
                        hovedavdelingen for vurdering av implementering på andre hoteller i kjeden.
                    </p>
                </div>
            </div>

            {/* Working Context */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-10 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Arbeidsramme</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-bold text-red-700 text-lg mb-1">Arbeidssted</h4>
                            <p className="text-gray-700">Konferanserom på Thon Hotel Kristiansand</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-700 text-lg mb-1">Kontaktperson</h4>
                            <p className="text-gray-700">Dedikert kontaktperson fra hotellet som hjelper med behovskartlegging og testing</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-bold text-red-700 text-lg mb-1">Tidsramme</h4>
                            <p className="text-gray-700">Praksisperioden våren 2026</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-700 text-lg mb-1">Leveranser</h4>
                            <p className="text-gray-700">Prototype, dokumentasjon og pitch-materiell</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
