import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide ai Programmi Referral | Come Funzionano i Codici Amico',
  description: 'Guide dettagliate sui migliori programmi referral in Italia: N26 Invita i Tuoi Amici, Revolut, BBVA Passaparola, Wise, Satispay, Octopus Energy e altri.',
  keywords: [
    'guide codici amico',
    'programmi referral italia',
    'come funziona invita amici',
    'bonus referral',
    'guadagnare con referral',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/guide/',
  },
  openGraph: {
    title: 'Guide ai Programmi Referral',
    description: 'Scopri come funzionano i migliori programmi referral in Italia e come massimizzare i tuoi guadagni.',
    url: 'https://codiceamico.guru/guide/',
    type: 'website',
  },
};

// Lista delle guide/landing page SEO
const guides = [
  {
    title: 'N26 Invita i Tuoi Amici',
    description: 'Come funziona il programma referral N26: 5 euro per chi invita e 5 euro per chi viene invitato.',
    url: '/n26-invita-i-tuoi-amici/',
    category: 'Banche',
    bonus: '5€ + 5€',
    color: 'bg-teal-500',
  },
  {
    title: 'Revolut Invita un Amico',
    description: 'Scopri il programma referral Revolut: fino a 50 euro di bonus per ogni amico che inviti.',
    url: '/revolut-invita-un-amico/',
    category: 'Banche',
    bonus: 'Fino a 50€',
    color: 'bg-purple-600',
  },
  {
    title: 'BBVA Passaparola',
    description: 'Il programma Passaparola BBVA: 10 euro per te, 10 euro per il tuo amico + 3% interessi e cashback.',
    url: '/bbva-passaparola/',
    category: 'Banche',
    bonus: '10€ + 10€',
    color: 'bg-blue-600',
  },
  {
    title: 'Satispay Invita un Amico',
    description: 'Come guadagnare 5 euro per ogni amico che si registra su Satispay con il tuo codice.',
    url: '/satispay-invita-un-amico/',
    category: 'Banche',
    bonus: '5€ + 5€',
    color: 'bg-red-500',
  },
  {
    title: 'Wise Invita Amici',
    description: 'Trasferimenti internazionali gratis fino a 500 euro. Guadagna 90 euro ogni 3 amici invitati.',
    url: '/wise-invita-amici/',
    category: 'Finanza',
    bonus: '90€ ogni 3 amici',
    color: 'bg-green-500',
  },
  {
    title: 'ING Conto Arancio 4%',
    description: 'Guida completa a ING Conto Arancio: 4% di interessi sui risparmi + 4% cashback per 6 mesi.',
    url: '/codice-amico-ing-conto-arancio-4-percento/',
    category: 'Banche',
    bonus: '4% + 4%',
    color: 'bg-orange-500',
  },
  {
    title: 'Octopus Energy Octofriends',
    description: 'Il programma Octofriends: 30 euro di sconto sulla bolletta per te e per ogni amico che inviti.',
    url: '/octopus-energy-octofriends/',
    category: 'Energia',
    bonus: '30€ + 30€',
    color: 'bg-pink-500',
  },
  {
    title: 'Glovo Invita un Amico',
    description: 'Ottieni 3 consegne gratuite per te e per i tuoi amici con il programma referral Glovo.',
    url: '/glovo-invita-un-amico/',
    category: 'Delivery',
    bonus: '3 consegne gratis',
    color: 'bg-yellow-500',
  },
  {
    title: 'Genertel Piu Buoni Insieme',
    description: 'Guadagna 50 euro in buoni Amazon per ogni amico che acquista una polizza Genertel.',
    url: '/genertel-piu-buoni-insieme/',
    category: 'Assicurazioni',
    bonus: '50€ Amazon',
    color: 'bg-red-600',
  },
  {
    title: 'American Express Business Platinum',
    description: 'La carta premium per professionisti e aziende. Accesso lounge, assicurazioni viaggio e Membership Rewards.',
    url: '/amex-business-platinum-referral/',
    category: 'Banche',
    bonus: 'Bonus punti',
    color: 'bg-gray-800',
  },
];

export default function GuidePage() {
  const currentYear = new Date().getFullYear();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Guide ai Programmi Referral',
    description: 'Raccolta di guide dettagliate sui migliori programmi referral in Italia.',
    publisher: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
      url: 'https://codiceamico.guru',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="text-white">Guide</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-6xl">
        <div className="badge-yellow mb-4">AGGIORNATO GENNAIO {currentYear}</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          GUIDE AI PROGRAMMI<br />
          <span className="text-[#FAFF00]">REFERRAL</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Scopri come funzionano i migliori programmi "Invita un Amico" in Italia.
          Guide dettagliate per massimizzare i tuoi guadagni con i codici referral.
        </p>
      </section>

      {/* Guides Grid */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <a
              key={guide.url}
              href={guide.url}
              className="group border border-white/10 p-6 hover:border-[#FAFF00] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`${guide.color} text-white text-xs font-bold px-2 py-1`}>
                  {guide.category.toUpperCase()}
                </span>
                <span className="text-[#FAFF00] text-xs font-bold">
                  {guide.bonus}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FAFF00] transition-colors">
                {guide.title}
              </h2>
              <p className="text-[#999] text-sm">
                {guide.description}
              </p>
              <div className="mt-4 text-[#FAFF00] text-sm font-bold">
                Leggi la guida →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-4xl text-center mx-auto">
          <h2 className="text-3xl font-black text-[#111] mb-4">
            NON HAI TROVATO QUELLO CHE CERCHI?
          </h2>
          <p className="text-[#666] mb-6">
            Esplora tutti i codici amico disponibili organizzati per categoria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/categoria/banche/" className="px-6 py-3 bg-[#111] text-white font-bold hover:bg-[#333] transition-colors">
              BANCHE →
            </a>
            <a href="/categoria/finanza/" className="px-6 py-3 bg-[#111] text-white font-bold hover:bg-[#333] transition-colors">
              FINANZA →
            </a>
            <a href="/categoria/energia/" className="px-6 py-3 bg-[#111] text-white font-bold hover:bg-[#333] transition-colors">
              ENERGIA →
            </a>
            <a href="/categoria/delivery/" className="px-6 py-3 bg-[#111] text-white font-bold hover:bg-[#333] transition-colors">
              DELIVERY →
            </a>
            <a href="/categoria/assicurazioni/" className="px-6 py-3 bg-[#111] text-white font-bold hover:bg-[#333] transition-colors">
              ASSICURAZIONI →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
