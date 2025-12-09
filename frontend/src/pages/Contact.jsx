import React from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Contato' }]} />
      <h1 className="mb-3 text-xl font-bold text-gray-800">
        Fale conosco
      </h1>
      <p className="mb-4 text-sm text-gray-600">
        Preencha o formulário abaixo para tirar dúvidas sobre
        produtos, prazos de entrega ou orçamento de material para
        sua obra.
      </p>
      <form className="grid gap-4 md:max-w-lg">
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Nome
          </label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Mensagem
          </label>
          <textarea
            rows="4"
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <button className="mt-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primaryDark">
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}

export default Contact;
