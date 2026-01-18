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
  contactNote?: string; // Nota per codici che richiedono info aggiuntive (es. verifica identità)
  lastUpdated?: string; // Data ultimo aggiornamento (ISO format)
  usageCount?: number; // Numero stimato di utilizzi
  verified?: boolean; // Codice verificato personalmente
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
    bonusInviter: '5-25€',
    bonusInvited: '5-30€',
    description: 'N26 e una banca tedesca 100% digitale con IBAN tedesco. Conto gratuito con carta Mastercard inclusa, prelievi gratis in zona Euro.',
    howTo: [
      'Clicca sul link di invito',
      'Scarica l\'app N26 e registrati',
      'Completa la verifica dell\'identita',
      'Effettua un acquisto con la carta N26 (importo >= bonus)',
      'Ricevi il bonus in contanti (accredito entro 60 giorni)',
    ],
    terms: 'Primo acquisto deve essere >= importo bonus. Escluse gift card e ricariche telefoniche. Max 1500€ totali. Sempre attivo.',
    active: true,
    featured: true,
    lastUpdated: '2026-01-15',
    usageCount: 127,
    verified: true,
  },
  {
    id: 'revolut',
    name: 'Revolut',
    slug: 'codice-amico-revolut',
    category: 'banche',
    code: 'robertm5df',
    link: 'https://revolut.com/referral/?referral-code=robertm5df!JAN1-26-AR-RPB-MDL-CTRL',
    bonusInviter: '40-70€',
    bonusInvited: '-',
    description: 'Revolut e usato da oltre 60 milioni di utenti! Conto multivaluta con carta fisica e virtuale, cambio valuta in tempo reale, crypto trading e molto altro.',
    howTo: [
      'Clicca sul link di invito',
      'Scarica l\'app Revolut',
      'Completa la registrazione e verifica identita',
      'Ordina una carta fisica (escluse Revolut Pro, Junior, Business)',
      'Effettua 3 acquisti di almeno 5€ ciascuno con carta fisica o virtuale',
    ],
    terms: 'Promo unilaterale: solo chi invita riceve il bonus. Max 5 inviti per campagna. Esclusi: crypto, gambling, gift card. Scadenza promo attuale: 28/01/2026.',
    expiresAt: '2026-01-28',
    maxInvites: 5,
    active: true,
    featured: true,
    lastUpdated: '2026-01-18',
    usageCount: 89,
    verified: true,
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
    lastUpdated: '2026-01-10',
    usageCount: 203,
    verified: true,
  },
  {
    id: 'bbva',
    name: 'BBVA',
    slug: 'codice-amico-bbva',
    category: 'banche',
    code: '77610082263181',
    link: 'https://www.bbva.it/promo/passaparola.html',
    bonusInviter: '20€',
    bonusInvited: '10€ + 3% interessi + 3% cashback',
    description: 'BBVA Italia: Conto e Carta a 0€ per sempre! Chi ti invita riceve 20€, tu ricevi 10€ con il primo acquisto + 3% di interessi sul saldo e 3% di cashback per 6 mesi.',
    howTo: [
      'Vai su bbva.it/promo/passaparola.html o scarica l\'app BBVA',
      'Inserisci il codice 77610082263181 durante la registrazione',
      'Completa l\'apertura del conto',
      'Effettua un acquisto con la carta (senza importo minimo) entro 90 giorni',
      'Ricevi 10€ + 3% interessi + 3% cashback per 6 mesi!',
    ],
    terms: 'Conto e carta gratuiti per sempre. Acquisto entro 90 giorni dalla registrazione. Max 5 inviti (100€). Bonus extra 0,25% se mantieni 10.000€ per un mese.',
    maxInvites: 5,
    active: true,
    featured: true,
    lastUpdated: '2026-01-12',
    usageCount: 156,
    verified: true,
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
    active: false,
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
    code: 'ROBERTAPARMA1',
    link: 'https://www.satispay.com/promo/ROBERTAPARMA1',
    bonusInviter: '5-50€',
    bonusInvited: '5€ + cashback',
    description: 'Satispay e l\'app italiana per pagamenti digitali, cashback e risparmi. Usatissima nei negozi fisici. Bonus variabile in base alla promozione attiva!',
    howTo: [
      'Scarica l\'app Satispay',
      'Registrati inserendo il codice ROBERTAPARMA1',
      'Collega il tuo conto corrente e imposta un budget',
      'Effettua un acquisto minimo nei negozi fisici entro 30 giorni',
      'Ricevi il bonus!',
    ],
    terms: 'Registrazione da completare entro 2 giorni dal click. Spesa minima entro 30 giorni. Bonus variabile in base alla promo attiva.',
    active: true,
    featured: true,
    lastUpdated: '2026-01-16',
    usageCount: 312,
    verified: true,
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

  {
    id: 'amex-business-platinum',
    name: 'American Express Business Platinum',
    slug: 'codice-amico-amex-business-platinum',
    category: 'banche',
    code: 'rOBErPcCDY',
    link: 'https://americanexpress.com/it-it/referral/business-platinum?ref=rOBErPcCDY&XLINK=MYCP',
    bonusInviter: '50.000 punti MR',
    bonusInvited: '90.000 punti MR',
    description: 'American Express Business Platinum: la carta premium per professionisti e aziende. Accesso a lounge aeroportuali, assicurazioni viaggio e programma Membership Rewards. Promo 3x punti su Apple, ITA Airways, Vodafone fino al 31/03/2026!',
    howTo: [
      'Clicca sul link di invito',
      'Compila la richiesta per la carta Business Platinum',
      'Completa la verifica e ricevi la carta',
      'Spendi 6.000€ nei primi 3 mesi',
      'Ricevi 90.000 punti MR (fino a 360€ di sconti Shop with Points)',
    ],
    terms: 'Carta soggetta ad approvazione. Canone 70€/mese (840€/anno, deducibile). Max 300.000 punti/anno da referral. Promo 3x punti partner fino 31/03/2026.',
    expiresAt: '2026-03-31',
    active: true,
    featured: true,
    lastUpdated: '2026-01-05',
    usageCount: 34,
    verified: true,
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
    lastUpdated: '2026-01-08',
    usageCount: 178,
    verified: false,
  },
  {
    id: 'wise',
    name: 'Wise',
    slug: 'codice-amico-wise',
    category: 'finanza',
    code: 'robertap429',
    link: 'https://wise.com/invite/ihpc/robertap429',
    bonusInviter: '~90€ ogni 3 amici',
    bonusInvited: 'Trasferimento gratis fino a 600€',
    description: 'Wise (ex TransferWise) e il modo piu economico per inviare denaro all\'estero con cambio reale. Primo trasferimento internazionale senza commissioni!',
    howTo: [
      'Registrati con il link di invito',
      'Effettua un trasferimento internazionale di almeno 200 GBP (~250€)',
      'Il primo trasferimento fino a 600€ e senza commissioni Wise',
      'Chi ti invita riceve il bonus dopo 3 amici',
    ],
    terms: 'Trasferimento minimo ~250€. Ricompensa ~75 GBP (~90€) ogni 3 amici. Ricompensa valida 1 anno. Esclusi: contanti, crypto, gift card.',
    active: true,
    featured: true,
    lastUpdated: '2026-01-14',
    usageCount: 67,
    verified: true,
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
    bonusInvited: '30-70€',
    description: 'Octopus Energy e il fornitore green con prezzi trasparenti. 100% energia rinnovabile. Sconto 30€ per luce, fino a 70€ con luce+gas!',
    howTo: [
      'Clicca sul link Octofriends (non serve piu inserire codice)',
      'Inserisci il tuo indirizzo',
      'Scegli la tariffa luce e/o gas',
      'Completa il passaggio',
      'Ricevi lo sconto sulla prima bolletta (30€ luce, 50-70€ luce+gas)',
    ],
    terms: 'Sconto applicato alla prima bolletta entro 3 mesi. 30€ solo luce, 50-70€ luce+gas. Nessun vincolo contrattuale.',
    active: true,
    featured: true,
    lastUpdated: '2026-01-17',
    usageCount: 94,
    verified: true,
  },
  {
    id: 'unidata',
    name: 'Unidata',
    slug: 'codice-amico-unidata',
    category: 'telefonia',
    code: 'ROBERTAPARMA',
    link: 'https://www.unidata.it/gigafiber/',
    bonusInviter: '1 mese gratis',
    bonusInvited: '1 mese gratis',
    description: 'Unidata e un operatore di fibra ottica con offerte da 19,90€/mese. Fibra fino a 10 Gbit/s senza vincoli. Programma referral con mese gratuito per entrambi!',
    howTo: [
      'Vai sul sito Unidata e scegli la tua offerta Gigafiber',
      'Durante la registrazione, inserisci il codice ROBERTAPARMA',
      'Completa l\'attivazione della fibra',
      'Entrambi riceviamo 1 mese gratis!',
    ],
    terms: 'Referral tramite codice cliente. Offerte: 1000 Mega 19,90€/mese, 2500 Mega 24,90€/mese, 10 Giga 34,90€/mese. Nessun vincolo.',
    contactNote: 'Unidata potrebbe richiedere verifiche aggiuntive sul codice referral. Se hai bisogno di maggiori informazioni o assistenza, contattami!',
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
    code: 'D26WDLQ',
    link: 'https://glovoapp.com/',
    bonusInviter: '5€ per amico',
    bonusInvited: '16€ (4€ x 4 ordini)',
    description: 'Glovo consegna di tutto: cibo, farmacia, supermercato e altro ancora. Il tuo amico riceve 16€ di sconto sui primi 4 ordini!',
    howTo: [
      'Condividi il codice D26WDLQ con un amico',
      'Il tuo amico si registra e inserisce il codice',
      'Lui riceve 16€ di sconto (4€ x 4 ordini, min 10€ per ordine)',
      'Tu ricevi 5€ quando lui effettua il primo ordine',
    ],
    terms: 'Sconto 4€ per ordine su ordini superiori a 10€. Codice valido 30 giorni. Nessun limite inviti.',
    active: true,
    featured: true,
    lastUpdated: '2026-01-10',
    usageCount: 245,
    verified: true,
  },
  {
    id: 'too-good-to-go',
    name: 'Too Good To Go',
    slug: 'codice-amico-too-good-to-go',
    category: 'delivery',
    code: 'USA IL LINK',
    link: 'https://share.toogoodtogo.com/c2c/referral-code/always-on-person-a-incentivized/RVUxLTE3NTE3NzQz',
    bonusInviter: '2,50€ per amico',
    bonusInvited: '2,50€ di credito',
    description: 'Too Good To Go e l\'app anti-spreco numero 1! Salva Magic Box di cibo invenduto da ristoranti, bar, supermercati e pasticcerie a prezzi super scontati (di solito 1/3 del valore).',
    howTo: [
      'Clicca sul link qui sotto per scaricare l\'app',
      'Registrati (il link traccia automaticamente il referral)',
      'Acquista la tua prima Magic Box',
      'Ricevi 2,50€ di credito per il prossimo acquisto!',
    ],
    terms: 'Il credito di 2,50€ viene accreditato dopo il primo acquisto. Utilizzabile su qualsiasi Magic Box. Aiuti anche l\'ambiente riducendo lo spreco alimentare!',
    active: true,
    featured: true,
    lastUpdated: '2026-01-13',
    usageCount: 189,
    verified: true,
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
    active: false,
  },
  // ============================================
  // 🛡️ ASSICURAZIONI
  // ============================================
  {
    id: 'genertel',
    name: 'Genertel',
    slug: 'codice-amico-genertel',
    category: 'assicurazioni',
    code: 'g6OTP6R4',
    link: 'https://piubuoninsieme-genertel.it/registrazione/g6OTP6R4',
    bonusInviter: '50€ Amazon',
    bonusInvited: '25€ sconto online',
    description: 'Genertel e l\'assicurazione diretta del gruppo Generali. Con "Piu Buoni Insieme" chi invita riceve 50€ in buoni Amazon (max 500€), chi acquista ottiene 25€ di sconto!',
    howTo: [
      'Clicca sul link di invito e registrati PRIMA di fare il preventivo',
      'Il numero di cellulare deve corrispondere a quello della registrazione',
      'Fai un preventivo RC Auto su Genertel',
      'Completa l\'acquisto della polizza',
      'Chi ti ha invitato riceve 50€ in buoni Amazon',
    ],
    terms: 'Registrarsi prima o lo stesso giorno dell\'acquisto. Max 10 inviti (500€). Premi da richiedere entro 28/02/2026. Verifica validita promo 2026.',
    expiresAt: '2025-12-31',
    maxInvites: 10,
    active: true,
    featured: true,
    lastUpdated: '2026-01-02',
    usageCount: 56,
    verified: true,
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

  // ============================================
  // 🎁 ALTRI SERVIZI
  // ============================================
  {
    id: 'apefacile',
    name: 'Apefacile',
    slug: 'codice-amico-apefacile',
    category: 'altro',
    code: 'VAYYZHK',
    link: 'https://www.apefacile.it/?aperef=VAYYZHK',
    bonusInviter: '5-10€ Amazon',
    bonusInvited: '10% sconto APE',
    description: 'Apefacile e il servizio online per ottenere l\'APE (Attestato di Prestazione Energetica) in modo semplice e veloce. Tu ricevi 10% di sconto, chi ti invita guadagna buoni Amazon!',
    howTo: [
      'Clicca sul link referral qui sopra',
      'Completa la registrazione su Apefacile',
      'Ordina il tuo APE con 10% di sconto',
      'Chi ti ha invitato riceve un buono Amazon (5€ privati, 10€ professionisti)',
    ],
    terms: 'Buoni Amazon senza scadenza, cumulabili. 5€ per inviti privati, 10€ per professionisti immobiliari. Nessun limite inviti.',
    active: true,
    featured: false,
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
