// components/Candle.tsx
export default function Candle() {
  return (
    <div className="relative flex flex-col items-center" style={{ width: 40 }}>
      {/* Chama */}
      <div className="relative" style={{ width: 14, height: 22, marginBottom: -2 }}>
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
            background: "radial-gradient(ellipse at 50% 30%, #FFF9E0 0%, #FFD966 35%, #FF9D2E 70%, #E8631A 100%)",
            boxShadow: "0 0 12px 4px rgba(255,180,60,0.65)",
            animation: "flameFlicker 1.6s ease-in-out infinite",
            transformOrigin: "50% 100%",
          }}
        />
      </div>
      {/* Pavio */}
      <div style={{ width: 2, height: 4, background: "#3B2A1A" }} />
      {/* Corpo da vela */}
      <div
        style={{
          width: 26,
          height: 70,
          borderRadius: "3px 3px 5px 5px",
          background: "linear-gradient(90deg, #FFFDF7 0%, #FFFFFF 50%, #F2EFE6 100%)",
          boxShadow: "inset -3px 0 6px rgba(0,0,0,0.06)",
        }}
      />
      {/* Base/prato */}
      <div
        style={{
          width: 34,
          height: 5,
          borderRadius: "50%",
          background: "linear-gradient(180deg, #D9B65E 0%, #B6913A 100%)",
          marginTop: -2,
        }}
      />
    </div>
  );
}
