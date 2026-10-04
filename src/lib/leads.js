export const leadEndpoint = (import.meta.env.VITE_LEAD_ENDPOINT || '').trim();
export const isDemo = !leadEndpoint;

export function validateLead(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Como podemos chamar você? Use pelo menos 2 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Confira o e-mail. Exemplo: voce@empresa.com';
  const digits = values.phone.replace(/\D/g, '');
  if (!/^[+\d\s().-]+$/.test(values.phone) || digits.length < 10 || digits.length > 15) errors.phone = 'Informe seu WhatsApp com DDD ou código do país (10 a 15 dígitos).';
  if (!values.consent) errors.consent = 'Precisamos da sua autorização para entrar em contato.';
  return errors;
}

export async function submitLead(values) {
  if (isDemo) return { demo: true };
  const url = new URL(leadEndpoint, window.location.origin);
  if (url.protocol !== 'https:' && url.origin !== window.location.origin) throw new Error('A conexão de envio precisa usar HTTPS.');
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        name: values.name.trim(), email: values.email.trim(), phone: values.phone.replace(/\D/g, ''),
        consent: true, consentText: 'Autorizo a MDS Digital a entrar em contato sobre meu projeto por e-mail ou WhatsApp.',
        consentVersion: '2026-10-04', source: 'landing-ia', createdAt: new Date().toISOString(),
      }),
    });
    if (response.status === 429) throw new Error('Muitas tentativas em pouco tempo. Aguarde um momento e tente novamente.');
    if (!response.ok) throw new Error('Não conseguimos enviar agora. Seus dados continuam no formulário. Tente novamente.');
    const result = await response.json().catch(() => null);
    if (result?.ok !== true) throw new Error('O envio não foi confirmado. Tente novamente em instantes.');
    return { demo: false };
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('O envio demorou mais que o esperado. Tente novamente.');
    if (error instanceof TypeError) throw new Error('Confira sua conexão e tente enviar novamente.');
    throw error;
  } finally {
    window.clearTimeout(timer);
  }
}
