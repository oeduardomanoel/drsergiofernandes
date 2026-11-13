/**
 * Procedimentos em destaque no perfil do Dr. Sergio Fernandes.
 * Texto educativo e geral: não substitui a consulta e não promete resultado
 * (Resolução CFM 2.336/2023 sobre publicidade médica).
 */

export interface Faq {
  q: string
  a: string
}

export interface Procedure {
  slug: string
  name: string
  /** Nome técnico usado no schema.org e no llms.txt */
  technicalName: string
  alternateNames: string[]
  bodyLocation: string
  tagline: string
  /** Usada como meta description (até ~155 caracteres). */
  summary: string
  intro: string
  indications: string[]
  howItWorks: string[]
  recovery: string[]
  faqs: Faq[]
  tone: 'navy' | 'sand' | 'rose' | 'gold'
}

export const procedures: Procedure[] = [
  {
    slug: 'abdominoplastia',
    name: 'Abdominoplastia',
    technicalName: 'Abdominoplastia (dermolipectomia abdominal)',
    alternateNames: ['Plástica de abdome', 'Dermolipectomia abdominal', 'Tummy tuck'],
    bodyLocation: 'Abdome',
    tagline: 'Para o abdome que mudou depois da gestação ou de uma grande perda de peso.',
    summary:
      'Abdominoplastia em Balneário Camboriú, Florianópolis e Criciúma com o Dr. Sergio Fernandes. Entenda indicação, cirurgia e recuperação.',
    intro:
      'A abdominoplastia retira o excesso de pele e gordura da parte de baixo do abdome e, quando há afastamento da musculatura (diástase), permite reaproximar os músculos. É uma das cirurgias mais procuradas por mulheres depois da gestação e por quem emagreceu muito e ficou com sobra de pele que academia nenhuma resolve.',
    indications: [
      'Sobra de pele no abdome que não melhora com exercício',
      'Diástase abdominal depois de uma ou mais gestações',
      'Flacidez após grande perda de peso, inclusive pós-bariátrica',
      'Estrias concentradas abaixo do umbigo',
    ],
    howItWorks: [
      'A cirurgia é feita em ambiente hospitalar, com anestesia definida junto ao anestesista. A cicatriz fica baixa, planejada para ficar escondida pela roupa íntima, e o umbigo é reposicionado.',
      'Em muitos casos, a abdominoplastia é combinada com lipoaspiração dos flancos ou com cirurgia de mama. Se a combinação é segura para você, isso é avaliado na consulta, com base nos seus exames e na sua saúde.',
    ],
    recovery: [
      'Os primeiros dias pedem repouso relativo, cinta compressiva e caminhadas curtas. O retorno ao trabalho e aos exercícios acontece por etapas, com liberação a cada retorno.',
      'A cicatriz amadurece ao longo de meses. Você recebe orientações por escrito e acompanhamento nas consultas de pós-operatório.',
    ],
    faqs: [
      {
        q: 'Abdominoplastia corrige diástase?',
        a: 'Sim, quando há diástase a abdominoplastia permite a plicatura, que é a costura que reaproxima os músculos retos do abdome. A necessidade é confirmada no exame físico e, se preciso, em exame de imagem.',
      },
      {
        q: 'Posso engravidar depois da abdominoplastia?',
        a: 'Pode, mas uma gestação depois da cirurgia tende a alterar o resultado. Por isso, o ideal é operar quando você não planeja mais filhos. Converse sobre isso na consulta.',
      },
      {
        q: 'Qual a diferença entre abdominoplastia e lipoaspiração?',
        a: 'A lipoaspiração retira gordura. A abdominoplastia retira pele e gordura e trata a musculatura. Quem tem sobra de pele geralmente precisa de abdominoplastia; só a lipo pode deixar a pele ainda mais flácida.',
      },
    ],
    tone: 'sand',
  },
  {
    slug: 'cirurgia-de-mama',
    name: 'Cirurgia de Mama',
    technicalName: 'Mamoplastia (aumento, redução e mastopexia)',
    alternateNames: ['Mamoplastia de aumento', 'Prótese de silicone', 'Mastopexia', 'Mamoplastia redutora', 'Lifting de mama'],
    bodyLocation: 'Mamas',
    tagline: 'Aumento, redução ou elevação: o plano é desenhado a partir do seu corpo.',
    summary:
      'Cirurgia de mama com o Dr. Sergio Fernandes em SC: prótese de silicone, mastopexia e redução. Planejamento individual e acompanhamento no pós.',
    intro:
      'Cirurgia de mama é um nome que reúne procedimentos diferentes. A mamoplastia de aumento usa implantes de silicone para dar volume. A mastopexia eleva e remodela mamas caídas, com ou sem prótese. A mamoplastia redutora diminui mamas grandes que pesam nas costas e no dia a dia.',
    indications: [
      'Mamas pequenas ou assimétricas, por vontade de mais volume',
      'Queda das mamas depois de gestação, amamentação ou emagrecimento',
      'Mamas grandes que causam dor nas costas, no pescoço ou marcas do sutiã',
      'Troca de implantes antigos',
    ],
    howItWorks: [
      'Na consulta, são avaliados medidas do tórax, qualidade da pele, posição do mamilo e o resultado que você imagina. A partir disso, são definidos técnica, tipo de incisão e, quando há prótese, volume e perfil do implante.',
      'A cirurgia é feita em ambiente hospitalar. O tipo de cicatriz depende da técnica: ao redor da aréola, vertical ou em T invertido, nos casos de maior correção.',
    ],
    recovery: [
      'Nas primeiras semanas, o uso de sutiã cirúrgico é contínuo e os esforços com os braços ficam limitados. A volta às atividades acontece aos poucos, sempre com liberação nas consultas de retorno.',
      'O formato final das mamas se acomoda ao longo dos meses seguintes.',
    ],
    faqs: [
      {
        q: 'Qual o tamanho ideal de prótese de silicone?',
        a: 'Não existe um número ideal para todo mundo. O volume é escolhido a partir das medidas do seu tórax e da sua pele, junto com o resultado que você quer. Isso é feito com calma na consulta.',
      },
      {
        q: 'Só prótese resolve mama caída?',
        a: 'Nem sempre. Quando a queda é importante, a prótese sozinha pode não corrigir a posição do mamilo e da mama. Nesses casos costuma ser indicada a mastopexia, com ou sem implante.',
      },
      {
        q: 'Vou poder amamentar depois?',
        a: 'Na maioria das técnicas a amamentação é preservada, mas existe risco de interferência, principalmente em reduções. Esse ponto é discutido na consulta antes de qualquer decisão.',
      },
    ],
    tone: 'rose',
  },
  {
    slug: 'lipo-hd',
    name: 'Lipo HD',
    technicalName: 'Lipoaspiração de alta definição (Lipo HD)',
    alternateNames: ['Lipoaspiração HD', 'Lipo de alta definição', 'Lipoescultura', 'Hi-Def liposuction'],
    bodyLocation: 'Abdome, flancos, costas e membros',
    tagline: 'Contorno com definição para quem já está perto do peso que deseja.',
    summary:
      'Lipo HD (lipoaspiração de alta definição) com o Dr. Sergio Fernandes em Balneário Camboriú, Florianópolis e Criciúma. Indicação, cirurgia e pós.',
    intro:
      'A Lipo HD é uma lipoaspiração que vai além de retirar gordura: ela trabalha as sombras e os contornos da musculatura para dar mais definição ao abdome, à cintura e às costas. Não é tratamento para emagrecer. O melhor resultado aparece em quem já está próximo do peso ideal e tem boa qualidade de pele.',
    indications: [
      'Gordura localizada que resiste à dieta e ao treino',
      'Vontade de mais definição no abdome e na cintura',
      'Pele com boa elasticidade',
      'Peso estável e próximo do ideal',
    ],
    howItWorks: [
      'A gordura é retirada em camadas, com marcação prévia dos contornos musculares de cada paciente. Em alguns casos, parte da gordura pode ser reaproveitada em outra área, como os glúteos.',
      'O procedimento é feito em ambiente hospitalar e a indicação de áreas, técnica e combinação com outras cirurgias é definida na consulta.',
    ],
    recovery: [
      'O pós-operatório inclui malha compressiva e, geralmente, sessões de drenagem linfática orientadas pela equipe. O inchaço diminui progressivamente nas semanas seguintes.',
      'A definição vai ficando mais visível conforme o corpo desincha, num processo que leva meses.',
    ],
    faqs: [
      {
        q: 'Qual a diferença entre lipo tradicional e Lipo HD?',
        a: 'A lipo tradicional reduz volume de gordura. A Lipo HD também reduz volume, mas trabalha os contornos para destacar a musculatura que você já tem, com um acabamento mais atlético.',
      },
      {
        q: 'Lipo HD serve para emagrecer?',
        a: 'Não. Ela é indicada para contorno corporal em quem já está perto do peso ideal. Para perda de peso, o caminho é outro e começa com acompanhamento clínico.',
      },
      {
        q: 'O resultado da Lipo HD é permanente?',
        a: 'As células de gordura retiradas não voltam, mas as que ficam podem crescer se houver ganho de peso. Manter alimentação e treino em dia é o que preserva o contorno.',
      },
    ],
    tone: 'navy',
  },
  {
    slug: 'rinoplastia',
    name: 'Rinoplastia',
    technicalName: 'Rinoplastia estética e funcional',
    alternateNames: ['Plástica de nariz', 'Cirurgia de nariz', 'Rinosseptoplastia'],
    bodyLocation: 'Nariz',
    tagline: 'Um nariz que combina com o seu rosto e que respira bem.',
    summary:
      'Rinoplastia com o Dr. Sergio Fernandes em Santa Catarina. Cirurgia de nariz estética e funcional com planejamento individual e acompanhamento.',
    intro:
      'A rinoplastia muda o formato do nariz para deixá-lo em harmonia com o restante do rosto. Pode corrigir giba (o "calombo" no dorso), ponta larga ou caída, desvios e assimetrias. Quando existe dificuldade para respirar, a parte funcional pode ser tratada na mesma cirurgia.',
    indications: [
      'Incômodo com o formato do nariz: dorso, ponta ou largura',
      'Nariz desviado após trauma',
      'Dificuldade para respirar associada a alterações internas',
      'Correção de rinoplastia anterior',
    ],
    howItWorks: [
      'Na consulta, o rosto é analisado como um todo. O objetivo é um nariz que pareça seu, sem cara de operado. A técnica (aberta ou fechada) é escolhida conforme o que precisa ser feito.',
      'A cirurgia é realizada em ambiente hospitalar e o plano é revisto com você antes do procedimento.',
    ],
    recovery: [
      'Nos primeiros dias pode haver inchaço e roxo ao redor dos olhos. Uma tala protege o nariz no início da recuperação.',
      'O inchaço da ponta é o último a sair e o formato final vai se revelando ao longo de meses, às vezes até um ano.',
    ],
    faqs: [
      {
        q: 'Rinoplastia melhora a respiração?',
        a: 'Pode melhorar quando a dificuldade é causada por alterações estruturais, como desvio de septo. Isso é avaliado antes da cirurgia e, quando necessário, com exames complementares.',
      },
      {
        q: 'A partir de que idade posso fazer rinoplastia?',
        a: 'Em geral, depois que o crescimento do rosto se completa, no fim da adolescência. Cada caso é avaliado individualmente.',
      },
      {
        q: 'Quando o resultado da rinoplastia fica definitivo?',
        a: 'A maior parte do inchaço sai nas primeiras semanas, mas o refinamento da ponta continua por meses. O resultado final costuma ser avaliado depois de um ano.',
      },
    ],
    tone: 'gold',
  },
]

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find(p => p.slug === slug)
}

export const homeFaqs: Faq[] = [
  {
    q: 'Onde o Dr. Sergio Fernandes atende?',
    a: 'O Dr. Sergio Fernandes atende em três cidades de Santa Catarina: Balneário Camboriú, Florianópolis e Criciúma. O agendamento da avaliação é feito pelo link oficial, que direciona para a equipe.',
  },
  {
    q: 'O Dr. Sergio Fernandes é cirurgião plástico especialista?',
    a: 'Sim. Ele tem registro no Conselho Regional de Medicina de Santa Catarina (CRM 7913/SC) e Registro de Qualificação de Especialista em Cirurgia Plástica (RQE 11337). O RQE é o que comprova a especialidade junto ao CRM, e você pode consultá-lo no portal do Conselho Federal de Medicina.',
  },
  {
    q: 'Quais cirurgias o Dr. Sergio Fernandes realiza?',
    a: 'Entre os procedimentos mais procurados estão abdominoplastia, cirurgia de mama (prótese de silicone, mastopexia e redução), Lipo HD e rinoplastia. A indicação certa para o seu caso só é definida na avaliação.',
  },
  {
    q: 'Quanto custa uma cirurgia plástica com o Dr. Sergio?',
    a: 'O valor depende do procedimento, da técnica, do tempo de cirurgia, do hospital e da anestesia. Por isso, o orçamento é apresentado depois da consulta de avaliação, já com o plano definido para você.',
  },
  {
    q: 'Dá para fazer mais de uma cirurgia no mesmo dia?',
    a: 'Em alguns casos, sim. Abdominoplastia com mama, por exemplo, é uma combinação comum. Mas a decisão depende da sua saúde, dos exames e do tempo total de cirurgia, sempre com a segurança em primeiro lugar.',
  },
  {
    q: 'Como funciona o acompanhamento depois da cirurgia?',
    a: 'Você sai com orientações por escrito e retornos agendados. Nas consultas de pós-operatório, o Dr. Sergio acompanha a cicatrização e libera, por etapas, a volta ao trabalho, aos exercícios e à rotina.',
  },
]
