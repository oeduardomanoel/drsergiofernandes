export default defineEventHandler((event) => {
  const base = siteUrl()
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  // Buscadores e assistentes de IA liberados: o objetivo é ser encontrado e citado (SEO + GEO).
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
    'DuckAssistBot',
    'meta-externalagent',
  ]

  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiBots.flatMap(bot => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${base}/sitemap.xml`,
    '',
    `# Resumo para modelos de linguagem: ${base}/llms.txt`,
    `# Versão completa: ${base}/llms-full.txt`,
    '',
  ].join('\n')
})
