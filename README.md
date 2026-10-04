# MDS Digital — IA para sites e funis

Landing page em React + Tailwind CSS, com copy em português e identidade verde-lima (#e7f23a). Não exige fontes, imagens ou serviços externos para renderizar.

## Executar

Requisito: Node.js 22.12+ ou Node.js 24.

```bash
npm ci
npm run dev
```

Abra o endereço mostrado pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em um servidor estático. `dist/` já vem incluído como versão de demonstração; para mudar o modo de envio, configure o endpoint e gere um novo build.

## Componentes

| Arquivo | Função |
| --- | --- |
| `src/App.jsx` | Importa e organiza todas as seções |
| `src/components/Hero.jsx` | Headline, subtítulo e CTA |
| `src/components/FunnelVisual.jsx` | Ilustração do caminho da ideia ao contato |
| `src/components/PainPoints.jsx` | Três dores e benefícios do uso de IA |
| `src/components/HowItWorks.jsx` | Estratégia, criação e melhoria |
| `src/components/LeadForm.jsx` | Captura, validação e estados do envio |
| `src/lib/leads.js` | Validação e integração HTTP |
| `src/index.css` | Tailwind, cores e estilos reutilizáveis |
| `COPY.md` | Copy em texto editável |

## Captar leads de verdade

Sem endpoint, o formulário funciona em **demonstração explícita**: valida os campos, mostra uma confirmação de teste e não envia nem armazena dados. Não há persistência em localStorage nem envio automático de e-mail ou WhatsApp.

1. Copie `.env.example` para `.env.local`.
2. Defina `VITE_LEAD_ENDPOINT=/api/leads` para um backend no mesmo domínio, ou a URL HTTPS do seu backend.
3. Execute novamente o servidor de desenvolvimento ou gere um novo build.

O formulário envia `POST` com `Content-Type: application/json`:

```json
{
  "name": "Nome do lead",
  "email": "lead@example.com",
  "phone": "5565999999999",
  "consent": true,
  "consentText": "Autorizo a MDS Digital a entrar em contato sobre meu projeto por e-mail ou WhatsApp.",
  "consentVersion": "2026-10-04",
  "source": "landing-ia",
  "createdAt": "2026-10-04T20:00:00.000Z"
}
```

O backend deve responder **apenas depois de aceitar/persistir o cadastro**:

```json
{ "ok": true }
```

Use HTTP 200 ou 201. O frontend só exibe sucesso real com status 2xx e `ok: true`. Respostas inesperadas, falhas de rede, timeout de 12 segundos e HTTP 429 exibem mensagens de erro sem apagar os campos.

Conecte o backend ao CRM, e-mail ou automação. Mantenha chaves privadas no servidor: tudo que começa com `VITE_` é público no navegador. O backend precisa validar dados, autorização, limitar requisições e definir persistência. A validação no navegador e o campo honeypot são apenas apoios. Para backend em outro domínio, configure CORS para permitir a origem da página e `Content-Type`; não use `no-cors`.

O exemplo não contém backend, política jurídica completa nem integração com serviço de terceiros. Antes de publicar a captura real, ajuste o texto de privacidade ao destino, retenção e atendimento efetivamente usados pela MDS. Depois de trocar o endpoint, teste com dados fictícios e confira o recebimento no destino.

## Acessibilidade e experiência

- Layout responsivo e CTA com âncora para o formulário.
- Labels, autocomplete, validação com foco no primeiro erro e mensagens acessíveis.
- Estado de envio que bloqueia cliques duplicados.
- Confirmação com foco e opção de reiniciar o formulário.
- Link de salto para o conteúdo e respeito à preferência de movimento reduzido.

## Referências de implementação

- React — formulários: https://react.dev/reference/react-dom/components/form
- Tailwind — integração com Vite: https://tailwindcss.com/docs/installation/using-vite
