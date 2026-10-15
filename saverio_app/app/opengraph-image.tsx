import { ImageResponse } from "next/og";

export const alt = "Renato Saverio — Advocacia Criminal. Ética, técnica e defesa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "64px 80px", background: "#151715", color: "#f1eee7", borderBottom: "8px solid #c8a663" }}>
      <div style={{ display: "flex", color: "#c8a663", fontSize: 32, letterSpacing: 5 }}>RS · ADVOCACIA CRIMINAL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}><div style={{ display: "flex", fontSize: 76 }}>Renato Saverio</div><div style={{ display: "flex", fontSize: 34, color: "#c8a663" }}>Ética, técnica e defesa.</div></div>
      <div style={{ display: "flex", fontSize: 24, color: "#b2b2a7" }}>DIREITO PENAL · OAB/SP 244.018</div>
    </div>, size,
  );
}
