import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProductList from '../components/ProductList.jsx';
import products from '../data/products.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Catalog() {
  const query = useQuery();
  const categoria = query.get('categoria');

  const filtered = useMemo(() => {
    if (!categoria) return products;
    return products.filter(
      p => p.category.toLowerCase() === categoria.toLowerCase()
    );
  }, [categoria]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Catálogo' }]} />
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">
          Catálogo de produtos
        </h1>
        {categoria && (
          <span className="text-xs text-gray-500">
            Filtrado por categoria: {categoria}
          </span>
        )}
      </div>
      <ProductList products={filtered} />
    </div>
  );
}

export default Catalog;
