import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Guide e Consigli sui Codici Amico',
  description: 'Articoli, guide e consigli su come usare e condividere i codici amico e referral per risparmiare e guadagnare.',
  alternates: {
    canonical: 'https://codiceamico.guru/blog/',
  },
};

const blogPosts = [
  {
    slug: 'dove-pubblicare-codice-amico',
    title: 'Dove Pubblicare il Tuo Codice Amico: Guida 2026',
    description: 'Scopri i migliori siti dove condividere e pubblicare il tuo codice amico e referral per guadagnare.',
    date: '2026-01-18',
    category: 'Guide',
    featured: true,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="section-title">Articoli</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          BLOG
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          Guide, consigli e approfondimenti su come usare al meglio i codici amico e referral.
        </p>
      </section>

      {/* Posts */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white p-8 border border-[#e5e5e5] hover:border-[#111] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-[#999] uppercase">{post.category}</span>
                  {post.featured && <span className="badge-yellow text-[10px]">IN EVIDENZA</span>}
                </div>
                <h2 className="text-2xl font-black text-[#111] mb-2 group-hover:text-[#666]">
                  {post.title}
                </h2>
                <p className="text-[#666] mb-4">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#999]">
                    {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-[#111] font-bold group-hover:underline">
                    Leggi &#8594;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-white p-8 border border-[#e5e5e5] text-center">
            <h2 className="text-xl font-black text-[#111] mb-2">Hai un codice da condividere?</h2>
            <p className="text-[#666] mb-4">
              Pubblica gratuitamente il tuo codice amico su CodiceAmico.guru
            </p>
            <a href="/inserisci-codice/" className="cta-btn inline-flex">
              INSERISCI IL TUO CODICE <span className="ml-2">&#8594;</span>
            </a>
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
