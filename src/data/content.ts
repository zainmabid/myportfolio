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

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  tags: ProjectTag[];
  description: string;
  outcomes: string[];
  fullCaseStudy?: {
    challenge: string;
    solution: string;
    hardwareDeployed?: string[];
  };
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Package' | 'GraduationCap' | 'Paintbrush' | 'Factory' | 'Warehouse' | 'Landmark' | 'Building2';
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
  dates: string;
  status?: string;
}

export interface PortfolioData {
  person: PersonInfo;
  brands: Brand[];
  projects: Project[];
  industries: IndustryItem[];
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  certifications: CertificationItem[];
  education: EducationItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  person: {
    name: 'Zain Mashhood Abid',
    headline: 'RFID, Auto-ID and Enterprise Automation Consultant | Founder & Managing Director, Zaintegrated Solutions',
    location: 'Lahore, Pakistan',
    relocationStatus: 'Open to relocation',
    email: 'zainmabid@gmail.com',
    phone: '+92 320 527 0594',
    linkedin: 'https://www.linkedin.com/in/zainmabid/',
    yearsExperience: 10,
    avatar: '/zain-portrait.jpg',
    about:
      'Founder & Managing Director at Zaintegrated Solutions with 10+ years in enterprise IT, RFID, barcode and warehouse automation, ERP consulting, and solution architecture. Trusted consultant across multiple leading national and international companies — analyzing operational workflows, engineering end-to-end physical asset traceability, and synchronizing shop-floor automation with enterprise systems.'
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

  projects: [
    {
      id: 'rfid-unilever',
      title: 'RFID Asset Management System',
      client: 'Unilever',
      industry: 'Consumer goods (FMCG)',
      tags: ['RFID', 'Asset tracking'],
      description: 'Designed and consulted on an RFID-based asset management system to track and monitor enterprise assets.',
      outcomes: [
        'Formulated enterprise RFID tagging strategy and multi-zone reader deployment plan',
        'Streamlined asset identification, custody transfer and full lifecycle tracking workflows',
        'Coordinated hardware integration protocols, handheld verification and pilot deployment'
      ],
      fullCaseStudy: {
        challenge: 'Tracking distributed fixed and movable enterprise assets across facilities with manual reconciliation created inventory discrepancies and audit delays.',
        solution: 'Engineered an end-to-end passive UHF RFID tagging scheme paired with fixed portal readers and handheld mobile terminals, feeding reconciled asset positions directly into corporate registries.',
        hardwareDeployed: ['Passive UHF on-metal & standard tags', 'Handheld RFID terminals', 'Fixed dock door readers']
      }
    },
    {
      id: 'barcode-beaconhouse',
      title: 'Barcode Asset Management System',
      client: 'Beaconhouse',
      industry: 'Education',
      tags: ['Barcode', 'Asset tracking'],
      description: 'Implemented barcode-based asset tracking for identification and inventory management across campuses.',
      outcomes: [
        'Established standardised labelling and barcode scanning workflows for campus operations teams',
        'Provided comprehensive consultation on industrial thermal printers and rugged mobile computers',
        'Supervised system configuration, user acceptance testing and regional deployment support'
      ],
      fullCaseStudy: {
        challenge: 'Multi-campus educational infrastructure lacked standardised physical identification, making annual asset audits time-consuming and error-prone.',
        solution: 'Rolled out resilient polyester 1D/2D asset tags with batch-printing pipelines and handheld scanner audit scripts, drastically reducing audit cycles.',
        hardwareDeployed: ['Industrial thermal transfer barcode printers', '2D rugged handheld scanners', 'Resilient synthetic label stock']
      }
    },
    {
      id: 'wip-diamond-paints',
      title: 'Work-in-Process (WIP) Automation',
      client: 'Diamond Paints',
      industry: 'Paint manufacturing',
      tags: ['WIP automation', 'Barcode', 'RFID'],
      description: 'Designed and implemented end-to-end WIP automation for paint manufacturing.',
      outcomes: [
        'Conducted detailed process analysis to uncover shop-floor bottlenecks and automation opportunities',
        'Architected barcode/RFID tracking for production stages, raw chemical movement and batch states',
        'Delivered real-time shop-floor visibility of active batches and work orders, boosting traceability and yield'
      ],
      fullCaseStudy: {
        challenge: 'Chemical blending and tinning stages relied on paper travel cards, preventing real-time production visibility and complicating lot traceability.',
        solution: 'Integrated durable barcode and RFID WIP tracking checkpoints at each manufacturing gate, automatically synchronising batch progress with ERP production orders.',
        hardwareDeployed: ['Chemical-resistant thermal labels', 'Stationary barcode scanners', 'Industrial touch HMI panels']
      }
    },
    {
      id: 'hardware-consulting',
      title: 'RFID and Barcode Hardware Consulting',
      client: 'Warehouse and Enterprise Environments',
      industry: 'Warehousing and logistics',
      tags: ['RFID', 'Barcode', 'Warehouse'],
      description: 'Technical evaluation and recommendation of UHF tags, fixed and handheld readers, antennas, barcode printers and industrial scanners, matched to each client’s integration needs.',
      outcomes: [
        'Specced UHF passive RFID tags, reader gain profiles and antenna beam patterns for RF-challenging zones',
        'Matched industrial mobile computers and high-speed thermal printers to harsh warehouse duty cycles',
        'Delivered interoperability validation between Auto-ID edge devices, middleware and host WMS platforms'
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
      category: 'Auto-ID and hardware',
      skills: [
        'UHF passive RFID tags',
        'Fixed RFID readers',
        'Handheld RFID scanners',
        'RFID antennas & beam tuning',
        'Industrial barcode printers',
        'Industrial barcode scanners (1D/2D)',
        'Forklift terminals & mobile printers',
        'On-metal tag engineering'
      ]
    },
    {
      id: 'systems-integration',
      category: 'Systems and integration',
      skills: [
        'RFID middleware integration',
        'WMS (Warehouse Management) integration',
        'Enterprise ERP systems',
        'SQL databases & query design',
        'Linux / Ubuntu administration',
        'Enterprise mobility solutions',
        'REST APIs & webhook feeds',
        'Network topologies (CCNA)'
      ]
    },
    {
      id: 'consulting-delivery',
      category: 'Consulting and delivery',
      skills: [
        'Solution architecture',
        'Process automation & workflow analysis',
        'Proof-of-Concept (POC) design',
        'Technical documentation & SOPs',
        'Client onboarding & training',
        'Vendor-neutral hardware evaluation',
        'Agile project delivery (CSM / PMI)',
        'Change management & adoption'
      ]
    }
  ],

  certifications: [
    /* ==========================================================================
       BUSINESS AND PROJECT MANAGEMENT
       ========================================================================== */
    {
      id: 'cert-pmp',
      group: 'Business and project',
      issuer: 'PMI',
      title: 'PMP® — Project Management Professional',
      year: '2023',
      credentialUrl: '/certifications/PMP%20Zain%20M.%20Abid.jpeg',
      image: '/certifications/badges/pmi-authorized-training-partner.jpg',
      issuerLogo: '/logos/pmi.png'
    },
    {
      id: 'cert-scrum-master',
      group: 'Business and project',
      issuer: 'Scrum Alliance',
      title: 'Certified ScrumMaster® (CSM)',
      year: '2023',
      credentialUrl: '/certifications/Certified%20ScrumMaster_SCRUM%20ALLIANCE.pdf',
      issuerLogo: '/logos/scrum-alliance.png'
    },
    {
      id: 'cert-smc',
      group: 'Business and project',
      issuer: 'SCRUMstudy',
      title: 'Scrum Master Certified (SMC®)',
      year: '2023',
      credentialUrl: '/certifications/Scrum_Fundamentals_Certified-ZainAbid-1173277.pdf',
      image: '/certifications/badges/scrum-master-certified-smc.png',
      issuerLogo: '/logos/scrumstudy.png'
    },
    {
      id: 'cert-scrum-scale',
      group: 'Business and project',
      issuer: 'Scrum@Scale',
      title: 'Certified Scrum Scale Practitioner',
      year: '2023',
      credentialUrl: '/certifications/Certified%20Scrum%20Scale%20Practitioner%20by%20Scrum@Scale.pdf',
      issuerLogo: '/logos/scrum-at-scale.png'
    },
    {
      id: 'cert-cbap',
      group: 'Business and project',
      issuer: 'IIBA',
      title: 'CBAP, Certified Business Analysis Professional',
      year: '2021',
      credentialUrl: '/certifications/Business%20Analysis%20Foundations%20(IIBA).pdf',
      issuerLogo: '/logos/iiba.png'
    },
    {
      id: 'cert-pmi-leadership',
      group: 'Business and project',
      issuer: 'PMI',
      title: 'Project Leadership',
      year: '2021',
      credentialUrl: '/certifications/Project%20Leadership%20(PMI).pdf',
      issuerLogo: '/logos/pmi.png'
    },
    {
      id: 'cert-pmi-agile',
      group: 'Business and project',
      issuer: 'PMI',
      title: 'Fundamentals of Agile and Predictive Project Management',
      year: '2021',
      credentialUrl: '/certifications/Agile%20Development%20Practices%20(PMI).pdf',
      issuerLogo: '/logos/pmi.png'
    },
    {
      id: 'cert-mindlabs',
      group: 'Business and project',
      issuer: 'Mind Labs',
      title: 'Professional Training & Management Consultancy (Content Writing)',
      year: '2023',
      credentialUrl: '/certifications/certificate-on-content-writing-mind-labs.png',
      issuerLogo: '/logos/mindlabs.png'
    },
    {
      id: 'cert-atlassian',
      group: 'Business and project',
      issuer: 'Atlassian',
      title: 'Agile Project Management',
      year: '2022'
    },
    {
      id: 'cert-scrumstudy',
      group: 'Business and project',
      issuer: 'SCRUMstudy',
      title: 'Scrum Fundamentals Certified (SFC™)',
      year: '2023',
      credentialUrl: '/certifications/Scrum_Fundamentals_Certified-ZainAbid-1173277.pdf',
      issuerLogo: '/logos/scrumstudy.png'
    },
    {
      id: 'cert-microsoft-project',
      group: 'Business and project',
      issuer: 'Microsoft',
      title: 'Agile Project Management with Microsoft Project',
      year: '2021',
      credentialUrl: '/certifications/Agile%20Project%20Management%20with%20Microsoft%20Project.pdf',
      issuerLogo: '/logos/microsoft.png'
    },
    {
      id: 'cert-asana',
      group: 'Business and project',
      issuer: 'Asana',
      title: 'Project Management with Asana',
      year: '2021',
      credentialUrl: '/certifications/Mastering%20Project%20Management%20with%20Asana.pdf',
      issuerLogo: '/logos/asana.png'
    },
    {
      id: 'cert-adbi-cyber',
      group: 'Cloud, network and security',
      issuer: 'Asian Development Bank Institute (ADBI)',
      title: 'Cybersecurity Principles & Governance in Asia',
      year: '2026',
      credentialUrl: '/certifications/Zain-Abid%E2%80%93Cybersecurity%E2%80%93Cybersecurity%E2%80%93ADBI-E-Learning.pdf',
      issuerLogo: '/logos/adbi.png'
    },
    {
      id: 'cert-linkedin-selling',
      group: 'Sales and marketing',
      issuer: 'LinkedIn Learning',
      title: 'Virtual Selling & Sales Executive Foundations',
      year: '2021',
      credentialUrl: '/certifications/Virtual%20Selling%20for%20Sales%20Professionals.pdf',
      issuerLogo: '/logos/linkedin-learning.png'
    },

    /* ==========================================================================
       CLOUD, NETWORK AND SECURITY
       ========================================================================== */
    {
      id: 'cert-ccna',
      group: 'Cloud, network and security',
      issuer: 'Cisco Systems',
      title: 'Certified Network Associate (CCNA Routing & Switching)',
      year: '2023',
      credentialUrl: '/certifications/CCNA_Certificate.jpg',
      issuerLogo: '/logos/cisco.png'
    },
    {
      id: 'cert-corvit-networking',
      group: 'Cloud, network and security',
      issuer: 'Corvit Systems',
      title: 'Enterprise Routing, Switching & Network Topologies',
      year: '2023',
      credentialUrl: '/certifications/CCNA_Certificate.jpg',
      issuerLogo: '/logos/corvit.png'
    },
    {
      id: 'cert-ibm-cloud',
      group: 'Cloud, network and security',
      issuer: 'IBM',
      title: 'Cloud Core Certified',
      year: '2023',
      credentialUrl: '/certifications/IBM_Cloud_Core_Certified.pdf',
      image: '/certifications/badges/IBM%20-%20Cloud%20Essentials.png',
      issuerLogo: '/logos/ibm.png'
    },
    {
      id: 'cert-fortinet',
      group: 'Cloud, network and security',
      issuer: 'Fortinet',
      title: 'Certified Fundamentals in Cybersecurity',
      year: '2025',
      credentialUrl: '/certifications/Fortinet%20Certified%20Fundamentals%20in%20Cybersecurity.pdf',
      image: '/certifications/badges/fortinet-certified-fundamentals.png',
      issuerLogo: '/logos/fortinet.png'
    },
    {
      id: 'cert-fortinet-threat',
      group: 'Cloud, network and security',
      issuer: 'Fortinet',
      title: 'Introduction to Threat Landscape 3.0',
      year: '2025',
      credentialUrl: '/certifications/Fortinet_Introduction%20to%20Threat%20Landscape%203.0.pdf',
      issuerLogo: '/logos/fortinet.png'
    },
    {
      id: 'cert-cpanel-cpp',
      group: 'Cloud, network and security',
      issuer: 'cPanel',
      title: 'cPanel Professional Certification (CPP)',
      year: '2021',
      credentialUrl: '/certifications/cPanel-Professional-Certification-CPP-zainmabid.pdf',
      issuerLogo: '/logos/cpanel.png'
    },
    {
      id: 'cert-cpanel-litespeed',
      group: 'Cloud, network and security',
      issuer: 'cPanel',
      title: 'cPanel LiteSpeed Acceleration Specialist',
      year: '2021',
      credentialUrl: '/certifications/cPanel%20LiteSpeed-Certification-zainmabid.pdf',
      issuerLogo: '/logos/cpanel.png'
    },
    {
      id: 'cert-hpi-edge-ai',
      group: 'Cloud, network and security',
      issuer: 'Hasso Plattner Institut',
      title: 'Applied Edge AI — Deep Learning Outside of the Cloud',
      year: '2026',
      credentialUrl: '/certifications/Applied%20Edge%20AI-Deep%20Learning%20Outside%20of%20the%20CloudHasso_Plattner_Institute.pdf',
      issuerLogo: '/logos/hpi.png'
    },
    {
      id: 'cert-undss-besafe',
      group: 'Cloud, network and security',
      issuer: 'UNDSS',
      title: 'BESAFE Operational Security Certificate',
      year: '2026',
      credentialUrl: '/certifications/BESAFE_%20Certificate%20UNDSS.pdf',
      issuerLogo: '/logos/undss.png'
    },
    {
      id: 'cert-cisa-ics',
      group: 'Cloud, network and security',
      issuer: 'US CISA',
      title: 'Common ICS Components (210W-03)',
      year: '2026',
      credentialUrl: '/certifications/Common%20ICS%20Components%20(210W-03)%20US%20CISA.pdf',
      issuerLogo: '/logos/cisa.png'
    },
    {
      id: 'cert-cisa-manager',
      group: 'Cloud, network and security',
      issuer: 'U.S. Dept of Homeland Security (CISA)',
      title: 'Cybersecurity Landscape for Managers',
      year: '2026',
      credentialUrl: '/certifications/Cybersecurity_Landscape%20for%20Managers%20-%20US%20CISA.pdf',
      issuerLogo: '/logos/dhs.png'
    },
    {
      id: 'cert-inl-cyber',
      group: 'Cloud, network and security',
      issuer: 'Idaho National Laboratory (INL)',
      title: 'Industrial Control Systems (ICS) Cybersecurity',
      year: '2026',
      credentialUrl: '/certifications/Common%20ICS%20Components%20(210W-03)%20US%20CISA.pdf',
      issuerLogo: '/logos/inl.png'
    },

    /* ==========================================================================
       SALES AND MARKETING
       ========================================================================= */
    {
      id: 'cert-hubspot-sales',
      group: 'Sales and marketing',
      issuer: 'HubSpot Academy',
      title: 'Sales Hub Certified',
      year: '2026',
      credentialUrl: '/certifications/Certified_HubSpot%20Sales%20Hub%20Certified.png',
      issuerLogo: '/logos/hubspot.png'
    },
    {
      id: 'cert-cpanel-cpsp',
      group: 'Sales and marketing',
      issuer: 'cPanel',
      title: 'cPanel & WHM Sales Professional (CPSP)',
      year: '2021',
      credentialUrl: '/certifications/cPanel-%26-WHM-Sales-Professional-CPSP-zainmabid.pdf',
      issuerLogo: '/logos/cpanel.png'
    },
    {
      id: 'cert-pitac',
      group: 'Sales and marketing',
      issuer: 'PITAC',
      title: 'Social Media Marketing Expert',
      year: '2020',
      issuerLogo: '/logos/pitac.png'
    },
    {
      id: 'cert-iacet-ceus',
      group: 'Business and project',
      issuer: 'IACET Accredited Provider',
      title: 'Accredited Continuing Education Units (CEUs)',
      year: '2026',
      issuerLogo: '/logos/iacet.png'
    },
    {
      id: 'cert-nasba',
      group: 'Sales and marketing',
      issuer: 'NASBA',
      title: 'Sales Management Foundations',
      year: '2021',
      credentialUrl: '/certifications/Sales%20Management%20Foundations%20(NASBA).pdf',
      issuerLogo: '/logos/nasba.png'
    },
    {
      id: 'cert-nasba-kam',
      group: 'Sales and marketing',
      issuer: 'NASBA',
      title: 'Key Account Management Strategy',
      year: '2021',
      credentialUrl: '/certifications/kEY%20aCCOUNT%20mANAGEMENT%20(NASBA).pdf',
      issuerLogo: '/logos/nasba.png'
    },
    {
      id: 'cert-cpe-qas',
      group: 'Sales and marketing',
      issuer: 'National Registry of CPE Sponsors',
      title: 'QAS Continuing Professional Education (CPE)',
      year: '2021',
      issuerLogo: '/logos/cpe-qas.png'
    },
    {
      id: 'cert-open-university',
      group: 'Business and project',
      issuer: 'The Open University',
      title: 'Institute of Education Academic Statement',
      year: '2021',
      credentialUrl: '/certifications/IOE_1_statement.pdf',
      issuerLogo: '/logos/open-university.png'
    },

    /* ==========================================================================
       ADDITIONAL ACCREDITED VERIFIABLE BADGES & CERTIFICATES
       ========================================================================== */
    {
      id: 'badge-isoc-privacy-frameworks',
      group: 'Cloud, network and security',
      issuer: 'Internet Society',
      title: 'Privacy Frameworks & Data Protection',
      year: '2026',
      credentialUrl: 'https://www.credential.net/f83cacec-dbad-496c-bf53-8e7601a60cae',
      image: 'https://api.accredible.com/v1/credentials/p5pe0pbn/artifact/badge',
      issuerLogo: '/logos/isoc.png'
    },
    {
      id: 'badge-isoc-data-protection',
      group: 'Cloud, network and security',
      issuer: 'Internet Society',
      title: 'Data Protection Laws & International Standards',
      year: '2026',
      credentialUrl: 'https://www.credential.net/41e4ce57-a999-4446-a10b-2161ca68b0c9',
      image: 'https://api.accredible.com/v1/credentials/ispr2y0j/artifact/badge',
      issuerLogo: '/logos/isoc.png'
    },
    {
      id: 'badge-isoc-digital-footprint',
      group: 'Cloud, network and security',
      issuer: 'Internet Society',
      title: 'Digital Footprint Management & Control',
      year: '2026',
      credentialUrl: 'https://www.credential.net/92c8a32b-5e66-4d98-9760-c89aed9b4baa',
      image: 'https://api.accredible.com/v1/credentials/ozthpwse/artifact/badge',
      issuerLogo: '/logos/isoc.png'
    },
    {
      id: 'badge-isoc-project-design',
      group: 'Business and project',
      issuer: 'Internet Society',
      title: 'Project Design & Strategic Sustainability',
      year: '2026',
      credentialUrl: 'https://www.credential.net/aeeb7705-4007-465e-8f93-c1b7d346d9e6',
      image: 'https://api.accredible.com/v1/credentials/fpda7icy/artifact/badge',
      issuerLogo: '/logos/isoc.png'
    },
    {
      id: 'badge-isoc-kpi-budgeting',
      group: 'Business and project',
      issuer: 'Internet Society',
      title: 'Performance Indicators and Budgeting',
      year: '2026',
      credentialUrl: 'https://www.credential.net/c7739d0c-3f57-4e0a-bd3b-b69c366d40b6',
      image: 'https://api.accredible.com/v1/credentials/emim2fur/artifact/badge',
      issuerLogo: '/logos/isoc.png'
    }

    /* --------------------------------------------------------------------------
     * TODO: HOW TO ADD MORE CERTIFICATIONS OR BADGES
     * --------------------------------------------------------------------------
     * To append any new certificate or Accredible badge, add an entry following this format:
     *
     * {
     *   id: 'unique-slug-id',
     *   group: 'Business and project' | 'Cloud, network and security' | 'Sales and marketing',
     *   issuer: 'Issuing Organization Name',
     *   title: 'Certification or Credential Title',
     *   year: '2026', // optional
     *   credentialUrl: 'https://...', // optional: external verification link or /certifications/... PDF path
     *   image: '/path/to/badge.png' // optional: badge art URL or local image
     * },
     * -------------------------------------------------------------------------- */
  ],

  education: [
    {
      id: 'bs-cs',
      degree: 'BS, Computer Science',
      institution: 'PMAS University Institute of Information Technology',
      location: 'Rawalpindi, Pakistan',
      dates: '2011 to 2015'
    },
    {
      id: 'ms-pm',
      degree: 'MS, Project Management',
      institution: 'COMSATS University Islamabad',
      location: 'Islamabad, Pakistan',
      dates: 'Enrolled',
      status: 'On hold'
    }
  ]
};
