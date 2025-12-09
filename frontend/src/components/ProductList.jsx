import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  if (!products.length) {
    return (
      <p className="py-6 text-sm text-gray-500">
        Nenhum produto encontrado para o filtro selecionado.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;

