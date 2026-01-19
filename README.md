# CodiceAmico.guru

Sito web per codici referral/amico italiani.

**Live:** https://www.codiceamico.guru

---

## Come Aggiungere un Nuovo Codice Amico

### 1. Apri il file dei codici
Il file si trova in: `src/data/codes.ts`

### 2. Aggiungi il nuovo codice nell'array `referralCodes`

Copia questo template e compilalo:

```typescript
{
  id: 'nome-servizio',           // ID univoco (minuscolo, no spazi)
  name: 'Nome Servizio',         // Nome da mostrare
  slug: 'codice-amico-nome',     // URL: codiceamico.guru/codice-amico-nome/
  category: 'banche',            // Categoria (vedi lista sotto)
  code: 'ABC123',                // Il codice referral (o 'DA_INSERIRE' se non lo hai ancora)
  link: 'https://sito.com/',     // Link affiliato/referral
  bonusInviter: '10€',           // Quanto ricevi tu
  bonusInvited: '10€',           // Quanto riceve l'amico
  description: 'Descrizione breve del servizio.',
  howTo: [                       // Passi per ottenere il bonus
    'Clicca sul link',
    'Registrati',
    'Completa la verifica'
  ],
  terms: 'Termini e condizioni del bonus.',
  featured: false,               // true = appare in homepage "In Evidenza"
  active: true,                  // true = visibile sul sito
},
```

### 3. Categorie disponibili

| ID | Nome |
|----|------|
| `banche` | Banche e Conti |
| `finanza` | Investimenti |
| `energia` | Luce e Gas |
| `telefonia` | Telefonia |
| `delivery` | Food e Delivery |
| `assicurazioni` | Assicurazioni |
| `altro` | Altri Servizi |

### 4. Salva e committa

Il sito si aggiorna automaticamente su Vercel dopo ogni push su `main`.

---

## Esempio Completo

```typescript
{
  id: 'buddybank',
  name: 'Buddybank',
  slug: 'codice-amico-buddybank',
  category: 'banche',
  code: 'AMICO2026',
  link: 'https://buddybank.com/invita',
  bonusInviter: '40€',
  bonusInvited: '40€',
  description: 'Conto corrente UniCredit 100% mobile con carta di debito inclusa.',
  howTo: [
    'Scarica l\'app Buddybank',
    'Inserisci il codice durante la registrazione',
    'Completa l\'apertura conto',
    'Ricevi il bonus dopo 30 giorni'
  ],
  terms: 'Bonus accreditato entro 30 giorni dall\'apertura. Valido per nuovi clienti.',
  featured: true,
  active: true,
},
```

---

## Comandi Utili

```bash
# Installa dipendenze
npm install

# Avvia in sviluppo
npm run dev

# Build produzione
npm run build
```

---

## Struttura File

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Layout globale
│   ├── globals.css           # Stili CSS
│   ├── [codeSlug]/
│   │   └── page.tsx          # Pagina singolo codice
│   └── categoria/
│       └── [slug]/
│           └── page.tsx      # Pagina categoria
└── data/
    └── codes.ts              # TUTTI I CODICI QUI
```

---

## Design

- **Style:** Minimal Contrast (nero + giallo #FAFF00)
- **Font:** Inter
- **Framework:** Next.js 14 + Tailwind CSS
- **Hosting:** Vercel

---

## Checklist Nuovo Codice

- [ ] ID univoco
- [ ] Slug con prefisso `codice-amico-`
- [ ] Categoria corretta
- [ ] Link funzionante
- [ ] Descrizione chiara
- [ ] Passi howTo completi
- [ ] `active: true`
- [ ] Se importante: `featured: true`
