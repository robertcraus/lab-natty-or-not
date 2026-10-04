import { useEffect, useRef, useState } from 'react';
import { Arrow, Check } from './Icons.jsx';
import { isDemo, submitLead, validateLead } from '../lib/leads.js';

const initialValues = { name: '', email: '', phone: '', consent: false, website: '' };
const fields = [
  { name: 'name', label: 'Seu nome', type: 'text', placeholder: 'Como podemos chamar você?', autoComplete: 'name', maxLength: 100 },
  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'voce@empresa.com', autoComplete: 'email', maxLength: 254 },
  { name: 'phone', label: 'WhatsApp com DDD ou código do país', type: 'tel', placeholder: 'Ex.: +55 (65) 99999-9999', autoComplete: 'tel', maxLength: 30 },
];

export default function LeadForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);
  const successRef = useRef(null);
  const busy = useRef(false);

  useEffect(() => { if (status === 'success') successRef.current?.focus(); }, [status]);

  function change(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === 'error') { setStatus('idle'); setMessage(''); }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (busy.current) return;
    const nextErrors = validateLead(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      formRef.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    if (values.website) return;
    busy.current = true;
    setStatus('sending');
    setMessage('');
    try {
      const result = await submitLead(values);
      setMessage(result.demo ? 'Teste concluído. Nenhum dado foi enviado. O formulário está pronto para ser conectado ao canal de atendimento.' : 'Recebemos seu contato. A MDS Digital vai conversar com você sobre seu projeto pelo e-mail ou WhatsApp informado.');
      setValues(initialValues);
      setStatus('success');
    } catch (error) {
      setMessage(error.message);
      setStatus('error');
    } finally {
      busy.current = false;
    }
  }

  return (
    <section id="contato" aria-labelledby="lead-title" className="shell pb-16 sm:pb-20">
      <div className="grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-[1fr_0.95fr]">
        <div className="p-8 sm:p-12 lg:p-14"><p className="eyebrow mb-6 text-lime">Seu próximo passo</p><h2 id="lead-title" className="section-title max-w-lg">Vamos tirar seu funil<br className="hidden sm:block" /> do papel?</h2><p className="mt-6 max-w-md leading-7 text-white/65">Conte com a MDS Digital para pensar em um site que faça sentido para sua oferta, com IA no processo e estratégia em cada etapa.</p><p className="mt-5 max-w-md leading-7 text-white/65">Deixe seu contato. A conversa começa pelo seu negócio — pelo que você quer vender e pelo que está dificultando esse caminho hoje.</p><ul className="mt-9 space-y-3 text-sm text-white/85">{['Clareza sobre o próximo passo do seu site', 'Ideias de aplicação da IA no seu funil', 'Uma conversa direta, sem compromisso'].map((text) => <li key={text} className="flex items-center gap-3"><Check className="size-5 text-lime" />{text}</li>)}</ul><div className="mt-12 border-t border-white/15 pt-6"><p className="text-lg font-semibold tracking-tight">MDS Digital</p><p className="mt-1 text-sm text-white/50">Tecnologia a serviço da sua próxima oportunidade.</p></div></div>
        <div className="m-3 rounded-3xl bg-white p-6 text-ink sm:m-5 sm:p-9 lg:ml-0">
          {status === 'success' ? (
            <div ref={successRef} tabIndex={-1} className="flex min-h-100 flex-col justify-center outline-none" role="status"><span className="mb-6 grid size-14 place-items-center rounded-full bg-lime"><Check className="size-7" /></span><h3 className="text-3xl font-semibold tracking-tight">{isDemo ? 'Tudo certo com o teste.' : 'Agora, vamos conversar.'}</h3><p className="mt-4 leading-7 text-muted">{message}</p><button type="button" onClick={() => { setStatus('idle'); setMessage(''); }} className="button-primary mt-8">{isDemo ? 'Testar novamente' : 'Enviar outro contato'}<Arrow className="size-5" /></button></div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'}>
              <h3 className="text-2xl font-semibold tracking-tight">Uma boa conversa começa aqui.</h3><p className="mt-2 text-sm leading-6 text-muted">Só o essencial para dar o primeiro passo.</p>
              {isDemo && <p className="mt-5 rounded-lg border border-lime-dark/25 bg-lime/20 px-3 py-2 text-xs leading-5"><strong>Modo demonstração:</strong> você pode testar. Os dados não serão enviados nem armazenados.</p>}
              <div className="mt-6 space-y-5">{fields.map((field) => <div key={field.name}><label htmlFor={`lead-${field.name}`} className="mb-2 block text-sm font-medium">{field.label}</label><input {...field} id={`lead-${field.name}`} value={values[field.name]} onChange={change} required disabled={status === 'sending'} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined} className="field" />{errors[field.name] && <p id={`error-${field.name}`} className="mt-1.5 text-xs text-red-700" role="alert">{errors[field.name]}</p>}</div>)}</div>
              <div className="hidden" aria-hidden="true"><label htmlFor="lead-website">Deixe em branco</label><input id="lead-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={change} /></div>
              <div className="mt-5"><label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-muted"><input id="lead-consent" name="consent" type="checkbox" checked={values.consent} onChange={change} required disabled={status === 'sending'} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'error-consent' : undefined} className="mt-0.5 size-4 shrink-0 accent-ink" /><span>Autorizo a MDS Digital a entrar em contato sobre meu projeto por e-mail ou WhatsApp.</span></label>{errors.consent && <p id="error-consent" className="mt-1.5 text-xs text-red-700" role="alert">{errors.consent}</p>}</div>
              {status === 'error' && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>}
              <button type="submit" className="button-primary mt-6 w-full" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando seu contato…' : 'Quero tirar meu funil do papel'}{status === 'sending' ? <span className="size-5 animate-spin rounded-full border-2 border-ink/30 border-t-ink motion-reduce:animate-none" aria-hidden="true" /> : <Arrow className="size-5" />}</button>
              <p className="mt-3 text-center text-xs text-muted">Sem compromisso. Vamos entender seu momento.</p>
              <details className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted"><summary className="w-fit cursor-pointer font-medium">Como este formulário usa seus dados</summary><p className="mt-2">{isDemo ? 'Nesta demonstração, as informações ficam apenas na memória da página durante o teste. Nenhum cadastro é realizado.' : 'Enviamos seu nome, e-mail, WhatsApp e autorização ao canal de atendimento configurado pela MDS Digital, para conversar sobre este projeto.'}</p></details>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
