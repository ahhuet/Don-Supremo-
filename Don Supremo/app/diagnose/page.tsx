
}
'use client';

import { useEffect, useState } from 'react';

export default function Diagnose() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.getElementById('stripe-buy-button')) return;

    const script = document.createElement('script');
    script.id = 'stripe-buy-button';
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    script.onload = () => setLoaded(true);

    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Diagnóstico de Precios</h1>
      <p>Revisa tu situación actual y accede a la guía completa.</p>

      {loaded && (
        <stripe-buy-button
          buy-button-id="buy_btn_1SvazoH1l1YHtt6IHmK3msf0"
          publishable-key="pk_live_51QogS6H1l1YHtt6IrtV86uyJuy5KNleKatfoLH2Y1yehTQtCn1Czix3Rl6hETrmVG1VdM8E2F8EDGGJCb2IOKINh00dHZbbkYJ"
        />
      )}
    </main>
  );
}
