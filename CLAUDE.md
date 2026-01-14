# CLAUDE.md - Istruzioni per AI Assistant

Questo file contiene istruzioni per Claude o altri AI assistant che lavorano su questo progetto.

---

## Panoramica Progetto

**CodiceAmico.guru** è un sito italiano che raccoglie codici referral/amico per vari servizi.

- **Stack:** Next.js 14, TypeScript, Tailwind CSS
- **Hosting:** Vercel (deploy automatico su push)
- **Dominio:** codiceamico.guru
- **Design:** Style 6 - Minimal Contrast (nero #111 + giallo #FAFF00)

---

## File Principali

| File | Descrizione |
|------|-------------|
| `src/data/codes.ts` | **DATABASE** - Tutti i codici referral |
| `src/app/page.tsx` | Homepage |
| `src/app/layout.tsx` | Layout globale (header/footer) |
| `src/app/globals.css` | Stili CSS globali |
| `src/app/[codeSlug]/page.tsx` | Pagina singolo codice |
| `src/app/categoria/[slug]/page.tsx` | Pagina categoria |

---

## Task Comuni

### Aggiungere un nuovo codice

1. Apri `src/data/codes.ts`
2. Aggiungi oggetto nell'array `referralCodes`:

```typescript
{
  id: 'nome-univoco',
  name: 'Nome Servizio',
  slug: 'codice-amico-nome',      // Diventa l'URL
  category: 'banche',             // banche|finanza|energia|telefonia|delivery|assicurazioni|altro
  code: 'CODICE123',
  link: 'https://...',
  bonusInviter: '€X',
  bonusInvited: '€X',
  description: '...',
  howTo: ['Step 1', 'Step 2', 'Step 3'],
  terms: '...',
  featured: false,                // true = in evidenza homepage
  active: true,
},
```

### Modificare un codice esistente

Cerca per `id` o `name` in `src/data/codes.ts` e modifica i campi.

### Disattivare un codice

Cambia `active: false` - il codice non sarà più visibile.

### Mettere in evidenza

Cambia `featured: true` - apparirà nella sezione "In Evidenza" homepage.

---

## Design System

### Colori
- **Background:** `#111111` (nero)
- **Testo:** `#FAFAFA` (bianco)
- **Accent:** `#FAFF00` (giallo elettrico)
- **Muted:** `#999999` (grigio)

### Hover States
- Cards: sfondo giallo, testo nero
- Links: colore bianco

### Font
- **Family:** Inter
- **Weights:** 400, 500, 600, 700, 800, 900

---

## Non Fare

- Non modificare le icone SVG senza chiedere
- Non cambiare i colori del design system
- Non rimuovere il badge "Aggiornato" dalla homepage
- Non usare emoji nelle icone categorie (usiamo SVG)

---

## Best Practices

- Slug sempre con prefisso `codice-amico-`
- ID sempre lowercase senza spazi
- Link sempre con https://
- Bonus sempre con simbolo €
- Description max 100 caratteri
- howTo sempre almeno 3 step

---

## Deploy

Il deploy è automatico:
1. Push su branch `main`
2. Vercel builda automaticamente
3. Live in ~1 minuto

---

## Contatti

Repository: https://github.com/Catholically/codiceamico-guru
