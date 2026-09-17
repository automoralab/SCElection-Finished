/**
 * EDITABLE COPY
 * Flipbook uses high-res PDF page images in /public/manifesto-pages/
 * Key Points are condensed paraphrases from the manifesto PDF.
 */

export const CONTENT = {
  candidate: {
    name: 'Steve Crowther',
    nameUpper: 'STEVE CROWTHER',
    constituency: 'Arbory, Castletown & Malew',
    constituencyShort: 'ACM',
    party: 'Independent',
  },

  election: {
    title: 'House of Keys General Election',
    dateLong: 'Thursday 24th September 2026',
    dateShort: '24 September 2026',
    datePunchy: '24 SEPT 2026',
  },

  hero: {
    voteLabel: 'VOTE',
    headline: 'STEVE CROWTHER',
    hook: 'Time to deliver real change for our communities.',
    forLine: 'Independent · Arbory, Castletown & Malew',
    image: '/images/steve-hero.jpg',
    imageAlt: 'Steve Crowther standing in front of Castle Rushen, Castletown',
  },

  homeCtas: [
    { label: 'Read the Manifesto', to: '/manifesto', style: 'primary' },
    { label: 'Key Points', to: '/points', style: 'secondary' },
    { label: 'About Steve', to: '/about', style: 'ghost' },
  ],

  pollingReminder: 'Polling day is 24 September. If you require any assistance in getting to your nearest polling station, don\'t hesitate to contact me.',

  nav: [
    { label: 'Home', to: '/', icon: 'home' },
    { label: 'Points', to: '/points', icon: 'grid' },
    { label: 'Manifesto', to: '/manifesto', icon: 'book' },
    { label: 'About', to: '/about', icon: 'user' },
  ],

  about: {
    title: 'About Steve',
    eyebrow: 'Local roots. Global experience.',
    image: '/images/steve-about.jpg',
    imageAlt: 'Portrait of Steve Crowther outdoors in Castletown',
    paragraphs: [
      'I am married, with a daughter and live in Castletown. My parents moved to the Isle of Man in 1973. We lived in Colby and I attended Castle Rushen High School before studying architecture in Manchester and qualifying in 1987.',
      'After working for many years as an architect in Manchester and Asia, I returned to Castletown with my family in 2003. My career has given me practical experience of major development, international business and public-private partnerships.',
      'My father, Dr Crowther, helped establish a group medical practice in the South. My mother, Nadene Crowther, was a driving force in the creation of Hospice Isle of Man and was awarded an MBE in 1995 and a Tynwald Honour in 2013. Public service and community responsibility have always been central to my family.',
    ],
  },

  standingAgain: {
    title: 'Why I Am Standing Again',
    lead:
      'Our constituency needs a stronger voice at the centre of government, backed by practical experience and a clear plan.',
    paragraphs: [
      'In 2021 I highlighted the failure to deliver Castle Rushen High School and associated swimming pool, the regeneration of Castletown, Ballasalla village centre, the Ballasalla bypass connection, a strategic roads review, improvements to the airport and development of the Ronaldsway business parkway. Too little has moved forward.',
      'Elsewhere on the Island, projects have advanced. Here, delays continue to hold back housing, jobs, investment and community confidence. Some private investment in Castletown is welcome, but it is not yet at the scale needed to unlock the area’s full potential.',
    ],
    commitmentsTitle: 'My Three Local Commitments',
    commitments: [
      {
        title: 'Deliver essential infrastructure',
        text: 'I will press for affordable, practical solutions and clear timescales for the projects on which the South depends.',
      },
      {
        title: 'Challenge Douglas-centred development',
        text: 'Investment and opportunity which must be distributed more fairly across our Island.',
      },
      {
        title: 'Represent the constituency at the highest level',
        text: 'I will make the economic case for the South firmly and consistently at the heart of the next administration.',
      },
    ],
  },

  /**
   * Key Points — condensed 2-4 sentence paraphrases from the PDF sections.
   * Not verbatim; flipbook below is the full source.
   */
  keyPoints: [
    {
      id: 'housing',
      title: 'Housing',
      icon: 'home',
      summary:
        'Ballasalla took a lot of homes without the infrastructure; Castletown still needs homes for younger and returning families. Steve’s plan: modular eco-homes on government leasehold plots to cut the buy-in price for first-time buyers — with safeguards so they stay homes, not buy-to-let. Vacant investment properties need a hard look without wrecking the legitimate private market.',
    },
    {
      id: 'traffic',
      title: 'Traffic & Infrastructure',
      icon: 'road',
      summary:
        'Finish the Ballasalla bypass roundabout — without it, housing, business access and village regeneration stay stuck. Castletown needs an evidence-led parking and traffic plan, early reviews of Victoria and Alexandra Roads, and the Arbory/Malew Street refurb that traders have waited six years for. Castle Rushen High School and pool must finally get a deliverable brief, not more failed tenders.',
    },
    {
      id: 'economy',
      title: 'Economy',
      icon: 'chart',
      summary:
        'Stop burning reserves without a plan. Short term: cut duplicated spend and unblock small business. Medium term: treat government land and property as an economic asset — and explore a sovereign fund or Manx bank. Long term: diversify into tech, private healthcare, hydroponics and food, with UNESCO Biosphere as the ethical spine.',
    },
    {
      id: 'environment',
      title: 'Environment & Energy',
      icon: 'leaf',
      summary:
        'Practical greens that cut bills: high-efficiency homes, insulation, solar with fair tariffs, and serious checks on hydrogen, interconnectors, wave and geothermal. No rush into giant wind schemes without transparent cost and landscape assessment. Ronaldsway is the Island’s front door — fix it as part of one South gateway strategy with the bypass and medical/tech park.',
    },
    {
      id: 'digital',
      title: 'Digital Divide',
      icon: 'hub',
      summary:
        'Online services are fine — forcing everyone online is not. Local hubs around an expanded Post Office in Ballasalla, Castletown and other centres: banking in rotation, cash access, paper forms, and advice space for groups like Age Concern. Seniors are already in distress; technology should widen access, not shut the human door.',
    },
    {
      id: 'health',
      title: 'Health & Wellbeing',
      icon: 'heart',
      summary:
        'Tighter Manx Care accountability — don’t smash it up for a messy rebuild patients will pay for. More on-Island treatment where it makes clinical and cost sense, rebuild Noble’s via partnerships, integrate health and social care, and scale prevention for an ageing population. Mental health needs earlier education, sport and community — funded by a stronger economy.',
    },
    {
      id: 'education',
      title: 'Education & Young People',
      icon: 'book',
      summary:
        'More vocational routes before leaving school; examine how the minimum wage hits apprenticeships and hospitality entry jobs. Centres of excellence (arts, drama) shared Island-wide; protect music, sport and creativity — not just exam scores. Teach digital resilience early, and unlock underused land for a future skills campus.',
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Food Security',
      icon: 'farm',
      summary:
        'Rebuild Food Matters with producers, retailers and hospitality. Fix the Ag & Environment Scheme for tenant farmers, secure the meat plant, and back succession for smaller farms. Hydroponics in hurricane-proof polytunnels — Steve has already built one at the hospice — powered by farm solar can grow local perishables and income.',
    },
  ],

  /**
   * Flipbook pages — high-res renders of the printed PDF (public/manifesto-pages).
   * Re-generate with: node scripts/render-manifesto-pages.mjs
   */
  manifestoPages: [
    {
      id: 'p01',
      pdfPage: 1,
      tocLabel: "Cover",
      image: '/manifesto-pages/page-01.png',
      alt: "Manifesto cover — Vote Steve Crowther",
    },
    {
      id: 'p02',
      pdfPage: 2,
      tocLabel: "Dear Constituent",
      image: '/manifesto-pages/page-02.png',
      alt: "Manifesto page 2 — Dear Constituent letter",
    },
    {
      id: 'p03',
      pdfPage: 3,
      tocLabel: "About Me",
      image: '/manifesto-pages/page-03.png',
      alt: "Manifesto page 3 — About Me and why standing again",
    },
    {
      id: 'p04',
      pdfPage: 4,
      tocLabel: "National Priorities / Infrastructure",
      image: '/manifesto-pages/page-04.png',
      alt: "Manifesto page 4 — National priorities and infrastructure",
    },
    {
      id: 'p05',
      pdfPage: 5,
      tocLabel: "Ballasalla / Castletown / Jobs",
      image: '/manifesto-pages/page-05.png',
      alt: "Manifesto page 5 — Ballasalla, Castletown and jobs",
    },
    {
      id: 'p06',
      pdfPage: 6,
      tocLabel: "Homes / School / Retail",
      image: '/manifesto-pages/page-06.png',
      alt: "Manifesto page 6 — Affordable homes, school and retail",
    },
    {
      id: 'p07',
      pdfPage: 7,
      tocLabel: "Economy",
      image: '/manifesto-pages/page-07.png',
      alt: "Manifesto page 7 — Economy",
    },
    {
      id: 'p08',
      pdfPage: 8,
      tocLabel: "Tax & Pensions / Environment",
      image: '/manifesto-pages/page-08.png',
      alt: "Manifesto page 8 — Tax, pensions and environment",
    },
    {
      id: 'p09',
      pdfPage: 9,
      tocLabel: "Airport / Law & Order",
      image: '/manifesto-pages/page-09.png',
      alt: "Manifesto page 9 — Airport and law and order",
    },
    {
      id: 'p10',
      pdfPage: 10,
      tocLabel: "Education",
      image: '/manifesto-pages/page-10.png',
      alt: "Manifesto page 10 — Education",
    },
    {
      id: 'p11',
      pdfPage: 11,
      tocLabel: "Digital Divide",
      image: '/manifesto-pages/page-11.png',
      alt: "Manifesto page 11 — Digital divide",
    },
    {
      id: 'p12',
      pdfPage: 12,
      tocLabel: "Health & Wellbeing",
      image: '/manifesto-pages/page-12.png',
      alt: "Manifesto page 12 — Health and wellbeing",
    },
    {
      id: 'p13',
      pdfPage: 13,
      tocLabel: "Tourism / Agriculture",
      image: '/manifesto-pages/page-13.png',
      alt: "Manifesto page 13 — Tourism and agriculture",
    },
    {
      id: 'p14',
      pdfPage: 14,
      tocLabel: "Agriculture / Governance",
      image: '/manifesto-pages/page-14.png',
      alt: "Manifesto page 14 — Agriculture and governance",
    },
    {
      id: 'p15',
      pdfPage: 15,
      tocLabel: "Why Vote Steve",
      image: '/manifesto-pages/page-15.png',
      alt: "Manifesto page 15 — Why vote Steve Crowther",
    },
    {
      id: 'p16',
      pdfPage: 16,
      tocLabel: "Back cover / Contact",
      image: '/manifesto-pages/page-16.png',
      alt: "Manifesto page 16 — Contact and imprint",
    },
  ],

  contact: {
    address: '31 Arbory Street, Castletown, IM9 1LL',
    addressLines: ['31 Arbory Street', 'Castletown, IM9 1LL'],
    tel: '07624 416722',
    telHref: 'tel:+447624416722',
    email: 'vote@stevecrowther.net',
    emailHref: 'mailto:vote@stevecrowther.net',
    web: 'www.stevecrowther.net',
    webHref: 'https://www.stevecrowther.net',
    facebook: '@steve.crowther',
    imprint:
      'Published by: Steve Crowther, 31 Arbory Street, Castletown, IM9 1LL',
    pollingHelp:
      "If you require any assistance getting to your nearest polling station, don't hesitate to contact me",
  },
}
