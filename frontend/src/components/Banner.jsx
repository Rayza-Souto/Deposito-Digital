import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/bannerImg.png';

function Banner() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-white md:flex-row md:py-14">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-100">
            Ofertas da semana
          </p>
          <h1 className="mt-2 text-2xl font-extrabold md:text-3xl">
            Do básico ao acabamento.
          </h1>
          <p className="mt-3 text-sm text-orange-50 md:max-w-md">
            Faça seu orçamento e peça pelo nosso whatsapp.
            Entregas rápidas!
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/catalogo"
              className="rounded bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-orange-50"
            >
              Ver catálogo
            </Link>
            <span className="text-xs">
              Entrega em até 24h em regiões selecionadas.
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex h-40 items-center justify-center rounded-lg bg-white/10 text-center text-sm md:h-48">
            <img
              src={bannerImg}
              alt="Banner da loja"
              className="h-40 w-full rounded-lg object-cover md:h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
