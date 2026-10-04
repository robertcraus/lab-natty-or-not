const steps = [
  ['Entender sua oferta', 'Quem você quer alcançar, o que essa pessoa precisa e qual é o próximo passo.'],
  ['Criar com apoio da IA', 'Explorar textos e estruturas com agilidade, revisando cada escolha com olhar humano.'],
  ['Testar e evoluir', 'Observar os resultados e ajustar a página com base no que as pessoas realmente fazem.'],
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-24">
      <div><p className="eyebrow mb-4">O papel da IA</p><h2 id="how-title" className="section-title">Mais agilidade para criar.<br /><span className="text-muted">Mais espaço para pensar.</span></h2><p className="mt-6 max-w-lg leading-7 text-muted">Um site bonito é só o começo. Seu funil precisa conectar a promessa do anúncio, a mensagem da página e o convite para conversar.</p><p className="mt-4 max-w-lg leading-7 text-muted">A IA acelera parte desse trabalho. A estratégia dá direção: o que dizer, para quem e por quê.</p></div>
      <ol className="divide-y divide-line">{steps.map(([title, description], index) => <li key={title} className="flex gap-5 py-6 first:pt-0 last:pb-0"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime font-mono text-sm">0{index + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{description}</p></div></li>)}</ol>
    </section>
  );
}
