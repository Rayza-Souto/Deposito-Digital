import React, { useContext, useState } from 'react';
import { CartContext } from '../App.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CheckoutPage() {
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useContext(CartContext);

    // Cliente
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // Pagamento
    const [payment, setPayment] = useState('pix');

    // Frete
    const originCep = '04914120'; // CEP interno 
    const [destCep, setDestCep] = useState('');
    const freight = destCep ? 15 : 0; // frete fixo por enquanto

    const totalWithFreight = cartTotal + freight;

    //usuário não pode acessar a página de checkout com o carrinho vazio

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/carrinho');
        }
    }, [cartItems, navigate]);


    function handleSubmit() {
        if (!name || !phone || !destCep) {
            alert('Preencha nome, telefone e CEP de destino.');
            return;
        }

        const itemsText = cartItems
            .map(
                item =>
                    `${item.qty}x ${item.name} - R$ ${(item.qty * item.price).toFixed(2)}`
            )
            .join('\n');

        const message = `
*Novo pedido*

Cliente: ${name}
Telefone: ${phone}

Itens:
${itemsText}

Frete: R$ ${freight.toFixed(2)}
CEP destino: ${destCep}

Total: R$ ${totalWithFreight.toFixed(2)}
Pagamento: ${payment}
    `.trim();

        const phoneNumber = '5511992865587';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');

        // limpar formulário
        setName('');
        setPhone('');
        setDestCep('');
        setPayment('pix');

        //limpar carrinho
        clearCart();

        //redirecionar para a home
        navigate('/');


    }



    return (
        <div className="mx-auto max-w-4xl px-4 py-6">
            <Breadcrumb items={[{ label: 'Pagamento' }]} />

            <h1 className="mb-4 text-xl font-bold">Finalizar pedido</h1>

            {/* Contato */}
            <div className="mb-6 rounded border bg-white p-4">
                <h2 className="mb-2 text-sm font-semibold uppercase">
                    Contato
                </h2>

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mb-2 w-full rounded border px-3 py-2 text-sm"
                />

                <input
                    type="tel"
                    placeholder="Telefone / WhatsApp"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full rounded border px-3 py-2 text-sm"
                />
            </div>

            {/* Frete */}
            <div className="mb-6 rounded border bg-white p-4">
                <h2 className="mb-2 text-sm font-semibold uppercase">
                    Frete
                </h2>

                <input
                    type="text"
                    placeholder="CEP"
                    value={destCep}
                    onChange={e => setDestCep(e.target.value)}
                    className="w-full rounded border px-3 py-2 text-sm"
                />

                {destCep && (
                    <p className="mt-2 text-sm">
                        Frete: <strong>R$ {freight.toFixed(2)}</strong>
                    </p>
                )}
            </div>

            {/* Revisão */}
            <div className="mb-6 rounded border bg-white p-4">
                <h2 className="mb-2 text-sm font-semibold uppercase">
                    Revisão dos itens
                </h2>

                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.qty}x {item.name}</span>
                        <span>R$ {(item.qty * item.price).toFixed(2)}</span>
                    </div>
                ))}

                <div className="mt-2 flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R$ {cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span>Frete</span>
                    <span>R$ {freight.toFixed(2)}</span>
                </div>

                <div className="mt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                        R$ {totalWithFreight.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Pagamento */}
            <div className="mb-6 rounded border bg-white p-4">
                <h2 className="mb-2 text-sm font-semibold uppercase">
                    Forma de pagamento
                </h2>

                {['pix', 'dinheiro', 'credito', 'debito'].map(type => (
                    <label key={type} className="mt-2 flex items-center gap-2 text-sm">
                        <input
                            type="radio"
                            name="payment"
                            value={type}
                            checked={payment === type}
                            onChange={e => setPayment(e.target.value)}
                        />
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </label>
                ))}
            </div>

            <button
                disabled={cartItems.length === 0}
                onClick={handleSubmit}
                className={`w-full rounded px-4 py-2 text-sm font-semibold text-white
                ${cartItems.length === 0
                        ? 'cursor-not-allowed bg-gray-400'
                        : 'bg-primary hover:bg-primaryDark'
                    }`}
            >
                Enviar Pedido pelo Whatsapp
            </button>

            <button
                onClick={() => navigate('/carrinho')}
                className="mt-2 w-full rounded border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition"
            >
                Voltar ao carrinho
            </button>
        </div>
    );
}

export default CheckoutPage;
