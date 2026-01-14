import { referralCodes, getCodeBySlug, categories } from '@/data/codes';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return referralCodes.filter(c => c.active).map((code) => ({ codeSlug: code.slug }));
}

export default function CodePage({ params }: { params: { codeSlug: string } }) {
  const code = getCodeBySlug(params.codeSlug);
  if (!code) notFound();
  
  const category = categories.find(c => c.id === code.category);

  return (
    <>
      <section className="bg-stone-50 border-b border-stone-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-stone-500">
            <a href="/" className="hover:text-green-600">Home</a>
            <span>/</span>
            {category && <><a href={`/categoria/${category.slug}/`} className="hover:text-green-600">{category.name}</a><span>/</span></>}
            <span className="text-stone-900 font-medium">{code.name}</span>
          </nav>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            {code.featured && <span className="badge-yellow mb-4">⭐ Popolare</span>}
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Codice Amico {code.name}</h1>
            <p className="text-lg text-stone-600">{code.description}</p>
          </header>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
            <h2 className="text-xl font-bold text-stone-900 mb-4">💰 Bonus Disponibili</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-stone-500 mb-1">Tu ricevi</div>
                <div className="text-2xl font-bold text-green-600">{code.bonusInviter}</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-sm text-stone-500 mb-1">Amico riceve</div>
                <div className="text-2xl font-bold text-blue-600">{code.bonusInvited}</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-stone-900 mb-4">🎟️ Il Codice</h2>
            {code.code === 'DA_INSERIRE' ? (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
                <p className="text-yellow-800 font-medium">🔜 Codice in arrivo - torna presto!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="code-box">{code.code}</div>
                {code.link && <a href={code.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">Vai al sito {code.name} →</a>}
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-stone-900 mb-4">📋 Come Ottenere il Bonus</h2>
            <ol className="space-y-3">
              {code.howTo.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 guru-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</span>
                  <span className="text-stone-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-stone-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-stone-900 mb-2">📜 Termini e Condizioni</h2>
            <p className="text-stone-600 text-sm">{code.terms}</p>
          </div>
        </div>
      </article>
    </>
  );
}
