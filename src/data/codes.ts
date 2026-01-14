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
  featured?: boolean;
  active: boolean;
}

export type CategoryType = 'banche' | 'energia' | 'telefonia' | 'delivery' | 'assicurazioni' | 'finanza' | 'altro';

export interface Category {
  id: CategoryType;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'banche', name: 'Banche e Conti', slug: 'banche', description: 'Codici amico per banche online e carte', icon: '🏦' },
  { id: 'finanza', name: 'Investimenti', slug: 'finanza', description: 'Broker e piattaforme di trading', icon: '📈' },
  { id: 'energia', name: 'Luce e Gas', slug: 'energia', description: 'Fornitori di energia elettrica e gas', icon: '⚡' },
  { id: 'telefonia', name: 'Telefonia', slug: 'telefonia', description: 'Operatori telefonici e internet', icon: '📱' },
  { id: 'delivery', name: 'Food e Delivery', slug: 'delivery', description: 'App di food delivery e spesa', icon: '🍕' },
  { id: 'assicurazioni', name: 'Assicurazioni', slug: 'assicurazioni', description: 'Assicurazioni auto, casa e vita', icon: '🛡️' },
  { id: 'altro', name: 'Altri Servizi', slug: 'altro', description: 'Altri codici amico utili', icon: '🎁' },
];

export const referralCodes: ReferralCode[] = [
  {
    id: 'n26', name: 'N26', slug: 'codice-amico-n26', category: 'banche',
    code: 'DA_INSERIRE', link: 'https://n26.com/', bonusInviter: '5€', bonusInvited: '0€',
    description: 'N26 è una banca tedesca 100% digitale con IBAN tedesco.',
    howTo: ['Clicca sul link', 'Registrati', 'Fai il primo acquisto'], terms: 'Valido per nuovi clienti.',
    active: true, featured: true,
  },
  {
    id: 'revolut', name: 'Revolut', slug: 'codice-amico-revolut', category: 'banche',
    code: 'DA_INSERIRE', link: 'https://revolut.com/', bonusInviter: 'Fino a 50€', bonusInvited: 'Fino a 50€',
    description: 'Conto multivaluta con carta fisica e virtuale.',
    howTo: ['Scarica app', 'Registrati', 'Ordina carta', 'Fai 3 acquisti'], terms: 'Richiesti 3 acquisti.',
    active: true, featured: true,
  },
  {
    id: 'satispay', name: 'Satispay', slug: 'codice-amico-satispay', category: 'banche',
    code: 'DA_INSERIRE', link: 'https://satispay.com/', bonusInviter: '5-50€', bonusInvited: '5€',
    description: 'App italiana per pagamenti digitali e cashback.',
    howTo: ['Scarica app', 'Registrati con codice', 'Collega conto'], terms: 'Bonus variabile.',
    active: true, featured: true,
  },
  {
    id: 'trade-republic', name: 'Trade Republic', slug: 'codice-amico-trade-republic', category: 'finanza',
    code: 'DA_INSERIRE', link: 'https://traderepublic.com/', bonusInviter: '10-50€', bonusInvited: '10-50€',
    description: 'Broker europeo con 1€ per ordine.',
    howTo: ['Scarica app', 'Registrati', 'Deposita 50€'], terms: 'Bonus in azioni.',
    active: true, featured: true,
  },
  {
    id: 'octopus', name: 'Octopus Energy', slug: 'codice-amico-octopus', category: 'energia',
    code: 'DA_INSERIRE', link: 'https://octopusenergy.it/', bonusInviter: '30€', bonusInvited: '30€',
    description: 'Fornitore green con prezzi trasparenti.',
    howTo: ['Clicca link', 'Scegli tariffa', 'Completa passaggio'], terms: 'Sconto prima bolletta.',
    active: true, featured: true,
  },
  {
    id: 'hype', name: 'HYPE', slug: 'codice-amico-hype', category: 'banche',
    code: 'DA_INSERIRE', link: 'https://hype.it/', bonusInviter: 'Punti', bonusInvited: '5-50€',
    description: 'Conto con carta collegato allo smartphone.',
    howTo: ['Scarica app', 'Inserisci codice', 'Attiva carta'], terms: 'Bonus variabile per piano.',
    active: true,
  },
  {
    id: 'deliveroo', name: 'Deliveroo', slug: 'codice-amico-deliveroo', category: 'delivery',
    code: 'DA_INSERIRE', link: 'https://deliveroo.it/', bonusInviter: 'Credito', bonusInvited: 'Credito',
    description: 'Food delivery dai migliori ristoranti.',
    howTo: ['Scarica app', 'Inserisci codice', 'Fai primo ordine'], terms: 'Importo variabile.',
    active: true,
  },
  {
    id: 'glovo', name: 'Glovo', slug: 'codice-amico-glovo', category: 'delivery',
    code: 'DA_INSERIRE', link: 'https://glovoapp.com/', bonusInviter: '5€', bonusInvited: '5€',
    description: 'Delivery di cibo, farmacia, supermercato.',
    howTo: ['Scarica app', 'Inserisci codice', 'Fai ordine'], terms: 'Sconto primo ordine.',
    active: true,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}

export function getCodesByCategory(categoryId: CategoryType) {
  return referralCodes.filter(c => c.category === categoryId && c.active);
}

export function getCodeBySlug(slug: string) {
  return referralCodes.find(c => c.slug === slug && c.active);
}

export function getFeaturedCodes() {
  return referralCodes.filter(c => c.featured && c.active);
}

export function getAllActiveCodes() {
  return referralCodes.filter(c => c.active);
}
