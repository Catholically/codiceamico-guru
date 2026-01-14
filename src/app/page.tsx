import { categories, getFeaturedCodes, getAllActiveCodes } from '@/data/codes';

export default function HomePage() {
  const featuredCodes = getFeaturedCodes();
  const allCodes = getAllActiveCodes();

  return (
    <>
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Aggiornato Gennaio 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-6">
            I Migliori <span className="guru-text-gradient">Codici Amico</span> in Italia
          </h1>
          <p className="text-xl text-stone-600 mb-10">
            Risparmia su banche, energia, telefonia e delivery con i codici referral verificati.
            <strong className="text-stone-800"> Bonus fino a 200€!</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#categorie" className="btn-primary text-lg px-8 py-4">🔍 Esplora i Codici</a>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-900">{allCodes.length}+</div>
              <div className="text-stone-500">Codici Attivi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-900">{categories.length}</div>
              <div className="text-stone-500">Categorie</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">200€+</div>
              <div className="text-stone-500">Risparmio Max</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="in-evidenza">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge-green mb-4">⭐ In Evidenza</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-4">Codici Più Popolari</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCodes.map((code) => (
              <a key={code.id} href={`/${code.slug}/`} className="card-hover category-card group">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-green-600 mb-2">{code.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-semibold">Tu ricevi:</span>
                    <span className="badge-green">{code.bonusInviter}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600 font-semibold">Amico riceve:</span>
                    <span className="badge-blue">{code.bonusInvited}</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm line-clamp-2">{code.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50" id="categorie">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Esplora per Categoria</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a key={category.id} href={`/categoria/${category.slug}/`} className="card-hover category-card group">
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-green-600">{category.name}</h3>
                <p className="text-stone-500 text-sm mt-2">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50" id="tutti-codici">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Tutti i Codici Amico</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allCodes.map((code) => (
              <a key={code.id} href={`/${code.slug}/`} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-green-500 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-stone-900 group-hover:text-green-600">{code.name}</h3>
                <div className="text-sm text-green-600 font-medium">Bonus: {code.bonusInviter}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
