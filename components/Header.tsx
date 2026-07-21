export default function Header() {
  return (
    <header className="relative pt-14 pb-10 px-6 text-center overflow-hidden">
      <div className="relative z-10 space-y-3">
        <div className="relative mx-auto w-28 h-28">
          <div className="absolute -inset-3 rounded-full bg-gold-shine/30 blur-2xl animate-float" />
          <img
            src="/logo-light.png"
            alt="TEEG7"
            className="relative w-28 h-28 drop-shadow-[0_4px_10px_rgba(11,23,71,0.35)]"
          />
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
