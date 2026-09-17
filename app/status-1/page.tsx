export default function Status1Page() {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">Status 1</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Rapport fra første fase av praksisperioden
                </p>
            </div>

            {/* Video Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Presentasjon fra Bedriften</h2>
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center h-96 border-2 border-gray-300">
                    <div className="text-center">
                        <span className="text-gray-500 text-lg font-medium">Videoplasseres – kommer snart</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                    Her vil vi publisere en video fra bedriften og en presentasjon av prosjektet vårt.
                </p>
            </div>

            {/* About the Company Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Om Bedriften</h2>
                <div className="space-y-4">
                    <div className="bg-white border-l-4 border-red-700 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thon Hotel Kristiansand</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vi har praksis ved Thon Hotel Kristiansand, en større bedrift som driver moderne 
                            hotellvirksomhet. Den daglige driften består av flere sentrale funksjoner: resepsjon, 
                            booking, renhold, frokostservering og konferansevirksomhet. For at hotellet skal 
                            fungere effektivt, må mange ulike arbeidsoppgaver og avdelinger samarbeide seamlessly.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Thon Hotel Kristiansand er en del av Thon Hotel-kjeden, som er en av Norges største 
                            hotelkjeder. Som en større bedrift handler det om å opprettholde høy service-kvalitet, 
                            håndtere komplekse operasjoner og sikre effektiv ressursforvaltning på tvers av 
                            flere avdelinger.
                        </p>
                    </div>
                </div>
            </div>

            {/* What we've done so far */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Hva vi har gjort så langt</h2>
                <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Behovskartlegging & Oppstart</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            I starten av praksisperioden brukte vi tid på å bli kjent med bedriften og forstå 
                            hvordan Thon Hotel Kristiansand drives. Vi etablerte gruppen vår og møtte resepsjonssjefen, 
                            som er vår dedikerte kontaktperson gjennom hele praksisperioden.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Gjennom dialog med resepsjonssjefen og hotellets ansatte ble det klart at 
                            <strong> lagerstyring </strong> er et område med betydelig potensial for forbedring. 
                            De ansatte etterspør en enklere, mer systematisk måte å få oversikt over varebeholdning, 
                            mengder på lager, og når det er behov for påfyll eller bestillinger.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our project */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Prosjektet Vårt</h2>
                <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vi har fått beskjed om at vi skal lage en <strong>prototype 
                            på et digitalt lagerstyringssystem</strong>. Målet er å gjøre det enklere for ansatte 
                            å holde oversikt over varebeholdningen og registrere varer som går inn og ut av lageret.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vi er allerede i gang med å planlegge løsningen – hvilke funksjoner som er viktigst å 
                            prioritere innenfor den tiden vi har, og hvordan systemet best kan løse de identifiserte 
                            utfordringene. Vårt fokus er å utvikle løsningen i samarbeid med hotellet, slik at 
                            vi underveis kan få direkte tilbakemeldinger fra de ansatte som skal bruke systemet.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Dersom prototypen fungerer godt, er hotellet også åpne for at vi presenterer og pitcher 
                            prosjektet videre – potensielt til andre lokaler i Thon-kjeden. Dette gjør prosjektet 
                            ekstra spennende fordi vi får muligheten til å utvikle noe som tar utgangspunkt i 
                            reelle behov og potensielt kan ha verdi langt utover selve praksisoppgaven. Dette er jo
                            hyptotetisk, men det er et spennende mål som motiverer oss til å levere noe bra!
                        </p>
                    </div>
                </div>
            </div>

            {/* Our work environment */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Arbeidshverdagen Vår</h2>
                <div className="space-y-4">
                    <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vi har fått tilgang til et <strong>konferanserom på hotellet</strong> som vi skal bruke som 
                            arbeidsplass. Her kan vi jobbe sammen på utviklingen, samtidig som vi befinner oss fysisk 
                            i bedriften. Dette gir oss muligheten til enkelt å snakke med ansatte, stille spørsmål 
                            underveis, og teste ideene våre direkte med brukerne.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vi kommer til å kombinere <strong>arbeid på hotellet med hjemmekontor-dager</strong> 
                            for å ha fleksibilitet i arbeidsmåten vår. Dette lar oss både være nær bedriften når 
                            det er viktig, og ha fokus-tid for design- og utviklingarbeid hjemme. Dersom 
                            konferanserommet er opptatt vil vi fokusere på hjemmekontor.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            En viktig erkjennelse fra denne første fasen er at en større bedrift som et hotell er 
                            svært kompleks – det handler ikke bare om selve systemutviklingen. Vi lærer også mye om 
                            hvordan en større organisasjon fungerer, hvordan ulike systemer og avdelinger henger 
                            sammen, og hvor viktig det er å utvikle digitale løsninger basert på reelle 
                            brukerbehov.
                        </p>
                    </div>
                </div>
            </div>

            {/* Current status */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Hvor vi er nå</h2>
                <div className="space-y-4">
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>Status:</strong> Vi har gjennomført behovskartlegging, møtt bedriftens 
                            ansatte, og definert prosjektomfanget. Pga dårlig planlegging fra vår side har vi 
                            startet litt <strong>tregere enn vi ideelt sett hadde håpet</strong> – men vi er 
                            nå i gang og klar til å bygge videre. Vi er veldig positive for å jobbe ekstra for
                            å ha god tid til å levere på et høyt nok nivå.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Neste steg:</strong> Vi skal nå gå videre med design og teknisk utvikling av 
                            lagerstyringssystemet. Vi planlegger å teste løsningen sammen med hotellet og iterere 
                            på bakgrunn av tilbakemeldinger.
                        </p>
                    </div>
                </div>
            </div>

            {/* Work assignments */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Arbeidsoppgaver</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Mads Furås Malmin</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Design og brukergrensesnitt (UX/UI)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Prototyping og brukertest</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Frontend-utvikling</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Truls Næss</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Prosjektledelse og koordinering</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Backend-utvikling og database</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-700 font-bold">•</span>
                                <span>Teknisk arkitektur</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
