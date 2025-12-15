import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

function Contact() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const texto = `
Nome: ${form.nome}
E-mail: ${form.email}
Telefone: ${form.telefone}
Mensagem: ${form.mensagem}
    `;

    const telefoneEmpresa = '5511992865587';
    const url = `https://wa.me/${telefoneEmpresa}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  }

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

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:max-w-lg"
      >
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Nome
          </label>
          <input
            name="nome"
            type="text"
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Telefone / WhatsApp
          </label>
          <input
            name="telefone"
            type="tel"
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            rows="4"
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primaryDark"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}

export default Contact;
