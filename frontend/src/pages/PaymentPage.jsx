import React, { useContext, useState } from 'react';
import { CartContext } from '../pages/CartContext.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';

function PaymentPage() {
  const { cartTotal, cartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('pix');

  function handleSubmit(e) {
    e.preventDefault();
    // aqui você pode chamar sua API / contexto para criar/enviar o pedido
    console.log('Enviando pedido:', {
      itens: cartItems,
      total: cartTotal,
      metodoPagamento: paymentMethod,
    });
    // exemplo: navegar para página de confirmação
    // navigate('/pedido-confirmado');
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Pagamento' }]} />

      <h1 className="mb-4 text-xl font-bold text-gray-800">
        Pagamento
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">
          Seu carrinho está vazio. Adicione produtos pelo catálogo.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-[2fr,1fr]"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase text-gray-700">
              Selecione o tipo de pagamento
            </h2>

            <div className="space-y-2 rounded border bg-white p-4 text-sm">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="pix"
                  checked={paymentMethod === 'pix'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="h-4 w-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    Pix
                  </span>
                  <span className="text-xs text-gray-500">
                    Confirmação rápida do pagamento.
                  </span>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit_card"
                  checked={paymentMethod === 'credit_card'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="h-4 w-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    Cartão de crédito
                  </span>
                  <span className="text-xs text-gray-500">
                    Pague à vista ou parcelado.
                  </span>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="boleto"
                  checked={paymentMethod === 'boleto'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="h-4 w-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    Boleto bancário
                  </span>
                  <span className="text-xs text-gray-500">
                    Compensação em até 2 dias úteis.
                  </span>
                </div>
              </label>
            </div>
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
              <span>Calcular / definido anteriormente</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm font-bold">
              <span>Total</span>
              <span className="text-primary">
                R$ {cartTotal.toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primaryDark"
            >
              Enviar pedido
            </button>
          </aside>
        </form>
      )}
    </div>
  );
}

export default PaymentPage;
