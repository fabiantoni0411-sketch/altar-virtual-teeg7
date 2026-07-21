// Fundo do céu: estrelas e lanternas japonesas flutuando.
// As lanternas ficam SÓ na seção inicial (hero) e rolam junto com ela —
// não ficam fixas na tela. As estrelas continuam cobrindo toda a página.

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
    size: 2 + r3 * 2.4,
    delay: r3 * 4,
    dur: 2.5 + r2 * 2.5,
    gold: i % 9 === 0,
  };
});

const LANTERNS = [
  { top: 4, left: 3, size: 8 },
  { top: 11, left: 2, size: 7 },
  { top: 19, left: 4, size: 9 },
  { top: 27, left: 2, size: 7 },
  { top: 35, left: 5, size: 8 },
  { top: 8, left: 10, size: 6 },
  { top: 22, left: 9, size: 7 },
  { top: 31, left: 11, size: 6 },
  { top: 4, left: 96, size: 8 },
  { top: 11, left: 97, size: 7 },
  { top: 19, left: 95, size: 9 },
  { top: 27, left: 97, size: 7 },
  { top: 35, left: 94, size: 8 },
  { top: 8, left: 89, size: 6 },
  { top: 22, left: 90, size: 7 },
  { top: 31, left: 88, size: 6 },
].map((l, i) => ({ ...l, delay: (i % 5) * 0.8, dur: 6 + (i % 4) * 0.7 }));

export function StarsBackground() {
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
            background: s.gold ? "#F6E7B0" : "#FFFFFF",
            boxShadow: s.gold
              ? "0 0 8px 2px rgba(240,220,166,0.95)"
              : "0 0 7px 2px rgba(255,255,255,0.9)",
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroLanterns() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
