'use client';

import { useState } from 'react';

const categorie = [
  { value: 'banche', label: 'Banche e Conti' },
  { value: 'finanza', label: 'Investimenti e Trading' },
  { value: 'energia', label: 'Luce e Gas' },
  { value: 'telefonia', label: 'Telefonia e Internet' },
  { value: 'delivery', label: 'Food e Delivery' },
  { value: 'assicurazioni', label: 'Assicurazioni' },
  { value: 'altro', label: 'Altri Servizi' },
];

export default function InserisciCodicePage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    servizio: '',
    categoria: '',
    codice: '',
    link: '',
    bonusTu: '',
    bonusPresentatore: '',
    descrizione: '',
    istruzioni: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Errore nell\'invio');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Errore sconosciuto');
    }
  };

  const inputClass = "w-full px-4 py-3 border border-[#e5e5e5] text-[#111] focus:border-[#111] focus:outline-none";

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-4xl">
        <div className="section-title">Community</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          INSERISCI IL TUO<br />
          <span className="text-[#FAFF00]">CODICE AMICO</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Hai un codice referral che vuoi condividere? Invialo e potrebbe essere pubblicato su CodiceAmico.guru!
        </p>
      </section>

      {/* Content */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-3xl">

          {/* Come funziona */}
          <div className="bg-white p-8 border border-[#e5e5e5] mb-8">
            <h2 className="text-xl font-black text-[#111] mb-4">Come funziona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#111] text-[#FAFF00] flex items-center justify-center font-black text-xl mx-auto mb-3">1</div>
                <h3 className="font-bold text-[#111] mb-1">Compila il form</h3>
                <p className="text-sm text-[#666]">Inserisci i dati del tuo codice referral</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#111] text-[#FAFF00] flex items-center justify-center font-black text-xl mx-auto mb-3">2</div>
                <h3 className="font-bold text-[#111] mb-1">Verifica</h3>
                <p className="text-sm text-[#666]">Controlliamo che il codice sia valido</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#111] text-[#FAFF00] flex items-center justify-center font-black text-xl mx-auto mb-3">3</div>
                <h3 className="font-bold text-[#111] mb-1">Pubblicazione</h3>
                <p className="text-sm text-[#666]">Se approvato, il codice va online!</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-8 text-center">
              <div className="text-5xl mb-4">&#10003;</div>
              <h2 className="text-2xl font-black text-green-800 mb-2">Codice inviato!</h2>
              <p className="text-green-700 mb-4">
                Grazie per aver condiviso il tuo codice. Lo verificheremo e, se approvato, lo pubblicheremo presto!
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    nome: '', email: '', servizio: '', categoria: '', codice: '',
                    link: '', bonusTu: '', bonusPresentatore: '', descrizione: '', istruzioni: '',
                  });
                }}
                className="text-green-800 font-bold hover:underline"
              >
                Invia un altro codice
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-[#e5e5e5]">
              <h2 className="text-xl font-black text-[#111] mb-6">Dati del codice</h2>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-6">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-[#111] mb-1">
                    Il tuo nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={inputClass}
                    placeholder="Mario Rossi"
                  />
                </div>

                {/* Email */}
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
                    className={inputClass}
                    placeholder="mario@email.com"
                  />
                </div>
              </div>

              <hr className="my-6 border-[#e5e5e5]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Servizio */}
                <div>
                  <label htmlFor="servizio" className="block text-sm font-bold text-[#111] mb-1">
                    Nome servizio/azienda *
                  </label>
                  <input
                    type="text"
                    id="servizio"
                    required
                    value={formData.servizio}
                    onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                    className={inputClass}
                    placeholder="es. N26, Revolut, Satispay..."
                  />
                </div>

                {/* Categoria */}
                <div>
                  <label htmlFor="categoria" className="block text-sm font-bold text-[#111] mb-1">
                    Categoria *
                  </label>
                  <select
                    id="categoria"
                    required
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Seleziona categoria</option>
                    {categorie.map((cat) => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Codice */}
                <div>
                  <label htmlFor="codice" className="block text-sm font-bold text-[#111] mb-1">
                    Il tuo codice *
                  </label>
                  <input
                    type="text"
                    id="codice"
                    required
                    value={formData.codice}
                    onChange={(e) => setFormData({ ...formData, codice: e.target.value })}
                    className={`${inputClass} font-mono`}
                    placeholder="ABC123XYZ"
                  />
                </div>

                {/* Link */}
                <div>
                  <label htmlFor="link" className="block text-sm font-bold text-[#111] mb-1">
                    Link referral (se disponibile)
                  </label>
                  <input
                    type="url"
                    id="link"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    className={inputClass}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Bonus Tu */}
                <div>
                  <label htmlFor="bonusTu" className="block text-sm font-bold text-[#111] mb-1">
                    Bonus per chi usa il codice
                  </label>
                  <input
                    type="text"
                    id="bonusTu"
                    value={formData.bonusTu}
                    onChange={(e) => setFormData({ ...formData, bonusTu: e.target.value })}
                    className={inputClass}
                    placeholder="es. 10€, 5% sconto..."
                  />
                </div>

                {/* Bonus Presentatore */}
                <div>
                  <label htmlFor="bonusPresentatore" className="block text-sm font-bold text-[#111] mb-1">
                    Bonus per chi presenta
                  </label>
                  <input
                    type="text"
                    id="bonusPresentatore"
                    value={formData.bonusPresentatore}
                    onChange={(e) => setFormData({ ...formData, bonusPresentatore: e.target.value })}
                    className={inputClass}
                    placeholder="es. 10€, punti..."
                  />
                </div>
              </div>

              {/* Descrizione */}
              <div className="mb-4">
                <label htmlFor="descrizione" className="block text-sm font-bold text-[#111] mb-1">
                  Descrizione del servizio
                </label>
                <textarea
                  id="descrizione"
                  rows={3}
                  value={formData.descrizione}
                  onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Breve descrizione del servizio e dei vantaggi..."
                />
              </div>

              {/* Istruzioni */}
              <div className="mb-6">
                <label htmlFor="istruzioni" className="block text-sm font-bold text-[#111] mb-1">
                  Come usare il codice
                </label>
                <textarea
                  id="istruzioni"
                  rows={3}
                  value={formData.istruzioni}
                  onChange={(e) => setFormData({ ...formData, istruzioni: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Spiega passo passo come usare il codice..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="cta-btn w-full justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'INVIO IN CORSO...' : 'INVIA IL TUO CODICE'}
              </button>

              <p className="text-xs text-[#999] mt-4 text-center">
                Inviando il form accetti che il tuo codice possa essere pubblicato su CodiceAmico.guru.
                Non tutti i codici vengono pubblicati: valutiamo qualita e rilevanza.
              </p>
            </form>
          )}

          {/* Note */}
          <div className="mt-8 p-6 border border-[#e5e5e5] bg-white">
            <h3 className="font-bold text-[#111] mb-2">Perche condividere il tuo codice?</h3>
            <ul className="text-[#666] text-sm space-y-2">
              <li>&#8226; Aumenti le possibilita che qualcuno usi il tuo codice referral</li>
              <li>&#8226; Aiuti altri utenti a scoprire bonus e promozioni</li>
              <li>&#8226; Il tuo codice raggiunge migliaia di visitatori ogni mese</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Back link */}
      <section className="px-6 md:px-12 py-8 border-t border-white/10">
        <a href="/" className="text-[#999] hover:text-white font-bold">
          &#8592; Torna alla homepage
        </a>
      </section>
    </>
  );
}
