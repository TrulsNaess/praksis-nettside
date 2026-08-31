import Link from "next/link";

const sections = [
    {
        title: "Studentene",
        href: "/studentene",
        description: "Møt Mads og Truls og se hva vi jobber med i prosjektet.",
    },
    {
        title: "Prosjektet",
        href: "/prosjekt",
        description: "Les om inventory-appen, funksjonene og hvordan vi skal jobbe.",
    },
    {
        title: "Bedriften",
        href: "/bedrift",
        description: "Les om Thon Hotel Kristiansand og oppgavene våre i praksis.",
    },
];

const processSteps = [
    "Kartlegge behov",
    "Definere krav",
    "Utvikle prototype",
    "Teste med brukere",
    "Evaluere og forbedre",
];

const status = [
    { label: "Oppstart", text: "Gjennomført", state: "done" },
    { label: "Behovskartlegging", text: "Pågår", state: "active" },
    { label: "Utvikling", text: "Neste fase", state: "upcoming" },
    { label: "Brukertesting", text: "Neste fase", state: "upcoming" },
    { label: "Evaluering", text: "Neste fase", state: "upcoming" },
] as const;

export default function HomePage() {
    return (
        <section className="space-y-16">
            <div className="text-center py-12">
                <p className="text-sm font-bold text-red-700 mb-3">IS302 · Praksis 2026</p>
                <h1 className="text-5xl font-black tracking-tight text-gray-950">
                    Praksis 2026
                </h1>
                <h2 className="mt-3 text-2xl font-bold text-red-700">
                    Thon Hotel Kristiansand
                </h2>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
                    Vi er to studenter fra Universitetet i Agder som lager en inventory-app
                    for varebeholdning og lager ved Thon Hotel Kristiansand.
                </p>
            </div>

            <div className="surface-card p-8 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                    Problemstilling
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 max-w-4xl">
                    Hvordan kan vi utvikle en brukervennlig digital løsning som støtter
                    lagerstyring og registrering av varebeholdning ved Thon Hotel Kristiansand?
                </h2>

                <div className="grid md:grid-cols-5 gap-4 mt-8">
                    {processSteps.map((step, index) => (
                        <div key={step} className="soft-card p-5">
                            <p className="text-sm font-bold text-red-700">0{index + 1}</p>
                            <p className="mt-3 font-semibold text-gray-950 leading-6">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {sections.map((section) => (
                    <Link key={section.href} href={section.href} className="surface-card p-7 group">
                        <h3 className="text-2xl font-bold text-gray-950 group-hover:text-red-700 transition">
                            {section.title}
                        </h3>
                        <p className="mt-3 text-gray-600 leading-6">
                            {section.description}
                        </p>
                        <p className="mt-5 text-red-700 font-semibold">Les mer →</p>
                    </Link>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="surface-card p-8 sm:p-10">
                    <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                        Hva vi gjør
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950">
                        Utvikling basert på behov – ikke bare teknologi
                    </h2>
                    <p className="mt-6 text-gray-600 leading-8">
                        I praksisperioden undersøker vi hvordan lager- og varebeholdning
                        håndteres ved hotellet i dag. Med utgangspunkt i behovene vi avdekker
                        utvikler vi en prototype som skal gjøre registrering av varer enklere
                        og gi bedre oversikt over beholdningen.
                    </p>
                    <p className="mt-4 text-gray-600 leading-8">
                        Løsningen utvikles iterativt, slik at ideer kan testes, vurderes
                        og forbedres underveis sammen med praksisbedriften.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="soft-card p-5">
                            <h3 className="font-bold text-red-700">Mål</h3>
                            <p className="mt-2 text-gray-600 leading-6">
                                Utvikle og teste en fungerende prototype basert på hotellets behov.
                            </p>
                        </div>
                        <div className="soft-card p-5">
                            <h3 className="font-bold text-red-700">Fokus</h3>
                            <p className="mt-2 text-gray-600 leading-6">
                                Brukervennlighet, lageroversikt og registrering av uttak og påfyll.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="surface-card p-8 sm:p-10">
                    <p className="text-sm font-bold uppercase tracking-wider text-red-700">
                        Prosjektstatus
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950">
                        Arbeidet steg for steg
                    </h2>
                    <p className="mt-4 text-gray-600 leading-7">
                        Statusfeltet kan oppdateres underveis og gjør nettsiden til en
                        enkel dokumentasjon av fremdriften.
                    </p>

                    <div className="space-y-3 mt-8">
                        {status.map((item) => (
                            <div
                                key={item.label}
                                className="soft-card px-4 py-4 flex items-center gap-3"
                            >
                                <span
                                    className={[
                                        "h-2.5 w-2.5 rounded-full",
                                        item.state === "done"
                                            ? "bg-green-600"
                                            : item.state === "active"
                                              ? "bg-red-700"
                                              : "bg-gray-300",
                                    ].join(" ")}
                                    aria-hidden="true"
                                />
                                <span className="font-semibold text-gray-950">
                                    {item.label}
                                </span>
                                <span className="ml-auto text-sm text-gray-500">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
