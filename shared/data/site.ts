/**
 * Fonte única de verdade sobre o Dr. Sergio Fernandes.
 * Tudo que aparece no site, no JSON-LD, no sitemap e no llms.txt sai daqui.
 *
 * Campos vazios ('') não são renderizados. Preencha com dados reais e confirmados.
 */

export interface Location {
  slug: string
  city: string
  shortName: string
  region: string
  /** Endereço completo. Vazio = card mostra só a cidade + link do Maps. */
  street: string
  postalCode: string
  /** Telefone fixo ou WhatsApp desta unidade (formato +55...). */
  phone: string
  mapsQuery: string
}

export const site = {
  name: 'Dr. Sergio Fernandes',
  fullName: 'Dr. Sergio Fernandes',
  role: 'Cirurgião Plástico',
  crm: 'CRM 7913/SC',
  rqe: 'RQE 11337',
  locale: 'pt-BR',
  state: 'Santa Catarina',
  stateCode: 'SC',

  /** URL de produção. Sobrescrita por NUXT_PUBLIC_SITE_URL na Vercel. */
  defaultUrl: 'https://drsergiofernandes.com.br',

  title: 'Dr. Sergio Fernandes | Cirurgião Plástico em Balneário Camboriú, Florianópolis e Criciúma',
  description:
    'Cirurgião plástico com mais de 30 anos de experiência e mais de 14 mil cirurgias realizadas. Abdominoplastia, cirurgia de mama, Lipo HD e rinoplastia em Balneário Camboriú, Florianópolis e Criciúma (SC). CRM 7913/SC, RQE 11337.',

  stats: {
    surgeries: 14000,
    years: 30,
    cities: 3,
    followers: '52,8 mil',
  },

  links: {
    /** Link oficial de agendamento (bio do Instagram). */
    booking: 'https://bit.ly/sergioagendamentos',
    instagram: 'https://www.instagram.com/drsergio.fernandes/',
    instagramHandle: '@drsergio.fernandes',
    threads: 'https://www.threads.net/@drsergio.fernandes',
    /** Número no formato 5548999999999. Vazio = botões de WhatsApp usam o link de agendamento. */
    whatsappNumber: '',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação com o Dr. Sergio Fernandes.',
  },

  images: {
    /**
     * Foto principal (retrato). Coloque o arquivo em /public/images e aponte aqui,
     * ex: '/images/dr-sergio.webp'. Vazio = moldura com monograma.
     */
    portrait: '',
    /** Foto em ação (centro cirúrgico / consultório). */
    action: '',
  },

  locations: [
    {
      slug: 'balneario-camboriu',
      city: 'Balneário Camboriú',
      shortName: 'BC',
      region: 'Litoral Norte',
      street: '',
      postalCode: '',
      phone: '',
      mapsQuery: 'Dr Sergio Fernandes cirurgião plástico Balneário Camboriú',
    },
    {
      slug: 'florianopolis',
      city: 'Florianópolis',
      shortName: 'Floripa',
      region: 'Grande Florianópolis',
      street: '',
      postalCode: '',
      phone: '',
      mapsQuery: 'Dr Sergio Fernandes cirurgião plástico Florianópolis',
    },
    {
      slug: 'criciuma',
      city: 'Criciúma',
      shortName: 'Criciúma',
      region: 'Sul Catarinense',
      street: '',
      postalCode: '',
      phone: '',
      mapsQuery: 'Dr Sergio Fernandes cirurgião plástico Criciúma',
    },
  ] satisfies Location[],

  /** Destaques do Instagram (na mesma ordem do perfil). */
  highlights: [
    { label: 'Abdominoplastia', procedure: 'abdominoplastia' },
    { label: 'Depoimentos', procedure: '' },
    { label: 'Mama', procedure: 'cirurgia-de-mama' },
    { label: 'Lipo HD', procedure: 'lipo-hd' },
    { label: 'Rinoplastia', procedure: 'rinoplastia' },
  ],

  /**
   * Posts exibidos no "ambiente Instagram" do site.
   * Troque `image` por prints/fotos reais em /public/images/instagram e `url` pelo link do post.
   */
  instagramPosts: [
    { kind: 'reel', caption: 'Bastidores do centro cirúrgico', tone: 'navy', image: '', url: '' },
    { kind: 'reel', caption: 'Paciente conta como foi a decisão', tone: 'sand', image: '', url: '' },
    { kind: 'reel', caption: 'Primeira troca de curativo', tone: 'ivory', image: '', url: '' },
    { kind: 'reel', caption: 'Diário do dia 2 do meu sonho realizado', tone: 'rose', image: '', url: '' },
    { kind: 'reel', caption: '“Quando sobrar um dinheirinho eu ajudo nas contas”', tone: 'gold', image: '', url: '' },
    { kind: 'post', caption: 'Dúvidas frequentes no pós-operatório', tone: 'navy', image: '', url: '' },
  ],
} as const

export type Site = typeof site

export function whatsappUrl(message: string = site.links.whatsappMessage): string {
  if (!site.links.whatsappNumber) return site.links.booking
  return `https://wa.me/${site.links.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
