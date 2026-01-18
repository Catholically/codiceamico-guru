import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Inizializza Resend solo se la chiave è presente (evita errore in build)
const resend = process.env.RESEND ? new Resend(process.env.RESEND) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, codice, messaggio } = body;

    // Validazione base
    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: 'Compila tutti i campi obbligatori' },
        { status: 400 }
      );
    }

    // Validazione email semplice
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
      subject: codice
        ? `[CodiceAmico] Richiesta info: ${codice}`
        : '[CodiceAmico] Nuovo messaggio dal sito',
      html: `
        <h2>Nuovo messaggio da CodiceAmico.guru</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${codice ? `<p><strong>Codice interessato:</strong> ${codice}</p>` : ''}
        <hr />
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Errore nell\'invio dell\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
}
