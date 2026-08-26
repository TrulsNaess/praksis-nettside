export default function Home() {
    return (
        <main className="min-h-screen bg-[#fafafa] text-[#111111]">

            <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
                <div className="max-w-3xl">
                    <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Praksisprosjekt
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                        Et prosjekt jeg har jobbet med i praksis.
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                        Her skal vi presentere praksisperioden, prosjektet,
                        prosessen og resultatet på en enkel og profesjonell måte.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <a
                            href="#prosjekt"
                            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            Se prosjektet
                        </a>

                        <a
                            href="#om"
                            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
                        >
                            Om prosjektet
                        </a>
                    </div>
                </div>
            </section>

            <section
                id="om"
                className="border-t border-gray-200 bg-white px-6 py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        01 — Om prosjektet
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                        Hva handler prosjektet om?
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        Her skal vi senere skrive om hva praksisprosjektet gikk ut på,
                        hvilket problem som skulle løses og hvilken rolle du hadde.
                    </p>
                </div>
            </section>

            <section
                id="prosjekt"
                className="px-6 py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        02 — Prosjektet
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                        Løsningen
                    </h2>

                    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8">
                        <p className="text-gray-600">
                            Her kommer screenshots, beskrivelse av løsningen,
                            teknologi og andre detaljer.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}