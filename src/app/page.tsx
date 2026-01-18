import { categories, getFeaturedCodes, getAllActiveCodes } from '@/data/codes';
import SearchCodes from '@/components/SearchCodes';

export default function HomePage() {
  const featuredCodes = getFeaturedCodes();
  const allCodes = getAllActiveCodes();

  // Schema.org WebSite per homepage
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodiceAmico.guru',
    url: 'https://codiceamico.guru/',
    description: 'I migliori codici amico e referral in Italia per banche, energia, telefonia e delivery. Risparmia fino a 200€.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://codiceamico.guru/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Schema.org ItemList per codici in evidenza
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Codici Amico in Evidenza',
    description: 'I migliori codici referral selezionati per te',
    numberOfItems: featuredCodes.length,
    itemListElement: featuredCodes.map((code, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: code.name,
      url: `https://codiceamico.guru/${code.slug}/`,
    })),
  };

  const categoryIcons: Record<string, JSX.Element> = {
    banche: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
    finanza: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
      </svg>
    ),
    energia: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    telefonia: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    delivery: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    assicurazioni: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    altro: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="8" width="18" height="14" rx="2" />
        <path d="M16 8V6a4 4 0 00-8 0v2M12 14v2" />
      </svg>
    ),
  };

  const categoryNames: Record<string, string> = {
    banche: 'BANCHE E CONTI',
    finanza: 'INVESTIMENTI',
    energia: 'LUCE E GAS',
    telefonia: 'TELEFONIA',
    delivery: 'FOOD E DELIVERY',
    assicurazioni: 'ASSICURAZIONI',
    altro: 'ALTRI SERVIZI',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl">
        <div className="inline-flex items-center gap-3 bg-[#FAFF00] text-[#111] px-5 py-3 mb-8 font-bold text-sm tracking-wide">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#111] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#111]"></span>
          </span>
          AGGIORNATO GENNAIO 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          I MIGLIORI<br />
          CODICI <span className="text-[#FAFF00]">AMICO</span><br />
          IN ITALIA
        </h1>

        <p className="text-xl text-[#999] max-w-lg mb-8 leading-relaxed">
          Risparmia fino a €200 su banche, energia, telefonia e delivery con codici referral verificati.
        </p>

        <div className="mb-8">
          <SearchCodes codes={allCodes} />
        </div>

        <a href="#in-evidenza" className="cta-btn">
          ESPLORA I CODICI <span>→</span>
        </a>

        <div className="stats-row flex-wrap">
          <div className="flex items-baseline gap-3">
            <span className="stat-num">{allCodes.filter(c => c.verified).length}+</span>
            <span className="stat-label">Codici Verificati</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="stat-num">{allCodes.length}+</span>
            <span className="stat-label">Aziende</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="stat-num">€200</span>
            <span className="stat-label">Max Risparmio</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="stat-num">{categories.length}</span>
            <span className="stat-label">Categorie</span>
          </div>
        </div>
      </section>

      {/* In Evidenza */}
      <section className="light-section py-16 px-6 md:px-12" id="in-evidenza">
        <div className="section-title">★ In Evidenza</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {featuredCodes.map((code) => {
            const cat = categories.find(c => c.id === code.category);
            return (
              <a key={code.id} href={`/${code.slug}/`} className="card block relative">
                {code.verified && (
                  <div className="absolute top-4 right-4 badge-green text-[10px]">VERIFICATO</div>
                )}
                <div className="card-cat">{cat?.name || code.category}</div>
                <h3>{code.name}</h3>
                <div className="flex gap-8 mb-4">
                  <div>
                    <span className="bonus-label">Tu ricevi</span>
                    <span className="bonus-value">{code.bonusInvited}</span>
                  </div>
                  <div>
                    <span className="bonus-label">Presentatore</span>
                    <span className="bonus-value">{code.bonusInviter}</span>
                  </div>
                </div>
                <p>{code.description.slice(0, 60)}...</p>
                {code.usageCount && (
                  <div className="mt-3 pt-3 border-t border-[#e5e5e5] text-xs text-[#999]">
                    Usato {code.usageCount}+ volte
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </section>

      {/* Categorie */}
      <section className="py-16 px-6 md:px-12" id="categorie">
        <div className="section-title">Esplora per Categoria</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl border border-white/20">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`/categoria/${category.slug}/`}
              className="group relative p-8 border-b border-r border-white/20 hover:bg-[#FAFF00] transition-all duration-300"
            >
              <span className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-[#111]/10 transition-colors">
                0{index + 1}
              </span>
              <div className="mb-6 text-white/70 group-hover:text-[#111] group-hover:scale-110 transition-all duration-300">
                {categoryIcons[category.id]}
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-[#111]">
                {categoryNames[category.id] || category.name.toUpperCase()}
              </h3>
              <span className="inline-block mt-4 text-[#FAFF00] group-hover:text-[#111] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                ESPLORA →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Tutti i Codici */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10" id="tutti-codici">
        <div className="section-title">Tutti i Codici</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl">
          {allCodes.map((code) => (
            <a
              key={code.id}
              href={`/${code.slug}/`}
              className="p-4 border border-white/10 hover:border-[#FAFF00] hover:bg-[#FAFF00] hover:text-[#111] transition-all group"
            >
              <h3 className="font-bold mb-1">{code.name}</h3>
              <div className="text-sm text-[#999] group-hover:text-[#111]/70">
                Bonus: {code.bonusInvited}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Guide e Risorse */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10" id="guide">
        <div className="section-title">Guide e Risorse</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href="/blog/dove-pubblicare-codice-amico/"
            className="group p-6 md:p-8 border border-white/20 hover:border-[#FAFF00] hover:bg-[#FAFF00]/5 transition-all"
          >
            <span className="text-[#FAFF00] text-xs font-bold tracking-wider">GUIDA</span>
            <h3 className="text-xl md:text-2xl font-black mt-2 mb-3 group-hover:text-[#FAFF00] transition-colors">
              Dove Pubblicare il Tuo Codice Amico
            </h3>
            <p className="text-[#999] text-sm mb-4">
              Scopri i migliori siti e metodi per condividere i tuoi codici referral e massimizzare i guadagni.
            </p>
            <span className="text-[#FAFF00] font-bold text-sm group-hover:underline">
              Leggi la guida →
            </span>
          </a>
          <a
            href="/inserisci-codice/"
            className="group p-6 md:p-8 border border-white/20 hover:border-[#FAFF00] hover:bg-[#FAFF00]/5 transition-all"
          >
            <span className="text-[#FAFF00] text-xs font-bold tracking-wider">STRUMENTO</span>
            <h3 className="text-xl md:text-2xl font-black mt-2 mb-3 group-hover:text-[#FAFF00] transition-colors">
              Inserisci il Tuo Codice Gratis
            </h3>
            <p className="text-[#999] text-sm mb-4">
              Pubblica gratuitamente il tuo codice amico e raggiungi migliaia di utenti ogni mese.
            </p>
            <span className="text-[#FAFF00] font-bold text-sm group-hover:underline">
              Inserisci ora →
            </span>
          </a>
        </div>
        <div className="mt-6 max-w-4xl">
          <a href="/blog/" className="text-[#666] hover:text-[#FAFF00] text-sm font-medium transition-colors">
            Vedi tutte le guide →
          </a>
        </div>
      </section>

      {/* CTA Inserisci Codice */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#FAFF00]/20 to-[#FAFF00]/5 border border-[#FAFF00]/30 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              HAI UN CODICE DA CONDIVIDERE?
            </h2>
            <p className="text-[#999] text-lg mb-6 max-w-xl mx-auto">
              Inserisci il tuo codice amico e raggiungi migliaia di utenti ogni mese. Aumenta le tue possibilita di guadagno!
            </p>
            <a href="/inserisci-codice/" className="cta-btn">
              INSERISCI IL TUO CODICE <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
