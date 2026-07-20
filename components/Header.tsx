export default function Header() {
  return (
    <header className="relative pt-14 pb-10 px-6 text-center overflow-hidden">
      {/* Névoa/brilho espiritual de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-altar-gradient" />
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-altar-gold/10 blur-3xl animate-float" />

      <div className="relative z-10 space-y-3">
        <div className="mx-auto w-16 h-16 rounded-full bg-gold-shine flex items-center justify-center shadow-glow animate-float">
          <span className="text-2xl">✨</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl tracking-wide text-altar-white drop-shadow-[0_0_20px_rgba(212,175,106,0.35)]">
          ALTAR VIRTUAL
        </h1>
        <p className="font-body text-sm md:text-base text-altar-mist/90 max-w-md mx-auto">
          Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar
        </p>
      </div>
    </header>
  );
}
