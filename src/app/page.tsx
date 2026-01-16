import { categories, getFeaturedCodes, getAllActiveCodes } from '@/data/codes';

export default function HomePage() {
  const featuredCodes = getFeaturedCodes();
  const allCodes = getAllActiveCodes();

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

        <a href="#in-evidenza" className="cta-btn">
          ESPLORA I CODICI <span>→</span>
        </a>

        <div className="stats-row flex-wrap">
          <div className="flex items-baseline gap-3">
            <span className="stat-num">{allCodes.length}+</span>
            <span className="stat-label">Codici</span>
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
              <a key={code.id} href={`/${code.slug}/`} className="card block">
                <div className="card-cat">{cat?.name || code.category}</div>
                <h3>{code.name}</h3>
                <div className="flex gap-8 mb-4">
                  <div>
                    <span className="bonus-label">Tu ricevi</span>
                    <span className="bonus-value">{code.bonusInviter}</span>
                  </div>
                  <div>
                    <span className="bonus-label">Amico</span>
                    <span className="bonus-value">{code.bonusInvited}</span>
                  </div>
                </div>
                <p>{code.description.slice(0, 60)}...</p>
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
                Bonus: {code.bonusInviter}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
