const entries = [
    {
        date: "18./19. august",
        period: "Start",
        content:
            "Mads ble enig om å ha praksis med Thon. Dette ble starten på samarbeidet og en første avklaring av hvor praksisperioden skulle gjennomføres.",
        focus: "Avtale om praksis",
        people: "Mads og Kontaktperson i Thon",
        work: "Avklarte at praksisen skulle gjennomføres hos Thon og fikk en første retning for perioden.",
        next: "Få mer konkret oversikt over innhold, oppgaver og praktisk gjennomføring.",
        notes: "Dette var en viktig start fordi praksisstedet ble bestemt tidlig i perioden.",
    },
    {
        date: "24. august",
        period: "Videre avklaring",
        content:
            "Mads ble enig om hva praksisen skulle inneholde, inkludert oppgaven, utføringen og at det skulle være med en ekstra person i prosjektet.",
        focus: "Innhold og oppgave",
        people: "Mads, Kontaktperson i Thon",
        work: "Klare rammer for hva prosjektet skulle være og hvordan arbeidet skulle organiseres.",
        next: "Ta kontakt med Thon og gå gjennom praksisen mer konkret.",
        notes: "Her ble forventningene til prosjektet tydeligere før videre møtevirksomhet.",
    },
    {
        date: "25. august",
        period: "Møte",
        content:
            "Truls møtte kontaktperson i Thon angående praksis. Dette ga oss en mer konkret forståelse av hva Thon ønsket at vi skulle jobbe med.",
        focus: "Møte med kontaktperson",
        people: "Truls og kontaktperson i Thon",
        work: "Gjennomgikk praksisen og fikk avklart videre retning.",
        next: "Starte planlegging og oppsett av prosjektet.",
        notes: "Et viktig møte for å få en felles forståelse av behov og forventninger.",
    },
    {
        date: "25. august til midten av september",
        period: "Digitalt arbeid",
        content:
            "Både Truls og Mads var bortreist på ulike tidspunkt, så arbeidet foregikk digitalt og litt oppdelt de første 2,5 ukene. Denne perioden handlet mest om å legge grunnlaget for prosjektet.",
        focus: "Planlegging og oppsett",
        people: "Truls og Mads",
        work: "Design, planlegging, valg av teknologi, oppsett, opprettelse av miljø, arbeid i Figma og generering av skisser av designet.",
        next: "Møtes fysisk og begynne å spisse designet videre.",
        notes: "Arbeidet ble noe fragmentert på grunn av reiser, men vi kom likevel videre med det viktigste grunnarbeidet.",
    },
    {
        date: "18. september",
        period: "Fysisk på Thon",
        content:
            "Vi jobbet med å finalisere designet, og Truls møtte noen av de ansatte han ikke hadde møtt tidligere. Vi laget også video til status 1 denne dagen.",
        focus: "Finalisering av design",
        people: "Truls, Mads og ansatte hos Thon",
        work: "Skarpstilte designet og produserte status 1-videoen.",
        next: "Starte mer konkret utvikling på skolen dagen etter.",
        notes: "Det var nyttig å møte flere ansatte og få bekreftet at designet traff behovene godt.",
    },
    {
        date: "24. september",
        period: "Fysisk møte på skolen",
        content:
            "Vi startet på backend og satte oss inn i de andre praksisprosjektene.",
        focus: "Backend og faglig innblikk",
        people: "Truls og Mads",
        work: "Begynte å etablere backend-strukturen. Hentet inspirasjon fra andre prosjekter, imens vi satt oss inn i hva de driver med, før status 1.",
        next: "Forberede status 1 og få vist frem det vi hadde gjort så langt.",
        notes: "Dette var første tydelige utviklingssteg på kodefronten.",
    },
    {
        date: "25. september",
        period: "Status 1",
        content:
            "Status 1-presentasjonene ble gjennomført.",
        focus: "Presentasjon",
        people: "Truls, Mads og medstudenter/forelesere",
        work: "Presenterte status 1 og fikk vist fram arbeidet som var gjort fram til da. Trakk frem et par av de andre gruppene.",
        next: "Videreutvikle løsning og begynne å få applikasjonen mer komplett.",
        notes: "Dette markerte overgangen mellom første og andre del av prosjektperioden.",
    },
    {
        date: "30. september",
        period: "Fysisk på hotellet",
        content:
            "Vi jobbet med å gjøre applikasjonen kjørbar. Vi laget utgangspunkt i frontend og backend, og sørget for at disse samkjører. Vi har nå en løsning hvor man kjører backend og frontend separat.",
        focus: "Kjørbar applikasjon",
        people: "Truls og Mads",
        work: "Fikk frontend og backend til å fungere sammen og ryddet opp i oppstartsprosessen.",
        next: "Implementere designet videre og koble på databasen.",
        notes: "Et viktig steg for å gå fra planlegging til en faktisk fungerende løsning.",
    },
    {
        date: "9. oktober",
        period: "Fysisk på skolen",
        content:
            "Vi jobbet videre med å implementere design i frontend. Vi integrerte også database gjennom Supabase, som nå er oppe og går.",
        focus: "Frontend og database",
        people: "Truls og Mads",
        work: "Bygde videre på designet i frontend og satte opp Supabase-database.",
        next: "Gjøre oppstarten enklere og mer automatisk.",
        notes: "Nå begynte løsningen å ligne mer på en ferdig applikasjon.",
    },
    {
        date: "14. oktober",
        period: "Arbeid med status 2",
        content:
            "Vi fikset slik at databasen hentes og kjøres automatisk, slik at man ikke trenger to terminaler for å kjøre frontend og backend separat.",
        focus: "Forbedre oppstart",
        people: "Truls og Mads",
        work: "Automatiserte databaseoppsett og forenklet oppstarten av prosjektet.",
        next: "Fortsette videreutvikling fram mot neste levering.",
        notes: "Dette gjorde løsningen mer brukervennlig for oss som utviklere.",
    },

    {
        date: "23. oktober",
        period: "Digitalt",
        content:
            "Laget funksjoner for registrering av varer, registrering av svinn, og oversikt over bestilte produkter. Lagt inn statuser og viderearbeidet hovedsiden. Lagde en logg for oversikt over registreringer.",
        focus: "Funksjonaliteter og features",
        people: "Truls og Mads",
        work: "Implementere ønskelige funksjoner, og oversikt.",
        next: "Gjøre applikasjonen praktisk funksjonell. Gjøre den mer realistisk.",
        notes: "Endelig fått inn funksjoner som faktisk gjør det applikasjonens mål er.",
    },

    {
        date: "28. oktober",
        period: "Fysisk på skolen",
        content:
            "Implementert demokasse for testing. Lagt inn seedingdata så applikasjonen skal se mer realistisk ut. Med design har vi i dag nærmet oss ferdigstilt design. Videreutviklet logg til å kunne vise resultater basert på perioder. Har også ordnet noen problemer med Supabase.",
        focus: "Praktisk funksjonalitet, realistisk bruk",
        people: "Truls og Mads",
        work: "Demokasse siden, seedingdata, design",
        next: "Kjøre testing med hotellansatte forhåpentligvis.",
        notes: "Nå begynner applikasjonen å likne en ferdig applikasjon.",
    },
];

export default function ProsjektdagbokPage() {
    return (
        <section className="space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">Prosjektdagbok</h1>
                <p className="text-lg text-gray-600">Dokumentasjon av arbeid, vurderinger og utvikling gjennom praksisperioden</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                    Prosjektdagboken skal hjelpe oss med å huske hva vi konkret har gjort, dokumentere alternativer og
                    vurderinger bak det vi gjør, og bevisstgjøre oss selv gjennom skriving. Målet er at dagboken skal
                    bidra til refleksjon og utvikling gjennom det som kalles reflective practice.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Dagboken bør opplyse om tidspunkt for aktiviteten, hovedfokus for dagen, personer vi har arbeidet
                    med eller vært i møte med, arbeid utført i dag og arbeid til neste gang, nye tema som har dukket
                    opp, hva som skal tas opp på neste møte og eventuelle spesielle momenter som bør bemerkes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Vi begynte senere i praksis og fikk derfor ikke med oss at denne dagboken skulle føres fra starten.
                    Vi har skrevet den etter beste evne, og derfor er ikke alle klokkeslett notert. Der vi ikke har
                    eksakte tider, har vi i stedet brukt datoer eller tidsrom for å vise start og slutt så godt vi kan.
                </p>
            </div>

            <div className="space-y-6">
                {entries.map((entry) => (
                    <article key={entry.date} className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">{entry.date}</h2>
                            <span className="inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                                {entry.period}
                            </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{entry.content}</p>
                        <div className="grid gap-3 md:grid-cols-2 text-sm text-gray-700">
                            <p><strong>Hovedfokus:</strong> {entry.focus}</p>
                            <p><strong>Personer:</strong> {entry.people}</p>
                            <p><strong>Arbeid utført:</strong> {entry.work}</p>
                            <p><strong>Arbeid til neste gang:</strong> {entry.next}</p>
                        </div>
                        <p className="text-sm text-gray-600"><strong>Spesielle momenter:</strong> {entry.notes}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
