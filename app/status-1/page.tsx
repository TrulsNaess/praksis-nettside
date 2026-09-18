export default function Status1Page() {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">Status 1</h1>
                <p className="text-lg text-gray-600">Hva vi har gjort så langt</p>
            </div>

            {/* Video Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Presentasjon</h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/2wC1fRXjOME"
                        title="Status 1 Presentasjon"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Bedriften - kort */}
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Bedriften</h2>
                <p className="text-gray-700 leading-relaxed">
                    Thon Hotel Kristiansand er en større hotellbedrift med resepsjon, booking, renhold, 
                    frokostservering og konferansevirksomhet. Gjennom samtaler med ansatte identifiserte vi at 
                    lagerstyring er et område hvor det finnes behov for forbedring.
                </p>
            </div>

            {/* What we've done */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Hva vi har gjort</h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fase 1: Behovskartlegging</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Vi brukte første del av praksisen på å bli kjent med hotellet, møte ansatte og resepsjonssjefen 
                        (vår kontaktperson). Gjennom direkte dialog identifiserte vi at <strong>lagerstyring</strong> 
                        er området med størst potensial for forbedring. De ansatte mangler en enkel måte å få oversikt 
                        over varebeholdning og når det må fylles på.
                    </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fase 2: Teknisk oppstart</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Vi har satt opp en profesjonell backendstruktur i <strong>ASP.NET Core (.NET 9)</strong>. 
                        Backend er konfigurert som Web API siden frontend skal bygges separat i Next.js/React – 
                        dette gjør det enklere å holde backend og frontend løst koblet, som er best practice for moderne applikasjoner.
                    </p>
                    <p className="text-gray-700 text-sm">
                        <strong>Struktur:</strong> Controllers (API-endepunkter), Models (databaseentiteter), DTOs 
                        (data transfer objects), Services (forretningslogikk), Entity Framework Data Context, SignalR 
                        (realtime-oppdateringer), og Extensions (konfigurasjon). Dette gir en skalerbar arkitektur 
                        som er lett å teste og vedlikeholde.
                    </p>
                </div>
            </div>

            {/* Plan forward */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Planen videre</h2>
                <p className="text-gray-700 leading-relaxed">
                    Vi skal bygge en inventory-app med live oppdateringer av varebeholdning. Appen skal gjøre det 
                    enkelt for ansatte å registrere uttak og påfyll, få oversikt over varer fordelt på rom og 
                    kategorier, og se oppdatert varebeholdning i sanntid. Løsningen skal være brukervennlig og 
                    potensielt kunne pitches til Thon sentralt.
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="text-red-700 font-bold">→</span>
                        <span><strong>Backend API-endepunkter</strong> for inventory-operasjoner (opprettelse, oppdatering, sletting av varer)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-700 font-bold">→</span>
                        <span><strong>Frontend i Next.js</strong> med intuitiv UI for ansatte som skal bruke systemet daglig</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-700 font-bold">→</span>
                        <span><strong>Realtime-oppdateringer</strong> via SignalR slik at endringer i lagerbeholdningen synes umiddelbar</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-red-700 font-bold">→</span>
                        <span><strong>Brukertest</strong> med hotellets ansatte for tilbakemeldinger og iterative forbedringer</span>
                    </li>
                </ul>
            </div>

            {/* Our work */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Arbeidsoppgaver</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Mads Furås Malmin</h3>
                        <p className="text-gray-600 text-sm mb-3">Frontend & UX</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Design av brukergrensesnitt</li>
                            <li>• Prototyping og brukertest</li>
                            <li>• React/Next.js frontend-utvikling</li>
                        </ul>
                    </div>
                    <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Truls Næss</h3>
                        <p className="text-gray-600 text-sm mb-3">Backend & Prosjektledelse</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Prosjektledelse og koordinering</li>
                            <li>• ASP.NET Core backend og API-utvikling</li>
                            <li>• Database-design med Entity Framework</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Status now */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Status nå</h2>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                    <p className="text-gray-700 mb-3">
                        <strong>Vi startet litt tregere enn planlagt</strong> dette er vår feil og knyttet til
                        planleggings problemer, men er nå i full gang. Backend-strukturen er på plass og det er 
                        en nåværende plan angående design, og vi er klare for API-utvikling.
                    </p>
                    <p className="text-gray-700">
                        Vi jobber både på hotellet (for å være nær brukerene og få tilbakemeldinger) og 
                        hjemmekontor (for fokus-tid på utvikling). <strong>Neste steg:</strong> fullføre API-endepunkter 
                        og starte frontend-design basert på brukerbehovet.
                    </p>
                </div>
            </div>
        </section>
    );
}
