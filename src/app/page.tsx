import { categories, getFeaturedCodes, getAllActiveCodes } from '@/data/codes';

export default function HomePage() {
  const featuredCodes = getFeaturedCodes();
  const allCodes = getAllActiveCodes();

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl">
        <div className="hero-eyebrow">Gennaio 2026</div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          I MIGLIORI<br/>
          CODICI <span className="text-[#FAFF00]">AMICO</span><br/>
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

      {/* Featured Section - Light */}
      <section className="light-section py-16 px-6 md:px-12" id="in-evidenza">
        <div className="section-title">★ In Evidenza</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {featuredCodes.map((code) => (
            <a key={code.id} href={`/${code.slug}/`} className="card block">
              <div className="card-cat">{categories.find(c => c.id === code.category)?.name}</div>
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
              <p>{code.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 md:px-12" id="categorie">
        <div className="section-title">Esplora per Categoria</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
          {categories.map((category) => (
            <a key={category.id} href={`/categoria/${category.slug}/`} className="category-card block">
              <span className="cat-icon text-4xl block mb-4 transition-transform">{category.icon}</span>
              <h3 className="text-lg font-bold mb-2">{category.name}</h3>
              <p className="cat-desc text-sm text-[#666]">{category.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* All Codes Section */}
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
              <div className="text-sm text-[#999] group-hover:text-[#111]/70">Bonus: {code.bonusInviter}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
