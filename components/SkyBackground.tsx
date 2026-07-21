// Fundo do céu: estrelas e lanternas japonesas flutuando, atrás de todo o
// conteúdo do site. Posições fixas, espaçadas, concentradas na faixa
// superior da página (onde o degradê ainda está azulado) e evitando a
// área central onde fica o logo.

function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const STARS = Array.from({ length: 70 }).map((_, i) => {
  const r1 = seededRandom(i * 12.9898);
  const r2 = seededRandom(i * 78.233 + 4.5);
  const r3 = seededRandom(i * 37.719 + 1.1);
  return {
    top: r1 * 100,
    left: r2 * 100,
    size: 1 + r3 * 1.6,
    delay: r3 * 4,
    dur: 2.5 + r2 * 2.5,
    gold: i % 9 === 0,
  };
});

const LANTERNS = [
  { top: 3, left: 6, size: 11 },
  { top: 10, left: 3, size: 9 },
  { top: 18, left: 8, size: 13 },
  { top: 26, left: 5, size: 10 },
  { top: 33, left: 13, size: 9 },
  { top: 6, left: 21, size: 10 },
  { top: 23, left: 18, size: 8 },
  { top: 3, left: 93, size: 11 },
  { top: 11, left: 89, size: 9 },
  { top: 19, left: 95, size: 13 },
  { top: 27, left: 87, size: 10 },
  { top: 33, left: 79, size: 9 },
  { top: 6, left: 77, size: 10 },
  { top: 23, left: 81, size: 8 },
].map((l, i) => ({ ...l, delay: (i % 5) * 0.8, dur: 6 + (i % 4) * 0.7 }));

export default function SkyBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {STARS.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: s.gold ? "#F0DCA6" : "#FFFFFF",
            boxShadow: s.gold
              ? "0 0 4px rgba(240,220,166,0.8)"
              : "0 0 3px rgba(255,255,255,0.7)",
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {LANTERNS.map((l, i) => {
        const h = l.size * 1.25;
        return (
          <div
            key={`lantern-${i}`}
            className="absolute"
            style={{
              top: `${l.top}%`,
              left: `${l.left}%`,
              animation: `lanternFloat ${l.dur}s ease-in-out ${l.delay}s infinite`,
            }}
          >
            <div className="mx-auto" style={{ width: 1, height: 10, background: "rgba(212,175,106,0.5)" }} />
            <div className="mx-auto rounded" style={{ width: l.size * 0.4, height: 4, background: "#B6913A" }} />
            <div
              className="relative"
              style={{
                width: l.size,
                height: h,
                borderRadius: "45% 45% 40% 40% / 55% 55% 45% 45%",
                background: "linear-gradient(180deg, #FDF3D8 0%, #F0DCA6 45%, #D9B65E 100%)",
                boxShadow: `0 0 ${l.size * 0.7}px rgba(240,220,166,0.55)`,
              }}
            >
              <div className="absolute left-0.5 right-0.5" style={{ top: "32%", height: 1, background: "rgba(139,101,40,0.4)" }} />
              <div className="absolute left-0.5 right-0.5" style={{ top: "60%", height: 1, background: "rgba(139,101,40,0.4)" }} />
            </div>
            <div className="mx-auto rounded" style={{ width: l.size * 0.4, height: 4, background: "#B6913A" }} />
            <div className="mx-auto" style={{ width: 2, height: 6, background: "#B6913A" }} />
          </div>
        );
      })}
    </div>
  );
}
