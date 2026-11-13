import Image from "next/image";

export default function RefleksjonPage() {
    return (
        <section className="space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">Avsluttende refleksjon</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    En oppsummering av hva vi har lært, hva som fungerte godt, og hva vi tar med oss videre.
                </p>
            </div>

            <article className="surface-card p-8 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Felles refleksjon</h2>
                <p className="text-gray-700 leading-8">
                    Praksisperioden hos Thon Hotel Kristiansand har gitt oss verdifull erfaring med å utvikle en løsning i tett
                    kobling til en reell arbeidshverdag. Prosjektet startet med behovskartlegging, og vi har jobbet iterativt
                    gjennom hele perioden med design, utvikling, testing og justeringer basert på tilbakemeldinger fra ansatte.
                    Det har gjort at løsningen har blitt mer relevant, mer brukervennlig og bedre tilpasset driften på hotellet.
                </p>
                <p className="text-gray-700 leading-8">
                    En av de viktigste lærdommene våre er at gode tekniske valg må bygge på faktiske behov. Prosjektdagboken viser
                    tydelig hvordan møtene med ansatte og brukertester på hotellet ga konkrete forbedringspunkter som vi tok med
                    videre i utviklingen. Samtidig erfarte vi at vi fikk best progresjon når vi kombinerte selvstendig arbeid med
                    jevnlig dialog med praksisstedet. Vi tar med oss videre at strukturert samarbeid, tydelig prioritering og
                    kontinuerlig brukerinvolvering er avgjørende for å lykkes med et praksisnært utviklingsprosjekt.
                </p>
            </article>

            <article className="surface-card p-6 md:p-8 grid gap-6 md:grid-cols-[280px_1fr] items-start">
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <Image
                        src="/Mads.webp"
                        alt="Mads"
                        fill
                        className="object-cover object-[center_40%]"
                        sizes="(max-width: 768px) 100vw, 280px"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Mads</h2>

                    <p className="text-gray-700 leading-8">
                        Praksisperioden hos Thon Hotel Kristiansand har vært veldig lærerik, og jeg har fått erfare hvordan det er
                        å jobbe med et prosjekt som faktisk skal løse et behov i en bedrift. Jeg har hatt mest fokus på frontend
                        og design, og har jobbet mye med hvordan lagerstyringssystemet skal se ut og være enkelt å bruke for de
                        ansatte. Det har vært interessant å se hvor mye løsningen har endret seg underveis etter hvert som vi har
                        fått bedre forståelse for hvordan lageret og rutinene på hotellet fungerer.
                    </p>

                    <p className="text-gray-700 leading-8">
                        Gjennom praksisen har jeg blitt mer bevisst på hvor viktig det er å utvikle med utgangspunkt i brukeren og
                        den faktiske arbeidshverdagen deres. Jeg har fått brukt mye av det jeg har lært på studiet, samtidig som
                        jeg har fått mer erfaring med å bygge opp et grensesnitt, strukturere informasjon og gjøre løsningen mest
                        mulig oversiktlig. Det jeg tar med meg videre er spesielt erfaringen med frontend og brukerorientert
                        utvikling, og jeg føler at praksisen har gjort meg tryggere på denne typen arbeid.
                    </p>
                </div>
            </article>

            <article className="surface-card p-6 md:p-8 grid gap-6 md:grid-cols-[280px_1fr] items-start">
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <Image
                        src="/Truls.webp"
                        alt="Truls"
                        fill
                        className="object-cover object-[center_40%]"
                        sizes="(max-width: 768px) 100vw, 280px"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Truls</h2>
                    <p className="text-gray-700 leading-8">
                        Jeg har likt veldig godt å jobbe brukerorientert i denne praksisperioden. Gjennom bacheloren skal vi jobbe
                        mye med teknisk tunge problemstillinger, så det å få jobbe med et prosjekt der brukernes behov har stått i
                        sentrum har vært en verdifull kontrast. Det har gitt meg erfaring med hele prosessen: å forstå behov,
                        utvikle løsninger, vise frem underveis, ta imot tilbakemeldinger og jobbe iterativt frem mot et resultat
                        som faktisk er nyttig i praksis.
                    </p>
                    <p className="text-gray-700 leading-8">
                        Jeg opplever at prosjektet har gjort meg tryggere på å kombinere teknisk arbeid med kommunikasjon og
                        samarbeid med dem som faktisk skal bruke løsningen. Vi har fått erfare hvor mye kvaliteten øker når vi
                        tester med ansatte, får konkrete innspill og justerer detaljer i stedet for å bare anta hva som fungerer.
                        Den delen av arbeidet har vært både lærerik og motiverende.
                    </p>
                    <p className="text-gray-700 leading-8">
                        Hvis jeg skal være kritisk til noe, skulle jeg ønske at vi hadde avtalt møter oftere og mer fast med de
                        ansatte på hotellet. Vi fikk mye frihet og tillit, men vi burde trolig prioritert enda mer tid fysisk ute
                        på hotellet, fordi de gangene vi var der ga svært høy verdi for videre utvikling. Min viktigste
                        selvkritikk er derfor at vi i perioder jobbet litt for mye «for oss selv», selv om vi samtidig leverte det
                        vi skulle.
                    </p>
                </div>
            </article>

            <article className="surface-card p-8 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Hva vi tar med oss videre</h2>
                <p className="text-gray-700 leading-8">
                    Videre tar vi med oss en tydelig forståelse av at god systemutvikling handler om balansen mellom teknologi,
                    menneskene som skal bruke løsningen og konteksten den skal fungere i. Arbeidet med inventory-appen har vist oss
                    at iterativ utvikling og hyppig validering med brukere gir bedre
                    beslutninger og et mer robust sluttprodukt.
                </p>
                <p className="text-gray-700 leading-8">
                    Erfaringene fra praksisperioden vil være direkte relevante i bachelorarbeidet: både i hvordan vi planlegger,
                    hvordan vi prioriterer, og hvordan vi kvalitetssikrer løsninger over tid.
                </p>
            </article>
        </section>
    );
}
