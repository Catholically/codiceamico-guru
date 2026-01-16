import { categories, getCodesByCategory, getCategoryBySlug } from '@/data/codes';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Categoria non trovata' };

  const codes = getCodesByCategory(category.id);

  return {
    title: `Codici Amico ${category.name} | ${codes.length} Bonus Disponibili`,
    description: `${category.description}. Trova i migliori codici referral per ${category.name.toLowerCase()}.`,
    alternates: {
      canonical: `https://codiceamico.guru/categoria/${category.slug}/`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const codes = getCodesByCategory(category.id);

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span className="text-white">{category.name}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 py-12 max-w-5xl">
        <div className="badge-yellow mb-4">{category.icon} {category.name}</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          CODICI AMICO<br />
          <span className="text-[#FAFF00]">{category.name.toUpperCase()}</span>
        </h1>
        <p className="text-xl text-[#999] max-w-2xl">
          {category.description}
        </p>
        <div className="mt-4 text-sm text-[#666]">
          {codes.length} codici disponibili
        </div>
      </section>

      {/* Codes Grid */}
      <section className="light-section px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {codes.map((code) => (
            <a key={code.id} href={`/${code.slug}/`} className="card block">
              <div className="card-cat">{category.name}</div>
              <h3>{code.name}</h3>
              <div className="flex gap-8 mb-4">
                <div>
                  <span className="bonus-label">Tu ricevi</span>
                  <span className="bonus-value">{code.bonusInviter}</span>
                </div>
                <div>
                  <span className="bonus-label">Amico</span>
                  <span className="bonus-value">{code.bonusInvited}</span>
                </div>
              </div>
              <p>{code.description.slice(0, 100)}...</p>
              {code.expiresAt && (
                <div className="mt-3 text-xs text-orange-600 font-medium">
                  Scade il {new Date(code.expiresAt).toLocaleDateString('it-IT')}
                </div>
              )}
            </a>
          ))}
        </div>

        {codes.length === 0 && (
          <p className="text-[#999] text-center py-12">
            Nessun codice disponibile in questa categoria al momento.
          </p>
        )}
      </section>
    </>
  );
}
