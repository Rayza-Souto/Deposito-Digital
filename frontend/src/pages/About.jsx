import React from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Institucional' }]} />
      <h1 className="mb-3 text-xl font-bold text-gray-800">
        Quem somos
      </h1>
      <p className="mb-2 text-sm text-gray-600">
        Nossa loja é uma loja de materiais para
        construção que nasceu com foco no atendimento próximo ao
        cliente de obra, oferecendo mix completo de produtos para
        todas as etapas da construção e reforma.
      </p>
      <p className="mb-2 text-sm text-gray-600">
        Com uma estrutura pensada para o profissional e para o
        consumidor final, trabalhamos com marcas reconhecidas e
        logística preparada para entregar com agilidade, sempre
        buscando preço justo e bom atendimento.
      </p>
    </div>
  );
}

export default About;
