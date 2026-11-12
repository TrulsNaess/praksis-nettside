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
                        src="/mads.jpg"
                        alt="Mads"
                        fill
                        className="object-cover object-[center_40%]"
                        sizes="(max-width: 768px) 100vw, 280px"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Mads</h2>
                    <p className="text-gray-700 leading-8">
                        Skriv Mads sin refleksjon her. For eksempel: hva du lærte, hva du bidro med,
                        hvilke utfordringer du møtte, og hva du vil ta med deg videre.
                    </p>
                    <p className="text-sm text-gray-500 italic">Mads sin tekst fylles inn her...</p>
                </div>
            </article>

            <article className="surface-card p-6 md:p-8 grid gap-6 md:grid-cols-[280px_1fr] items-start">
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <Image
                        src="/truls.png"
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
