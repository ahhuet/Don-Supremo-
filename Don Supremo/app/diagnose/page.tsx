'use client';
import { useEffect, useState } from 'react';

export default function Diagnose() {
  const [show, setShow] = useState(false);

  // Carga el script de Stripe Buy Button una sola vez
  useEffect(() => {
    const id = "stripe-buy-button-script";
    if (document.getElementById(id)) return;

    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://js.stripe.com/v3/buy-button.js";
    document.body.appendChild(s);
  }, []);

  return (
    <main style={{ padding: '70px 24px', maxWidth: '820px', margin: '0 auto' }}>
      <h2 style={{ marginTop: 0 }}>Diagnóstico rápido de precios</h2>
      <p style={{ opacity: 0.85 }}>
        Responde mentalmente estas 3 preguntas y genera tu lectura en segundos.
      </p>

      <ol style={{ lineHeight: 1.8 }}>
        <li>¿Vendes pero sientes que no alcanza?</li>
        <li>¿Tu precio lo decides por intuición o por cálculo?</li>
        <li>¿Te da miedo subir por “perder clientes”?</li>
      </ol>

      <button
        onClick={() => setShow(true)}
        style={{
          marginTop: 18,
          padding: '14px 18px',
          fontWeight: 'bold',
          borderRadius: 8,
          border: '1px solid #000',
          background: '#000',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Ver mi resultado
      </button>

      {show && (
        <section style={{ marginTop: 28, padding: 18, border: '1px solid rgba(0,0,0,0.12)', borderRadius: 12 }}>
          <p style={{ marginTop: 0 }}>
            <strong>Resultado:</strong> Es muy probable que tu fuga esté en margen (no en ventas).
            Si cobras por intuición o por miedo, casi seguro estás dejando dinero en la mesa.
          </p>

          <p style={{ marginBottom: 10 }}>
            <strong>Esto se puede corregir.</strong> Aquí tienes el sistema completo.
          </p>

          <stripe-buy-button
            buy-button-id="buy_btn_1SvazoH1l1YHtt6IHmK3msf0"
            publishable-key="pk_live_51QogS6H1l1YHtt6IrtV86uyJuy5KNleKatfoLH2Y1yehTQtCn1Czix3Rl6hETrmVG1VdM8E2F8EDGGJCb2IOKINh00dHZbbkYJ"
          >
          </stripe-buy-button>

          <p style={{ marginTop: 14, fontSize: 13, opacity: 0.75 }}>
            Después del pago, Stripe te redirige a la página de acceso.
          </p>
        </section>
      )}
    </main>
  );
}
