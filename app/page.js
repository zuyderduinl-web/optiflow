export default function Home() {
  return (
    <main style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      padding: "24px",
      maxWidth: "480px",
      margin: "0 auto",
      lineHeight: 1.5
    }}>

      {/* HERO */}
      <section style={{ marginTop: "40px" }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "600",
          letterSpacing: "-0.5px"
        }}>
          Zorg dat elke kandidaat wordt opgevolgd
          zonder dat je er zelf achteraan hoeft
        </h1>

        <p style={{
          marginTop: "16px",
          color: "#666",
          fontSize: "16px"
        }}>
          Automatiseer je follow-up na eerste contact en voorkom dat gesprekken stilvallen.
        </p>

        <button style={{
          marginTop: "24px",
          width: "100%",
          padding: "14px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px"
        }}>
          Bekijk hoe het werkt
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Hoe het werkt
        </h2>

        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ fontWeight: "600" }}>1.</div>
            <div>Jij benadert iemand via LinkedIn of mail</div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ fontWeight: "600" }}>2.</div>
            <div>Optiflow neemt de follow-up automatisch over</div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ fontWeight: "600" }}>3.</div>
            <div>Meer reacties zonder extra werk</div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Waarom dit werkt
        </h2>

        <ul style={{ marginTop: "16px", paddingLeft: "16px", color: "#444" }}>
          <li>Geen kandidaten meer vergeten</li>
          <li>Consistente en nette follow-up</li>
          <li>Bespaart tijd zonder onpersoonlijk te worden</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "80px", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
          Benieuwd hoe dit werkt in jouw proces?
        </h2>

        <button style={{
          marginTop: "20px",
          width: "100%",
          padding: "14px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px"
        }}>
          Plan een korte demo
        </button>
      </section>

    </main>
  );
}
