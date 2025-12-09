import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Material básico', slug: 'material-basico' },
  { name: 'Tintas', slug: 'tintas' },
  { name: 'Pisos e revestimentos', slug: 'pisos' },
  { name: 'Hidráulica', slug: 'hidraulica' },
  { name: 'Elétrica', slug: 'eletrica' },
  { name: 'Ferramentas', slug: 'ferramentas' }
];

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="mb-4 text-lg font-bold text-gray-800">
        Compre por categoria
      </h2>
      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map(cat => (
          <Link
            key={cat.slug}
            to={`/catalogo?categoria=${encodeURIComponent(cat.name)}`}
            className="flex h-20 flex-col justify-center rounded border border-gray-200 bg-white px-2 text-center text-xs font-semibold uppercase text-gray-700 shadow-sm hover:border-primary hover:text-primary"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;

