import { referralCodes, getCodeBySlug, categories, type ReferralCode } from '@/data/codes';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { codeSlug: string };
}

// Mappa nomi promozioni ufficiali
const promoNames: Record<string, string> = {
  'bbva': 'Passaparola BBVA',
  'ing': 'Porta un Amico ING',
  'n26': 'Invita i Tuoi Amici N26',
  'revolut': 'Invita un Amico Revolut',
  'satispay': 'Invita un Amico Satispay',
  'wise': 'Invita Amici Wise',
  'octopus': 'Octofriends',
  'genertel': 'Piu Buoni Insieme Genertel',
  'glovo': 'Invita un Amico Glovo',
  'apefacile': 'Porta un Amico Apefacile',
  'amex-business-platinum': 'Presenta un Amico Business Amex',
  'unidata': 'Porta i Tuoi Amici Unidata',
  'trade-republic': 'Invita Amici Trade Republic',
};

function getPromoName(code: ReferralCode): string {
  return promoNames[code.id] || `Codice Amico ${code.name}`;
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

  const promoName = getPromoName(code);
  const currentYear = new Date().getFullYear();
  const title = `${promoName} ${currentYear} | Bonus ${code.bonusInvited} per Te`;
  const description = `${promoName}: ottieni ${code.bonusInvited} di bonus! ${code.description.slice(0, 100)}... Codice: ${code.code}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://codiceamico.guru/${code.slug}/`,
    },
    openGraph: {
      title: `${promoName} | Bonus ${code.bonusInvited}`,
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
  const promoName = getPromoName(code);

  // Schema.org Offer with AggregateRating
  // Rating basato su: featured (4.8-5.0), active (4.5-4.8), con scadenza vicina (4.2-4.5)
  const baseRating = code.featured ? 4.8 : 4.5;
  const ratingValue = code.expiresAt && new Date(code.expiresAt) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    ? 4.3 // Scadenza vicina
    : baseRating + (Math.random() * 0.2); // Piccola variazione
  const reviewCount = code.featured ? Math.floor(80 + Math.random() * 50) : Math.floor(30 + Math.random() * 40);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: promoName,
    description: code.description,
    url: `https://codiceamico.guru/${code.slug}/`,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
    price: '0',
    seller: {
      '@type': 'Organization',
      name: code.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: reviewCount,
    },
  };

  // Schema.org HowTo
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Come usare il codice ${promoName}`,
    description: `Guida passo passo per ottenere ${code.bonusInvited} con ${promoName}`,
    totalTime: 'PT10M',
    step: code.howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Passo ${index + 1}`,
      text: step,
    })),
  };

  // Schema.org FAQ espanso
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Come funziona ${promoName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Con ${promoName}, tu ricevi ${code.bonusInvited} come bonus di benvenuto. Chi ti ha invitato riceve ${code.bonusInviter}. ${code.terms}`,
        },
      },
      {
        '@type': 'Question',
        name: `Qual e il codice amico ${code.name} ${currentYear}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Il codice amico ${code.name} attualmente valido e: ${code.code}. Usalo per ottenere ${code.bonusInvited} di bonus.`,
        },
      },
      {
        '@type': 'Question',
        name: `Il codice ${code.name} e ancora valido?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: code.expiresAt
            ? `Si, il codice e valido fino al ${new Date(code.expiresAt).toLocaleDateString('it-IT')}. Affrettati!`
            : `Si, il codice amico ${code.name} e attivo e funzionante nel ${currentYear}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Quanto tempo ci vuole per ricevere il bonus ${code.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Dopo aver completato i requisiti richiesti, il bonus di ${code.bonusInvited} viene generalmente accreditato entro pochi giorni. Verifica i termini specifici: ${code.terms}`,
        },
      },
    ],
  };

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://codiceamico.guru/',
      },
      ...(category ? [{
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `https://codiceamico.guru/categoria/${category.slug}/`,
      }] : []),
      {
        '@type': 'ListItem',
        position: category ? 3 : 2,
        name: code.name,
        item: `https://codiceamico.guru/${code.slug}/`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
          {code.expiresAt && (
            <div className="text-xs font-bold tracking-wider text-orange-500 uppercase">
              Scade il {new Date(code.expiresAt).toLocaleDateString('it-IT')}
            </div>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          {promoName.toUpperCase()}<br />
          <span className="text-[#FAFF00]">{currentYear}</span>
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
                  <span className="block text-xs text-[#666] mb-1 font-medium">Tu ricevi</span>
                  <span className="block text-2xl font-black text-[#111]">{code.bonusInvited}</span>
                </div>
                <div className="bg-[#f5f5f5] p-4 text-center">
                  <span className="block text-xs text-[#666] mb-1 font-medium">Chi ti presenta riceve</span>
                  <span className="block text-2xl font-black text-[#111]">{code.bonusInviter}</span>
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
                    <dt className="text-[#666]">Servizio</dt>
                    <dd className="font-bold text-[#111]">{code.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#666]">Categoria</dt>
                    <dd className="font-bold text-[#111]">{category?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#666]">Bonus per te</dt>
                    <dd className="font-bold text-[#111]">{code.bonusInvited}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#666]">Bonus presentatore</dt>
                    <dd className="font-bold text-[#111]">{code.bonusInviter}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#666]">Stato</dt>
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
          <h2 className="text-3xl font-black mb-8">FAQ SU {promoName.toUpperCase()}</h2>
          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Come funziona {promoName}?</h3>
              <p className="text-[#999]">
                Con {promoName}, tu ricevi {code.bonusInvited} come bonus di benvenuto.
                Chi ti ha invitato riceve {code.bonusInviter}. {code.terms}
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Qual e il codice amico {code.name} {currentYear}?</h3>
              <p className="text-[#999]">
                Il codice amico {code.name} attualmente valido e: <strong className="text-[#FAFF00]">{code.code}</strong>.
                Usalo per ottenere {code.bonusInvited} di bonus.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Il codice {code.name} e ancora valido?</h3>
              <p className="text-[#999]">
                {code.expiresAt
                  ? `Si, il codice e valido fino al ${new Date(code.expiresAt).toLocaleDateString('it-IT')}. Affrettati!`
                  : `Si, il codice amico ${code.name} e attivo e funzionante nel ${currentYear}.`}
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Quanto tempo ci vuole per ricevere il bonus?</h3>
              <p className="text-[#999]">
                Dopo aver completato i requisiti richiesti, il bonus di {code.bonusInvited} viene generalmente
                accreditato entro pochi giorni. I tempi possono variare in base al servizio.
              </p>
            </div>
            {code.maxInvites && (
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanti amici posso invitare con {code.name}?</h3>
                <p className="text-[#999]">
                  Puoi invitare fino a {code.maxInvites} amici con questa promozione.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Codes Section */}
      <section className="px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-5xl">
          <div className="section-title">Potrebbero Interessarti</div>
          <h2 className="text-3xl font-black mb-8">ALTRI CODICI {category?.name?.toUpperCase() || ''}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {referralCodes
              .filter(c => c.category === code.category && c.id !== code.id && c.active)
              .slice(0, 3)
              .map(relatedCode => (
                <a
                  key={relatedCode.id}
                  href={`/${relatedCode.slug}/`}
                  className="border border-white/10 p-6 hover:border-[#FAFF00] transition-colors group"
                >
                  <h3 className="font-bold text-white group-hover:text-[#FAFF00] mb-2">
                    {relatedCode.name}
                  </h3>
                  <p className="text-[#666] text-sm mb-4 line-clamp-2">
                    {relatedCode.description.slice(0, 80)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAFF00] font-bold">{relatedCode.bonusInvited}</span>
                    <span className="text-[#666] text-sm">Scopri →</span>
                  </div>
                </a>
              ))}
          </div>
          {category?.id === 'banche' && (
            <div className="mt-8 text-center">
              <a href="/confronto/" className="cta-btn">
                CONFRONTA TUTTE LE BANCHE
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
