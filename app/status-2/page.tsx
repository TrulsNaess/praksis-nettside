export default function Status2Page() {
    const videoUrl = "https://www.youtube.com/embed/PUT_YOUTUBE_LINK_HERE";

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

            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Bedriften</h2>
                <p className="text-gray-700 leading-relaxed">
                    Thon Hotel Kristiansand er en større hotellbedrift med resepsjon, booking, renhold,
                    frokostservering og konferansevirksomhet. Gjennom samtaler med ansatte og kontaktperson har vi
                    fortsatt å videreutvikle en løsning som kan gi bedre oversikt og en enklere arbeidshverdag.
                </p>
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
