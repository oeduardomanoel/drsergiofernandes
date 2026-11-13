# AGENTS.md · Site Dr. Sergio Fernandes

Nuxt 4 + CSS puro com design tokens. Site estático (prerender) publicado na Vercel.

## Onde mexer

- `shared/data/site.ts`: todos os fatos (CRM, RQE, números, links, cidades, endereços, fotos, posts do Instagram). É a única fonte: páginas, JSON-LD, sitemap e llms.txt leem daqui.
- `shared/data/procedures.ts`: conteúdo dos procedimentos e FAQs.
- `app/assets/css/main.css`: tokens e componentes globais (botões, tipografia, reveal).
- `server/routes/*`: `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` (gerados a partir dos dados).

## UI/UX Design System

- Use a escala de espaçamento de 8pt dos tokens `--space-*` (4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128). Meio passo de 4px só para ajuste fino.
- Não introduza valores arbitrários de margin, padding ou gap. Prefira os tokens semânticos: `--spacing-page`, `--spacing-section`, `--spacing-section-head`, `--spacing-card`, `--spacing-card-lg`, `--spacing-grid`, `--spacing-stack`, `--spacing-group`.
- Proximidade define hierarquia: espaço menor dentro do grupo (título ↔ descrição = `--spacing-stack`), maior entre grupos (conteúdo ↔ ação = `--spacing-group`).
- Alturas de controle padronizadas: `--control-sm` 40px, `--control-md` 48px, `--control-lg` 56px. Botões e inputs equivalentes usam a mesma altura.
- Cards: padding 24px (`--spacing-card`) ou 32px (`--spacing-card-lg`). Nada de 20px, 18px, 30px.
- Radius: `--radius-sm` 6, `--radius-md` 10, `--radius-lg` 16, `--radius-xl` 24, `--radius-pill`.
- Tipografia: escala `--text-*` (12, 14, 16, 18, 20, 24, 30, 36 + display fluido). Fontes: Instrument Serif (títulos, itálico dourado para ênfase) e Manrope (texto). Não force tamanhos de fonte em múltiplos de 8.
- Ícones: 16, 18, 20 ou 24px. Bordas de 1px continuam valendo.
- Cores só pelos tokens (`--navy`, `--ivory`, `--sand`, `--gold*`, `--diamond`). O losango azul (`--diamond`) é a assinatura da bio do Instagram: use como bullet e marcador de eyebrow, nunca como cor de fundo grande.
- Responsivo: o gutter e o respiro de seção mudam por breakpoint via tokens, não por valores soltos.
- Animação de entrada: diretiva `v-reveal` (`up`, `fade`, `left`, `right`, `scale`, `blur`, `mask`, `lines`) com atraso opcional `v-reveal="120"`. Não coloque `v-reveal` e `transform` inline no mesmo elemento: use um wrapper.
- Todo hover tem transição com `--ease-out` e `--dur-*`. Respeite `prefers-reduced-motion` (já tratado globalmente).
- Não crie tokens novos (`--space-card-new`, `--space-final`...). Reutilize os existentes.

## Conteúdo e publicidade médica

- Segue a Resolução CFM 2.336/2023: nome, CRM e RQE visíveis; nada de promessa de resultado, "o melhor", preço promocional ou sensacionalismo.
- Nunca invente depoimento, número, endereço ou telefone. Campo vazio em `site.ts` simplesmente não aparece.
- Copy em português brasileiro, tom próximo e direto. Evite travessão como aparte, "não apenas X, mas também Y" e frases de efeito genéricas.

## Comandos

- `npm run dev` · desenvolvimento
- `npm run build` · build com prerender (o que a Vercel roda)
- `npm run preview` · servir o build local
