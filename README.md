# Dr. Sergio Fernandes · Site oficial

Site do Dr. Sergio Fernandes, cirurgião plástico em Balneário Camboriú, Florianópolis e Criciúma (SC). Nuxt 4, totalmente pré-renderizado, pronto para a Vercel.

## Rodar local

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Importe o repositório na Vercel (o framework Nuxt é detectado sozinho).
2. Em *Environment Variables*, crie `NUXT_PUBLIC_SITE_URL` com o domínio final (ex: `https://drsergiofernandes.com.br`).
3. Deploy. Depois, envie `https://SEU-DOMINIO/sitemap.xml` no Google Search Console.

## O que preencher antes de publicar

Tudo fica em `shared/data/site.ts`:

| Campo | O que colocar |
|---|---|
| `images.portrait` | Foto principal do Dr. Sergio em `/public/images/` (ex: `/images/dr-sergio.webp`, 1600×2000) |
| `images.action` | Foto no centro cirúrgico ou consultório |
| `links.whatsappNumber` | WhatsApp no formato `5547999999999` (ativa o botão de WhatsApp) |
| `locations[].street`, `postalCode`, `phone` | Endereço e telefone de cada unidade (entram no site e no JSON-LD do Google) |
| `instagramPosts[].image` / `url` | Capas e links de posts reais para o "ambiente Instagram" |
| `defaultUrl` | Domínio final |

Enquanto os campos estiverem vazios, o site usa um monograma no lugar da foto e esconde o que não tem dado.

## SEO e GEO

- Meta tags, Open Graph e Twitter Card por página, canonical e `og-image.png` (1200×630).
- JSON-LD: `Physician`, `Person`, `MedicalProcedure`, `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, `WebSite`.
- `/sitemap.xml`, `/robots.txt` (com GPTBot, ClaudeBot, PerplexityBot e Google-Extended liberados), `/llms.txt` e `/llms-full.txt`.
- Uma página por procedimento, com FAQ própria (bom para featured snippets e respostas de IA).

## Instagram

- Seção "No Instagram" na home com réplica do perfil (destaques, bio, grade de posts).
- `/links`: página de link na bio. Troque o `bit.ly` da bio por `https://SEU-DOMINIO/links` e todos os acessos chegam com UTM.

## Design system

Regras de espaçamento 8pt, tipografia, cores e animação em [`AGENTS.md`](./AGENTS.md).
