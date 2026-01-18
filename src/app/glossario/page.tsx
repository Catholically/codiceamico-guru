import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossario Codici Amico e Referral | Termini e Definizioni',
  description: 'Glossario completo dei termini usati nei programmi referral e codici amico: bonus, cashback, invitato, invitante, promozione e molto altro.',
  alternates: {
    canonical: 'https://codiceamico.guru/glossario/',
  },
};

const glossaryTerms = [
  {
    term: 'Codice Amico',
    definition: 'Un codice alfanumerico univoco che un utente esistente puo condividere con amici per invitarli a iscriversi a un servizio. Quando l\'amico usa il codice, entrambi possono ricevere un bonus.',
    aliases: ['Codice Referral', 'Codice Invito', 'Codice Promo'],
  },
  {
    term: 'Referral',
    definition: 'Dall\'inglese "riferimento", indica il processo di raccomandare un servizio a qualcuno. Nel marketing, un programma referral premia chi porta nuovi clienti.',
    aliases: ['Segnalazione', 'Raccomandazione'],
  },
  {
    term: 'Invitante',
    definition: 'La persona che condivide il proprio codice amico e invita altri a iscriversi. Anche chiamato "presentatore" o "referrer". Riceve un bonus quando l\'invitato completa i requisiti.',
    aliases: ['Presentatore', 'Referrer', 'Chi invita'],
  },
  {
    term: 'Invitato',
    definition: 'La persona che riceve il codice amico e si iscrive al servizio utilizzandolo. Anche chiamato "referee" o "nuovo cliente". Spesso riceve un bonus di benvenuto.',
    aliases: ['Referee', 'Nuovo cliente', 'Chi viene invitato'],
  },
  {
    term: 'Bonus di Benvenuto',
    definition: 'Un premio (in denaro, punti o sconti) dato ai nuovi clienti che si iscrivono usando un codice amico. Puo essere immediato o subordinato al completamento di certe azioni.',
    aliases: ['Welcome Bonus', 'Bonus Iscrizione'],
  },
  {
    term: 'Cashback',
    definition: 'Letteralmente "soldi indietro". Una percentuale dell\'importo speso che viene restituita all\'utente come credito o denaro. Comune nelle promozioni di banche e carte.',
    aliases: ['Rimborso', 'Restituzione'],
  },
  {
    term: 'Promozione Unilaterale',
    definition: 'Una promozione in cui solo una delle due parti (solitamente chi invita) riceve il bonus. L\'invitato non ottiene nulla di aggiuntivo. Esempio: alcune promo Revolut.',
    aliases: ['One-sided referral'],
  },
  {
    term: 'Promozione Bilaterale',
    definition: 'Una promozione in cui entrambe le parti (invitante e invitato) ricevono un bonus. E il tipo piu comune di programma referral.',
    aliases: ['Two-sided referral', 'Win-win'],
  },
  {
    term: 'KYC',
    definition: 'Know Your Customer - processo di verifica dell\'identita richiesto da banche e servizi finanziari. Include invio di documento d\'identita e selfie. Necessario per ricevere i bonus.',
    aliases: ['Verifica identita', 'Identificazione'],
  },
  {
    term: 'IBAN',
    definition: 'International Bank Account Number - codice che identifica univocamente un conto corrente a livello internazionale. Il prefisso indica il paese (IT=Italia, DE=Germania, ES=Spagna).',
    aliases: ['Codice IBAN', 'Coordinate bancarie'],
  },
  {
    term: 'Membership Rewards',
    definition: 'Programma punti di American Express. I punti possono essere convertiti in sconti, miglia aeree o trasferiti a programmi partner.',
    aliases: ['MR Points', 'Punti Amex'],
  },
  {
    term: 'Limite Inviti',
    definition: 'Il numero massimo di persone che puoi invitare per una determinata promozione. Superato il limite, non ricevi piu bonus. Varia da 3 a 20 a seconda del servizio.',
    aliases: ['Max inviti', 'Cap referral'],
  },
  {
    term: 'Transazione Qualificante',
    definition: 'Un acquisto che soddisfa i requisiti per sbloccare il bonus. Solitamente esclude prelievi ATM, ricariche telefoniche, acquisti di gift card e transazioni crypto.',
    aliases: ['Acquisto idoneo', 'Qualifying purchase'],
  },
  {
    term: 'DDP vs DDU',
    definition: 'Termini doganali. DDP (Delivered Duty Paid): dazi inclusi nel prezzo. DDU (Delivered Duty Unpaid): dazi a carico del destinatario. Rilevante per acquisti internazionali.',
    aliases: ['Incoterms'],
  },
  {
    term: 'APE',
    definition: 'Attestato di Prestazione Energetica - documento obbligatorio che certifica il consumo energetico di un immobile. Necessario per vendita, affitto o accesso a bonus fiscali.',
    aliases: ['Certificazione energetica', 'Classe energetica'],
  },
  {
    term: 'Remunerazione',
    definition: 'Tasso di interesse applicato al saldo del conto corrente. Alcune banche online (BBVA, ING) offrono remunerazione sul saldo come incentivo.',
    aliases: ['Interessi sul saldo', 'Tasso creditore'],
  },
  {
    term: 'Scadenza Promozione',
    definition: 'Data entro cui bisogna completare l\'iscrizione e/o i requisiti per ottenere il bonus. Dopo la scadenza, il codice potrebbe non funzionare piu o le condizioni potrebbero cambiare.',
    aliases: ['Validita', 'Deadline'],
  },
  {
    term: 'Budget Satispay',
    definition: 'Importo settimanale che l\'utente decide di rendere disponibile per i pagamenti Satispay. Viene prelevato dal conto corrente collegato.',
    aliases: ['Ricarica Satispay'],
  },
];

export default function GlossarioPage() {
  const currentYear = new Date().getFullYear();

  const glossarySchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Glossario Codici Amico e Referral',
    description: 'Definizioni dei termini usati nei programmi referral',
    hasDefinedTerm: glossaryTerms.map(item => ({
      '@type': 'DefinedTerm',
      name: item.term,
      description: item.definition,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Cosa significa codice amico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un codice amico e un codice alfanumerico univoco che un utente esistente puo condividere con amici per invitarli a iscriversi a un servizio. Quando l\'amico usa il codice, entrambi possono ricevere un bonus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona un programma referral?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un programma referral premia gli utenti che portano nuovi clienti. Chi invita condivide un codice o link, l\'invitato si iscrive usandolo, e dopo aver completato certi requisiti (es. un acquisto), entrambi ricevono un bonus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual e la differenza tra invitante e invitato?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'invitante (o presentatore) e chi condivide il codice amico. L\'invitato (o referee) e chi riceve il codice e si iscrive al servizio. Spesso entrambi ricevono un bonus, ma gli importi possono essere diversi.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="text-white">Glossario</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="section-title">Impara i Termini</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          GLOSSARIO<br />
          <span className="text-[#FAFF00]">CODICI AMICO</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Tutti i termini che devi conoscere per capire come funzionano i programmi referral
          e massimizzare i tuoi bonus.
        </p>
      </section>

      {/* Alphabet navigation */}
      <section className="px-6 md:px-12 py-4 border-b border-white/10">
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))).sort().map(letter => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-[#999] hover:bg-[#FAFF00] hover:text-[#111] font-bold text-sm transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-4xl space-y-8">
          {glossaryTerms.map((item, index) => (
            <div
              key={index}
              id={item.term[0].toUpperCase()}
              className="bg-white p-6 border border-[#e5e5e5]"
            >
              <h2 className="text-xl font-black text-[#111] mb-2">{item.term}</h2>
              {item.aliases && item.aliases.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.aliases.map((alias, i) => (
                    <span key={i} className="text-xs bg-[#f5f5f5] text-[#666] px-2 py-1">
                      {alias}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-[#666]">{item.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-3xl">
          <div className="section-title">Domande Frequenti</div>
          <h2 className="text-3xl font-black mb-8">FAQ SUI CODICI AMICO</h2>
          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Cosa significa codice amico?</h3>
              <p className="text-[#999]">
                Un codice amico e un codice alfanumerico univoco che un utente esistente puo condividere
                con amici per invitarli a iscriversi a un servizio. Quando l&apos;amico usa il codice,
                entrambi possono ricevere un bonus.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Come funziona un programma referral?</h3>
              <p className="text-[#999]">
                Un programma referral premia gli utenti che portano nuovi clienti. Chi invita condivide
                un codice o link, l&apos;invitato si iscrive usandolo, e dopo aver completato certi
                requisiti (es. un acquisto), entrambi ricevono un bonus.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">I codici amico scadono?</h3>
              <p className="text-[#999]">
                Dipende dal servizio. Alcuni codici sono sempre validi, altri hanno scadenze specifiche.
                Controlla sempre i termini della promozione. Su questo sito indichiamo le scadenze
                quando note.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-2xl font-black mb-4">PRONTO A RISPARMIARE?</h2>
          <p className="text-[#999] mb-8">
            Ora che conosci i termini, scopri i migliori codici amico disponibili.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/categoria/banche/" className="cta-btn">
              CODICI BANCHE
            </a>
            <a href="/confronto/" className="btn-secondary">
              CONFRONTA BANCHE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
