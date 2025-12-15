import React from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

function Stores() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Nossas lojas' }]} />
      <h1 className="mb-3 text-xl font-bold text-gray-800">
        Loja Física
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border bg-white p-4 text-sm">
          <h2 className="mb-1 text-sm font-semibold text-gray-800">
            São Paulo
          </h2>
          <p className="text-gray-600">
            Rua Belchior Felix, 75 - Pq. Figueira Grande <br></br>
            Ponto de Referencia: Atrás do Habib's
          </p>
          <p className="text-xs text-gray-500">
            Segunda a sexta: 8h às 18h
          </p>
          <p className="text-xs text-gray-500">
            Sábado: 8h às 13h
          </p><br></br>
          <p className="text-xs text-gray-500">
            <a
              href="https://maps.app.goo.gl/rGmo1L2dR7RxJEtg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Veja no Maps</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stores;
