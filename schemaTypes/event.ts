import {defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Evento - (cards e página do evento)',
  description: 'Evento que será exibido na página de calendário',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Slug (title)',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'color',
      title: 'Cor padrão do evento (color)',
      description: 'Cor que será utilizada na página do evento',
      type: 'color',
      options: {
        colorList: [
          '#FF6900',
          {hex: '#FCB900'},
          {r: 123, g: 220, b: 181},
          {r: 0, g: 208, b: 132, a: 0.5},
          {h: 203, s: 95, l: 77, a: 1},
          {h: 202, s: 95, l: 46, a: 0.5},
          {h: 345, s: 43, v: 97},
          {h: 344, s: 91, v: 92, a: 0.5},
        ],
      },
    },
    {
      name: 'isActive',
      title: 'Indica se o evento está ativo (isActive)',
      description:
        'Caso esteja ativo terá uma página publicada para o evento e o botão ver evento estará visível no card da página de calendário',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isHibrid',
      title: 'Indica se o evento é híbrido (isHibrid)',
      description:
        'Caso esteja ativo exibirá uma mensagem informando que o evento é gratuito para profissionais de orgãos ambientais',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'registrationLink',
      title: 'Link de Inscrição associados e não associados (registrationLink)',
      description: 'Link para a página de inscrição do evento (associados e não associados)',
      type: 'url',
      validation: (Rule) =>
        Rule.optional().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'registrationLinkGovernmentEmployee',
      title: 'Link de Inscrição funcionários públicos (registrationLinkGovernmentEmployee)',
      description: 'Link para a página de inscrição do evento (funcionários públicos)',
      type: 'url',
      validation: (Rule) =>
        Rule.optional().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'month',
      title: 'Mês do Evento (month)',
      description: 'Mês em que o evento irá ocorrer',
      type: 'string',
      options: {
        list: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bannerLeftImage',
      title: 'Imagem esquerda do banner (bannerLeftImage)',
      description: 'Imagem que será exibida no lado esquerdo do banner do evento na tela do evento',
      type: 'image',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'bannerRightImage',
      title: 'Imagem direita do banner (bannerRightImage)',
      description: 'Imagem que será exibida no lado direito do banner do evento na tela do evento',
      type: 'image',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'contentTitle',
      title: 'Nome do Evento (contentTitle)',
      description: 'Ex: GERENCIAMENTO DE PROJETOS NO GAC',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(65),
    },
    {
      name: 'contentDescription',
      title: 'Tipo do evento (contentDescription)',
      description: 'Ex: online, presencial ou ambos',
      type: 'string',
      options: {
        list: ['aulas on-line', 'aulas presenciais', 'aulas on-line e presenciais'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'associatedPrice',
      title: 'Preço Associado (associatedPrice)',
      description: 'Ex: R$ 100,00',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(15),
    },
    {
      name: 'nonAssociatedPrice',
      title: 'Preço Não Associado (nonAssociatedPrice)',
      description: 'Ex: R$ 100,00',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(15),
    },
    {
      name: 'onlineTime',
      title: 'Horário do Evento Online (onlineTime)',
      description: 'Ex: das 8h as 12h',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(20),
    },
    {
      name: 'onlineDates',
      title: 'Datas do Evento Online (onlineDates)',
      description: 'Ex: 01/11, 02/11',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(200),
    },
    {
      name: 'presencialTime',
      title: 'Horário do Evento Presencial (presencialTime)',
      description: 'Ex: das 14h as 18h',
      type: 'string',
      validation: (Rule) => Rule.optional().min(0).max(20),
    },
    {
      name: 'presencialDates',
      title: 'Datas do Evento Presencial (presencialDates)',
      description: 'Ex: 01/11, 02/11',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(200),
    },
    {
      name: 'workload',
      title: 'Carga Horária (workload)',
      description: '20h, 40h, etc.',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(4),
    },
    {
      name: 'headerTextColor',
      title: 'Cor do Texto do header (headerTextColor)',
      description:
        'Cor do texto que será exibido no header do evento caso não selecionado será preto',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: '#FFFFFF'},
          {title: 'Preto', value: '#000000'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'bannerTextColor',
      title: 'Cor do Texto do Banner (bannerTextColor)',
      description:
        'Cor do texto que será exibido no banner do evento caso não selecionado será preto',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: '#FFFFFF'},
          {title: 'Preto', value: '#000000'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'footerTextColor',
      title: 'Cor do Texto do Footer (footerTextColor)',
      description:
        'Cor do texto que será exibido no footer do evento caso não selecionado será preto',
      type: 'string',
      options: {
        list: [
          {title: 'Branco', value: '#FFFFFF'},
          {title: 'Preto', value: '#000000'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'instructors',
      title: 'Pessoas instrutoras ou palestrantes (instructors)',
      description: 'Pessoas que ministrarão ou palestrarão no evento',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
    },
    {
      name: 'sponsors',
      title: 'Patrocinadores (sponsors)',
      description: 'Patrocinadores do evento',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'sponsor'}]}],
    },
    {
      name: 'footerText',
      title: 'Texto do Rodapé do card de Evento (footerText)',
      description: 'Ex: Carga Horária',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(50),
    },
    {
      name: 'contentTileSize',
      title: 'Tamanho do titulo do evento no card na tela de calendário (contentTileSize)',
      description: 'Caso não informdo, o valor padrão será "Médio"',
      type: 'string',
      options: {
        list: [
          {title: 'Grande', value: 'large'},
          {title: 'Médio', value: 'medium'},
          {title: 'Pequeno', value: 'small'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'tagText',
      title: 'Texto da Tag no card de Evento (eventTagText)',
      description: 'Ex: OEMAS ou NOTURNO / Utilize palavras curtas com no máximo 8 caracteres',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(8),
    },
    {
      name: 'tagTextSize',
      title: 'Tamanho do Texto da Tag (tagTextSize)',
      description: 'Caso não informdo, o valor padrão será "Médio"',
      type: 'string',
      options: {
        list: [
          {title: 'Grande', value: 'large'},
          {title: 'Médio', value: 'medium'},
          {title: 'Pequeno', value: 'small'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'tagVariant',
      title: 'Variante da Tag (tagVariant)',
      description: 'Caso não informado, o valor padrão será "Dourado"',
      type: 'string',
      options: {
        list: [
          {title: 'Dourado', value: 'gold'},
          {title: 'Prateado', value: 'silver'},
          {title: 'Bronze', value: 'bronze'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'content',
      title: 'Conteúdo (content)',
      description: 'Conteúdo do evento cada linha inforada será um bullet point',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'registerAssociantedAndNonAssociantedButtonLabel',
      title: 'Texto do botão de Inscrição associados e não associados (registerAssociantedAndNonAssociantedButtonLabel) na área de conteúdo programatico',
      description: 'Informe aqui o texto que será exibido no botão de inscrição para associados e não associados na área de conteúdo programatico',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'oemasTitle',
      title: 'Texto que será exibido antes do botão de inscriçao de OEMAS na área de conteúdo programatico',
      description: 'Informe aqui o texto que será exibido no botão de inscrição para OEMAS na área de conteúdo programatico',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'oemasDisclaimerText',
      title: 'Texto que será exibido após o título de inscrição de OEMAS na área de conteúdo programatico',
      description: 'Informe aqui o texto que será exibido após o título de inscrição para OEMAS na área de conteúdo programatico',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'registerOemasButtonLabel',
      title: 'Texto do botão de Inscrição de OEMAS (registerOemasButtonLabel) na área de conteúdo programatico',
      description: 'Informe aqui o texto que será exibido no botão de inscrição para OEMAS na área de conteúdo programatico',
      type: 'string',
      validation: (Rule) => Rule.optional(),
    },
  ],
})
