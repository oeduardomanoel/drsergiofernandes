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
  /** Telefone desta unidade no formato internacional (+55...). */
  phone: string
  /** Como o telefone aparece na tela. */
  phoneDisplay: string
  /** Bairro (entra no endereço exibido). */
  district: string
  /** Horários no padrão schema.org. Vazio = não exibe. */
  hours: { days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[], opens: string, closes: string }[]
  /** Texto curto dos horários para a tela. */
  hoursLabel: string
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
    portrait: '/images/dr-sergio-retrato.webp',
    /** Foto em ação (centro cirúrgico / consultório). */
    action: '/images/dr-sergio-centro-cirurgico.webp',
    /** Avatar usado na réplica do perfil do Instagram. */
    instagramAvatar: '/images/instagram/avatar.webp',
    /** Ambientes (recortados do Instagram). */
    reception: '/images/clinica-recepcao.webp',
    hospital: '/images/hbm-hospital.webp',
  },

  locations: [
    {
      slug: 'balneario-camboriu',
      city: 'Balneário Camboriú',
      shortName: 'BC',
      region: 'Litoral Norte',
      street: '',
      district: '',
      postalCode: '',
      phone: '',
      phoneDisplay: '',
      hours: [],
      hoursLabel: '',
      mapsQuery: 'Dr Sergio Fernandes cirurgião plástico Balneário Camboriú',
    },
    {
      slug: 'florianopolis',
      city: 'Florianópolis',
      shortName: 'Floripa',
      region: 'Grande Florianópolis',
      street: 'R. Gen. Acastro de Campos, 153',
      district: 'Morro da Cruz',
      postalCode: '88025-140',
      phone: '+5548984317226',
      phoneDisplay: '(48) 98431-7226',
      hours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' }],
      hoursLabel: 'Segunda a sexta, das 8h às 19h',
      mapsQuery: 'Dr. Sérgio Fernandes Cirurgia Plástica, R. Gen. Acastro de Campos, 153, Florianópolis',
    },
    {
      slug: 'criciuma',
      city: 'Criciúma',
      shortName: 'Criciúma',
      region: 'Sul Catarinense',
      street: '',
      district: '',
      postalCode: '',
      phone: '',
      phoneDisplay: '',
      hours: [],
      hoursLabel: '',
      mapsQuery: 'Dr Sergio Fernandes cirurgião plástico Criciúma',
    },
  ] satisfies Location[],

  /** Destaques do Instagram (na mesma ordem do perfil). */
  highlights: [
    { label: 'Abdominoplastia', procedure: 'abdominoplastia', image: '/images/instagram/destaque-abdominoplastia.webp' },
    { label: 'Depoimentos', procedure: '', image: '/images/instagram/destaque-depoimentos.webp' },
    { label: 'Mama', procedure: 'cirurgia-de-mama', image: '/images/instagram/destaque-mama.webp' },
    { label: 'Lipo HD', procedure: 'lipo-hd', image: '/images/instagram/destaque-lipo-hd.webp' },
    { label: 'Rinoplastia', procedure: 'rinoplastia', image: '/images/instagram/destaque-rinoplastia.webp' },
  ],

  /**
   * Posts exibidos no "ambiente Instagram" do site.
   * Troque `image` por prints/fotos reais em /public/images/instagram e `url` pelo link do post.
   */
  instagramPosts: [
    { kind: 'reel', caption: 'Bastidores do centro cirúrgico', tone: 'navy', image: '/images/instagram/bastidores-centro-cirurgico.webp', url: '' },
    { kind: 'reel', caption: 'O tamanho de prótese que a paciente quer', tone: 'sand', image: '/images/instagram/protese-consultorio.webp', url: '' },
    { kind: 'post', caption: '+14 mil cirurgias realizadas', tone: 'navy', image: '/images/instagram/14-mil-cirurgias.webp', url: '' },
    { kind: 'reel', caption: 'Somos nós: a equipe', tone: 'rose', image: '/images/instagram/equipe.webp', url: '' },
    { kind: 'post', caption: '30 anos de profissão', tone: 'gold', image: '/images/instagram/30-anos.webp', url: '' },
    { kind: 'reel', caption: 'Bastidores cirúrgicos', tone: 'navy', image: '/images/instagram/bastidores-cirurgico.webp', url: '' },
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
