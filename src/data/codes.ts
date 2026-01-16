// ============================================
// 📝 CODICI AMICO DATABASE
// ============================================
// Per aggiungere un nuovo codice:
// 1. Trova la categoria giusta
// 2. Aggiungi un nuovo oggetto seguendo il formato
// 3. Il sito si aggiorna automaticamente!
// ============================================

export interface ReferralCode {
  id: string;
  name: string;
  slug: string;
  category: CategoryType;
  code: string;
  link: string;
  bonusInviter: string;
  bonusInvited: string;
  description: string;
  howTo: string[];
  terms: string;
  expiresAt?: string;
  maxInvites?: number;
  logo?: string;
  featured?: boolean;
  active: boolean;
}

export type CategoryType = 
  | 'banche'
  | 'energia'
  | 'telefonia'
  | 'delivery'
  | 'assicurazioni'
  | 'finanza'
  | 'altro';

export interface Category {
  id: CategoryType;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'banche',
    name: 'Banche e Conti',
    slug: 'banche',
    description: 'Codici amico per banche online, conti correnti e carte prepagate',
    icon: '🏦',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'finanza',
    name: 'Investimenti e Trading',
    slug: 'finanza',
    description: 'Codici amico per broker, piattaforme di trading e investimenti',
    icon: '📈',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'energia',
    name: 'Luce e Gas',
    slug: 'energia',
    description: 'Codici amico per fornitori di energia elettrica e gas',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'telefonia',
    name: 'Telefonia e Internet',
    slug: 'telefonia',
    description: 'Codici amico per operatori telefonici e provider internet',
    icon: '📱',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'delivery',
    name: 'Food e Delivery',
    slug: 'delivery',
    description: 'Codici amico per app di food delivery e spesa online',
    icon: '🍕',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'assicurazioni',
    name: 'Assicurazioni',
    slug: 'assicurazioni',
    description: 'Codici amico per assicurazioni auto, casa e vita',
    icon: '🛡️',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    id: 'altro',
    name: 'Altri Servizi',
    slug: 'altro',
    description: 'Altri codici amico utili per servizi vari',
    icon: '🎁',
    color: 'from-gray-500 to-gray-700',
  },
];

// ============================================
// 🏦 BANCHE E CONTI
// ============================================
export const referralCodes: ReferralCode[] = [
  {
    id: 'n26',
    name: 'N26',
    slug: 'codice-amico-n26',
    category: 'banche',
    code: 'robertap0893',
    link: 'https://n26.com/r/robertap0893',
    bonusInviter: '5€',
    bonusInvited: '5€',
    description: 'N26 è una banca tedesca 100% digitale con IBAN tedesco. Conto gratuito con carta Mastercard inclusa, prelievi gratis in zona Euro.',
    howTo: [
      'Clicca sul link di invito',
      'Scarica l\'app N26 e registrati',
      'Completa la verifica dell\'identità',
      'Effettua una transazione di almeno 5€',
      'Ricevi 5€ di bonus in contanti!',
    ],
    terms: 'Il bonus viene accreditato dopo una transazione di almeno 5€. Valido solo per nuovi clienti.',
    active: true,
    featured: true,
  },
  {
    id: 'revolut',
    name: 'Revolut',
    slug: 'codice-amico-revolut',
    category: 'banche',
    code: 'robertm5df',
    link: 'https://revolut.com/referral/?referral-code=robertm5df!JAN1-26-AR-RPB-MDL-CTRL',
    bonusInviter: 'Fino a 50€',
    bonusInvited: 'Fino a 50€',
    description: 'Revolut è amato da oltre 60 milioni di utenti! Conto multivaluta con carta fisica e virtuale, cambio valuta in tempo reale, crypto trading e molto altro.',
    howTo: [
      'Clicca sul link di invito',
      'Scarica l\'app Revolut',
      'Completa la registrazione e verifica identità',
      'Ordina la carta fisica',
      'Effettua 3 acquisti con la carta',
    ],
    terms: 'Bonus variabile in base alle promozioni attive. Richiesti 3 acquisti con carta fisica.',
    active: true,
    featured: true,
  },
  {
    id: 'ing',
    name: 'ING',
    slug: 'codice-amico-ing',
    category: 'banche',
    code: '25B4BB',
    link: 'https://www.ing.it/per-i-miei-amici.html?code=25B4BB',
    bonusInviter: '50€ cashback',
    bonusInvited: '4% interessi + 4% cashback',
    description: 'ING offre Conto Corrente Arancio Plus + Conto Arancio con tasso al 4% annuo lordo per 6 mesi (fino a 50.000€) e cashback del 4% sugli acquisti con carta.',
    howTo: [
      'Clicca sul link con il codice amico 25B4BB',
      'Apri Conto Corrente Arancio Plus + Conto Arancio',
      'Completa la verifica e attiva il conto',
      'Deposita i tuoi risparmi e usa la carta per gli acquisti',
      'Ottieni il 4% sui risparmi + 4% cashback per 6 mesi',
    ],
    terms: 'Promozione valida fino al 24/01/2026. Tasso 4% su depositi fino a 50.000€. Cashback max 120€ totali (20€/mese su spesa max 500€). Canone CC 5€/mese azzerabile.',
    expiresAt: '2026-01-24',
    active: true,
    featured: true,
  },
  {
    id: 'bbva',
    name: 'BBVA',
    slug: 'codice-amico-bbva',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.bbva.it/',
    bonusInviter: '10€',
    bonusInvited: '10€',
    description: 'BBVA Italia offre un conto 100% online senza costi di gestione, con IBAN italiano e carta di debito inclusa.',
    howTo: [
      'Inserisci il codice passaparola durante la registrazione',
      'Completa l\'apertura del conto',
      'Effettua un acquisto con la carta',
      'Ricevi 10€ sul conto',
    ],
    terms: 'Max 20 amici invitabili. Bonus accreditato dopo primo acquisto con carta.',
    maxInvites: 20,
    active: true,
  },
  {
    id: 'bper',
    name: 'BPER Banca',
    slug: 'codice-amico-bper',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.bper.it/',
    bonusInviter: '50€ Amazon',
    bonusInvited: '50€ Amazon',
    description: 'BPER Banca offre un buono Amazon da 50€ per chi apre un conto con codice amico.',
    howTo: [
      'Usa il link di invito per aprire il conto',
      'Completa la procedura di apertura',
      'Attiva il conto con un primo versamento',
      'Ricevi il buono Amazon via email',
    ],
    terms: 'Buono Amazon inviato via email dopo l\'attivazione del conto.',
    active: true,
  },
  {
    id: 'bpm',
    name: 'Banco BPM',
    slug: 'codice-amico-bpm',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.bancobpm.it/',
    bonusInviter: 'Variabile',
    bonusInvited: 'Variabile',
    description: 'Banco BPM - verifica le promozioni attive per nuovi clienti.',
    howTo: [
      'Visita il sito Banco BPM',
      'Cerca promozioni "Presenta un amico"',
      'Segui le istruzioni per l\'apertura conto',
    ],
    terms: 'Verificare promozioni in corso sul sito ufficiale.',
    active: true,
  },
  {
    id: 'satispay',
    name: 'Satispay',
    slug: 'codice-amico-satispay',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.satispay.com/',
    bonusInviter: '5-50€',
    bonusInvited: '5€',
    description: 'Satispay è l\'app italiana per pagamenti digitali, cashback e risparmi. Usatissima nei negozi fisici.',
    howTo: [
      'Scarica l\'app Satispay',
      'Registrati con il codice promo',
      'Collega il tuo conto corrente',
      'Ricevi il bonus di benvenuto',
    ],
    terms: 'Bonus variabile in base alle promozioni. Verificare importo attuale nell\'app.',
    active: true,
    featured: true,
  },
  {
    id: 'hype',
    name: 'HYPE',
    slug: 'codice-amico-hype',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.hype.it/',
    bonusInviter: 'Punti',
    bonusInvited: '5-50€',
    description: 'HYPE è il conto con carta collegato al tuo smartphone. Piani gratuiti e premium con cashback.',
    howTo: [
      'Scarica l\'app HYPE',
      'Inserisci il codice amico in registrazione',
      'Completa la verifica',
      'Attiva la carta e inizia a usarla',
    ],
    terms: 'Bonus variabile in base al piano scelto (Start, Next, Premium).',
    active: true,
  },
  {
    id: 'widiba',
    name: 'Widiba',
    slug: 'codice-amico-widiba',
    category: 'banche',
    code: 'DA_INSERIRE',
    link: 'https://www.widiba.it/',
    bonusInviter: '50€ Amazon',
    bonusInvited: '50€ Amazon',
    description: 'Widiba è la banca online del gruppo MPS. Conto completo con carta di debito e servizi avanzati.',
    howTo: [
      'Apri il conto con il link di invito',
      'Completa la procedura online',
      'Attiva il conto',
      'Ricevi il buono Amazon',
    ],
    terms: 'Max 4 amici invitabili. Buono Amazon per entrambi.',
    maxInvites: 4,
    active: true,
  },

  // ============================================
  // 📈 FINANZA E INVESTIMENTI
  // ============================================
  {
    id: 'fineco',
    name: 'Fineco',
    slug: 'codice-amico-fineco',
    category: 'finanza',
    code: 'DA_INSERIRE',
    link: 'https://finecobank.com/',
    bonusInviter: '100 ordini gratis',
    bonusInvited: '100 ordini gratis',
    description: 'Fineco è la banca italiana leader per trading online. Conto completo con piattaforma di trading professionale.',
    howTo: [
      'Apri il conto Fineco',
      'Usa il codice amico',
      'Completa la procedura',
      'Ottieni 100 ordini gratis per il trading',
    ],
    terms: '100 eseguiti gratis su azioni italiane, europee e USA.',
    active: true,
  },
  {
    id: 'trade-republic',
    name: 'Trade Republic',
    slug: 'codice-amico-trade-republic',
    category: 'finanza',
    code: 'DA_INSERIRE',
    link: 'https://traderepublic.com/',
    bonusInviter: '10-50€ in azioni',
    bonusInvited: '10-50€ in azioni',
    description: 'Trade Republic è il broker europeo con 1€ per ordine. Azioni, ETF, crypto e piani di accumulo.',
    howTo: [
      'Scarica l\'app Trade Republic',
      'Registrati con il link di invito',
      'Completa la verifica',
      'Deposita almeno 50€',
      'Ricevi azioni gratuite',
    ],
    terms: 'Bonus in azioni frazionate. Importo variabile in base alle promozioni.',
    active: true,
    featured: true,
  },
  {
    id: 'wise',
    name: 'Wise',
    slug: 'codice-amico-wise',
    category: 'finanza',
    code: 'DA_INSERIRE',
    link: 'https://wise.com/invite/',
    bonusInviter: '90€ ogni 3 amici',
    bonusInvited: 'Trasferimento gratis fino a 500€',
    description: 'Wise (ex TransferWise) è il modo più economico per inviare denaro all\'estero con cambio reale.',
    howTo: [
      'Registrati con il link di invito',
      'Effettua un trasferimento internazionale di almeno 250€',
      'Il primo trasferimento fino a 500€ è gratis',
    ],
    terms: 'Bonus per chi invita: 30€ per ogni amico che completa il primo trasferimento.',
    active: true,
  },

  // ============================================
  // ⚡ ENERGIA
  // ============================================
  {
    id: 'octopus',
    name: 'Octopus Energy',
    slug: 'codice-amico-octopus',
    category: 'energia',
    code: 'smoke-melon-499',
    link: 'https://octopusenergy.it/octo-friends/smoke-melon-499',
    bonusInviter: '30€',
    bonusInvited: '30€',
    description: 'Octopus Energy è il fornitore green con prezzi trasparenti. 100% energia rinnovabile.',
    howTo: [
      'Clicca sul link Octofriends',
      'Inserisci il tuo indirizzo',
      'Scegli la tariffa luce e/o gas',
      'Completa il passaggio',
      'Ricevi 30€ di sconto sulla prima bolletta',
    ],
    terms: 'Sconto applicato alla prima bolletta. Valido per nuovi clienti.',
    active: true,
    featured: true,
  },
  {
    id: 'unidata',
    name: 'Unidata',
    slug: 'codice-amico-unidata',
    category: 'telefonia',
    code: 'CONTATTAMI',
    link: 'mailto:info@codiceamico.guru?subject=Richiesta%20codice%20Unidata',
    bonusInviter: '1 mese gratis',
    bonusInvited: '1 mese gratis',
    description: 'Unidata è un operatore di fibra ottica e servizi internet. Programma referral con mese gratuito per entrambi.',
    howTo: [
      'Clicca sul pulsante per contattarmi',
      'Ti invierò il mio codice cliente per il referral',
      'Attiva il servizio Unidata indicando il codice',
      'Entrambi riceviamo 1 mese gratis',
    ],
    terms: 'Referral tramite codice cliente. Contattami per ricevere il codice.',
    active: true,
  },
  {
    id: 'eni',
    name: 'ENI Plenitude',
    slug: 'codice-amico-eni',
    category: 'energia',
    code: 'DA_INSERIRE',
    link: 'https://eniplenitude.com/',
    bonusInviter: '5€ buono benzina',
    bonusInvited: 'Variabile',
    description: 'ENI Plenitude (ex Eni Gas e Luce) offre forniture di energia e buoni carburante.',
    howTo: [
      'Usa il link di invito',
      'Attiva una fornitura luce o gas',
      'Ricevi il buono benzina',
    ],
    terms: 'Max 3 amici invitabili. Verificare promozione in corso.',
    maxInvites: 3,
    active: true,
  },

  // ============================================
  // 📱 TELEFONIA
  // ============================================
  {
    id: 'vodafone',
    name: 'Vodafone',
    slug: 'codice-amico-vodafone',
    category: 'telefonia',
    code: 'DA_INSERIRE',
    link: 'https://www.vodafone.it/porta-un-amico',
    bonusInviter: 'Giga extra',
    bonusInvited: 'Giga extra',
    description: 'Vodafone premia chi porta amici con Giga aggiuntivi ogni mese.',
    howTo: [
      'Accedi all\'area clienti Vodafone',
      'Genera il tuo codice amico',
      'Condividilo con chi vuoi',
      'Quando attivano, entrambi ricevete Giga',
    ],
    terms: 'Promozione variabile. Verificare condizioni attuali.',
    active: true,
  },
  {
    id: 'fastweb',
    name: 'Fastweb',
    slug: 'codice-amico-fastweb',
    category: 'telefonia',
    code: 'DA_INSERIRE',
    link: 'https://www.fastweb.it/porta-un-amico/',
    bonusInviter: '2 mesi gratis',
    bonusInvited: '2 mesi gratis',
    description: 'Fastweb offre 2 mesi di offerta casa gratis con il programma Porta un Amico.',
    howTo: [
      'Usa il link di invito Fastweb',
      'Attiva un\'offerta Casa',
      'Entrambi ricevete 2 mesi gratis',
    ],
    terms: 'Valido per offerte Casa. Verificare promozioni in corso.',
    active: true,
  },

  // ============================================
  // 🍕 DELIVERY E FOOD
  // ============================================
  {
    id: 'deliveroo',
    name: 'Deliveroo',
    slug: 'codice-amico-deliveroo',
    category: 'delivery',
    code: 'DA_INSERIRE',
    link: 'https://deliveroo.it/',
    bonusInviter: 'Credito',
    bonusInvited: 'Credito',
    description: 'Deliveroo consegna cibo dai migliori ristoranti della tua città.',
    howTo: [
      'Scarica l\'app Deliveroo',
      'Inserisci il codice promo',
      'Effettua il primo ordine',
      'Ricevi il credito',
    ],
    terms: 'Importo variabile. Verificare promozione attuale nell\'app.',
    active: true,
  },
  {
    id: 'glovo',
    name: 'Glovo',
    slug: 'codice-amico-glovo',
    category: 'delivery',
    code: 'DA_INSERIRE',
    link: 'https://glovoapp.com/',
    bonusInviter: '5€',
    bonusInvited: '5€',
    description: 'Glovo consegna di tutto: cibo, farmacia, supermercato e altro ancora.',
    howTo: [
      'Scarica l\'app Glovo',
      'Inserisci il codice amico',
      'Fai il primo ordine',
      'Entrambi ricevete 5€',
    ],
    terms: 'Sconto applicato al primo ordine. Verificare importo attuale.',
    active: true,
  },
  {
    id: 'too-good-to-go',
    name: 'Too Good To Go',
    slug: 'codice-amico-too-good-to-go',
    category: 'delivery',
    code: 'DA_INSERIRE',
    link: 'https://toogoodtogo.it/',
    bonusInviter: 'Fino a 12,50€',
    bonusInvited: 'Credito',
    description: 'Too Good To Go salva il cibo invenduto. Magic Box a prezzi scontatissimi!',
    howTo: [
      'Scarica l\'app Too Good To Go',
      'Registrati con il link di invito',
      'Acquista la tua prima Magic Box',
      'Ricevi il credito bonus',
    ],
    terms: 'Credito utilizzabile per Magic Box. Anti-spreco alimentare!',
    active: true,
  },
  {
    id: 'esselunga',
    name: 'Esselunga',
    slug: 'codice-amico-esselunga',
    category: 'delivery',
    code: 'DA_INSERIRE',
    link: 'https://www.esselunga.it/',
    bonusInviter: '10€',
    bonusInvited: '10€',
    description: 'Esselunga a Casa - spesa online con consegna a domicilio.',
    howTo: [
      'Registrati su Esselunga con il codice',
      'Fai la prima spesa online',
      'Ricevi 10€ di sconto',
    ],
    terms: 'Sconto sulla prima spesa online. Solo zone coperte dal servizio.',
    active: true,
  },

  // ============================================
  // 🛡️ ASSICURAZIONI
  // ============================================
  {
    id: 'genertel',
    name: 'Genertel',
    slug: 'codice-amico-genertel',
    category: 'assicurazioni',
    code: 'DA_INSERIRE',
    link: 'https://www.genertel.it/',
    bonusInviter: 'Punti Payback',
    bonusInvited: 'Sconto polizza',
    description: 'Genertel è l\'assicurazione diretta del gruppo Generali. RC Auto e altri prodotti.',
    howTo: [
      'Fai un preventivo su Genertel',
      'Inserisci il codice amico',
      'Se acquisti, ricevi lo sconto',
    ],
    terms: 'Punti Payback accreditati dopo acquisto polizza.',
    active: true,
  },
  {
    id: 'prima',
    name: 'Prima Assicurazioni',
    slug: 'codice-amico-prima',
    category: 'assicurazioni',
    code: 'DA_INSERIRE',
    link: 'https://prima.it/',
    bonusInviter: '50€ per amico',
    bonusInvited: 'Sconto polizza',
    description: 'Prima Assicurazioni offre RC Auto 100% digitale con prezzi competitivi.',
    howTo: [
      'Condividi il tuo link di invito',
      'L\'amico fa un preventivo e acquista',
      'Ricevi 50€ per ogni amico (max 4)',
    ],
    terms: 'Max 4 amici = fino a 200€. Bonus accreditato dopo acquisto polizza.',
    maxInvites: 4,
    active: true,
  },
];

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getCodesByCategory(categoryId: CategoryType): ReferralCode[] {
  return referralCodes.filter(c => c.category === categoryId && c.active);
}

export function getCodeBySlug(slug: string): ReferralCode | undefined {
  return referralCodes.find(c => c.slug === slug && c.active);
}

export function getFeaturedCodes(): ReferralCode[] {
  return referralCodes.filter(c => c.featured && c.active);
}

export function getAllActiveCodes(): ReferralCode[] {
  return referralCodes.filter(c => c.active);
}

export function searchCodes(query: string): ReferralCode[] {
  const q = query.toLowerCase();
  return referralCodes.filter(c => 
    c.active && (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    )
  );
}
