import { categories, getFeaturedCodes, getAllActiveCodes } from '@/data/codes';

export default function HomePage() {
  const featuredCodes = getFeaturedCodes();
  const allCodes = getAllActiveCodes();

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl">
        {/* Badge Aggiornamento */}
        <div className="inline-flex items-center gap-3 bg-[#FAFF00] text-[#111] px-5 py-3 mb-8 font-bold text-sm tracking-wide">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#111] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#111]"></span>
          </span>
          AGGIORNATO GENNAIO 2026
        </div>
        
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

      {/* Categories Section - NUOVO STILE MODERNO */}
      <section className="py-16 px-6 md:px-12" id="categorie">
        <div className="section-title">Esplora per Categoria</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl border border-white/20">
          {categories.map((category, index) => (
            <a 
              key={category.id} 
              href={`/categoria/${category.slug}/`} 
              className="group relative p-8 border-b border-r border-white/20 hover:bg-[#FAFF00] transition-all duration-300"
            >
              {/* Numero in background */}
              <span className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-[#111]/10 transition-colors">
                0{index + 1}
              </span>
              
              {/* Icon grande */}
              <span className="text-5xl block mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </span>
              
              {/* Nome categoria */}
              <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-[#111]">
                {category.name.toUpperCase()}
              </h3>
              
              {/* Arrow che appare on hover */}
              <span className="inline-block mt-4 text-[#FAFF00] group-hover:text-[#111] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                ESPLORA →
              </span>
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
