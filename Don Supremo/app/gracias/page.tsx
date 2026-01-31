export default function Gracias() {
  return (
    <main style={{ padding: "80px", maxWidth: "720px", margin: "0 auto" }}>
      <h1>✅ Pago confirmado</h1>
      <p>Tu acceso está listo.</p>

      <a
        href="https://gamma.app/docs/Optimizacion-de-Precios-4ieanfwuoytlpbf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "24px",
          padding: "18px 30px",
          background: "#00ff88",
          color: "#000",
          fontWeight: "bold",
          textDecoration: "none",
          borderRadius: "8px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        }}
      >
        Abrir la guía ahora
      </a>

      <p style={{ marginTop: "18px", fontSize: "14px", opacity: 0.75 }}>
        Si cerraste esta pestaña, revisa tu correo: Stripe envía confirmación del pago.
      </p>
    </main>
  );
}
