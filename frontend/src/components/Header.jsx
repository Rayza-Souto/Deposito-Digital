import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Phone, MapPin, Search } from 'lucide-react';

function Header({ onOpenCart }) {
  const navClass =
    'text-sm font-medium text-gray-700 hover:text-primary transition-colors';

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="h-4 w-4 text-primary" />
          <span>Whatsapp: (11) 97110-9010</span>
          <span>Telefone: (11) 5514-6617</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-primary" />
            <Link to="/lojas" className="hover:text-primary">
              Nossa loja
            </Link>
          </div>
          <Link to="/sobre" className="hover:text-primary">
            Sobre
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-lg font-extrabold text-white">
            F
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold uppercase tracking-tight">
              Figueira - Material para construção
            </div>
            <div className="text-[11px] text-gray-500">
              Sua obra começa aqui
            </div>
          </div>
        </Link>

        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Busque por produto, categoria, marca..."
            className="w-full rounded-l border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button className="flex items-center gap-1 rounded-r bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primaryDark">
            <Search className="h-4 w-4" />
            Buscar
          </button>
        </div>

        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 rounded border border-primary px-3 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Carrinho</span>
        </button>
      </div>

      <nav className="bg-secondary">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-2 text-xs font-semibold uppercase text-white">
          <NavLink to="/" className={navClass}>
            Início
          </NavLink>
          <NavLink to="/catalogo" className={navClass}>
            Catálogo
          </NavLink>
          <NavLink to="/lojas" className={navClass}>
            Nossas lojas
          </NavLink>
          <NavLink to="/contato" className={navClass}>
            Contato
          </NavLink>
          <NavLink to="/sobre" className={navClass}>
            Institucional
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
