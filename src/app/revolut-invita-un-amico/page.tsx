import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolut Invita un Amico 2026: Bonus Fino a 50€ | Codice robertm5df',
  description: 'Revolut Invita un Amico: ottieni fino a 50€ di bonus! Oltre 60 milioni di utenti. Usa il codice amico robertm5df. Guida completa alla promozione 2026.',
  keywords: [
    'revolut invita un amico',
    'revolut codice amico',
    'revolut bonus',
    'revolut referral',
    'revolut promozione 2026',
    'codice invito revolut',
    'revolut 50 euro gratis',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/revolut-invita-un-amico/',
  },
  openGraph: {
    title: 'Revolut Invita un Amico 2026: Bonus Fino a 50€',
    description: 'Unisciti a 60 milioni di utenti Revolut! Ottieni fino a 50€ con il codice robertm5df.',
    url: 'https://codiceamico.guru/revolut-invita-un-amico/',
    type: 'article',
  },
};

export default function RevolutInvitaAmicoPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Revolut Invita un Amico ${currentYear}: Come Ottenere Fino a 50€ di Bonus`,
    description: 'Guida completa al programma referral Revolut Italia. Come invitare amici e ottenere bonus.',
    author: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
      url: 'https://codiceamico.guru',
    },
    datePublished: '2026-01-16',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto bonus ricevo con Revolut Invita un Amico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il bonus varia in base alle promozioni attive, generalmente da 20€ a 50€ per chi invita. L\'amico invitato riceve bonus simili.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanti amici posso invitare su Revolut?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puoi guadagnare ricompense per un massimo di 5 inviti per ciascuna campagna promozionale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cosa deve fare il mio amico per farmi ottenere il bonus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il tuo amico deve registrarsi con il tuo link, aggiungere fondi, ordinare la carta fisica e fare almeno 3 acquisti qualificanti.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/categoria/banche/">Banche</a>
          <span>/</span>
          <span className="text-white">Revolut Invita un Amico</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-purple-500 text-white px-3 py-1 text-xs font-bold tracking-wide">60M+ UTENTI</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            REVOLUT INVITA UN AMICO:<br />
            <span className="text-[#FAFF00]">BONUS FINO A 50€</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Unisciti a oltre 60 milioni di utenti che adorano Revolut! Invita i tuoi amici
            e guadagna bonus in denaro per ogni persona che si registra e completa i requisiti.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Registrati con il Codice Amico</h2>
              <p className="text-purple-100">Usa il codice <strong className="text-white">robertm5df</strong> e ottieni il bonus</p>
            </div>
            <a
              href="https://revolut.com/referral/?referral-code=robertm5df!JAN1-26-AR-RPB-MDL-CTRL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-bold px-6 py-3 hover:bg-purple-50 transition-colors text-center whitespace-nowrap"
            >
              APRI CONTO REVOLUT →
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="border border-white/10 p-6">
            <h2 className="font-bold text-white mb-4">CONTENUTI</h2>
            <ul className="space-y-2 text-[#999]">
              <li><a href="#come-funziona" className="hover:text-[#FAFF00] transition-colors">Come Funziona il Programma</a></li>
              <li><a href="#requisiti" className="hover:text-[#FAFF00] transition-colors">Requisiti per il Bonus</a></li>
              <li><a href="#step-by-step" className="hover:text-[#FAFF00] transition-colors">Guida Passo Passo</a></li>
              <li><a href="#perche-revolut" className="hover:text-[#FAFF00] transition-colors">Perche Scegliere Revolut</a></li>
              <li><a href="#faq" className="hover:text-[#FAFF00] transition-colors">Domande Frequenti</a></li>
            </ul>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Come Funziona */}
            <div id="come-funziona" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME FUNZIONA IL PROGRAMMA</h2>
              <p className="text-[#666] mb-6">
                Il programma <strong className="text-[#111]">"Invita un Amico"</strong> di Revolut ti permette di
                guadagnare bonus in denaro quando inviti amici a registrarsi. Revolut e amato da oltre
                60 milioni di utenti in tutto il mondo per la sua semplicita e funzionalita.
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-purple-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-4xl font-black text-purple-600">Fino a 50€</span>
                  <span className="block text-sm text-[#666] mt-2">per ogni amico invitato (max 5)</span>
                </div>
                <div className="bg-white p-6 border-2 border-purple-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-purple-600">Fino a 50€</span>
                  <span className="block text-sm text-[#666] mt-2">dopo aver completato i requisiti</span>
                </div>
              </div>

              <div className="bg-purple-50 p-4 border-l-4 border-purple-500">
                <p className="text-[#666] text-sm">
                  <strong className="text-[#111]">Nota:</strong> L'importo esatto del bonus varia in base
                  alle campagne promozionali attive. Verifica sempre l'offerta corrente nell'app Revolut.
                </p>
              </div>
            </div>

            {/* Requisiti */}
            <div id="requisiti" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">REQUISITI PER OTTENERE IL BONUS</h2>
              <p className="text-[#666] mb-4">Per ricevere il bonus, il tuo amico deve completare questi passaggi:</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <strong className="text-[#111]">Registrarsi con il tuo link di invito</strong>
                    <p className="text-[#666] text-sm">Deve essere un nuovo cliente Revolut</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <strong className="text-[#111]">Aggiungere fondi al conto</strong>
                    <p className="text-[#666] text-sm">Tramite carta, Apple Pay, Google Pay o bonifico bancario (NO trasferimenti tra conti Revolut)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <strong className="text-[#111]">Ordinare la carta fisica</strong>
                    <p className="text-[#666] text-sm">Richiedi la carta Revolut standard (gratuita)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <strong className="text-[#111]">Effettuare 3 acquisti qualificanti</strong>
                    <p className="text-[#666] text-sm">Con carta fisica o virtuale, anche tramite Apple/Google Pay</p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#FAFF00] p-4">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Importante:</strong> Cambio valuta, invio denaro, transazioni di gioco d'azzardo e
                  carte regalo NON sono considerate transazioni valide per il bonus.
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">GUIDA PASSO PASSO</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Clicca sul link di invito</h4>
                      <p className="text-[#666]">Usa il link con il codice <strong>robertm5df</strong> per accedere all'offerta promozionale.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Scarica l'app e registrati</h4>
                      <p className="text-[#666]">Completa la registrazione e verifica la tua identita.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricarica il conto e ordina la carta</h4>
                      <p className="text-[#666]">Aggiungi fondi tramite carta o bonifico e richiedi la carta fisica gratuita.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Fai 3 acquisti</h4>
                      <p className="text-[#666]">Usa la carta (anche virtuale) per 3 acquisti online o in negozio.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi il bonus!</h4>
                      <p className="text-[#666]">Il bonus viene accreditato sul tuo conto Revolut.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Unisciti a 60 milioni di utenti!</h3>
              <p className="text-[#999] mb-4">Registrati con il codice <strong className="text-[#FAFF00]">robertm5df</strong></p>
              <a
                href="https://revolut.com/referral/?referral-code=robertm5df!JAN1-26-AR-RPB-MDL-CTRL"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                APRI CONTO REVOLUT GRATIS <span>→</span>
              </a>
            </div>

            {/* Perche Revolut */}
            <div id="perche-revolut" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE REVOLUT</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Conto Multivaluta</h4>
                  <p className="text-[#666] text-sm">Gestisci oltre 30 valute con cambio al tasso reale.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Carte Virtuali Usa e Getta</h4>
                  <p className="text-[#666] text-sm">Crea carte virtuali per acquisti online sicuri.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Trading Crypto e Azioni</h4>
                  <p className="text-[#666] text-sm">Investi in criptovalute e azioni direttamente dall'app.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Trasferimenti Internazionali</h4>
                  <p className="text-[#666] text-sm">Invia denaro all'estero a costi ridottissimi.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Notifiche in Tempo Reale</h4>
                  <p className="text-[#666] text-sm">Controlla ogni spesa istantaneamente.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Nessun Costo Nascosto</h4>
                  <p className="text-[#666] text-sm">Piano Standard completamente gratuito.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Le condizioni del programma referral possono variare. Verifica sempre
              i termini aggiornati nell'app Revolut. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU REVOLUT INVITA UN AMICO</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto bonus ricevo con Revolut Invita un Amico?</h3>
                <p className="text-[#999]">
                  Il bonus varia da 20€ a 50€ o piu in base alle promozioni attive. Verifica l'importo
                  corrente nella sezione "Invita amici" dell'app Revolut.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanti amici posso invitare?</h3>
                <p className="text-[#999]">
                  Puoi guadagnare ricompense per un massimo di 5 inviti per ciascuna campagna promozionale.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Devo ordinare per forza la carta fisica?</h3>
                <p className="text-[#999]">
                  Si, per ottenere il bonus referral il tuo amico deve ordinare la carta fisica Revolut
                  (quella standard e gratuita).
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice robertm5df e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice robertm5df e attualmente attivo. Usalo per ottenere il bonus previsto
                  dalla promozione in corso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI AMICO BANCHE</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-n26/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">N26</a>
              <a href="/codice-amico-ing/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">ING</a>
              <a href="/codice-amico-bbva/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">BBVA</a>
              <a href="/codice-amico-satispay/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Satispay</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
