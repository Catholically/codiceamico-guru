import { referralCodes, getCodeBySlug, categories } from '@/data/codes';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { codeSlug: string };
}

export function generateStaticParams() {
  return referralCodes.filter(c => c.active).map((code) => ({
    codeSlug: code.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const code = getCodeBySlug(params.codeSlug);

  if (!code) {
    return { title: 'Codice non trovato' };
  }

  const title = `Codice Amico ${code.name} ${new Date().getFullYear()} | Bonus ${code.bonusInviter}`;
  const description = `Codice amico ${code.name}: ottieni ${code.bonusInviter} di bonus! ${code.description.slice(0, 120)}...`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://codiceamico.guru/${code.slug}/`,
    },
    openGraph: {
      title: `Codice Amico ${code.name} | ${code.bonusInviter}`,
      description,
      url: `https://codiceamico.guru/${code.slug}/`,
    },
  };
}

export default function CodePage({ params }: Props) {
  const code = getCodeBySlug(params.codeSlug);

  if (!code) {
    notFound();
  }

  const category = categories.find(c => c.id === code.category);
  const currentYear = new Date().getFullYear();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `Codice Amico ${code.name}`,
    description: code.description,
    url: `https://codiceamico.guru/${code.slug}/`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Come funziona il codice amico ${code.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Usando il codice amico ${code.name}, tu ricevi ${code.bonusInviter} e chi si iscrive riceve ${code.bonusInvited}.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          {category && (
            <>
              <a href={`/categoria/${category.slug}/`}>{category.name}</a>
              <span>/</span>
            </>
          )}
          <span className="text-white">{code.name}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-4">
          {code.featured && <div className="badge-yellow">IN EVIDENZA</div>}
          {category && <div className="text-xs font-bold tracking-wider text-[#666] uppercase">{category.icon} {category.name}</div>}
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          CODICE AMICO<br />
          <span className="text-[#FAFF00]">{code.name.toUpperCase()}</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          {code.description}
        </p>
      </section>

      {/* Main Content */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Bonus Box */}
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h2 className="text-lg font-black mb-4 text-[#111]">BONUS DISPONIBILI</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f5f5] p-4 text-center">
                  <span className="block text-xs text-[#999] mb-1">Tu ricevi</span>
                  <span className="block text-2xl font-black text-[#111]">{code.bonusInviter}</span>
                </div>
                <div className="bg-[#f5f5f5] p-4 text-center">
                  <span className="block text-xs text-[#999] mb-1">Amico riceve</span>
                  <span className="block text-2xl font-black text-[#111]">{code.bonusInvited}</span>
                </div>
              </div>
            </div>

            {/* Code Box */}
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h2 className="text-lg font-black mb-4 text-[#111]">IL CODICE</h2>
              {code.code === 'DA_INSERIRE' || code.code === 'CONTATTAMI' ? (
                <div className="bg-[#FAFF00]/10 border-2 border-dashed border-[#FAFF00] p-6 text-center">
                  <p className="text-[#111] font-medium">
                    {code.code === 'CONTATTAMI' ? 'Contattami per ricevere il codice personale' : 'Codice in arrivo - torna presto!'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="code-box">
                    {code.code}
                    <div className="text-xs text-[#FAFF00]/80 mt-2 font-normal">Clicca per copiare</div>
                  </div>
                  {code.link && (
                    <a
                      href={code.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn w-full justify-center"
                    >
                      VAI AL SITO {code.name.toUpperCase()} <span>→</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* How To */}
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h2 className="text-lg font-black mb-4 text-[#111]">COME OTTENERE IL BONUS</h2>
              <ol className="space-y-4">
                {code.howTo.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#111] text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-[#666] pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Terms */}
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h2 className="text-lg font-black mb-2 text-[#111]">TERMINI E CONDIZIONI</h2>
              <p className="text-[#666] text-sm">{code.terms}</p>
              {code.maxInvites && (
                <p className="text-[#999] text-sm mt-2">Limite: massimo {code.maxInvites} amici invitabili</p>
              )}
              {code.expiresAt && (
                <p className="text-orange-600 text-sm mt-2 font-medium">
                  Scadenza: {new Date(code.expiresAt).toLocaleDateString('it-IT')}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 border border-[#e5e5e5]">
                <h3 className="font-black text-[#111] mb-4">RIEPILOGO</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[#999]">Servizio</dt>
                    <dd className="font-bold text-[#111]">{code.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#999]">Categoria</dt>
                    <dd className="font-bold text-[#111]">{category?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#999]">Bonus per te</dt>
                    <dd className="font-bold text-[#111]">{code.bonusInviter}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#999]">Bonus amico</dt>
                    <dd className="font-bold text-[#111]">{code.bonusInvited}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#999]">Stato</dt>
                    <dd className="badge-yellow text-xs">ATTIVO</dd>
                  </div>
                </dl>
                {code.link && code.code !== 'DA_INSERIRE' && (
                  <a
                    href={code.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn w-full justify-center mt-6"
                  >
                    USA IL CODICE
                  </a>
                )}
              </div>
              <a
                href={category ? `/categoria/${category.slug}/` : '/'}
                className="block text-center text-[#111] hover:underline font-bold text-sm"
              >
                ← Altri codici {category?.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-3xl">
          <div className="section-title">Domande Frequenti</div>
          <h2 className="text-3xl font-black mb-8">FAQ SU {code.name.toUpperCase()}</h2>
          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Come funziona il codice amico {code.name}?</h3>
              <p className="text-[#999]">
                Il programma porta un amico di {code.name} ti permette di ottenere {code.bonusInviter} quando inviti un amico.
                Chi si iscrive usando il tuo codice riceve {code.bonusInvited}.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Il codice {code.name} e ancora valido nel {currentYear}?</h3>
              <p className="text-[#999]">
                {code.expiresAt
                  ? `Si, il codice e valido fino al ${new Date(code.expiresAt).toLocaleDateString('it-IT')}.`
                  : `Si, il codice amico ${code.name} e attualmente attivo.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
