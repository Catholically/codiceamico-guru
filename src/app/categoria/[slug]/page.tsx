import { categories, getCodesByCategory, getCategoryBySlug } from '@/data/codes';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();
  
  const codes = getCodesByCategory(category.id);

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 py-12 border-b border-white/10">
        <div className="breadcrumb mb-6">
          <a href="/">Home</a> <span className="mx-2">/</span> <span className="text-white">{category.name}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-6xl">{category.icon}</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              CODICI <span className="text-[#FAFF00]">{category.name.toUpperCase()}</span>
            </h1>
            <p className="text-[#999] text-lg">{category.description}</p>
          </div>
        </div>
        <div className="mt-6 inline-block px-4 py-2 bg-[#FAFF00] text-[#111] text-sm font-bold">
          {codes.length} CODICI DISPONIBILI
        </div>
      </section>

      {/* Cards */}
      <section className="light-section py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {codes.map((code) => (
            <a key={code.id} href={`/${code.slug}/`} className="card block">
              <div className="card-cat">{category.name}</div>
              <h2 className="text-2xl font-extrabold tracking-tight mb-4">{code.name}</h2>
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
              <p>{code.description}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
