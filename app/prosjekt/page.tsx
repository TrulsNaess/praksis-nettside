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

const workSteps = [
    "Kartlegge hvordan lager og varebeholdning håndteres i dag",
    "Finne ut hvilke funksjoner hotellet trenger",
    "Planlegge og designe inventory-appen",
    "Utvikle appen og koble den til database",
    "Teste uttak, påfyll og lageroversikt",
    "Teste løsningen med ansatte og gjøre forbedringer",
];

export default function ProsjektPage() {
    return (
        <section className="space-y-16">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-black text-gray-950">Prosjektet</h1>
                <h2 className="text-2xl font-bold text-red-700">
                    Inventory App for Thon Hotel Kristiansand
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    En enkel løsning for varebeholdning og lager.
                </p>
            </div>

            <div className="bg-white border-l-4 border-red-700 p-8 sm:p-10 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-950">Formål</h2>
                <p className="mt-4 text-gray-600 leading-7">
                    Vi skal lage en inventory-app som gjør det enklere for ansatte å holde
                    oversikt over varer og lager. Appen skal kunne brukes til å registrere
                    uttak og påfyll og vise oppdatert varebeholdning.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-950">Hovedfunksjoner</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-700 hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-bold text-gray-950">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 leading-6">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-7 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-950">Målgruppe</h3>
                    <p className="mt-3 text-gray-600 leading-7">
                        Ansatte ved Thon Hotel Kristiansand som jobber med varer,
                        varebeholdning, uttak og påfyll.
                    </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-7 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-950">Videre mulighet</h3>
                    <p className="mt-3 text-gray-600 leading-7">
                        Hvis appen fungerer bra, kan den vises videre til Thon for å se om
                        prosjektet kan utvikles mer eller brukes andre steder.
                    </p>
                </div>
            </div>

            <div className="surface-card p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-gray-950">Hvordan vi jobber</h2>
                <p className="mt-3 text-gray-600 leading-7">
                    Vi jobber steg for steg gjennom praksisperioden og gjør endringer
                    underveis når vi får nye behov eller tilbakemeldinger.
                </p>

                <div className="grid gap-3 mt-7">
                    {workSteps.map((step, index) => (
                        <div key={step} className="flex items-start gap-4 bg-gray-50 border-l-4 border-red-700 p-4 rounded-lg">
                            <span className="text-red-700 font-bold text-lg">
                                {index + 1}
                            </span>
                            <p className="text-gray-700 leading-6">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-gray-950">Arbeidsramme</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-7">
                    <div className="space-y-5">
                        <div>
                            <h3 className="font-bold text-red-700">Arbeidssted</h3>
                            <p className="mt-1 text-gray-600">
                                Thon Hotel Kristiansand
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-red-700">Kontaktperson</h3>
                            <p className="mt-1 text-gray-600">
                                Resepsjonssjef fra hotellet som hjelper oss med behov og testing
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <h3 className="font-bold text-red-700">Tidsramme</h3>
                            <p className="mt-1 text-gray-600">Praksisperioden 2026</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-red-700">Leveranser</h3>
                            <p className="mt-1 text-gray-600">
                                Prototype, testing, dokumentasjon og presentasjon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
