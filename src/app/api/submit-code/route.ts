import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Inizializza Resend solo se la chiave è presente
const resend = process.env.RESEND ? new Resend(process.env.RESEND) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, servizio, categoria, codice, link, bonusTu, bonusPresentatore, descrizione, istruzioni } = body;

    // Validazione base
    if (!nome || !email || !servizio || !categoria || !codice) {
      return NextResponse.json(
        { error: 'Compila tutti i campi obbligatori' },
        { status: 400 }
      );
    }

    // Validazione email
    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Verifica che Resend sia configurato
    if (!resend) {
      console.error('RESEND API key non configurata');
      return NextResponse.json(
        { error: 'Servizio email non configurato' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'CodiceAmico.guru <onboarding@resend.dev>',
      to: ['robykz@gmail.com'],
      replyTo: email,
      subject: `[CodiceAmico] NUOVO CODICE: ${servizio}`,
      html: `
        <h2>Nuovo codice inviato da un utente</h2>
        <hr />
        <h3>Dati utente</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <h3>Dati codice</h3>
        <p><strong>Servizio/Azienda:</strong> ${servizio}</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Codice:</strong> <code style="background:#f0f0f0;padding:4px 8px;font-size:16px;">${codice}</code></p>
        ${link ? `<p><strong>Link referral:</strong> <a href="${link}">${link}</a></p>` : ''}
        <p><strong>Bonus per chi usa il codice:</strong> ${bonusTu || 'Non specificato'}</p>
        <p><strong>Bonus per chi presenta:</strong> ${bonusPresentatore || 'Non specificato'}</p>
        ${descrizione ? `<p><strong>Descrizione:</strong></p><p>${descrizione.replace(/\n/g, '<br />')}</p>` : ''}
        ${istruzioni ? `<p><strong>Istruzioni:</strong></p><p>${istruzioni.replace(/\n/g, '<br />')}</p>` : ''}
        <hr />
        <p style="color:#666;font-size:12px;">Da valutare per pubblicazione su CodiceAmico.guru</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Errore nell\'invio' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Submit code API error:', error);
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
}
