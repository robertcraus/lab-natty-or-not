import { Arrow, Check } from './Icons.jsx';

export default function FunnelVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg py-6 lg:py-10" aria-label="Ilustração: a IA apoia a criação, o site apresenta a oferta e o formulário inicia a conversa.">
      <div className="absolute inset-0 rounded-full bg-lime/25 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_24px_80px_-28px_#24302045]">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex gap-1.5" aria-hidden="true"><i className="size-2 rounded-full bg-ink/20" /><i className="size-2 rounded-full bg-ink/20" /><i className="size-2 rounded-full bg-ink/20" /></div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Da ideia à conversa</span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-7 flex items-center justify-between"><span className="eyebrow">Seu próximo funil</span><span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold">IA + estratégia</span></div>
          <div className="rounded-2xl bg-paper p-5">
            <div className="mb-4 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-ink text-lg text-lime" aria-hidden="true">✦</span><p className="text-sm font-semibold">Uma boa ideia merece sair do papel.</p></div>
            <div className="space-y-2" aria-hidden="true"><div className="h-2 w-full rounded bg-ink/10" /><div className="h-2 w-4/5 rounded bg-ink/10" /></div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-lime px-4 py-2 text-xs font-bold">Começar uma conversa <Arrow className="size-3.5" /></div>
          </div>
          <div className="my-5 flex items-center gap-3" aria-hidden="true"><div className="h-px flex-1 bg-line" /><span className="text-lg text-muted">↓</span><div className="h-px flex-1 bg-line" /></div>
          <div className="flex items-center gap-4 rounded-xl border border-line p-4"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime/40"><Check className="size-5" /></span><div><p className="text-sm font-semibold">Um próximo passo claro</p><p className="mt-1 text-xs text-muted">Menos obstáculos para entrar em contato.</p></div></div>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-widest text-muted">Criar → testar → melhorar</p>
        </div>
      </div>
      <div className="relative -mt-2 ml-auto mr-4 w-fit rotate-[-3deg] rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white shadow-lg sm:mr-[-12px]">Tecnologia com direção humana. <span className="ml-2 text-lime" aria-hidden="true">↗</span></div>
    </div>
  );
}
