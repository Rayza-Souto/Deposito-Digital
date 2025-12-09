import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App.jsx';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col rounded border border-gray-200 bg-white shadow-sm">
      <Link to={`/produto/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full rounded-t object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col px-3 py-3">
        <span className="text-[11px] uppercase text-gray-400">
          {product.category}
        </span>
        <Link
          to={`/produto/${product.id}`}
          className="mt-1 line-clamp-2 text-sm font-semibold text-gray-800 hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="mt-3">
          <span className="text-xs text-gray-500">
            {product.unit} • Em estoque
          </span>
          <div className="mt-1 text-lg font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </div>
          <div className="text-[11px] text-gray-500">
            em até 6x sem juros (parcela mínima R$ 100,00)
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 rounded bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primaryDark"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

