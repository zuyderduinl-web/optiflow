export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "system-ui",
      textAlign: "center"
    }}>
      
      <h1 style={{fontSize: "28px", maxWidth: "600px", margin: "0 auto"}}>
        Zorg dat elke kandidaat wordt opgevolgd
        <br />
        zonder dat je er zelf achteraan hoeft
      </h1>

      <p style={{marginTop: "16px", color: "#555"}}>
        Automatiseer je follow-up na eerste contact en voorkom dat gesprekken stilvallen.
      </p>

      <div style={{marginTop: "40px"}}>
        <h3>Hoe het werkt</h3>
        <p>1. Jij benadert iemand</p>
        <p>2. Optiflow neemt de follow-up over</p>
        <p>3. Meer reacties zonder extra werk</p>
      </div>

    </main>
  );
}
