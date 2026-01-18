'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactForm() {
  const searchParams = useSearchParams();
  const codiceParam = searchParams.get('codice');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    codice: '',
    messaggio: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (codiceParam) {
      setFormData(prev => ({ ...prev, codice: codiceParam }));
    }
  }, [codiceParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio');
      }

      setStatus('success');
      setFormData({ nome: '', email: '', codice: '', messaggio: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Errore sconosciuto');
    }
  };

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="section-title">Assistenza</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          CONTATTAMI
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Hai domande su un codice amico? Hai bisogno di maggiori informazioni o assistenza per usare un codice referral? Scrivimi!
        </p>
      </section>

      {/* Content */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-2xl">

          {/* Intro */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-8">
            <h2 className="text-xl font-black text-[#111] mb-4">Come posso aiutarti?</h2>
            <ul className="space-y-3 text-[#666]">
              <li className="flex items-start gap-3">
                <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span><strong className="text-[#111]">Verifiche codici referral</strong> - Alcuni servizi (come Unidata) potrebbero richiedere informazioni aggiuntive per validare il codice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span><strong className="text-[#111]">Dubbi sull&apos;utilizzo</strong> - Se non sei sicuro di come usare un codice o hai problemi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span><strong className="text-[#111]">Segnalazioni</strong> - Se un codice non funziona o e scaduto</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span><strong className="text-[#111]">Suggerimenti</strong> - Vuoi suggerire un nuovo servizio da aggiungere</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-black text-green-800 mb-2">Messaggio inviato!</h2>
              <p className="text-green-700">Ti rispondero il prima possibile.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-green-800 font-bold hover:underline"
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-[#e5e5e5]">
              <h2 className="text-xl font-black text-[#111] mb-6">Scrivimi</h2>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-6">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-[#111] mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] text-[#111] focus:border-[#111] focus:outline-none"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#111] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] text-[#111] focus:border-[#111] focus:outline-none"
                    placeholder="La tua email per risponderti"
                  />
                </div>

                <div>
                  <label htmlFor="codice" className="block text-sm font-bold text-[#111] mb-1">
                    Codice interessato
                  </label>
                  <input
                    type="text"
                    id="codice"
                    value={formData.codice}
                    onChange={(e) => setFormData({ ...formData, codice: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] text-[#111] focus:border-[#111] focus:outline-none"
                    placeholder="es. Unidata, N26, Revolut..."
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-bold text-[#111] mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="messaggio"
                    required
                    rows={5}
                    value={formData.messaggio}
                    onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] text-[#111] focus:border-[#111] focus:outline-none resize-none"
                    placeholder="Come posso aiutarti?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cta-btn w-full justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'INVIO IN CORSO...' : 'INVIA MESSAGGIO'}
                </button>
              </div>
            </form>
          )}

          {/* Note */}
          <div className="mt-8 p-6 border border-white/10 bg-white/5">
            <h3 className="font-bold text-white mb-2">Nota importante</h3>
            <p className="text-[#999] text-sm">
              I codici amico pubblicati su questo sito sono codici personali che condivido per permettere a tutti di ottenere bonus.
              Non sono affiliato ufficialmente con i servizi elencati. Per problemi tecnici con un servizio specifico,
              contatta direttamente il loro supporto clienti.
            </p>
          </div>

        </div>
      </section>

      {/* Back link */}
      <section className="px-6 md:px-12 py-8 border-t border-white/10">
        <a href="/" className="text-[#999] hover:text-white font-bold">
          ← Torna alla homepage
        </a>
      </section>
    </>
  );
}

// Wrapper con Suspense per useSearchParams
export default function ContattiPage() {
  return (
    <Suspense fallback={<div className="px-6 md:px-12 py-12">Caricamento...</div>}>
      <ContactForm />
    </Suspense>
  );
}
