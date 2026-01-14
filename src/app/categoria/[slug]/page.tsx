import { categories, getCodesByCategory, getCategoryBySlug, type CategoryType } from '@/data/codes';
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
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">Codici Amico {category.name}</h1>
              <p className="text-lg text-stone-600 mt-2">{category.description}</p>
            </div>
          </div>
          <span className="badge-green">{codes.length} codici disponibili</span>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codes.map((code) => (
              <a key={code.id} href={`/${code.slug}/`} className="card-hover category-card group">
                <h2 className="text-xl font-bold text-stone-900 group-hover:text-green-600 mb-4">{code.name}</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-semibold">Tu ricevi:</span>
                    <span className="badge-green">{code.bonusInviter}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600 font-semibold">Amico:</span>
                    <span className="badge-blue">{code.bonusInvited}</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm">{code.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
