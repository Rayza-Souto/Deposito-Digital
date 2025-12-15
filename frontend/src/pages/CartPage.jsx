import React, { useContext } from 'react';
import { CartContext } from '../pages/CartContext.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, updateQty, cartTotal } =
    useContext(CartContext);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Meu carrinho' }]} />
      <h1 className="mb-4 text-xl font-bold text-gray-800">
        Meu carrinho
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">
          Seu carrinho está vazio. Adicione produtos pelo catálogo.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-3">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded border bg-white px-3 py-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {item.unit}
                  </span>
                  <span className="text-xs text-gray-500">
                    Preço unitário: R${' '}
                    {item.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs">
                  <div className="flex items-center gap-1">
                    <button
                      className="h-5 w-5 rounded border text-center"
                      onClick={() =>
                        updateQty(item.id, item.qty - 1)
                      }
                    >
                      -
                    </button>
                    <span className="w-6 text-center">
                      {item.qty}
                    </span>
                    <button
                      className="h-5 w-5 rounded border text-center"
                      onClick={() =>
                        updateQty(item.id, item.qty + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm font-bold text-primary">
                    R$ {(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded border bg-white p-4 text-sm">
            <h2 className="mb-3 text-sm font-semibold uppercase text-gray-700">
              Resumo
            </h2>
            <div className="flex items-center justify-between text-xs">
              <span>Subtotal</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-xs">
              <span>Frete</span>
              <span>Calcular no próximo passo</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm font-bold">
              <span>Total</span>
              <span className="text-primary">
                R$ {cartTotal.toFixed(2)}
              </span>
            </div>
            <button className="mt-4 w-full rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primaryDark"
            onClick={() => navigate('/pagamento')}>
              Continuar para pagamento
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

export default CartPage;
