export default function Home() {
  return (
    <main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0b0b0b',color:'#fff',padding:'40px'}}>
      <section style={{maxWidth:'720px'}}>
        <h1 style={{fontSize:'42px',lineHeight:'1.2'}}>
          Estás perdiendo dinero ahora mismo.<br/>La pregunta es: ¿sabes dónde?
        </h1>

        <p style={{fontSize:'18px',marginTop:'20px',opacity:0.9}}>
          La mayoría de los negocios no fallan por ventas. Fallan por <strong>precios mal estructurados</strong>.
        </p>

        <ul style={{marginTop:'24px',lineHeight:'1.8'}}>
          <li>✔ Diagnóstico en minutos</li>
          <li>✔ Sin fórmulas complicadas</li>
          <li>✔ Sin vender más</li>
        </ul>

        <a href="/diagnose" style={{
          display:'inline-block',marginTop:'32px',padding:'16px 28px',
          background:'#00ff88',color:'#000',fontWeight:'bold',textDecoration:'none',
          borderRadius:'6px'
        }}>
          Descubrir dónde estoy perdiendo dinero
        </a>
      </section>
    </main>
  );
}
