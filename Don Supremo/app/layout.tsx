export const metadata = {
  title: "Pricing Ferrari Funnel",
  description: "Diagnóstico de precios + compra",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
