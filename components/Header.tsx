export default function Header() {
  return (
    <header className="relative pt-14 pb-10 px-6 text-center overflow-hidden">
      <div className="relative z-10 space-y-3">
        <div className="relative mx-auto w-28 h-28">
          <div className="absolute -inset-3 rounded-full bg-gold-shine/30 blur-2xl animate-float" />
          <img
            src="/Galleryit_20260722_1784772136.png"
            alt="TEEG7"
            className="relative w-28 h-28 drop-shadow-[0_4px_10px_rgba(11,23,71,0.35)]"
          />
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-altar-white tracking-wide">
          ALTAR VIRTUAL
        </h1>
        <p className="font-body text-sm md:text-base text-altar-mist/80">
          Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar
        </p>
      </div>
    </header>
  );
}
