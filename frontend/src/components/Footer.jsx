import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-8 border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-4">
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-700">
            Sobre
          </h4>
          <p className="text-xs text-gray-600">
            Loja especializada em materiais para construção, reforma e
            acabamento, com entrega rápida e atendimento próximo.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-700">
            Institucional
          </h4>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>
              <Link to="/sobre" className="hover:text-primary">
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="/lojas" className="hover:text-primary">
                Nossas lojas
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-primary">
                Fale conosco
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase text-gray-700">
            Compre pelo whatsapp
          </h4>
          <p className="text-xs text-gray-600">
            Segunda a sexta: 8h às 18h
          </p>
          <p className="text-xs text-gray-600">
            Sábado: 8h às 13h
          </p>
          <p className="mt-1 text-sm font-bold text-primary">
            (11) 97110-9010
          </p>
          <p className="mt-1 text-xs text-gray-600">WhatsApp disponível.</p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-[11px] text-gray-500">
          <span>© {new Date().getFullYear()} Materiais para construção</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
