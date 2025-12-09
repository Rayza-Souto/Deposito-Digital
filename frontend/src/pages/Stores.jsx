import React from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

function Stores() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumb items={[{ label: 'Nossas lojas' }]} />
      <h1 className="mb-3 text-xl font-bold text-gray-800">
        Lojas físicas
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border bg-white p-4 text-sm">
          <h2 className="mb-1 text-sm font-semibold text-gray-800">
            Loja Zona Sul
          </h2>
          <p className="text-gray-600">
            Rua Exemplo, 123 - Bairro Centro
          </p>
          <p className="text-xs text-gray-500">
            Segunda a sexta: 6h30 às 21h30
          </p>
          <p className="text-xs text-gray-500">
            Sábado: 7h às 21h • Domingo: 8h às 20h
          </p>
        </div>
        <div className="rounded border bg-white p-4 text-sm">
          <h2 className="mb-1 text-sm font-semibold text-gray-800">
            Centro de Distribuição
          </h2>
          <p className="text-gray-600">
            Avenida Logística, 999 - Distrito Industrial
          </p>
          <p className="text-xs text-gray-500">
            Segunda a sexta: 7h30 às 18h
          </p>
          <p className="text-xs text-gray-500">
            Sábado: 8h às 18h
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stores;
