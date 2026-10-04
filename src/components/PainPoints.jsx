import { PainIcon } from './Icons.jsx';

const pains = [
  { icon: 'clock', number: '01', title: 'A ideia é boa. Mas o site nunca fica pronto.', description: 'Entre escrever os textos, organizar as seções e decidir o visual, os dias passam. E aquela campanha que você queria colocar no ar continua esperando.', benefit: 'A IA ajuda a sair da página em branco.' },
  { icon: 'loop', number: '02', title: 'Você refaz tudo e ainda não sabe se vai funcionar.', description: 'Muda o título, troca o botão, ajusta a página inteira. Sem um processo, cada revisão vira mais trabalho — e sobra menos energia para atender quem quer comprar.', benefit: 'Rascunhos mais rápidos. Revisões com direção.' },
  { icon: 'test', number: '03', title: 'Testar uma nova oferta parece começar do zero.', description: 'Você quer descobrir qual mensagem faz sentido para seu público, mas criar outra versão da página dá tanto trabalho que o teste acaba ficando para depois.', benefit: 'Mais facilidade para testar e aprender.' },
];

export default function PainPoints() {
  return (
    <section id="por-que-ia" aria-labelledby="pains-title" className="border-y border-line bg-white/60 py-16 sm:py-20">
      <div className="shell">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow mb-4">Isso soa familiar?</p><h2 id="pains-title" className="section-title max-w-xl">Seu tempo vale mais<br className="hidden sm:block" /> que mais uma revisão.</h2></div><p className="max-w-xs text-sm leading-relaxed text-muted">Às vezes, o que falta não é uma ideia melhor. É um jeito mais simples de colocar a sua em prática.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {pains.map((pain) => <article key={pain.number} className="flex flex-col rounded-2xl border border-line bg-white p-7 transition-transform duration-200 motion-safe:hover:-translate-y-1"><div className="mb-8 flex items-center justify-between"><PainIcon kind={pain.icon} /><span className="font-mono text-xs text-muted">/{pain.number}</span></div><h3 className="text-xl font-semibold leading-snug tracking-tight">{pain.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-muted">{pain.description}</p><p className="mt-6 border-t border-line pt-5 text-sm font-semibold">{pain.benefit}</p></article>)}
        </div>
      </div>
    </section>
  );
}
