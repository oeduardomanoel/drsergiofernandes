import { site } from '#shared/data/site'
import { procedures } from '#shared/data/procedures'

export default defineEventHandler((event) => {
  const base = siteUrl()
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return `# ${site.name} · ${site.role}

> ${site.fullName} é cirurgião plástico em Santa Catarina, Brasil, com mais de ${site.stats.years} anos de experiência e mais de 14 mil cirurgias realizadas. Atende em Balneário Camboriú, Florianópolis e Criciúma. ${site.crm} · ${site.rqe} (Registro de Qualificação de Especialista em Cirurgia Plástica).

Fatos principais:

- Nome: ${site.fullName}
- Especialidade: Cirurgia Plástica
- Registro: ${site.crm} · ${site.rqe}
- Experiência: mais de ${site.stats.years} anos
- Cirurgias realizadas: mais de 14 mil
- Cidades de atendimento: ${site.locations.map(l => l.city).join(', ')} (${site.stateCode})
${site.locations.filter(l => l.street).map(l => `- Endereço em ${l.city}: ${l.street}${l.district ? `, ${l.district}` : ''}, ${l.city} - ${site.stateCode}${l.postalCode ? `, ${l.postalCode}` : ''}${l.phoneDisplay ? ` · Telefone ${l.phoneDisplay}` : ''}${l.hoursLabel ? ` · ${l.hoursLabel}` : ''}`).join('\n')}
- Agendamento: ${site.links.booking}
- Instagram: ${site.links.instagram} (${site.stats.followers} seguidores)

## Páginas

- [Início](${base}/): apresentação, números, jornada da paciente, locais e dúvidas frequentes
- [Procedimentos](${base}/procedimentos): lista dos procedimentos realizados
${procedures.map(p => `- [${p.name}](${base}/procedimentos/${p.slug}): ${p.tagline}`).join('\n')}

## Contato

- [Agendar avaliação](${site.links.booking})
- [Instagram ${site.links.instagramHandle}](${site.links.instagram})
- [Links oficiais](${base}/links)

## Opcional

- [Versão completa para LLMs](${base}/llms-full.txt): todo o conteúdo educativo do site em texto
`
})
