import React from 'react';
import Banner from '../components/Banner.jsx';
import CategoryGrid from '../components/CategoryGrid.jsx';
import ProductList from '../components/ProductList.jsx';
import products from '../data/products.js';

function Home() {
  const highlights = products.filter(p => p.highlight);

  return (
    <>
      <Banner />
      <CategoryGrid />
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          Ofertas em destaque
        </h2>
        <ProductList products={highlights} />
      </section>
    </>

  );
}

export default Home;
