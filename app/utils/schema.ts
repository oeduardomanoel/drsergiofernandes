import { site, mapsUrl } from '#shared/data/site'
import { procedures, type Faq, type Procedure } from '#shared/data/procedures'

export const ids = (base: string) => ({
  physician: `${base}/#physician`,
  person: `${base}/#person`,
  website: `${base}/#website`,
})

function places() {
  return site.locations.map(l => ({
    '@type': 'Place',
    'name': `${site.name} · ${l.city}`,
    'hasMap': mapsUrl(l.mapsQuery),
    'address': {
      '@type': 'PostalAddress',
      ...(l.street ? { streetAddress: l.street } : {}),
      ...(l.postalCode ? { postalCode: l.postalCode } : {}),
      'addressLocality': l.city,
      'addressRegion': site.stateCode,
      'addressCountry': 'BR',
    },
    ...(l.phone ? { telephone: l.phone } : {}),
  }))
}

export function procedureSchema(p: Procedure, base: string) {
  return {
    '@type': 'MedicalProcedure',
    '@id': `${base}/procedimentos/${p.slug}#procedure`,
    'name': p.name,
    'alternateName': [p.technicalName, ...p.alternateNames],
    'description': p.intro,
    'url': `${base}/procedimentos/${p.slug}`,
    'procedureType': 'https://schema.org/SurgicalProcedure',
    'bodyLocation': p.bodyLocation,
    'howPerformed': p.howItWorks.join(' '),
    'followup': p.recovery.join(' '),
    'relevantSpecialty': 'https://schema.org/PlasticSurgery',
  }
}

export function coreSchema(base: string) {
  const id = ids(base)
  const sameAs = [site.links.instagram, site.links.threads]

  return [
    {
      '@type': 'WebSite',
      '@id': id.website,
      'url': `${base}/`,
      'name': site.name,
      'inLanguage': 'pt-BR',
      'publisher': { '@id': id.physician },
    },
    {
      '@type': 'Physician',
      '@id': id.physician,
      'name': `${site.name} · ${site.role}`,
      'description': site.description,
      'url': `${base}/`,
      'image': `${base}/og-image.png`,
      'logo': `${base}/apple-touch-icon.png`,
      'medicalSpecialty': 'https://schema.org/PlasticSurgery',
      'isAcceptingNewPatients': true,
      'priceRange': '$$$',
      'currenciesAccepted': 'BRL',
      'areaServed': site.locations.map(l => ({ '@type': 'City', 'name': `${l.city}, ${site.stateCode}` })),
      'location': places(),
      'address': places()[0]?.address,
      'sameAs': sameAs,
      'identifier': [
        { '@type': 'PropertyValue', 'propertyID': 'CRM-SC', 'value': '7913' },
        { '@type': 'PropertyValue', 'propertyID': 'RQE', 'value': '11337' },
      ],
      'availableService': procedures.map(p => ({ '@id': `${base}/procedimentos/${p.slug}#procedure` })),
      'employee': { '@id': id.person },
      'potentialAction': {
        '@type': 'ReserveAction',
        'name': 'Agendar avaliação',
        'target': site.links.booking,
      },
    },
    {
      '@type': 'Person',
      '@id': id.person,
      'name': 'Sergio Fernandes',
      'honorificPrefix': 'Dr.',
      'jobTitle': site.role,
      'description': `Cirurgião plástico com mais de ${site.stats.years} anos de experiência e mais de 14 mil cirurgias realizadas em Santa Catarina. ${site.crm}, ${site.rqe}.`,
      'worksFor': { '@id': id.physician },
      'knowsAbout': procedures.map(p => p.name),
      'hasCredential': [
        { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Registro profissional', 'name': site.crm, 'recognizedBy': { '@type': 'Organization', 'name': 'Conselho Regional de Medicina de Santa Catarina' } },
        { '@type': 'EducationalOccupationalCredential', 'credentialCategory': 'Registro de Qualificação de Especialista', 'name': `${site.rqe} · Cirurgia Plástica` },
      ],
      'sameAs': sameAs,
    },
    ...procedures.map(p => procedureSchema(p, base)),
  ]
}

export function faqSchema(faqs: Faq[], url: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string, url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((it, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': it.name,
      'item': it.url,
    })),
  }
}
