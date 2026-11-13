import { site } from '#shared/data/site'
import { procedures, homeFaqs } from '#shared/data/procedures'

export default defineEventHandler((event) => {
  const base = siteUrl()
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  const procs = procedures.map(p => `## ${p.name}

URL: ${base}/procedimentos/${p.slug}
Nome técnico: ${p.technicalName}
Também conhecido como: ${p.alternateNames.join(', ')}

${p.intro}

### Para quem é indicada
${p.indications.map(i => `- ${i}`).join('\n')}

### Como é feita
${p.howItWorks.join('\n\n')}

### Recuperação
${p.recovery.join('\n\n')}

### Perguntas frequentes
${p.faqs.map(f => `**${f.q}**\n${f.a}`).join('\n\n')}
`).join('\n')

  return `# ${site.name} · ${site.role}

> ${site.description}

Fonte oficial: ${base}/
Agendamento: ${site.links.booking}
Instagram: ${site.links.instagram}

## Sobre

${site.fullName} é cirurgião plástico com registro de especialista no Conselho Regional de Medicina de Santa Catarina (${site.crm}, ${site.rqe}). Tem mais de ${site.stats.years} anos de profissão e mais de 14 mil cirurgias realizadas. Atende em ${site.locations.map(l => l.city).join(', ')}.

## Locais de atendimento

${site.locations.map(l => `- ${l.city}, ${site.stateCode}${l.street ? `: ${l.street}` : ''}`).join('\n')}

## Dúvidas frequentes

${homeFaqs.map(f => `**${f.q}**\n${f.a}`).join('\n\n')}

${procs}
---
Conteúdo educativo. Não substitui a consulta médica. Resultados variam de pessoa para pessoa.
`
})
