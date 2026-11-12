import Image from "next/image";

export default function RefleksjonPage() {
    return (
        <section className="space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">Avsluttende refleksjon</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Fyll inn felles refleksjon øverst, og deretter personlige refleksjoner under.
                </p>
            </div>

            <article className="surface-card p-8 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Felles refleksjon</h2>
                <p className="text-gray-700 leading-8">
                    Skriv en kort felles refleksjon her om hva dere har lært, hva som fungerte bra i prosjektet,
                    hva dere ville gjort annerledes og hva dere tar med dere videre.
                </p>
                <p className="text-sm text-gray-500 italic">Felles tekst fylles inn her...</p>
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

                    <p className="text-sm text-gray-500 italic">
                        Praksisperioden hos Thon Hotel Kristiansand har vært veldig lærerik, og jeg har fått erfare hvordan det er å jobbe med et prosjekt som faktisk skal løse et behov i en bedrift. Jeg har hatt mest fokus på frontend og design, og har jobbet mye med hvordan lagerstyringssystemet skal se ut og være enkelt å bruke for de ansatte. Det har vært interessant å se hvor mye løsningen har endret seg underveis etter hvert som vi har fått bedre forståelse for hvordan lageret og rutinene på hotellet fungerer.
                    </p>

                    <p className="text-sm text-gray-500 italic">
                        Gjennom praksisen har jeg blitt mer bevisst på hvor viktig det er å utvikle med utgangspunkt i brukeren og den faktiske arbeidshverdagen deres. Jeg har fått brukt mye av det jeg har lært på studiet, samtidig som jeg har fått mer erfaring med å bygge opp et grensesnitt, strukturere informasjon og gjøre løsningen mest mulig oversiktlig. Det jeg tar med meg videre er spesielt erfaringen med frontend og brukerorientert utvikling, og jeg føler at praksisen har gjort meg tryggere på denne typen arbeid.
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
                        Skriv Truls sin refleksjon her. For eksempel: hva du lærte, hva du bidro med,
                        hvilke utfordringer du møtte, og hva du vil ta med deg videre.
                    </p>
                    <p className="text-sm text-gray-500 italic">Truls sin tekst fylles inn her...</p>
                </div>
            </article>

        </section>
    );
}
