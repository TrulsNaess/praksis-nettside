const tasks = [
    "Behovskartlegging og gjennomgang av hvordan lageret brukes i dag",
    "Planlegging og design av inventory-appen",
    "Utvikling av lagerstyring og vareoversikt",
    "Testing av uttak og påfyll av varer",
    "Mulighet for å bygge videre med flere lager eller rom senere",
    "Testing, dokumentasjon og presentasjon av prosjektet",
];

export default function BedriftPage() {
    return (
        <section className="space-y-16">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-black text-gray-950">Bedriften</h1>
                <h2 className="text-2xl font-bold text-red-700">
                    Thon Hotel Kristiansand
                </h2>
                <p className="text-lg text-gray-600">
                    Oppgaver og rammer for praksisperioden
                </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-700 p-8 sm:p-10 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-950">
                    Om Thon Hotel Kristiansand
                </h2>
                <p className="mt-4 text-gray-700 leading-7">
                    Thon Hotel Kristiansand er praksisbedriften vår i IS302. I prosjektet
                    ser vi på hvordan hotellet jobber med varebeholdning og lager, og hvordan
                    en inventory-app kan gjøre det enklere å holde oversikt over varer.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Thon Hotels</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Kristiansand</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <p className="text-sm font-semibold text-gray-900">Praksisbedrift</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-950">Oppgaver i praksis</h2>
                <p className="text-gray-600 leading-7">
                    I praksisperioden skal vi lage og teste en prototype av en inventory-app
                    for hotellet. Oppgavene våre er:
                </p>

                <div className="grid gap-4">
                    {tasks.map((task, index) => (
                        <div
                            key={task}
                            className="flex items-start gap-4 bg-white border-l-4 border-red-700 p-5 rounded-lg hover:shadow-md transition"
                        >
                            <span className="text-red-700 font-bold text-xl">
                                {index + 1}
                            </span>
                            <span className="text-gray-700 leading-6">{task}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-l-4 border-green-600 p-7 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-950">Rammer og frihet</h3>
                    <p className="mt-3 text-gray-600 leading-7">
                        Vi har ganske frie rammer for hvordan appen skal se ut og fungere.
                        Samtidig skal den lages ut fra behovene til hotellet og det vi finner
                        ut gjennom praksisperioden.
                    </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-7 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-950">Potensial for utvidelse</h3>
                    <p className="mt-3 text-gray-600 leading-7">
                        Hvis løsningen fungerer bra, kan den vises videre til Thon og eventuelt
                        utvikles mer. Det kan også være mulig å bruke samme idé på flere hoteller.
                    </p>
                </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-gray-950">Arbeidsramme</h2>

                <div className="grid md:grid-cols-2 gap-8 mt-7">
                    <div className="space-y-5">
                        <div className="flex gap-4">
                            <div className="font-bold text-red-700 min-w-28">Arbeidssted</div>
                            <p className="text-gray-600">Thon Hotel Kristiansand</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-bold text-red-700 min-w-28">Varighet</div>
                            <p className="text-gray-600">Praksisperioden 2026</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="flex gap-4">
                            <div className="font-bold text-red-700 min-w-28">Kontaktperson</div>
                            <p className="text-gray-600">
                                Resepsjonssjef fra hotellet som hjelper oss med behov og testing
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-bold text-red-700 min-w-28">Mål</div>
                            <p className="text-gray-600">
                                Lage en brukbar prototype og vise frem prosjektet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
