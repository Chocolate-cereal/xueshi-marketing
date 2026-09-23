import { ImageResponse } from "next/og";
export const alt = "Xueshi Marketing — Xue’s digital marketing portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "70px 80px",
        background: "#f5f0ec",
        color: "#292725",
      }}
    >
      <div style={{ fontSize: 28 }}>Xueshi Marketing</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 100, fontFamily: "serif" }}>Hello, I’m Xue.</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#80504b" }}>
          SEO. Landing pages. Competitor research.
        </div>
      </div>
      <div style={{ fontSize: 24 }}>Digital marketing portfolio</div>
    </div>,
    size,
  );
}
