/**
 * SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
 *
 * Strongly typed content configuration. To add, edit, or remove any project,
 * certification, brand, skill, or experience entry, update this file only.
 */

export interface PersonInfo {
  name: string;
  headline: string;
  location: string;
  relocationStatus: string;
  email: string;
  phone: string;
  linkedin: string;
  about: string;
  yearsExperience: number;
  avatar?: string;
}

export interface Brand {
  id: string;
  name: string;
  descriptor?: string;
  logo?: string; // Optional image URL for future logo graphics
}

export type ProjectTag =
  | 'All'
  | 'RFID'
  | 'Barcode'
  | 'Asset tracking'
  | 'WIP automation'
  | 'Warehouse'
  | 'ERP';

export interface ProjectBento {
  context: string;
  fix: string;
  reality: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  bento: ProjectBento;
  description: string;
  outcomes: string[];
  fullCaseStudy?: {
    challenge: string;
    solution: string;
    hardwareDeployed?: string[];
  };
}

export interface PillarPoint {
  title: string;
  description: string;
}

export interface PillarItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  points: PillarPoint[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Package' | 'GraduationCap' | 'Paintbrush' | 'Factory' | 'Warehouse' | 'Landmark' | 'Building2';
}

export interface SubSectorItem {
  id: string;
  title: string;
  description: string;
  statusTag: 'Active Scope' | 'Deployed Use-Case';
  iconName: 'Building2' | 'Database' | 'GraduationCap' | 'QrCode' | 'Package' | 'Paintbrush' | 'Warehouse';
}

export interface ImpactVertical {
  id: string;
  iconName: 'Shield' | 'Landmark' | 'GraduationCap' | 'Factory';
  title: string;
  description: string;
  tag: string;
  statusTag?: string;
  canExpand?: boolean;
  subSectors?: SubSectorItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  city: string;
  dates: string;
  isCurrent?: boolean;
  summary: string;
  details?: string[];
}

export interface SkillGroup {
  id: string;
  category: string;
  coreFocus: string;
  skills: string[];
}

export type CertificationGroup = 'Business and project' | 'Cloud, network and security' | 'Sales and marketing' | 'All';

export interface CertificationItem {
  id: string;
  group: 'Business and project' | 'Cloud, network and security' | 'Sales and marketing';
  issuer: string;
  title: string;
  year?: string;
  credentialUrl?: string;
  image?: string;
  issuerLogo?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  badgeTag: string;
  timeline: string;
  coreValue: string;
  badgeStyle?: 'foundation' | 'governance';
  dates?: string;
  status?: string;
}

export type BadgeGroup =
  | 'All'
  | 'Credly (PMI & IBM)'
  | 'Google Cloud & Gemini'
  | 'Internet Society (ISOC)'
  | 'Cloud, Security & Agile';

export interface VerifiedBadge {
  id: string;
  title: string;
  issuer: string;
  group: 'Credly (PMI & IBM)' | 'Google Cloud & Gemini' | 'Internet Society (ISOC)' | 'Cloud, Security & Agile';
  date: string;
  badgeUrl: string;
  image: string;
  category: string;
  verificationType?: string;
  description: string;
}

export interface GoogleBadge {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  image: string;
  category: string;
  description: string;
}

export interface JourneyMilestone {
  period: string;
  headline: string;
  subhead: string;
  points: string[];
}

export interface JourneyData {
  headline: string;
  paragraphs: string[];
  milestones: JourneyMilestone[];
}

export interface PortfolioData {
  person: PersonInfo;
  journey: JourneyData;
  brands: Brand[];
  pillars: PillarItem[];
  projects: Project[];
  industries: IndustryItem[];
  impactVerticals: ImpactVertical[];
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  certifications: CertificationItem[];
  googleBadges: GoogleBadge[];
  googleProfileUrl: string;
  googleDevProfileUrl: string;
  credlyProfileUrl: string;
  isocProfileUrl: string;
  badges: VerifiedBadge[];
  education: EducationItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  person: {
    name: 'Zain M. Abid',
    headline: 'Founder & Managing Director, Zaintegrated Solutions | Connecting Physical Operations with Digital ERP',
    location: 'Lahore, Pakistan',
    relocationStatus: 'Open to relocation',
    email: 'zainmabid@gmail.com',
    phone: '+92 320 527 0594',
    linkedin: 'https://www.linkedin.com/in/zainmabid/',
    yearsExperience: 10,
    avatar: '/zain-portrait.jpg',
    about:
      'For over a decade, I’ve operated at the intersection of enterprise software, technology leadership, and business scale. Today, I solve one of the most expensive leaks in supply chains: bridging the gap between fast-moving manufacturing floors and central ERP ledgers using custom RFID, barcode tracking, and Industry 4.0 automation.'
  },

  journey: {
    headline: 'A Decade of Strategy. Grounded on the Factory Floor.',
    paragraphs: [
      "I didn't start out in tracking hardware. The first 8 years of my career were spent deep inside tech ecosystems—managing high-stakes enterprise sales, architecting complex CRM/ERP software solutions, and aligning business vision with engineering execution.",
      "But as I watched large-scale corporate strategies deploy, I saw a repeating blind spot: beautiful software dashboards completely blind to the chaotic reality of physical production floors.",
      "For the past 2 years, I have focused exclusively on fixing that specific disconnect. By blending my foundational software background with specialized Industry 4.0 operational automation, I design RFID, barcode, and asset tracking systems built for the human operators who actually use them."
    ],
    milestones: [
      {
        period: 'Years 1 – 8',
        headline: 'Enterprise Software, CRM/ERP & Tech Strategy',
        subhead: 'Inside tech ecosystems, systems integration, and business scale',
        points: [
          'High-stakes enterprise technology consulting and solutions architecture',
          'Aligning executive business vision with robust engineering execution',
          'Deploying enterprise CRM, ERP middleware, and scalable tech platforms'
        ]
      },
      {
        period: 'Last 2 Years',
        headline: 'Grounded on the Factory Floor: Industry 4.0 & RFID',
        subhead: 'Eliminating the physical-to-digital disconnect at Zaintegrated Solutions',
        points: [
          'Configuring tracking hardware so managers know where assets are across plant zones instantly',
          'Deploying bulletproof RFID and barcode workflows built for real human operators',
          'Synchronizing fast-moving production floors with central ERP ledgers with zero discrepancy'
        ]
      }
    ]
  },

  brands: [
    {
      id: 'diamond-paints',
      name: 'Diamond Paints',
      descriptor: 'Industrial Manufacturing',
      logo: '/brands/diamond-paints.png'
    },
    {
      id: 'unilever',
      name: 'Unilever',
      descriptor: 'FMCG & Consumer Goods',
      logo: '/brands/unilever.png'
    },
    {
      id: 'bata',
      name: 'Bata',
      descriptor: 'Footwear & Retail Chain',
      logo: '/brands/bata.png'
    },
    {
      id: 'beaconhouse',
      name: 'Beaconhouse',
      descriptor: 'Education Network',
      logo: '/brands/beaconhouse.png'
    },
    {
      id: 'stza',
      name: 'STZA (Govt)',
      descriptor: 'Special Technology Zones Authority',
      logo: '/brands/stza.png'
    },
    {
      id: 'nippon-paint',
      name: 'Nippon Paint',
      descriptor: 'Coatings & Chemical Manufacturing',
      logo: '/brands/nippon-paint.png'
    },
    {
      id: 'parkview-city',
      name: 'ParkView City',
      descriptor: 'Real Estate & Infrastructure',
      logo: '/brands/parkview-city.png'
    },
    {
      id: 'fauji-foods',
      name: 'Fauji Foods',
      descriptor: 'Food & Dairy Processing',
      logo: '/brands/fauji-foods.png'
    },
    {
      id: 'reliance-corp',
      name: 'Reliance Corporation',
      descriptor: 'Importers & IT Consultants',
      logo: '/brands/reliance-corp.png'
    },
    {
      id: 'ptcl',
      name: 'PTCL',
      descriptor: 'Telecommunications Network',
      logo: '/brands/ptcl.png'
    },
    {
      id: 'pmas-arid',
      name: 'PMAS Arid Agriculture University (Govt)',
      descriptor: 'Public Sector University',
      logo: '/brands/pmas-arid.png'
    },
    {
      id: 'iiui',
      name: 'IIUI (Govt)',
      descriptor: 'International Islamic University',
      logo: '/brands/iiui.png'
    },
    {
      id: 'ntu',
      name: 'NTU (Govt)',
      descriptor: 'National Textile University',
      logo: '/brands/ntu.png'
    },
    {
      id: 'dwatson',
      name: 'D. Watson',
      descriptor: 'Retail Pharmacy & Consumer Chain',
      logo: '/brands/dwatson.png'
    },
    {
      id: 'orient',
      name: 'Orient',
      descriptor: 'Electronics & Home Appliances',
      logo: '/brands/orient.png'
    },
    {
      id: 'abhi',
      name: 'Abhi Microfinance Bank',
      descriptor: 'Fintech & Microfinance Banking',
      logo: '/brands/abhi.png'
    },
    {
      id: 'rspn',
      name: 'RSPN',
      descriptor: 'Rural Support Programmes Network',
      logo: '/brands/rspn.png'
    },
    {
      id: 'action-against-hunger',
      name: 'Action Against Hunger',
      descriptor: 'International Humanitarian NGO',
      logo: '/brands/action-against-hunger.png'
    },
    {
      id: 'fao',
      name: 'FAO (United Nations)',
      descriptor: 'Food and Agriculture Organization',
      logo: '/brands/fao.png'
    },
    {
      id: 'unodc',
      name: 'UNODC (United Nations)',
      descriptor: 'Office on Drugs and Crime',
      logo: '/brands/unodc.png'
    },
    {
      id: 'shell',
      name: 'Shell',
      descriptor: 'Energy & Petroleum Multinational',
      logo: '/brands/shell.png'
    },
    {
      id: 'arl',
      name: 'Attock Refinery Limited (ARL)',
      descriptor: 'Crude Oil Refining & Petrochemicals',
      logo: '/brands/arl.png'
    },
    {
      id: 'sazgar',
      name: 'Sazgar Engineering',
      descriptor: 'Automotive & Heavy Manufacturing',
      logo: '/brands/sazgar.png'
    },
    {
      id: 'nccpl',
      name: 'NCCPL',
      descriptor: 'National Clearing Company of Pakistan',
      logo: '/brands/nccpl.png'
    },
    {
      id: 'outfitters',
      name: 'Outfitters',
      descriptor: 'Fashion Apparel & Retail Chain',
      logo: '/brands/outfitters.png'
    },
    {
      id: 'cass',
      name: 'CASS',
      descriptor: 'Center for Aerospace & Security Studies',
      logo: '/brands/cass.png'
    },
    {
      id: 'graana',
      name: 'Graana',
      descriptor: 'PropTech & Real Estate Portal',
      logo: '/brands/graana.png'
    },
    {
      id: 'qau',
      name: 'Quaid-i-Azam University (Govt)',
      descriptor: 'Public Research University',
      logo: '/brands/qau.png'
    },
    {
      id: 'giga-mall',
      name: 'Giga Mall',
      descriptor: 'Retail Mall & Commercial Complex',
      logo: '/brands/giga-mall.png'
    },
    {
      id: 'davis-pharma',
      name: 'Davis Pharma',
      descriptor: 'Pharmaceuticals & Healthcare',
      logo: '/brands/davis-pharma.png'
    },
    {
      id: 'shaukat-khanum',
      name: 'Shaukat Khanum',
      descriptor: 'Memorial Cancer Hospital & Research',
      logo: '/brands/shaukat-khanum.png'
    },
    {
      id: 'xpress-logistics',
      name: 'Xpress Logistics',
      descriptor: 'Supply Chain & Freight Forwarding',
      logo: '/brands/xpress-logistics.png'
    },
    {
      id: 'iwmi',
      name: 'IWMI (International)',
      descriptor: 'Water Management Research Institute',
      logo: '/brands/iwmi.png'
    },
    {
      id: 'colgate-palmolive',
      name: 'Colgate-Palmolive',
      descriptor: 'Consumer Goods & Personal Care',
      logo: '/brands/colgate-palmolive.png'
    },
    {
      id: 'daewoo-express',
      name: 'Daewoo Express',
      descriptor: 'Intercity Transport & Travel',
      logo: '/brands/daewoo-express.png'
    },
    {
      id: 'daewoo-fastex',
      name: 'Daewoo Fastex',
      descriptor: 'Courier & Cargo Logistics',
      logo: '/brands/daewoo-fastex.png'
    },
    {
      id: 'sitara-textile',
      name: 'Sitara Textile',
      descriptor: 'Textile Manufacturing & Exports',
      logo: '/brands/sitara-textile.png'
    },
    {
      id: 'kohinoor-mills',
      name: 'Kohinoor Mills',
      descriptor: 'Composite Textile & Apparel',
      logo: '/brands/kohinoor-mills.png'
    },
    {
      id: 'pak-suzuki',
      name: 'Pak Suzuki Motor Co.',
      descriptor: 'Automotive & Engine Assembly',
      logo: '/brands/pak-suzuki.png'
    },
    {
      id: 'sitara-chemical',
      name: 'Sitara Chemical Industries',
      descriptor: 'Industrial Chlor-Alkali & Chemicals',
      logo: '/brands/sitara-chemical.png'
    },
    {
      id: 'beechtree',
      name: 'Beechtree',
      descriptor: 'Pret Fashion & Apparel Retail',
      logo: '/brands/beechtree.png'
    },
    {
      id: 'paf-iast',
      name: 'Pak-Austria Fachhochschule (PAF-IAST)',
      descriptor: 'Applied Sciences & Technology',
      logo: '/brands/paf-iast.png'
    },
    {
      id: 'paf-hospital',
      name: 'PAF Hospital (Islamabad)',
      descriptor: 'Military Healthcare & Clinical Services',
      logo: '/brands/paf-hospital.png'
    }
  ],

  pillars: [
    {
      id: 'pillar-industry-4',
      number: '01',
      tag: 'INDUSTRY 4.0 & IOT',
      title: 'Industry 4.0 & IoT Architecture',
      points: [
        {
          title: 'Smart Ecosystems',
          description: 'Designing and deploying IoT-enabled frameworks, automated inventory loops, and real-time tracking systems.'
        },
        {
          title: 'Auto-ID Integration',
          description: 'Bridging operational hardware (RFID, Barcoding, Sensors) seamlessly with backend enterprise layers.'
        },
        {
          title: 'Workflow Automation',
          description: 'Re-engineering manual legacy processes into high-speed, automated digital systems.'
        }
      ]
    },
    {
      id: 'pillar-defense-govtech',
      number: '02',
      tag: 'DEFENSE & GOVTECH',
      title: 'Strategic Defense & GovTech Consulting',
      points: [
        {
          title: 'Mission-Critical Systems',
          description: 'Consulting on high-security software deployments for state enterprises and strategic defense sectors under strict NDAs.'
        },
        {
          title: 'Public Sector Digitization',
          description: 'Modernizing operations for public IT, administrative bodies, and tech/tax compliance institutions.'
        },
        {
          title: 'EdTech Infrastructure',
          description: 'Transforming university management networks, student ERP lifecycles, and institutional workflows.'
        }
      ]
    },
    {
      id: 'pillar-enterprise-erp',
      number: '03',
      tag: 'ENTERPRISE & ERP',
      title: 'Enterprise Solutions & ERP Management',
      points: [
        {
          title: 'System Auditing',
          description: 'Conducting comprehensive diagnostic evaluations of existing corporate and institutional tech stacks.'
        },
        {
          title: 'ERP Deployment',
          description: 'Guiding the selection, customization, and deployment of scalable ERP suites for cross-department synchronization.'
        },
        {
          title: 'Data-Driven Operations',
          description: 'Structuring management systems that turn messy operational data into clean, actionable leadership dashboards.'
        }
      ]
    },
    {
      id: 'pillar-procurement-tenders',
      number: '04',
      tag: 'PROCUREMENT & TENDERS',
      title: 'Procurement Excellence & Tender Bidding',
      points: [
        {
          title: 'PPRA Compliance',
          description: 'Masterful navigation of Pakistan’s public procurement frameworks, handling technical compliance and institutional protocols.'
        },
        {
          title: 'Global Frameworks (UNGM)',
          description: 'Structuring airtight technical proposals aligned with international vetting and United Nations procurement criteria.'
        },
        {
          title: 'End-to-End Bid Management',
          description: 'Managing technical evaluation response documents to capture and win high-stakes public tenders.'
        }
      ]
    }
  ],

  projects: [
    {
      id: 'wip-diamond-paints',
      title: 'WIP Manufacturing Traceability System',
      client: 'Diamond Paints',
      industry: 'Paint & Chemical Manufacturing',
      tags: ['MANUFACTURING', 'AUTOMATION'],
      bento: {
        context: 'Fast-moving production floors with manual inventory tracking leaks.',
        fix: 'Engineered custom RFID layout integrated natively into the central software architecture.',
        reality: 'Real-time physical item ledger updates without human logging delays.'
      },
      description: 'Engineered end-to-end WIP automation for paint chemical blending and tinning gates.',
      outcomes: [
        'Integrated durable RFID tracking checkpoints at each manufacturing gate',
        'Directly synchronized batch progress with central ERP production orders',
        'Eliminated paper travel cards and boosted real-time shop-floor visibility'
      ],
      fullCaseStudy: {
        challenge: 'Chemical blending and tinning stages relied on paper travel cards, preventing real-time production visibility and complicating lot traceability.',
        solution: 'Integrated durable barcode and RFID WIP tracking checkpoints at each manufacturing gate, automatically synchronising batch progress with ERP production orders.',
        hardwareDeployed: ['Chemical-resistant thermal labels', 'Stationary barcode scanners', 'Industrial touch HMI panels']
      }
    },
    {
      id: 'rfid-unilever',
      title: 'Enterprise Physical Asset Intelligence',
      client: 'Unilever',
      industry: 'Consumer Goods (FMCG)',
      tags: ['FMCG', 'ASSET RECOVERY'],
      bento: {
        context: 'High-value enterprise assets dispersed across corporate facilities with fragmented manual logs.',
        fix: 'Structured on-metal passive UHF RFID tagging scheme paired with mobile handheld verification.',
        reality: '100% audit-verified inventory registers with zero manual reconciliations.'
      },
      description: 'Enterprise passive UHF RFID asset tracking system to monitor critical facilities equipment.',
      outcomes: [
        'Formulated enterprise RFID tagging strategy and multi-zone reader deployment plan',
        'Streamlined asset identification, custody transfer and lifecycle verification',
        'Delivered handheld verification protocols and site operational roadmaps'
      ],
      fullCaseStudy: {
        challenge: 'Tracking distributed fixed and movable enterprise assets across facilities with manual reconciliation created inventory discrepancies and audit delays.',
        solution: 'Engineered an end-to-end passive UHF RFID tagging scheme paired with fixed portal readers and handheld mobile terminals, feeding reconciled asset positions directly into corporate registries.',
        hardwareDeployed: ['Passive UHF on-metal & standard tags', 'Handheld RFID terminals', 'Fixed dock door readers']
      }
    },
    {
      id: 'barcode-beaconhouse',
      title: 'High-Throughput Distribution & Asset System',
      client: 'Beaconhouse & Retail Networks',
      industry: 'Education & Commercial Networks',
      tags: ['SUPPLY CHAIN', 'BARCODE'],
      bento: {
        context: 'Multi-site operations lacked standardized physical IDs, causing multi-week audit backlogs.',
        fix: 'Deployed resilient polyester barcode tags with automated batch-printing and mobile scanning pipelines.',
        reality: 'Annual audit cycles reduced from 4 weeks to 48 hours with verified physical reconciliation.'
      },
      description: 'Standardized barcode-based physical asset tracking across multi-site regional facilities.',
      outcomes: [
        'Standardised labelling and barcode scanning workflows for regional field teams',
        'Specced industrial thermal printers and rugged mobile computers',
        'Supervised user acceptance testing and regional deployment support'
      ],
      fullCaseStudy: {
        challenge: 'Multi-campus educational infrastructure lacked standardised physical identification, making annual asset audits time-consuming and error-prone.',
        solution: 'Rolled out resilient polyester 1D/2D asset tags with batch-printing pipelines and handheld scanner audit scripts, drastically reducing audit cycles.',
        hardwareDeployed: ['Industrial thermal transfer barcode printers', '2D rugged handheld scanners', 'Resilient synthetic label stock']
      }
    },
    {
      id: 'hardware-consulting',
      title: 'Turnkey Auto-ID Hardware Architecture',
      client: 'Warehouse & Industrial Operations',
      industry: 'Warehousing & Logistics',
      tags: ['INDUSTRY 4.0', 'HARDWARE EVALUATION'],
      bento: {
        context: 'Extreme RF multipath and metal machinery causing frequent reader blind spots.',
        fix: 'Specced UHF circular antennas, tuned reader profiles, and durable tags for harsh duty cycles.',
        reality: 'Reliable 99.8%+ read rates in extreme industrial and metal-dense zones.'
      },
      description: 'Vendor-agnostic engineering evaluation of UHF tags, portal readers, and industrial scanners.',
      outcomes: [
        'Conducted RF propagation testing and read-rate validations for zero blind spots',
        'Matched industrial mobile computers and thermal printers to harsh warehouse duty cycles',
        'Delivered interoperability validation between Auto-ID edge hardware and host ERPs'
      ],
      fullCaseStudy: {
        challenge: 'Enterprises frequently over-spec or deploy mismatched Auto-ID hardware that fails in high-multipath RF environments or harsh physical conditions.',
        solution: 'Conducted empirical RF propagation testing, read-rate validations and vendor-agnostic hardware appraisals, ensuring zero-blind-spot coverage.',
        hardwareDeployed: ['UHF circular polarized antennas', 'Fixed 4-port RFID readers', 'Forklift-mounted computers & vehicle scanners']
      }
    }
  ],

  industries: [
    {
      id: 'consumer-goods',
      title: 'Consumer goods and FMCG',
      description: 'RFID asset management and enterprise asset visibility',
      iconName: 'Package'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Barcode asset tracking across distributed campuses',
      iconName: 'GraduationCap'
    },
    {
      id: 'paint-chemicals',
      title: 'Paint and chemical manufacturing',
      description: 'WIP automation and batch production traceability',
      iconName: 'Paintbrush'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Process analysis, ERP alignment and shop-floor automation',
      iconName: 'Factory'
    },
    {
      id: 'warehousing-logistics',
      title: 'Warehousing and logistics',
      description: 'Auto-ID hardware, WMS integration and inventory visibility',
      iconName: 'Warehouse'
    },
    {
      id: 'fintech-services',
      title: 'Financial services and technology',
      description: 'Enterprise solution sales and ERP consulting',
      iconName: 'Landmark'
    },
    {
      id: 'enterprise-gov',
      title: 'Enterprise and government',
      description: 'Solution sales, compliance and technical demonstrations',
      iconName: 'Building2'
    }
  ],

  impactVerticals: [
    {
      id: 'gov-tax',
      iconName: 'Landmark',
      title: 'Government & Tax Authorities',
      description: 'Public tech consultations, data pipeline digitization, and administrative efficiency frameworks.',
      tag: 'GOVTECH // PUBLIC SECTOR',
      canExpand: true,
      subSectors: [
        {
          id: 'gov-sub-a',
          title: 'Enterprise Government Solutions',
          description: 'Solution sales, compliance structures, and technical workflow demonstrations.',
          statusTag: 'Active Scope',
          iconName: 'Building2'
        },
        {
          id: 'gov-sub-b',
          title: 'Public Data Digitization',
          description: 'Engineering structural tech consultations and data pipeline deployments.',
          statusTag: 'Deployed Use-Case',
          iconName: 'Database'
        }
      ]
    },
    {
      id: 'higher-education',
      iconName: 'GraduationCap',
      title: 'Higher Education Institutes',
      description: 'Enterprise resource planning, university management software, and campus-wide systems integration.',
      tag: 'EDTECH // ERP SYSTEMS',
      canExpand: true,
      subSectors: [
        {
          id: 'edu-sub-a',
          title: 'Academic ERP Deployments',
          description: 'Integrating university management software and cross-campus resource planning.',
          statusTag: 'Active Scope',
          iconName: 'GraduationCap'
        },
        {
          id: 'edu-sub-b',
          title: 'Campus Asset Visibility',
          description: 'Implementing barcode tracking and automated inventory workflows for large distributed campuses.',
          statusTag: 'Deployed Use-Case',
          iconName: 'QrCode'
        }
      ]
    },
    {
      id: 'manufacturing-logistics',
      iconName: 'Factory',
      title: 'Manufacturing & Logistics (Industry 4.0)',
      description: 'Industrial IoT applications, enterprise asset optimization, and supply chain automation.',
      tag: 'INDUSTRY 4.0 // AUTOMATION',
      canExpand: true,
      subSectors: [
        {
          id: 'mfg-sub-a',
          title: 'Consumer Goods & FMCG',
          description: 'Deploying RFID asset management and real-time enterprise supply chain visibility.',
          statusTag: 'Deployed Use-Case',
          iconName: 'Package'
        },
        {
          id: 'mfg-sub-b',
          title: 'Paint & Chemical Processing',
          description: 'Engineering Work-in-Progress (WIP) automation and strict batch production traceability loops.',
          statusTag: 'Active Scope',
          iconName: 'Paintbrush'
        },
        {
          id: 'mfg-sub-c',
          title: 'Warehousing & WMS',
          description: 'Integrating operational Auto-ID hardware directly with core Warehouse Management Systems.',
          statusTag: 'Deployed Use-Case',
          iconName: 'Warehouse'
        }
      ]
    },
    {
      id: 'strategic-defense',
      iconName: 'Shield',
      title: 'Strategic & Defense Organizations',
      description: 'High-security infrastructure, zero-trust digital solutions, and secure workflow deployment.',
      tag: 'STRATEGIC // HIGH-SECURITY',
      statusTag: 'Classified Scope',
      canExpand: false
    }
  ],

  experience: [
    {
      id: 'zaintegrated-solutions',
      role: 'Founder & Managing Director',
      company: 'Zaintegrated Solutions',
      city: 'Lahore, Pakistan',
      dates: 'Current',
      isCurrent: true,
      summary: 'Directing enterprise operations consulting, Auto-ID engineering, and software products. Consultant and technical advisor to multiple national and international organizations on physical asset visibility, warehouse automation, and ERP integrations.',
      details: [
        'Directing strategic consulting for national and international enterprises scaling physical asset tracking, inventory counts, and supply chain visibility',
        'Architecting integrated solutions connecting RFID/barcode edge devices with modern cloud ERP and inventory systems',
        'Delivering vendor-neutral hardware evaluations, middleware architectures, RF site surveys, and turnkey execution roadmaps'
      ]
    },
    {
      id: 'emergtech',
      role: 'COO/CSO and Project Delivery Lead',
      company: 'EmergTech Solutions Pvt. Ltd.',
      city: 'Lahore, Pakistan',
      dates: 'Apr 2025 to Jan 2026',
      summary: 'Ran operational strategy and delivery for RFID, barcode and warehouse automation; led solution design, POCs and deployment coordination; supervised the RFID hardware integration teams.',
      details: [
        'Directed cross-functional engineering and installation teams on large-scale RFID portal and handheld rollouts',
        'Spearheaded technical presales, architectural proof-of-concepts, and client requirement validations',
        'Established standard operating procedures for UHF tag tuning, reader antenna placement, and site RF surveys'
      ]
    },
    {
      id: 'finexcloud',
      role: 'BDM and Consultant',
      company: 'FineXcloud',
      city: 'Lahore, Pakistan',
      dates: 'Dec 2024 to May 2025',
      summary: 'Technical consultations, requirement analysis, demos and proof-of-concept setups for enterprise automation and ERP clients.',
      details: [
        'Formulated enterprise business requirements into actionable software and automation blueprints',
        'Conducted high-impact executive demonstrations and technical scoping sessions for ERP migration prospects',
        'Collaborated with engineering to establish API integration paths between legacy databases and cloud systems'
      ]
    },
    {
      id: 'gluon',
      role: 'ERP Consultant',
      company: 'Gluon Pvt. Ltd.',
      city: 'Lahore, Pakistan',
      dates: 'May 2024 to Oct 2024',
      summary: 'Assessed ERP needs, deployed and integrated customised ERP solutions, trained end users and documented deployments.',
      details: [
        'Conducted operational gap analysis across inventory, procurement, and production accounting modules',
        'Coordinated data migration schemas, user roles, and custom report builders for enterprise clients',
        'Designed comprehensive SOP documentation and delivered hands-on training for management and floor teams'
      ]
    },
    {
      id: 'nexus',
      role: 'Technical Sales and Solutions Manager',
      company: 'Nexus Technologies',
      city: 'Islamabad, Pakistan',
      dates: 'Nov 2019 to Oct 2023',
      summary: 'Led business development and enterprise solution sales across industries; technical demos for ERP and automation.',
      details: [
        'Managed multi-year client relationships, expanding accounts across industrial, commercial, and government sectors',
        'Led solution architecture presentations, bid tenders, and RFP technical compliance responses',
        'Bridged commercial targets with technical viability, ensuring zero margin slippage during implementation handoffs'
      ]
    },
    {
      id: 'eccountax',
      role: 'Project Coordinator and IT Consultant',
      company: 'Eccountax',
      city: 'Lahore, Pakistan',
      dates: 'Jun 2017 to Jun 2019',
      summary: 'Coordinated project timelines and stakeholders; advised clients on technical solutions.',
      details: [
        'Maintained structured project milestones, risk registers, and cross-departmental delivery schedules',
        'Facilitated client alignment workshops, converting operational requirements into structured IT tasks'
      ]
    },
    {
      id: 'tritech',
      role: 'Admin Manager IT',
      company: 'Tri Tech (Pvt.) Ltd.',
      city: 'Lahore, Pakistan',
      dates: 'Nov 2015 to May 2017',
      summary: 'Introduced SOPs and documentation, managed access and storage, set up backup and restore procedures.',
      details: [
        'Instituted baseline IT infrastructure security controls, user permission hierarchies, and backup redundancy',
        'Drafted company-wide IT compliance documentation and hardware maintenance protocols'
      ]
    }
  ],

  skillGroups: [
    {
      id: 'autoid-hardware',
      category: 'Auto-ID & Hardware Engineering',
      coreFocus: 'End-to-end industrial edge device planning and RF physics configuration.',
      skills: [
        'UHF Passive RFID',
        'Fixed RFID Readers',
        'Handheld Scanners',
        'Antenna Beam Tuning',
        'On-Metal Tagging',
        'Forklift Terminals',
        'Industrial Barcode Printers',
        '1D/2D Scanners'
      ]
    },
    {
      id: 'systems-integration',
      category: 'Systems Architecture & Integration',
      coreFocus: 'Middleware engineering and seamless cross-platform enterprise synchronization.',
      skills: [
        'RFID Middleware',
        'WMS Integration',
        'Enterprise ERP',
        'SQL Query Design',
        'Linux/Ubuntu Admin',
        'REST APIs',
        'Webhook Feeds',
        'Network Topologies',
        'Edge Connectivity'
      ]
    },
    {
      id: 'consulting-delivery',
      category: 'Consulting & Enterprise Delivery',
      coreFocus: 'Scaling organizational execution through technical governance and process audits.',
      skills: [
        'Solution Architecture',
        'Process Automation',
        'Workflow Audits',
        'POC Prototyping',
        'Technical SOPs',
        'Vendor Evaluation',
        'Agile Governance',
        'Change Management'
      ]
    }
  ],

  certifications: [
    {
        "id": "cert-agile-project-management-with-microsoft-project",
        "group": "Business and project",
        "issuer": "LinkedIn Learning",
        "title": "Agile Project Management with Microsoft Project",
        "year": "2026",
        "credentialUrl": "/certifications/Agile%20Project%20Management%20with%20Microsoft%20Project.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-hpi-edge-ai",
        "group": "Cloud, network and security",
        "issuer": "Hasso Plattner Institute (openHPI)",
        "title": "Applied Edge AI: Deep Learning Outside of the Cloud",
        "year": "2026",
        "credentialUrl": "/certifications/Applied%20Edge%20AI-Deep%20Learning%20Outside%20of%20the%20CloudHasso_Plattner_Institute.pdf",
        "issuerLogo": "/logos/hpi.png"
    },
    {
        "id": "cert-undss-besafe",
        "group": "Business and project",
        "issuer": "United Nations DSS",
        "title": "BSAFE Global Operational Field Security Protocol",
        "year": "2026",
        "credentialUrl": "/certifications/BESAFE_%20Certificate%20UNDSS.pdf",
        "issuerLogo": "/logos/undss.png"
    },
    {
        "id": "cert-cisa-ics-components",
        "group": "Cloud, network and security",
        "issuer": "US CISA & Idaho National Laboratory",
        "title": "Common ICS Components (210W-03)",
        "year": "2026",
        "credentialUrl": "/certifications/Common%20ICS%20Components%20(210W-03)%20US%20CISA.pdf",
        "issuerLogo": "/logos/cisa.png"
    },
    {
        "id": "cert-adbi-cybersecurity",
        "group": "Cloud, network and security",
        "issuer": "Asian Development Bank Institute (ADBI)",
        "title": "Cybersecurity Strategy & Operational Governance",
        "year": "2026",
        "credentialUrl": "/certifications/Zain-Abid%E2%80%93Cybersecurity%E2%80%93Cybersecurity%E2%80%93ADBI-E-Learning.pdf",
        "issuerLogo": "/logos/adbi.png"
    },
    {
        "id": "cert-isoc-digital-footprint-cert",
        "group": "Cloud, network and security",
        "issuer": "Internet Society",
        "title": "Digital Footprints",
        "year": "2026",
        "credentialUrl": "https://www.credential.net/0f3dd5cb-fde7-4dbb-acf2-c2198f3b9f46#acc.EFtWLShO",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-hpi-sustainability",
        "group": "Business and project",
        "issuer": "Hasso Plattner Institute (openHPI)",
        "title": "Energy-Efficient Software Development",
        "year": "2026",
        "credentialUrl": "/certifications/Sustainability%20in%20the%20digital%20age_Hasso_Plattner_Institute.pdf",
        "issuerLogo": "/logos/hpi.png"
    },
    {
        "id": "cert-isoc-grant-application",
        "group": "Business and project",
        "issuer": "Internet Society",
        "title": "Grant Ready: Building Your Grant Application",
        "year": "2026",
        "credentialUrl": "https://www.credential.net/01a0ea97-ed08-4760-8407-333e7f35047a#acc.cN89zpi1",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-hubspot-sales-hub",
        "group": "Sales and marketing",
        "issuer": "HubSpot Academy",
        "title": "HubSpot Sales Hub Enterprise Certification",
        "year": "2026",
        "credentialUrl": "/certifications/Certified_HubSpot%20Sales%20Hub%20Certified.png",
        "issuerLogo": "/logos/hubspot.png"
    },
    {
        "id": "cert-cisa-landscape",
        "group": "Cloud, network and security",
        "issuer": "US CISA",
        "title": "ICS Cybersecurity Landscape for Managers (FRE2115)",
        "year": "2026",
        "credentialUrl": "/certifications/Cybersecurity_Landscape%20for%20Managers%20-%20US%20CISA.pdf",
        "issuerLogo": "/logos/cisa.png"
    },
    {
        "id": "cert-open-university",
        "group": "Business and project",
        "issuer": "The Open University",
        "title": "Internet of Everything",
        "year": "2026",
        "credentialUrl": "/certifications/IOE_1_statement.pdf",
        "issuerLogo": "/logos/open-university.png"
    },
    {
        "id": "cert-isoc-security",
        "group": "Cloud, network and security",
        "issuer": "Internet Society",
        "title": "Internet Security",
        "year": "2026",
        "credentialUrl": "https://www.credential.net/157ef85c-7dab-4e21-afca-a254cd94d143#acc.vrIhDau5",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-isoc-membership",
        "group": "Cloud, network and security",
        "issuer": "Internet Society",
        "title": "Internet Society Official Professional Membership",
        "year": "2026",
        "credentialUrl": "/certifications/Internet%20Society%20Membership%20Recognition.png",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-isoc-netops",
        "group": "Cloud, network and security",
        "issuer": "Internet Society",
        "title": "Introduction to Network Operations",
        "year": "2026",
        "credentialUrl": "https://www.credential.net/b78c11c4-7158-4acf-981b-6609dc3cab83#acc.3MlZcCRy",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-mastering-project-management-with-asana",
        "group": "Business and project",
        "issuer": "Asana Academy",
        "title": "Mastering Project Management with Asana",
        "year": "2026",
        "credentialUrl": "/certifications/Mastering%20Project%20Management%20with%20Asana.pdf",
        "issuerLogo": "/logos/asana.png"
    },
    {
        "id": "cert-isoc-privacy-cert",
        "group": "Cloud, network and security",
        "issuer": "Internet Society",
        "title": "Privacy Frameworks & Governance",
        "year": "2026",
        "credentialUrl": "https://www.credential.net/707a9836-8a5f-4090-939f-589df5adc276#acc.tGWNJD0Y",
        "issuerLogo": "/logos/isoc.png"
    },
    {
        "id": "cert-hpi-profitable-ai",
        "group": "Business and project",
        "issuer": "Hasso Plattner Institute (openHPI)",
        "title": "Profitable AI: Business Value Creation with AI Systems",
        "year": "2026",
        "credentialUrl": "/certifications/ProfitableAI_Hasso_Plattner_Institute.pdf",
        "issuerLogo": "/logos/hpi.png"
    },
    {
        "id": "cert-adbi-ecommerce",
        "group": "Sales and marketing",
        "issuer": "Asian Development Bank Institute (ADBI)",
        "title": "Rights & Obligations in Digital E-Commerce Frameworks",
        "year": "2026",
        "credentialUrl": "/certifications/Zain-Abid%E2%80%93Rights-and-Obligations-in-E-commerce%E2%80%93Rights-and-Obligations-in-E-commerce%E2%80%93ADBI-E-Learning.pdf",
        "issuerLogo": "/logos/adbi.png"
    },
    {
        "id": "cert-scrum-fundamentals",
        "group": "Business and project",
        "issuer": "SCRUMstudy",
        "title": "Scrum Fundamentals Certified (SFC™)",
        "year": "2026",
        "credentialUrl": "/certifications/Scrum_Fundamentals_Certified-ZainAbid-1173277.pdf",
        "issuerLogo": "/logos/scrumstudy.png"
    },
    {
        "id": "cert-fortinet-fundamentals",
        "group": "Cloud, network and security",
        "issuer": "Fortinet",
        "title": "Certified Fundamentals in Cybersecurity",
        "year": "2025",
        "credentialUrl": "/certifications/Fortinet%20Certified%20Fundamentals%20in%20Cybersecurity.pdf",
        "issuerLogo": "/logos/fortinet.png"
    },
    {
        "id": "cert-fortinet-getting-started",
        "group": "Cloud, network and security",
        "issuer": "Fortinet",
        "title": "Getting Started with Cybersecurity 3.0",
        "year": "2025",
        "credentialUrl": "/certifications/Fortinet_Getting%20Started%20with%20Cybersecurity%203.0.pdf",
        "issuerLogo": "/logos/fortinet.png"
    },
    {
        "id": "cert-fortinet-threat",
        "group": "Cloud, network and security",
        "issuer": "Fortinet",
        "title": "Introduction to Threat Landscape 3.0",
        "year": "2025",
        "credentialUrl": "/certifications/Fortinet_Introduction%20to%20Threat%20Landscape%203.0.pdf",
        "issuerLogo": "/logos/fortinet.png"
    },
    {
        "id": "cert-mind-labs-content",
        "group": "Sales and marketing",
        "issuer": "Mind Labs",
        "title": "Advanced Technical & Commercial Content Strategy",
        "year": "2023",
        "credentialUrl": "/certifications/certificate-on-content-writing-mind-labs.png",
        "issuerLogo": "/logos/mindlabs.png"
    },
    {
        "id": "cert-ccna",
        "group": "Cloud, network and security",
        "issuer": "Cisco Systems",
        "title": "Certified Network Associate (CCNA Routing & Switching)",
        "year": "2023",
        "credentialUrl": "/certifications/CCNA_Certificate.jpg",
        "issuerLogo": "/logos/cisco.png"
    },
    {
        "id": "cert-scrum-scale",
        "group": "Business and project",
        "issuer": "Scrum@Scale",
        "title": "Certified Scrum@Scale Practitioner",
        "year": "2023",
        "credentialUrl": "/certifications/Certified%20Scrum%20Scale%20Practitioner%20by%20Scrum%40Scale.pdf",
        "issuerLogo": "/logos/scrum-at-scale.png"
    },
    {
        "id": "cert-scrum-master",
        "group": "Business and project",
        "issuer": "Scrum Alliance",
        "title": "Certified ScrumMaster® (CSM)",
        "year": "2023",
        "credentialUrl": "/certifications/Certified%20ScrumMaster_SCRUM%20ALLIANCE.pdf",
        "issuerLogo": "/logos/scrum-alliance.png"
    },
    {
        "id": "cert-ibm-cloud",
        "group": "Cloud, network and security",
        "issuer": "IBM",
        "title": "Cloud Core Certified",
        "year": "2023",
        "credentialUrl": "/certifications/IBM_Cloud_Core_Certified.pdf",
        "issuerLogo": "/logos/ibm.png"
    },
    {
        "id": "cert-15-secrets-successful-people-know-about-time-management",
        "group": "Business and project",
        "issuer": "LinkedIn Learning",
        "title": "15 Secrets Successful People Know about Time Management",
        "year": "2021",
        "credentialUrl": "/certifications/15%20Secrets%20Successful%20People%20Know%20about%20Time%20Management%20getAbstract%20Summary.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-agile-development-practices",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Agile Development Practices",
        "year": "2021",
        "credentialUrl": "/certifications/Agile%20Development%20Practices%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-become-a-project-management-entrepreneur",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Become a Project Management Entrepreneur",
        "year": "2021",
        "credentialUrl": "/certifications/Become%20a%20Project%20Management%20Entrepreneur%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-becoming-head-of-sales-developing-your-playbook",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Becoming Head of Sales Developing Your Playbook",
        "year": "2021",
        "credentialUrl": "/certifications/Becoming%20Head%20of%20Sales%20Developing%20Your%20Playbook.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-building-a-product-roadmap",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Building a Product Roadmap",
        "year": "2021",
        "credentialUrl": "/certifications/Building%20a%20Product%20Roadmap%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-business-analysis-for-project-managers",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Business Analysis for Project Managers",
        "year": "2021",
        "credentialUrl": "/certifications/Business%20Analysis%20for%20Project%20Managers%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-business-analysis-foundations",
        "group": "Business and project",
        "issuer": "International Institute of Business Analysis (IIBA)",
        "title": "Business Analysis Foundations",
        "year": "2021",
        "credentialUrl": "/certifications/Business%20Analysis%20Foundations%20(IIBA).pdf",
        "issuerLogo": "/logos/iiba.png"
    },
    {
        "id": "cert-business-analyst-and-project-manager-collaboration",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Business Analyst and Project Manager Collaboration",
        "year": "2021",
        "credentialUrl": "/certifications/Business%20Analyst%20and%20Project%20Manager%20Collaboration%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-business-analyst-and-project-manager-collaboration",
        "group": "Business and project",
        "issuer": "International Institute of Business Analysis (IIBA)",
        "title": "Business Analyst and Project Manager Collaboration",
        "year": "2021",
        "credentialUrl": "/certifications/Business%20Analyst%20and%20Project%20Manager%20Collaboration(IIBA).pdf",
        "issuerLogo": "/logos/iiba.png"
    },
    {
        "id": "cert-cbap-iiba",
        "group": "Business and project",
        "issuer": "International Institute of Business Analysis (IIBA)",
        "title": "Certified Business Analysis Professional (CBAP)",
        "year": "2021",
        "credentialUrl": "/certifications/Studying%20for%20the%20Certified%20Business%20Analysis%20Professional%20CBAP%20(IIBA).pdf",
        "issuerLogo": "/logos/iiba.png"
    },
    {
        "id": "cert-cbap-pmi",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Certified Business Analysis Professional (CBAP)",
        "year": "2021",
        "credentialUrl": "/certifications/Studying%20for%20the%20Certified%20Business%20Analysis%20Professional%20CBAP%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-cpanel-cpsp",
        "group": "Sales and marketing",
        "issuer": "cPanel",
        "title": "cPanel & WHM Sales Professional (CPSP)",
        "year": "2021",
        "credentialUrl": "/certifications/cPanel-%26-WHM-Sales-Professional-CPSP-zainmabid.pdf",
        "issuerLogo": "/logos/cpanel.png"
    },
    {
        "id": "cert-cpanel-cpp",
        "group": "Cloud, network and security",
        "issuer": "cPanel",
        "title": "cPanel Professional Certification (CPP)",
        "year": "2021",
        "credentialUrl": "/certifications/cPanel-Professional-Certification-CPP-zainmabid.pdf",
        "issuerLogo": "/logos/cpanel.png"
    },
    {
        "id": "cert-digital-marketing-foundations",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Digital Marketing Foundations",
        "year": "2021",
        "credentialUrl": "/certifications/Digital%20Marketing%20Foundations.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-empathy-for-sales-professionals",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Empathy for Sales Professionals",
        "year": "2021",
        "credentialUrl": "/certifications/Empathy%20for%20Sales%20Professionals.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-how-to-win-at-the-sport-of-business",
        "group": "Business and project",
        "issuer": "LinkedIn Learning",
        "title": "How to Win at the Sport of Business",
        "year": "2021",
        "credentialUrl": "/certifications/How%20to%20Win%20at%20the%20Sport%20of%20Business%20Blinkist%20Summary.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-key-account-management",
        "group": "Sales and marketing",
        "issuer": "NASBA",
        "title": "Key Account Management",
        "year": "2021",
        "credentialUrl": "/certifications/kEY%20aCCOUNT%20mANAGEMENT%20(NASBA).pdf",
        "issuerLogo": "/logos/nasba.png"
    },
    {
        "id": "cert-cpanel-litespeed",
        "group": "Cloud, network and security",
        "issuer": "cPanel & LiteSpeed Technologies",
        "title": "LiteSpeed Web Server Technical Deployment Certification",
        "year": "2021",
        "credentialUrl": "/certifications/cPanel%20LiteSpeed-Certification-zainmabid.pdf",
        "issuerLogo": "/logos/cpanel.png"
    },
    {
        "id": "cert-managing-your-sales-process",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Managing Your Sales Process",
        "year": "2021",
        "credentialUrl": "/certifications/Managing%20Your%20Sales%20Process.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-microsoft-contract-requirements-and-compliance",
        "group": "Business and project",
        "issuer": "Microsoft",
        "title": "Microsoft Contract Requirements and Compliance",
        "year": "2021",
        "credentialUrl": "/certifications/Microsoft%20Contract%20Requirements%20and%20Compliance%20(18552).pdf",
        "issuerLogo": "/logos/microsoft.png"
    },
    {
        "id": "cert-microsoft-s-ethics-and-integrity-training",
        "group": "Business and project",
        "issuer": "Microsoft",
        "title": "Microsoft’s Ethics and Integrity Training",
        "year": "2021",
        "credentialUrl": "/certifications/Microsoft%E2%80%99s%20Ethics%20and%20Integrity%20Training%20(18763).pdf",
        "issuerLogo": "/logos/microsoft.png"
    },
    {
        "id": "cert-project-leadership",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Project Leadership",
        "year": "2021",
        "credentialUrl": "/certifications/Project%20Leadership%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-pmi-membership",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Project Management Institute (PMI) Official Membership",
        "year": "2021",
        "credentialUrl": "/certifications/PMI%20Membership.pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-pmp",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Project Management Professional (PMP)®",
        "year": "2021",
        "credentialUrl": "/certifications/PMP%20Zain%20M.%20Abid.jpeg",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-project-management-simplified",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Project Management Simplified",
        "year": "2021",
        "credentialUrl": "/certifications/Project%20Management%20Simplified%20(PMI)%C2%AE.pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-retail-sales-management",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Retail Sales Management",
        "year": "2021",
        "credentialUrl": "/certifications/Retail%20Sales%20Management.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-sales-management-foundations",
        "group": "Sales and marketing",
        "issuer": "NASBA",
        "title": "Sales Management Foundations",
        "year": "2021",
        "credentialUrl": "/certifications/Sales%20Management%20Foundations%20(NASBA).pdf",
        "issuerLogo": "/logos/nasba.png"
    },
    {
        "id": "cert-sales-management-foundations-2019",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Sales Management Foundations 2019",
        "year": "2021",
        "credentialUrl": "/certifications/Sales%20Management%20Foundations%202019.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-selling-with-empathy-during-uncertain-times",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Selling with Empathy during Uncertain Times",
        "year": "2021",
        "credentialUrl": "/certifications/Selling%20with%20Empathy%20during%20Uncertain%20Times.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-strategic-thinking",
        "group": "Business and project",
        "issuer": "Project Management Institute (PMI)",
        "title": "Strategic Thinking",
        "year": "2021",
        "credentialUrl": "/certifications/Strategic%20Thinking%20(PMI).pdf",
        "issuerLogo": "/logos/pmi.png"
    },
    {
        "id": "cert-the-undercover-economist-the-economics-behind-everyday-decisions",
        "group": "Business and project",
        "issuer": "LinkedIn Learning",
        "title": "The Undercover Economist The Economics behind Everyday Decisions",
        "year": "2021",
        "credentialUrl": "/certifications/The%20Undercover%20Economist%20The%20Economics%20behind%20Everyday%20Decisions%20Blinkist%20Summary.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-virtual-selling-for-sales-professionals",
        "group": "Sales and marketing",
        "issuer": "LinkedIn Learning",
        "title": "Virtual Selling for Sales Professionals",
        "year": "2021",
        "credentialUrl": "/certifications/Virtual%20Selling%20for%20Sales%20Professionals.pdf",
        "issuerLogo": "/logos/linkedin-learning.png"
    },
    {
        "id": "cert-dmm",
        "group": "Sales and marketing",
        "issuer": "PITAC",
        "title": "Certified Social Media Marketing Expert",
        "year": "2018",
        "credentialUrl": "/certifications/DMM_Certificate.jpg",
        "issuerLogo": "/logos/pitac.png"
    },
    {
        "id": "cert-3d-max",
        "group": "Business and project",
        "issuer": "NTB - ISB",
        "title": "3D Studio Max Architectural Visualization & Modeling",
        "year": "2011",
        "credentialUrl": "/certifications/3D%20Max_Certificate.jpg"
    }
  ],

  googleProfileUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3',
  googleDevProfileUrl: 'https://me.developers.google.com/u/zainmabid',
  credlyProfileUrl: 'https://www.credly.com/users/zain-abid.e89d7497/badges',
  isocProfileUrl: 'https://www.credential.net/profile/zainabid193990/wallet',

  badges: [
        {
                "id": "credly-pmi-agile",
                "title": "Fundamentals of Agile Project Management",
                "issuer": "Project Management Institute (PMI)",
                "group": "Credly (PMI & IBM)",
                "date": "Oct 10, 2023",
                "badgeUrl": "https://www.credly.com/badges/8e4cddd0-444a-4591-8d8d-83d76ed8db8e",
                "image": "/badges/credly/pmi-agile-kickoff.png",
                "category": "Agile Frameworks & Scrum",
                "verificationType": "Credly / PMI Verified",
                "description": "Earners of Kickoff’s Fundamentals of Agile Project Management badge have demonstrated essential agile processes: establishing vision, high-performing teams, scrum boards, backlog grooming, sprint planning, daily standups, sprint reviews, and retrospectives."
        },
        {
                "id": "credly-pmi-predictive",
                "title": "Fundamentals of Predictive Project Management",
                "issuer": "Project Management Institute (PMI)",
                "group": "Credly (PMI & IBM)",
                "date": "Oct 10, 2023",
                "badgeUrl": "https://www.credly.com/badges/0ad612f0-4cac-46ab-93cd-977ffa0ba240",
                "image": "/badges/credly/pmi-predictive-kickoff.png",
                "category": "Predictive Project Governance",
                "verificationType": "Credly / PMI Verified",
                "description": "Earners of Kickoff’s Fundamentals of Predictive Project Management badge have demonstrated core predictive methodologies: building project charters, stakeholder management, requirement matrices, work breakdown schedules, risk mitigation, and formal project close-outs."
        },
        {
                "id": "credly-ibm-cloud",
                "title": "Cloud Essentials",
                "issuer": "IBM",
                "group": "Credly (PMI & IBM)",
                "date": "Oct 06, 2023",
                "badgeUrl": "https://www.credly.com/badges/245974d3-32f8-44ed-9a9c-807def3e3ca3",
                "image": "/badges/credly/ibm-cloud-essentials.png",
                "category": "Cloud Infrastructure & DevOps",
                "verificationType": "Credly / IBM Verified",
                "description": "Demonstrated understanding of foundational cloud technology, virtualization, containerization, VMs, microservices, serverless, hybrid multicloud deployment models, and hands-on resource provisioning on IBM Cloud."
        },
    {
      id: 'gdp-joined',
      title: 'Joined the Google Developer Program',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 17, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/joined-google-developer-program.svg',
      category: 'Google Developer Ecosystem',
      verificationType: 'Google Developer Verified',
      description: 'Officially registered in the Google Developer Program, establishing verified developer identity and access to Google engineering APIs, developer tools, and early-access platform previews.'
    },
    {
      id: 'gdp-premium-tier',
      title: 'Google Developer Program Premium Tier',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 17, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/google-developer-premium-tier.svg',
      category: 'Cloud Innovators & Enterprise',
      verificationType: 'Google Developer Verified',
      description: 'Awarded Google Developer Program Premium Tier (Google Cloud Innovators Plus), providing enterprise-level developer benefits, dedicated Google Cloud labs, and architecture consultations.'
    },
    {
      id: 'gdp-gemini-agent-ready',
      title: 'Gemini Agent Ready',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 17, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/gemini-agent-ready.svg',
      category: 'Agentic AI & LLM Systems',
      verificationType: 'Google Developer Verified',
      description: 'Verified readiness for designing and implementing autonomous AI agents, tool invocation loops, and multimodal reasoning workflows powered by the Gemini model family.'
    },
    {
      id: 'gdp-ai-studio-nodejs',
      title: 'Getting Started with Google AI Studio, Gemini AI & Node.js',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 18, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/ai-studio-gemini-nodejs.svg',
      category: 'Multimodal AI & Full-Stack SDK',
      verificationType: 'Google Developer Verified',
      description: 'Demonstrated mastery in integrating Google AI Studio and Gemini models with Node.js applications, building structured prompt pipelines, streaming responses, and API integrations.'
    },
    {
      id: 'gdp-antigravity-started',
      title: 'Started the Antigravity Arcade Solution',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 18, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/antigravity-arcade-started.svg',
      category: 'Cloud Architecture & Prototyping',
      verificationType: 'Google Developer Verified',
      description: 'Initiated end-to-end architecture exploration for the Google Antigravity Arcade solution, evaluating distributed system topologies and real-time interactive game mechanics.'
    },
    {
      id: 'gdp-antigravity-explored',
      title: 'Explored the Antigravity Arcade Solution',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 18, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/antigravity-arcade-explored.svg',
      category: 'Interactive Cloud Engineering',
      verificationType: 'Google Developer Verified',
      description: 'Analyzed core solution engineering, asset pipelines, and state synchronization within the Google Antigravity Arcade reference application.'
    },
    {
      id: 'gdp-antigravity-launched',
      title: 'Launched the Code for the Antigravity Arcade Solution',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 18, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/antigravity-arcade-launched.svg',
      category: 'Production Code & Deployment',
      verificationType: 'Google Developer Verified',
      description: 'Executed live code deployment for the Google Antigravity Arcade solution, completing the full build, testing, and production deployment cycle.'
    },
    {
      id: 'gdp-learning-pathway-quiz',
      title: 'First Learning Pathway & Quiz Badge',
      issuer: 'Google Developer Program',
      group: 'Google Cloud & Gemini',
      date: 'Nov 18, 2026',
      badgeUrl: 'https://me.developers.google.com/u/zainmabid',
      image: '/badges/google/first-learning-pathway.svg',
      category: 'Google Developer Pathways',
      verificationType: 'Google Developer Verified',
      description: 'Successfully completed structured learning pathways and demonstrated comprehensive proficiency across Google Developer assessments and quizzes.'
    },
    {
        "id": "google-digital-transformation",
        "title": "Digital Transformation with Google Cloud",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Earned Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29708971",
        "image": "/badges/google/google-cloud-digital-transformation.png",
        "category": "Cloud Strategy & Digital Transformation",
        "verificationType": "Google Cloud Verified",
        "description": "Digital transformation is a critical journey for modern organizations. This course introduces core technologies, global network infrastructure, strategic frameworks, and the shared responsibility model as part of the Google Cloud Digital Leader track."
    },
    {
        "id": "google-gemini-draft-nda",
        "title": "Draft NDA Documents with Gemini",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706992",
        "image": "/badges/google/gemini-draft-nda.png",
        "category": "Legal AI & Documentation",
        "verificationType": "Google Cloud Verified",
        "description": "Leverage Gemini to draft standard Non-Disclosure Agreements aligned with corporate guidelines. Generate and format contracts conforming to baseline playbooks while drastically shortening legal review cycles."
    },
    {
        "id": "google-gemini-redact-legal",
        "title": "Use Gemini to Redact Legal Documents",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706984",
        "image": "/badges/google/gemini-redact-legal.png",
        "category": "Data Privacy & Litigation",
        "verificationType": "Google Cloud Verified",
        "description": "Automate and streamline high-stakes litigation workflows. Utilize structured prompts and connectors to reliably detect Personally Identifiable Information (PII), generate sanitized court-ready PDFs, and compile automated privilege logs."
    },
    {
        "id": "google-gemini-contract-review",
        "title": "Contract Review and Playbook Creation with Gemini",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706965",
        "image": "/badges/google/gemini-contract-review.png",
        "category": "Contracts & Playbook Analysis",
        "verificationType": "Google Cloud Verified",
        "description": "Establish standardized contracting rules and rapidly benchmark incoming counterparty agreements against corporate negotiation playbooks to minimize liability and accelerate deal closings."
    },
    {
        "id": "google-gemini-legal-dsar",
        "title": "Use Gemini for Legal Data and DSAR Responses",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706910",
        "image": "/badges/google/gemini-legal-dsar.png",
        "category": "Compliance & DSAR Requests",
        "verificationType": "Google Cloud Verified",
        "description": "Leverage Gemini to audit unstructured legal data repositories and formulate compliant Data Subject Access Request (DSAR) responses that strictly fulfill global privacy and governance standards."
    },
    {
        "id": "google-gemini-regulatory-scanning",
        "title": "Use Gemini for Legal Regulatory Horizon Scanning",
        "issuer": "Google Cloud & Google Skills",
        "group": "Google Cloud & Gemini",
        "date": "Nov 17, 2026",
        "badgeUrl": "https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706897",
        "image": "/badges/google/gemini-regulatory-scanning.png",
        "category": "Regulatory Horizon Scanning",
        "verificationType": "Google Cloud Verified",
        "description": "Implement proactive compliance tracking and horizon scanning using Gemini to systematically monitor legislative updates, evaluate statutory revisions, and maintain audit readiness."
    },
    {
        "id": "badge-fortinet-cybersecurity",
        "title": "Fortinet Certified Fundamentals in Cybersecurity",
        "issuer": "Fortinet Training Institute",
        "group": "Cloud, Security & Agile",
        "date": "2025",
        "badgeUrl": "/certifications/Fortinet Certified Fundamentals in Cybersecurity.pdf",
        "image": "/certifications/badges/fortinet-certified-fundamentals.png",
        "category": "Cybersecurity Fundamentals",
        "verificationType": "Fortinet Certified",
        "description": "Core cybersecurity fundamentals, enterprise network defense, attack surface reduction, and threat intelligence landscape."
    },
    {
        "id": "badge-ibm-cloud-essentials",
        "title": "IBM Cloud Core Certified",
        "issuer": "IBM",
        "group": "Cloud, Security & Agile",
        "date": "2023",
        "badgeUrl": "/certifications/IBM_Cloud_Core_Certified.pdf",
        "image": "/certifications/badges/ibm-cloud-core.png",
        "category": "Cloud Infrastructure",
        "verificationType": "IBM Certified",
        "description": "Foundational cloud architecture, virtualization, hybrid cloud models, microservices, and enterprise cloud operations."
    },
    {
        "id": "badge-scrum-at-scale",
        "title": "Certified Scrum@Scale Practitioner",
        "issuer": "Scrum@Scale",
        "group": "Cloud, Security & Agile",
        "date": "2023",
        "badgeUrl": "https://zain.zaintegrated.com/certifications/Certified%20Scrum%20Scale%20Practitioner%20by%20Scrum%40Scale.pdf",
        "image": "/certifications/badges/certified-scrum-scale-practitioner.png",
        "category": "Enterprise Agile & Scaling",
        "verificationType": "Scrum@Scale Certified",
        "description": "Certified Scrum@Scale Practitioner credential demonstrating mastery in scaling agile across multiple teams, Scrum of Scrums (SoS), Executive Action Team (EAT), and organizational agility frameworks."
    },
    {
        "id": "badge-scrum-master-csm",
        "title": "Certified ScrumMaster® (CSM)",
        "issuer": "Scrum Alliance",
        "group": "Cloud, Security & Agile",
        "date": "2023",
        "badgeUrl": "/certifications/Certified%20ScrumMaster_SCRUM%20ALLIANCE.pdf",
        "image": "/certifications/badges/certified-scrummaster-csm.png",
        "category": "Agile & Scrum Delivery",
        "verificationType": "Scrum Alliance Certified",
        "description": "Certified ScrumMaster® credential issued by Scrum Alliance. Advanced agile project management, sprint planning, cross-functional leadership, and empirical process control."
    },
    {
        "id": "badge-scrum-master-smc",
        "title": "Scrum Master Certified (SMC)",
        "issuer": "SCRUMstudy",
        "group": "Cloud, Security & Agile",
        "date": "2023",
        "badgeUrl": "/certifications/Scrum_Fundamentals_Certified-ZainAbid-1173277.pdf",
        "image": "/certifications/badges/scrum-master-certified-smc.png",
        "category": "Agile & Scrum Delivery",
        "verificationType": "SCRUMstudy Certified",
        "description": "Agile methodologies, sprint ceremonies, backlog grooming, cross-functional servant leadership, and iterative product delivery."
    },
    {
        "id": "badge-pmi-atp",
        "title": "PMI Authorized Training Partner Program",
        "issuer": "Project Management Institute (PMI)",
        "group": "Cloud, Security & Agile",
        "date": "2021",
        "badgeUrl": "/certifications/Agile Development Practices (PMI).pdf",
        "image": "/certifications/badges/pmi-authorized-training-partner.jpg",
        "category": "Project Management Frameworks",
        "verificationType": "PMI Accredited",
        "description": "Accredited PMI framework covering predictive, agile, and hybrid delivery lifecycles for complex enterprise programs."
    },
    {
        "id": "isoc-chapter-specialist",
        "title": "Chapter Specialist",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/f044b399-6d2b-40e1-9a3e-4a0e6b0e59e0",
        "image": "/badges/accredible/chapter-specialist.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module will explore the main aspects of a chapter charter and the importance of the charter letter. Learners will have the chance to understand the key differences and responsibilities of Internet Society chapter leaders, while adhering to the requirements of the organization to maintain a chapter in good standing."
    },
    {
        "id": "isoc-commercial-context-of-digital-footprint",
        "title": "Commercial Context of Digital Footprint",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/da9c2327-7d27-4c1e-a348-2fa3857ac0e4",
        "image": "/badges/accredible/commercial-context-of-digital-footprint.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "The commercial context of digital footprints: advertisers, publishers, and aggregators"
    },
    {
        "id": "isoc-data-protection-laws",
        "title": "Data Protection Laws",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/41e4ce57-a999-4446-a10b-2161ca68b0c9",
        "image": "/badges/accredible/data-protection-laws.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "Challenges related to national privacy laws, cultural norms,  and cross-border data protection"
    },
    {
        "id": "isoc-digital-footprints-and-different-devices",
        "title": "Digital Footprints and Different Devices",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/2fe23149-907e-4647-8582-c6e8c5ab9d68",
        "image": "/badges/accredible/digital-footprints-and-different-devices.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "Different footprints from different types of devices. "
    },
    {
        "id": "isoc-dynamics-governing-the-online-world",
        "title": "Dynamics Governing the Online World",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/d5dcf745-3be9-4c0c-9dcb-5999f416e03d",
        "image": "/badges/accredible/dynamics-governing-the-online-world.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "Different dynamics that govern the online world"
    },
    {
        "id": "isoc-economic-value-of-digital-footprints",
        "title": "Economic Value of Digital Footprints",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/4c02d61d-d463-4279-bb7f-9ac3f946ace9",
        "image": "/badges/accredible/economic-value-of-digital-footprints.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "In this module you will learn about the Digital footprints' economic value"
    },
    {
        "id": "isoc-grant-application",
        "title": "Grant Application",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/087bc4ba-fe4b-477d-bad2-ad1653e81452",
        "image": "/badges/accredible/grant-application.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module will guide you through the process of  thinking and planning for the sustainability of your project, and writing your project narrative.  "
    },
    {
        "id": "isoc-how-to-manage-and-control-our-digital-footprints",
        "title": "How to manage and control our digital footprints",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/92c8a32b-5e66-4d98-9760-c89aed9b4baa",
        "image": "/badges/accredible/how-to-manage-and-control-our-digital-footprints.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module provides the learner with hands-on practice using the package management tool of FreeBSD. It guides the learner on how to install software on FreeBSD. The learner will follow step-by-step guides in interactive walkthroughs and demos to install the following software: Perl, Python, and VIM."
    },
    {
        "id": "isoc-importance-of-digital-footprints",
        "title": "Importance of Digital Footprints",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/5df622b1-e612-4b0e-8c17-ccbf0db61893",
        "image": "/badges/accredible/importance-of-digital-footprints.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "The module explains the importance of explicit and implicit digital footprints   "
    },
    {
        "id": "isoc-individual-privacy-rights-it-s-complicated",
        "title": "Individual Privacy Rights: It’s Complicated",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/de70cd68-fd81-481e-a461-c7e4bd254dbf",
        "image": "/badges/accredible/individual-privacy-rights-it-s-complicated.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "Having looked at the national and international dimension in the previous module, this module considers the perspective of the individual, their rights, and the role of informed consent. "
    },
    {
        "id": "isoc-introductions-to-online-privacy",
        "title": "Introductions to Online Privacy",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/8bf88359-d3e2-49e0-a92e-13a49feb3eae",
        "image": "/badges/accredible/introductions-to-online-privacy.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module introduces the topic of online privacy, relating it to our understanding of real-world privacy and explaining why it is so important in a digital society."
    },
    {
        "id": "isoc-monitoring-evaluation-learning-and-communication",
        "title": "Monitoring, Evaluation, Learning and Communication",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/a89d9153-b35e-47a6-a456-f40a8ac2b2bf",
        "image": "/badges/accredible/monitoring-evaluation-learning-and-communication.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module will guide you through the process of  incorporating monitoring, evaluation, and learning (MEL) principles, as well as communication,  into the implementation of a project. It is likely that you and your team are already conducting a lot of these practices informally, through conversations and interactions among staff and partners that you would consider project implementation. This guidance will support you in formalizing some of these practices into processes to ensure consistency and comprehensiveness of the information you are gathering and communicating around your project."
    },
    {
        "id": "isoc-performance-indicators-and-budgeting",
        "title": "Performance Indicators and Budgeting",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/c7739d0c-3f57-4e0a-bd3b-b69c366d40b6",
        "image": "/badges/accredible/performance-indicators-and-budgeting.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module will guide you through the process of  defining and developing key performance indicators (KPIs) for your project, and creating a budget."
    },
    {
        "id": "isoc-privacy-frameworks",
        "title": "Privacy Frameworks",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/f83cacec-dbad-496c-bf53-8e7601a60cae",
        "image": "/badges/accredible/privacy-frameworks.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module describes the role of privacy and data protection laws in regulating the collection and use of personal data. It also highlights the issues arising from cross-border transfers of data, and gives examples of multi-national approaches to this problem."
    },
    {
        "id": "isoc-project-design",
        "title": "Project Design",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/aeeb7705-4007-465e-8f93-c1b7d346d9e6",
        "image": "/badges/accredible/project-design.png",
        "category": "Project Leadership & Grants",
        "verificationType": "W3C Verifiable Credential",
        "description": "This module will guide you through the process of developing a problem statement, establishing a theory of change, and setting goals and activities for your project. "
    },
    {
        "id": "isoc-protecting-online-privacy-through-ethical-data-collection",
        "title": "Protecting Online Privacy Through Ethical Data Collection",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/7a0f401e-169a-4648-ac12-fe59399828d8",
        "image": "/badges/accredible/protecting-online-privacy-through-ethical-data-collection.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "By now it will be clear that online privacy is subject to regulatory and commercial pressures, with multiple stakeholders whose priorities and motivations may conflict. This module examines the importance of the ethical dimension in collecting and processing personal data."
    },
    {
        "id": "isoc-the-effects-of-the-loss-of-privacy",
        "title": "The Effects of the Loss of Privacy",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/bcf14846-88b7-4a02-983b-6fd8ec5dff1c",
        "image": "/badges/accredible/the-effects-of-the-loss-of-privacy.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "The loss of privacy and anonymity's effects"
    },
    {
        "id": "isoc-what-is-a-digital-footprint",
        "title": "What is a Digital Footprint?",
        "issuer": "Internet Society",
        "group": "Internet Society (ISOC)",
        "date": "Oct 31, 2026",
        "badgeUrl": "https://www.credential.net/bff4f16a-6d82-4adc-8ade-ba8ed5094729",
        "image": "/badges/accredible/what-is-a-digital-footprint.png",
        "category": "Digital Privacy & Governance",
        "verificationType": "W3C Verifiable Credential",
        "description": "In a digital society, everything we do online (and even, increasingly, offline), leaves digital traces. These traces accumulate into a “digital footprint” that we never see, and which we do not control. This module will help you understand what your digital footprint is, and its implications for you."
    }
],

  googleBadges: [
    {
      id: 'google-digital-transformation',
      title: 'Digital Transformation with Google Cloud',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29708971',
      image: '/badges/google/google-cloud-digital-transformation.png',
      category: 'Cloud Strategy & Digital Transformation',
      description:
        'Digital transformation is a critical journey for modern organizations. This course introduces core technologies, global network infrastructure, strategic frameworks, and the shared responsibility model as part of the Google Cloud Digital Leader track.'
    },
    {
      id: 'google-gemini-draft-nda',
      title: 'Draft NDA Documents with Gemini',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706992',
      image: '/badges/google/gemini-draft-nda.png',
      category: 'Legal AI & Documentation',
      description:
        'Leverage Gemini to draft standard Non-Disclosure Agreements aligned with corporate guidelines. Learn how to generate and format contracts conforming to baseline playbooks while drastically shortening legal review cycles.'
    },
    {
      id: 'google-gemini-redact-legal',
      title: 'Use Gemini to Redact Legal Documents',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706984',
      image: '/badges/google/gemini-redact-legal.png',
      category: 'Data Privacy & Litigation',
      description:
        'Automate and streamline high-stakes litigation workflows. Utilize structured prompts and connectors to reliably detect Personally Identifiable Information (PII), generate sanitized court-ready PDFs, and compile automated privilege logs.'
    },
    {
      id: 'google-gemini-contract-review',
      title: 'Contract Review and Playbook Creation with Gemini',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706965',
      image: '/badges/google/gemini-contract-review.png',
      category: 'Contracts & Playbook Analysis',
      description:
        'Establish standardized contracting rules and rapidly benchmark incoming counterparty agreements against corporate negotiation playbooks to minimize liability and accelerate deal closings.'
    },
    {
      id: 'google-gemini-legal-dsar',
      title: 'Use Gemini for Legal Data and DSAR Responses',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706910',
      image: '/badges/google/gemini-legal-dsar.png',
      category: 'Compliance & DSAR Requests',
      description:
        'Leverage Gemini to audit unstructured legal data repositories and formulate compliant Data Subject Access Request (DSAR) responses that strictly fulfill global privacy and governance standards.'
    },
    {
      id: 'google-gemini-regulatory-scanning',
      title: 'Use Gemini for Legal Regulatory Horizon Scanning',
      issuer: 'Google Cloud & Google Skills',
      date: 'Earned Nov 17, 2026',
      badgeUrl: 'https://www.skills.google/public_profiles/14bbe981-af34-4dd0-b317-30eaf266f8e3/badges/29706897',
      image: '/badges/google/gemini-regulatory-scanning.png',
      category: 'Regulatory Horizon Scanning',
      description:
        'Implement proactive compliance tracking and horizon scanning using Gemini to systematically monitor legislative updates, evaluate statutory revisions, and maintain audit readiness.'
    }
  ],

  education: [
    {
      id: 'bs-cs',
      degree: 'BS, Computer Science',
      institution: 'PMAS University Institute of Information Technology',
      location: 'Rawalpindi, Pakistan',
      badgeTag: 'Engineering Foundation',
      timeline: 'Graduated: 2015',
      badgeStyle: 'foundation',
      coreValue:
        'Specialized in Systems Architecture, Relational Databases, and Network Topologies—forming the technical engineering foundation for complex Auto-ID & Middleware deployments.'
    },
    {
      id: 'ms-pm',
      degree: 'MS, Project Management',
      institution: 'COMSATS University Islamabad',
      location: 'Islamabad, Pakistan',
      badgeTag: 'Enterprise Governance',
      timeline: 'Coursework Completed',
      badgeStyle: 'governance',
      coreValue:
        'Focused on Advanced Procurement Governance, Risk Mitigation, and Agile Methodologies—enabling precise execution of high-stakes public sector (PPRA) and international (UN) compliance bids.'
    }
  ]
};
