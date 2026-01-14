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
      {/* Breadcrumb */}
      <section className="px-6 md:px-12 py-6 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span className="mx-2">/</span>
          {category && (
            <>
              <a href={`/categoria/${category.slug}/`}>{category.name}</a>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-white">{code.name}</span>
        </nav>
      </section>

      {/* Main Content */}
      <article className="px-6 md:px-12 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          {code.featured && (
            <span className="inline-block px-3 py-1 bg-[#FAFF00] text-[#111] text-xs font-bold mb-4">
              ★ POPOLARE
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            CODICE AMICO <span className="text-[#FAFF00]">{code.name.toUpperCase()}</span>
          </h1>
          <p className="text-xl text-[#999] leading-relaxed">{code.description}</p>
        </header>

        {/* Bonus Box */}
        <div className="bg-[#FAFAFA] text-[#111] p-8 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#666] mb-6">💰 Bonus Disponibili</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white border-2 border-[#111]">
              <div className="text-sm text-[#666] mb-2">Tu ricevi</div>
              <div className="text-4xl font-black">{code.bonusInviter}</div>
            </div>
            <div className="text-center p-6 bg-white border-2 border-[#111]">
              <div className="text-sm text-[#666] mb-2">Amico riceve</div>
              <div className="text-4xl font-black">{code.bonusInvited}</div>
            </div>
          </div>
        </div>

        {/* Code Box */}
        <div className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#999] mb-4">🎟️ Il Codice</h2>
          {code.code === 'DA_INSERIRE' ? (
            <div className="p-8 border-2 border-dashed border-[#FAFF00] text-center">
              <p className="text-[#FAFF00] font-bold">🔜 Codice in arrivo — torna presto!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="code-box text-2xl">{code.code}</div>
              {code.link && (
                <a 
                  href={code.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-btn w-full justify-center text-center"
                >
                  VAI AL SITO {code.name.toUpperCase()} →
                </a>
              )}
            </div>
          )}
        </div>

        {/* How To */}
        <div className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#999] mb-6">📋 Come Ottenere il Bonus</h2>
          <ol className="space-y-4">
            {code.howTo.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="step-number flex-shrink-0">{index + 1}</span>
                <span className="text-[#999] pt-2">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Terms */}
        <div className="p-6 border border-white/10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#999] mb-3">📜 Termini e Condizioni</h2>
          <p className="text-[#666] text-sm">{code.terms}</p>
        </div>
      </article>
    </>
  );
}
