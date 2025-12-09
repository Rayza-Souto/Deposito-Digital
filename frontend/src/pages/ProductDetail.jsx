import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import products from '../data/products.js';
import { CartContext } from '../App.jsx';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-sm text-gray-500">
          Produto não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb
        items={[
          { label: 'Catálogo', to: '/catalogo' },
          { label: product.name }
        ]}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full rounded border object-cover"
          />
        </div>
        <div>
          <span className="text-xs uppercase text-gray-400">
            {product.category}
          </span>
          <h1 className="mt-1 text-xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {product.description}
          </p>
          <div className="mt-4">
            <div className="text-xs text-gray-500">
              Unidade: {product.unit}
            </div>
            <div className="mt-2 text-2xl font-extrabold text-primary">
              R$ {product.price.toFixed(2)}
            </div>
            <div className="text-xs text-gray-500">
              em até 6x sem juros (parcela mínima R$ 100,00)
            </div>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-5 w-full rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primaryDark md:w-auto"
          >
            Adicionar ao carrinho
          </button>
          <div className="mt-4 text-xs text-gray-600">
            Informações de entrega e prazo podem variar conforme o CEP.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
