import { Arrow } from './Icons.jsx';

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="shell flex min-h-22 items-center justify-between gap-4">
        <a href="#inicio" aria-label="MDS Digital — início" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-ink font-black text-lime">M</span>
          <span className="text-lg font-extrabold tracking-tight">MDS<span className="ml-1 font-normal">Digital</span></span>
        </a>
        <nav aria-label="Navegação principal" className="flex items-center gap-8 text-sm">
          <a className="hidden text-muted transition-colors hover:text-ink md:block" href="#por-que-ia">Por que usar IA?</a>
          <a href="#contato" className="flex items-center gap-2 font-semibold">Vamos conversar <Arrow className="size-4" /></a>
        </nav>
      </div>
    </header>
  );
}
