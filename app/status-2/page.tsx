export default function Status2Page() {
    const videoUrl = "https://www.youtube.com/embed/QvNqnb9saW0";

    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">Status 2</h1>
                <p className="text-lg text-gray-600">Hva vi har gjort siden status 1</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Presentasjon</h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={videoUrl}
                        title="Status 2 Presentasjon"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                    Tilbakemelding fra Thon
                </h2>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        Behovet til Thon Hotel Kristiansand er en portal tilgjengelig
                        for ansatte i resepsjonen og ledere, med oversikt over varer.
                        Applikasjonen bør gi oversikt over eksisterende varer på lager,
                        inkludert antall, samt bestilte varer med leveringsdato.
                        Det er også ønskelig med en form for varsling, enten via melding
                        eller e-post, når lagerbeholdningen er lav.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        På lengre sikt er det ønskelig at applikasjonen kan integreres
                        med hotellets eksisterende systemer, slik at solgte varer
                        automatisk trekkes fra lagerbeholdningen.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        En slik applikasjon vil forenkle arbeidshverdagen for de ansatte
                        når det gjelder varetelling og varestatus. Den vil også bidra
                        til å forhindre at varer blir utsolgt. Designet slik det
                        fremstår per dags dato, ser lett og oversiktlig ut.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Hva vi har gjort</h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Få applikasjonen kjørbar</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Etter status 1 jobbet vi med å få på plass en fungerende grunnstruktur for prosjektet. Vi satte
                        opp frontend og backend slik at de kunne fungere sammen, og vi laget en løsning der de også kan
                        kjøres separat. Dette ga oss en mer stabil utviklingsprosess og et bedre utgangspunkt for resten
                        av arbeidet.
                    </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Implementere design og database</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Vi har brukt mye tid på å oversette designet fra planleggingsfasen til en faktisk frontend.
                        Samtidig har vi integrert Supabase som database, og fått den koblet opp slik at data kan hentes
                        og brukes i løsningen. Dette var et viktig steg for å få prosjektet til å bli mer komplett.
                    </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Forenkle oppstart og videreutvikle</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Vi har også jobbet med å gjøre oppstarten av prosjektet enklere. Nå hentes og kjøres databasen
                        automatisk, slik at det ikke lenger er nødvendig å bruke to terminaler for å starte frontend og
                        backend separat. Det gjør løsningen mer ryddig for oss som utviklere og gir en bedre arbeidsflyt.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Status nå</h2>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                        Vi har kommet betydelig lenger enn ved status 1. Løsningen er nå mer samlet, mer stabil og
                        lettere å starte opp, og vi har fått på plass både design, database og koblingen mellom de ulike
                        delene av systemet.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Neste steg er å videreutvikle funksjonalitet, gjøre mer testing og forbedre løsningen videre slik
                        at den blir enda mer brukervennlig og robust før slutten av praksisperioden.
                    </p>
                </div>
            </div>

            
        </section>
    );
}
