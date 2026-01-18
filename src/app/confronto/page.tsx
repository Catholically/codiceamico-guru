import type { Metadata } from 'next';
import { referralCodes, categories } from '@/data/codes';

export const metadata: Metadata = {
  title: 'Confronto Banche Online 2026 | N26 vs Revolut vs BBVA vs ING',
  description: 'Confronta le migliori banche online in Italia: N26, Revolut, BBVA, ING e Satispay. Scopri bonus, costi, funzionalita e quale scegliere nel 2026.',
  alternates: {
    canonical: 'https://codiceamico.guru/confronto/',
  },
};

const bankIds = ['n26', 'revolut', 'bbva', 'ing', 'satispay'];

export default function ConfrontoPage() {
  const banks = referralCodes.filter(c => bankIds.includes(c.id) && c.active);
  const currentYear = new Date().getFullYear();

  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Confronto Banche Online Italia 2026',
    description: 'Le migliori banche online a confronto con bonus referral',
    itemListElement: banks.map((bank, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BankOrCreditUnion',
        name: bank.name,
        description: bank.description,
        url: `https://codiceamico.guru/${bank.slug}/`,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qual e la migliore banca online in Italia nel 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dipende dalle tue esigenze. N26 e ideale per chi viaggia, Revolut per il cambio valuta, BBVA per gli interessi sul saldo (3%), ING per un conto completo tradizionale, Satispay per i pagamenti nei negozi fisici.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quale banca online offre il bonus piu alto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ING offre 50 euro di cashback + 4% interessi. BBVA offre 10 euro + 3% interessi + 3% cashback. Revolut offre bonus variabili fino a 70 euro. I bonus cambiano frequentemente.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le banche online sono sicure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, tutte le banche elencate sono regolamentate e offrono protezione depositi fino a 100.000 euro (garanzia FITD o equivalente europeo). N26 ha licenza tedesca, Revolut lituana, BBVA e ING spagnola.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="text-white">Confronto Banche</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="section-title">Guida Comparativa</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          CONFRONTO BANCHE<br />
          <span className="text-[#FAFF00]">ONLINE {currentYear}</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Quale banca online scegliere? Confronta N26, Revolut, BBVA, ING e Satispay:
          bonus, costi, funzionalita e codici amico per risparmiare.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl font-black text-[#111] mb-8">TABELLA COMPARATIVA</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-[#e5e5e5]">
              <thead>
                <tr className="bg-[#111] text-white">
                  <th className="p-4 text-left font-bold">Banca</th>
                  <th className="p-4 text-center font-bold">Bonus per Te</th>
                  <th className="p-4 text-center font-bold">Interessi</th>
                  <th className="p-4 text-center font-bold">Costo Conto</th>
                  <th className="p-4 text-center font-bold">IBAN</th>
                  <th className="p-4 text-center font-bold">Codice</th>
                </tr>
              </thead>
              <tbody>
                {banks.map((bank, index) => (
                  <tr key={bank.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'}>
                    <td className="p-4 border-b border-[#e5e5e5]">
                      <a href={`/${bank.slug}/`} className="font-bold text-[#111] hover:text-[#FAFF00] transition-colors">
                        {bank.name}
                      </a>
                    </td>
                    <td className="p-4 border-b border-[#e5e5e5] text-center font-bold text-green-600">
                      {bank.bonusInvited}
                    </td>
                    <td className="p-4 border-b border-[#e5e5e5] text-center text-[#666]">
                      {bank.id === 'ing' && '4% (6 mesi)'}
                      {bank.id === 'bbva' && '3% (6 mesi)'}
                      {bank.id === 'n26' && '0%'}
                      {bank.id === 'revolut' && '3.34%*'}
                      {bank.id === 'satispay' && 'N/A'}
                    </td>
                    <td className="p-4 border-b border-[#e5e5e5] text-center text-[#666]">
                      {bank.id === 'ing' && '5 euro/mese**'}
                      {bank.id === 'bbva' && 'Gratis'}
                      {bank.id === 'n26' && 'Gratis'}
                      {bank.id === 'revolut' && 'Gratis***'}
                      {bank.id === 'satispay' && 'Gratis'}
                    </td>
                    <td className="p-4 border-b border-[#e5e5e5] text-center text-[#666]">
                      {bank.id === 'ing' && 'IT'}
                      {bank.id === 'bbva' && 'ES'}
                      {bank.id === 'n26' && 'DE'}
                      {bank.id === 'revolut' && 'LT'}
                      {bank.id === 'satispay' && 'N/A'}
                    </td>
                    <td className="p-4 border-b border-[#e5e5e5] text-center">
                      <a
                        href={`/${bank.slug}/`}
                        className="inline-block bg-[#FAFF00] text-[#111] px-3 py-1 text-sm font-bold hover:bg-[#e6eb00] transition-colors"
                      >
                        {bank.code.length > 12 ? 'VEDI CODICE' : bank.code}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-[#666]">
            <p>* Revolut: interessi disponibili solo con piano Plus, Premium o Metal</p>
            <p>** ING: canone azzerabile con accredito stipendio o 1000 euro/mese di entrate</p>
            <p>*** Revolut: piani premium a pagamento disponibili con funzionalita aggiuntive</p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-black mb-8">ANALISI DETTAGLIATA</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {banks.map(bank => (
              <div key={bank.id} className="border border-white/10 p-6">
                <h3 className="text-xl font-black text-[#FAFF00] mb-2">{bank.name}</h3>
                <p className="text-[#999] mb-4">{bank.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Bonus: {bank.bonusInvited}</span>
                  <a
                    href={`/${bank.slug}/`}
                    className="cta-btn text-sm"
                  >
                    USA CODICE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-black text-[#111] mb-8">QUALE SCEGLIERE?</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="font-bold text-[#111] mb-2">Per viaggiare all&apos;estero</h3>
              <p className="text-[#666] mb-2">
                <strong>Revolut</strong> e <strong>N26</strong> sono le migliori. Cambio valuta in tempo reale,
                prelievi gratuiti all&apos;estero, carte virtuali per acquisti online sicuri.
              </p>
              <div className="flex gap-2">
                <a href="/codice-amico-revolut/" className="text-sm text-[#111] font-bold hover:underline">Codice Revolut</a>
                <span className="text-[#999]">|</span>
                <a href="/codice-amico-n26/" className="text-sm text-[#111] font-bold hover:underline">Codice N26</a>
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="font-bold text-[#111] mb-2">Per guadagnare interessi sui risparmi</h3>
              <p className="text-[#666] mb-2">
                <strong>ING</strong> offre il 4% lordo per 6 mesi (fino a 50.000 euro).
                <strong> BBVA</strong> offre il 3% senza vincoli. Entrambe ottime per parcheggiare liquidita.
              </p>
              <div className="flex gap-2">
                <a href="/codice-amico-ing/" className="text-sm text-[#111] font-bold hover:underline">Codice ING</a>
                <span className="text-[#999]">|</span>
                <a href="/codice-amico-bbva/" className="text-sm text-[#111] font-bold hover:underline">Codice BBVA</a>
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="font-bold text-[#111] mb-2">Per pagamenti nei negozi fisici</h3>
              <p className="text-[#666] mb-2">
                <strong>Satispay</strong> e imbattibile per i pagamenti in Italia. Cashback frequenti,
                pagamento QR code accettato in migliaia di negozi, bollettini e ricariche.
              </p>
              <div className="flex gap-2">
                <a href="/codice-amico-satispay/" className="text-sm text-[#111] font-bold hover:underline">Codice Satispay</a>
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e5e5e5]">
              <h3 className="font-bold text-[#111] mb-2">Per un conto completo con IBAN italiano</h3>
              <p className="text-[#666] mb-2">
                <strong>ING</strong> e l&apos;unica con IBAN italiano (IT). Utile per stipendi, bollette,
                F24 e operazioni che richiedono un IBAN italiano.
              </p>
              <div className="flex gap-2">
                <a href="/codice-amico-ing/" className="text-sm text-[#111] font-bold hover:underline">Codice ING</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-3xl">
          <div className="section-title">Domande Frequenti</div>
          <h2 className="text-3xl font-black mb-8">FAQ BANCHE ONLINE</h2>
          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Qual e la migliore banca online in Italia nel {currentYear}?</h3>
              <p className="text-[#999]">
                Dipende dalle tue esigenze. N26 e ideale per chi viaggia, Revolut per il cambio valuta,
                BBVA per gli interessi sul saldo (3%), ING per un conto completo tradizionale,
                Satispay per i pagamenti nei negozi fisici.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Quale banca online offre il bonus piu alto?</h3>
              <p className="text-[#999]">
                ING offre 50 euro di cashback + 4% interessi. BBVA offre 10 euro + 3% interessi + 3% cashback.
                Revolut offre bonus variabili fino a 70 euro. I bonus cambiano frequentemente.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Le banche online sono sicure?</h3>
              <p className="text-[#999]">
                Si, tutte le banche elencate sono regolamentate e offrono protezione depositi fino a
                100.000 euro (garanzia FITD o equivalente europeo). N26 ha licenza tedesca,
                Revolut lituana, BBVA spagnola e ING olandese/italiana.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-white mb-2">Posso avere piu conti online contemporaneamente?</h3>
              <p className="text-[#999]">
                Assolutamente si! Molti utenti hanno piu conti per sfruttare i vantaggi di ciascuno:
                uno per i risparmi (ING o BBVA), uno per i viaggi (Revolut o N26), uno per i pagamenti
                quotidiani (Satispay).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
