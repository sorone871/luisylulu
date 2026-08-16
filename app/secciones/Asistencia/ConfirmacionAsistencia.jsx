"use client";

import React, { useState } from 'react';

export default function ConfirmacionAsistencia() {
  // URL de tu Google Apps Script implementada
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxYjOyv484BYkTTS7zBnPUfq0SFIug5HooYWaI80W2DN7H6jB1B3COF30Q9NN0z4Ao/exec";

  // Estados locales
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [asistencia, setAsistencia] = useState('Sí , ahí nos vemos');
  const [enviando, setEnviando] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError(false);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          nombre: nombre,
          asistencia: asistencia,
          pases: '1',
          mensaje: ''
        }),
      });

      setEnviando(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Error al registrar la confirmación:', err);
      setEnviando(false);
      setError(true);
    }
  };

  return (
    <section className="w-full py-8 px-4 md:px-8 flex justify-center items-center font-sans selection:bg-emerald-900">
      {/* Fuentes de Google */}
      <link
        href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500&family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
                .font-script-serif { font-family: 'Alex Brush', cursive; }
                .font-serif-title { font-family: 'Cinzel', serif; }
                .font-sans-clean { font-family: 'Montserrat', sans-serif; }
            `}</style>

      {/* ================= TARJETA ÚNICA PRINCIPAL ================= */}
      <div className="w-full  bg-[#222f22] text-stone-100 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden border border-stone-400/20">

        {/* Ilustraciones de ramitas en las esquinas interiores */}
        <svg className="absolute top-0 left-0 w-24 h-28 text-white/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0,0 C30,20 50,60 20,100 M0,0 C20,30 60,50 100,20" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-24 h-28 text-white/10 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0,0 C30,20 50,60 20,100 M0,0 C20,30 60,50 100,20" />
        </svg>

        {/* ================= ENCABEZADO DENTRO DE LA CARD ================= */}
        <div className="text-center relative z-10 mb-6">
          <p className="font-sans-clean text-[10px] md:text-xs tracking-[0.25em] text-stone-300 uppercase mb-1 font-medium">
            NOS ENCANTARÍA CONTAR CONTIGO
          </p>

          <h2 className="font-script-serif text-5xl md:text-6xl text-stone-100 leading-none my-2 font-normal drop-shadow-sm">
            Confirma tu <br /> Asistencia
          </h2>

          <p className="font-sans-clean italic text-xs text-stone-300 font-light leading-relaxed mt-3">
            Ayúdanos a preparar cada detalle con amor — tu presencia lo significa todo para nosotros.
          </p>
        </div>

        {/* Divisor Decorativo */}
        <div className="w-16 h-px bg-stone-400/30 mx-auto my-6 relative z-10" />

        {/* ================= CONTENIDO DEL FORMULARIO ================= */}
        <div className="relative z-10">

          {/* Icono Corazón en Círculo */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full border border-stone-300/30 flex items-center justify-center bg-stone-100/5">
              <svg className="w-5 h-5 text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
          </div>

          {/* Subtítulo */}
          <div className="text-center mb-6">
            <h3 className="font-serif-title text-base tracking-[0.15em] text-stone-100 font-normal">
              Confirmar tu lugar
            </h3>
            <p className="font-sans-clean text-[9px] tracking-[0.25em] text-stone-400 uppercase mt-0.5">
              CON MUCHO AMOR
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-left"
            >
              {/* 1. Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-stone-300 font-medium">
                  CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-transparent border-b border-stone-400/40 pb-2 pt-1 font-sans-clean italic text-sm text-stone-100 placeholder-stone-400/60 focus:outline-none focus:border-stone-100 transition-colors"
                />
              </div>
              {/* 2. Nombre Completo */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-stone-300 font-medium">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Andrea Ramírez..."
                  required
                  className="w-full bg-transparent border-b border-stone-400/40 pb-2 pt-1 font-sans-clean italic text-sm text-stone-100 placeholder-stone-400/60 focus:outline-none focus:border-stone-100 transition-colors"
                />
              </div>

              {/* 3. ¿Podrás acompañarnos? */}
              <div className="flex flex-col gap-1.5 pt-1">
                <label htmlFor="asistencia" className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-stone-300 font-medium">
                  ¿PODRÁS ACOMPAÑARNOS?
                </label>
                <div className="relative">
                  <select
                    id="asistencia"
                    value={asistencia}
                    onChange={(e) => setAsistencia(e.target.value)}
                    className="w-full bg-transparent border-b border-stone-400/40 pb-2 pt-1 font-sans-clean text-sm text-stone-100 appearance-none focus:outline-none focus:border-stone-100 transition-colors cursor-pointer pr-8"
                  >
                    <option value="Sí , ahí nos vemos" className="bg-[#222f22] text-stone-100">
                      ¡Sí, ahí estaré!
                    </option>
                    <option value="Lo siento , No podré asistir" className="bg-[#222f22] text-stone-100">
                      Lo siento, no podré asistir
                    </option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-[11px] text-red-300 text-center font-sans-clean">
                  Ocurrió un error al enviar. Por favor intenta de nuevo.
                </p>
              )}

              {/* Botón de Confirmación */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={enviando}
                  className="cursor-pointer w-full bg-white text-stone-900 font-sans-clean text-xs tracking-[0.2em] uppercase py-3.5 px-6 rounded-sm hover:bg-stone-100 active:scale-[0.99] transition-all duration-150 font-medium shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {enviando ? 'ENVIANDO...' : 'CONFIRMAR ASISTENCIA →'}
                </button>
              </div>

              {/* Pie de foto de la Card */}
              <div className="text-center pt-2 space-y-1">
                <p className="font-sans-clean text-[9px] tracking-[0.2em] uppercase text-stone-300">
                  FECHA LÍMITE · 01 DE SEPTIEMBRE 2026
                </p>
                <p className="font-sans-clean text-[8px] tracking-[0.15em] uppercase text-stone-400">
                  RECIBIRÁS LA CONFIRMACIÓN POR WHATSAPP
                </p>
              </div>
            </form>
          ) : (
            /* Vista de Agradecimiento */
            <div className="py-6 text-center space-y-2">
              <span className="text-4xl block">🕊️</span>
              <h4 className="font-script-serif text-4xl text-stone-100">¡Muchas Gracias!</h4>
              <p className="font-sans-clean text-xs tracking-wider text-stone-300 uppercase">
                Tu respuesta ha sido guardada.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}