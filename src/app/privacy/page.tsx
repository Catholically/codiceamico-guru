import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodiceAmico.guru',
  description: 'Informativa sulla privacy e trattamento dei dati personali di CodiceAmico.guru ai sensi del GDPR.',
  alternates: {
    canonical: 'https://codiceamico.guru/privacy/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="section-title">Informazioni legali</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
        </p>
        <div className="mt-4 text-sm text-[#666]">
          Ultimo aggiornamento: Gennaio 2026
        </div>
      </section>

      {/* Content */}
      <section className="light-section px-6 md:px-12 py-16">
        <article className="max-w-3xl prose-custom">

          {/* Titolare */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">1. Titolare del Trattamento</h2>
            <p className="text-[#666] mb-4">
              Il titolare del trattamento dei dati personali e il gestore del sito CodiceAmico.guru.
            </p>
            <p className="text-[#666]">
              Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci attraverso
              la <a href="/contatti/" className="text-[#111] font-bold hover:underline">pagina contatti</a>.
            </p>
          </div>

          {/* Dati raccolti */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">2. Dati Raccolti</h2>
            <p className="text-[#666] mb-4">
              CodiceAmico.guru raccoglie i seguenti dati personali esclusivamente quando forniti volontariamente
              dall&apos;utente attraverso i form presenti sul sito:
            </p>
            <ul className="text-[#666] space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Nome</strong> - per personalizzare la comunicazione</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Indirizzo email</strong> - per rispondere alle richieste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Contenuto del messaggio</strong> - per gestire la richiesta</span>
              </li>
            </ul>
            <p className="text-[#666]">
              Nel caso di invio di codici referral, vengono raccolti anche i dati relativi al codice
              (servizio, categoria, bonus, istruzioni) che l&apos;utente sceglie volontariamente di condividere.
            </p>
          </div>

          {/* Finalita' */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">3. Finalita del Trattamento</h2>
            <p className="text-[#666] mb-4">
              I dati personali raccolti vengono utilizzati esclusivamente per le seguenti finalita:
            </p>
            <ul className="text-[#666] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span>Rispondere alle richieste di informazioni inviate tramite il form contatti</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span>Valutare i codici referral inviati per eventuale pubblicazione sul sito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span>Comunicare con l&apos;utente in merito alla sua richiesta o al codice inviato</span>
              </li>
            </ul>
          </div>

          {/* Base giuridica */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">4. Base Giuridica</h2>
            <p className="text-[#666]">
              Il trattamento dei dati personali si basa sul <strong className="text-[#111]">consenso dell&apos;interessato</strong> (art. 6, par. 1, lett. a del GDPR),
              espresso al momento dell&apos;invio del form. L&apos;utente puo revocare il consenso in qualsiasi momento
              contattandoci tramite la pagina contatti.
            </p>
          </div>

          {/* Conservazione */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">5. Periodo di Conservazione</h2>
            <p className="text-[#666]">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire la richiesta
              dell&apos;utente e comunque <strong className="text-[#111]">non oltre 12 mesi</strong> dalla raccolta, salvo obblighi di legge.
              I dati vengono successivamente cancellati in modo sicuro.
            </p>
          </div>

          {/* Destinatari */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">6. Destinatari dei Dati</h2>
            <p className="text-[#666] mb-4">
              I dati personali non vengono venduti, ceduti o comunicati a terzi per finalita di marketing.
              Possono essere trattati da:
            </p>
            <ul className="text-[#666] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Resend</strong> - servizio di invio email per la gestione dei form (server UE/USA con clausole contrattuali standard)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Vercel</strong> - piattaforma di hosting del sito (server UE/USA con clausole contrattuali standard)</span>
              </li>
            </ul>
          </div>

          {/* Diritti */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">7. Diritti dell&apos;Interessato</h2>
            <p className="text-[#666] mb-4">
              Ai sensi degli articoli 15-22 del GDPR, hai diritto di:
            </p>
            <ul className="text-[#666] space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Accesso</strong> - ottenere conferma dell&apos;esistenza di dati che ti riguardano</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Rettifica</strong> - correggere dati inesatti o incompleti</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Cancellazione</strong> - richiedere la cancellazione dei tuoi dati</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Limitazione</strong> - limitare il trattamento in determinati casi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Portabilita</strong> - ricevere i dati in formato strutturato</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Opposizione</strong> - opporti al trattamento dei dati</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Revoca</strong> - revocare il consenso in qualsiasi momento</span>
              </li>
            </ul>
            <p className="text-[#666]">
              Per esercitare questi diritti, contattaci tramite la <a href="/contatti/" className="text-[#111] font-bold hover:underline">pagina contatti</a>.
              Hai inoltre diritto di proporre reclamo all&apos;Autorita Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).
            </p>
          </div>

          {/* Cookie */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="text-[#666] mb-4">
              CodiceAmico.guru utilizza esclusivamente cookie tecnici necessari al funzionamento del sito
              e cookie analitici anonimi per comprendere come gli utenti utilizzano il sito.
            </p>
            <p className="text-[#666] mb-4">
              In particolare utilizziamo:
            </p>
            <ul className="text-[#666] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#111] font-bold">&#8226;</span>
                <span><strong className="text-[#111]">Vercel Analytics</strong> - statistiche anonime aggregate, senza tracciamento individuale</span>
              </li>
            </ul>
            <p className="text-[#666] mt-4">
              Non utilizziamo cookie di profilazione o per finalita pubblicitarie.
            </p>
          </div>

          {/* Sicurezza */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-6">
            <h2 className="text-xl font-black text-[#111] mb-4">9. Sicurezza dei Dati</h2>
            <p className="text-[#666]">
              Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali
              da accessi non autorizzati, perdita o distruzione. Il sito utilizza il protocollo HTTPS
              per garantire la trasmissione sicura dei dati.
            </p>
          </div>

          {/* Modifiche */}
          <div className="bg-white p-8 border border-[#e5e5e5]">
            <h2 className="text-xl font-black text-[#111] mb-4">10. Modifiche alla Privacy Policy</h2>
            <p className="text-[#666]">
              Questa informativa puo essere aggiornata periodicamente. La data dell&apos;ultimo aggiornamento
              e indicata in cima alla pagina. Ti invitiamo a consultare periodicamente questa pagina
              per essere informato su eventuali modifiche.
            </p>
          </div>

        </article>
      </section>

      {/* Back link */}
      <section className="px-6 md:px-12 py-8 border-t border-white/10">
        <a href="/" className="text-[#999] hover:text-white font-bold">
          &#8592; Torna alla homepage
        </a>
      </section>
    </>
  );
}
