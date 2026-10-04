import { Arrow, Check } from './Icons.jsx';
import FunnelVisual from './FunnelVisual.jsx';

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="shell grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
      <div>
        <p className="eyebrow mb-7 flex items-center gap-2"><span className="size-2 rounded-full bg-ink" aria-hidden="true" /> IA na criação de sites e funis</p>
        <h1 id="hero-title" className="max-w-3xl text-[clamp(2.8rem,5.1vw,4.8rem)] font-semibold leading-[1.05] tracking-[-0.055em]">Sua próxima venda não deveria esperar <span className="marker">semanas por um site.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">Você já tem uma boa oferta. A IA ajuda a transformar essa ideia em um site com mais agilidade, uma mensagem mais clara e um caminho simples até o contato. Para você passar menos tempo travado e mais tempo cuidando do negócio.</p>
        <a className="button-primary mt-9 w-full sm:w-auto" href="#contato">Quero tirar meu funil do papel <Arrow className="size-5" /></a>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted"><span className="flex items-center gap-1.5"><Check className="size-4" /> Conversa sem compromisso</span><span className="flex items-center gap-1.5"><Check className="size-4" /> Foco no seu negócio</span></div>
      </div>
      <FunnelVisual />
    </section>
  );
}
