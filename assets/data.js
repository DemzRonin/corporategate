/* ============================================================
   Corporategate Limited — site content data
   ============================================================ */
window.CG = window.CG || {};

CG.contact = {
  phone: '+234 (0) 815 643 817',
  phoneHref: '+2348156413817',
  whatsapp: '2348156413817',
  email: 'info@corporategate.org',
  location: 'Nigeria'
};

CG.services = [
  {
    slug: 'contracting-procurement',
    icon: 'shopping-cart',
    color: 'var(--cg-gate-blue)',
    title: 'General Contracting & Procurement',
    tagline: 'Sourcing, supply and vendor management you can document.',
    summary: "General supplies, manufacturers' representation, commission agency, sourcing, tender response and end-to-end vendor management.",
    capabilities: [
      'General goods and materials supply',
      "Manufacturers' representation & commission agency",
      'Competitive sourcing and price benchmarking',
      'Tender preparation and response',
      'Vendor selection, onboarding and management',
      'Purchase order and delivery tracking'
    ],
    deliverables: ['Sourcing report', 'Vendor shortlist', 'Procurement plan', 'Delivery schedule', 'Compliance pack'],
    industries: ['Government & Public Sector', 'Corporate & SMEs', 'Construction & Infrastructure'],
    proof: 'Documented procurement trail on every engagement, built for audit and tender review.'
  },
  {
    slug: 'import-export',
    icon: 'globe',
    color: 'var(--cg-deep-navy)',
    title: 'Import, Export & General Merchandise',
    tagline: 'International sourcing and distribution of goods and raw materials.',
    summary: 'International sourcing, market preparation and distribution of general goods, merchandise and industrial raw materials.',
    capabilities: [
      'International supplier identification',
      'Import documentation and clearing coordination',
      'Export readiness and market preparation',
      'Distribution of general merchandise',
      'Raw material supply for manufacturers',
      'Logistics and warehousing coordination'
    ],
    deliverables: ['Supplier dossier', 'Landed-cost estimate', 'Import/export checklist', 'Distribution plan'],
    industries: ['Manufacturing & Industrial', 'Retail & Distribution', 'Corporate & SMEs'],
    proof: 'A connected sourcing network spanning multiple supplier markets.'
  },
  {
    slug: 'logistics-distribution',
    icon: 'truck',
    color: 'var(--cg-gate-cyan)',
    title: 'Logistics, Transport & Distribution',
    tagline: 'Reliable movement of goods, on schedule.',
    summary: 'Movement of goods, passenger and logistics support, and common-carrier-oriented distribution services.',
    capabilities: [
      'Goods movement and last-mile distribution',
      'Fleet and transport coordination',
      'Common-carrier-oriented services',
      'Passenger logistics support',
      'Warehousing and inventory handling',
      'Route planning and delivery tracking'
    ],
    deliverables: ['Distribution plan', 'Delivery confirmations', 'Tracking dashboard', 'Service-level report'],
    industries: ['Retail & Distribution', 'Manufacturing & Industrial', 'Government & Public Sector'],
    proof: 'Tracked deliveries with confirmation at every handoff.'
  },
  {
    slug: 'ict-telecom',
    icon: 'cpu',
    color: 'var(--cg-signal-red)',
    title: 'ICT & Telecommunications',
    tagline: 'Computers, networks and integrated communications.',
    summary: 'Computers, telecom gadgets, PABX, satellite/cable systems, systems integration and telecentre / cyber-cafe support.',
    capabilities: [
      'Computer and peripheral supply',
      'PABX and telephony systems',
      'Satellite and cable system installation',
      'Network and systems integration',
      'Telecentre / cyber-cafe setup and support',
      'Maintenance and technical support contracts'
    ],
    deliverables: ['Solution design', 'Bill of materials', 'Installation plan', 'Support SLA', 'Handover documentation'],
    industries: ['ICT & Telecoms', 'Corporate & SMEs', 'Government & Public Sector'],
    proof: 'Integration-first approach: systems that actually talk to each other.'
  },
  {
    slug: 'security-systems',
    icon: 'shield',
    color: 'var(--cg-deep-navy)',
    title: 'Security & Surveillance Systems',
    tagline: 'CCTV, access control and alarm systems, professionally installed.',
    summary: 'CCTV/HDTV, fire and burglary alarms, access and door-entry systems, and central antenna systems.',
    capabilities: [
      'CCTV / HDTV surveillance design and install',
      'Fire and burglary alarm systems',
      'Access control and door-entry systems',
      'Central antenna and signal distribution',
      'Site security assessment',
      'System monitoring and maintenance'
    ],
    deliverables: ['Security assessment', 'System design', 'Installation plan', 'Maintenance schedule'],
    industries: ['Security-conscious Facilities', 'Government & Public Sector', 'Corporate & SMEs'],
    proof: 'Layered, standards-based installations for sensitive facilities.'
  },
  {
    slug: 'training-management',
    icon: 'graduation-cap',
    color: 'var(--cg-crimson-rail)',
    title: 'Training & Management Systems',
    tagline: 'Building capability and stronger systems.',
    summary: 'MIS training, system audit and review, HR management, total quality management, workshops and seminars.',
    capabilities: [
      'Management Information Systems (MIS) training',
      'System audit and review',
      'HR management and development',
      'Total Quality Management programmes',
      'Workshops and seminars',
      'Process and policy documentation'
    ],
    deliverables: ['Training curriculum', 'Audit findings', 'Improvement roadmap', 'Certification of completion'],
    industries: ['Corporate & SMEs', 'Government & Public Sector', 'ICT & Telecoms'],
    proof: 'Practical, role-specific training tied to measurable outcomes.'
  },
  {
    slug: 'construction-projects',
    icon: 'hard-hat',
    color: 'var(--cg-gate-blue)',
    title: 'Construction & Project Management',
    tagline: 'From tender to handover.',
    summary: 'Tendering, design-construction contracts, joint ventures, construction management and subcontracting.',
    capabilities: [
      'Tendering and bid management',
      'Design-and-build contracts',
      'Joint ventures and consortium delivery',
      'Construction management and supervision',
      'Subcontractor coordination',
      'Quality, safety and handover management'
    ],
    deliverables: ['Project plan', 'Bill of quantities', 'Progress reports', 'As-built handover pack'],
    industries: ['Construction & Infrastructure', 'Government & Public Sector', 'Manufacturing & Industrial'],
    proof: 'Disciplined site management with clear reporting cadence.'
  },
  {
    slug: 'industrial-supply',
    icon: 'package',
    color: 'var(--cg-gate-cyan)',
    title: 'Industrial Supply & Manufacturing Support',
    tagline: 'Materials and goods that keep operations running.',
    summary: 'Industrial goods, packaging, preservation, manufactured goods and materials supply for industrial operators.',
    capabilities: [
      'Industrial goods and consumables supply',
      'Packaging and preservation materials',
      'Manufactured goods sourcing',
      'Raw material and component supply',
      'Vendor-managed inventory support',
      'Scheduled replenishment'
    ],
    deliverables: ['Supply agreement', 'Replenishment schedule', 'Quality certificates', 'Inventory report'],
    industries: ['Manufacturing & Industrial', 'Retail & Distribution', 'Construction & Infrastructure'],
    proof: 'Dependable supply continuity for production-critical materials.'
  }
];

CG.steps = [
  { n: '01', t: 'Assess', d: 'We analyse your requirements, constraints and objectives to design the right solution.' },
  { n: '02', t: 'Source', d: 'We leverage our network and procurement expertise to find the best materials, systems and partners.' },
  { n: '03', t: 'Deliver', d: 'We execute with precision, accountability and adherence to timelines and quality standards.' },
  { n: '04', t: 'Support', d: 'Ongoing maintenance, training and technical support to ensure long-term success.' }
];

CG.industries = [
  { icon: 'building-2', title: 'Government & Public Sector', desc: 'Tender-ready delivery with full compliance documentation.', items: ['Tender response', 'Compliance documentation', 'Multi-year contracts'] },
  { icon: 'briefcase', title: 'Corporate & SMEs', desc: 'Procurement, ICT and supply support for growing businesses.', items: ['Procurement services', 'ICT solutions', 'Supply chain support'] },
  { icon: 'cpu', title: 'ICT & Telecoms', desc: 'Systems integration and communications infrastructure.', items: ['Network integration', 'Telephony systems', 'Support contracts'] },
  { icon: 'hard-hat', title: 'Construction & Infrastructure', desc: 'Project delivery, materials supply and joint ventures.', items: ['Project management', 'Materials supply', 'Joint ventures'] },
  { icon: 'factory', title: 'Manufacturing & Industrial', desc: 'Reliable industrial supply and production materials.', items: ['Industrial goods', 'Raw materials', 'Vendor-managed inventory'] },
  { icon: 'store', title: 'Retail & Distribution', desc: 'Sourcing and distribution for trading companies.', items: ['Goods sourcing', 'Distribution', 'Logistics support'] },
  { icon: 'shield', title: 'Security-conscious Facilities', desc: 'Surveillance, access control and alarm systems.', items: ['CCTV & surveillance', 'Access control', 'Monitoring'] },
  { icon: 'graduation-cap', title: 'Training & Capacity Building', desc: 'MIS, quality and HR programmes for institutions.', items: ['MIS training', 'Quality systems', 'HR development'] }
];

CG.insights = [
  { cat: 'Procurement', date: 'May 2026', icon: 'file-text', title: 'A practical checklist for tender-ready procurement', excerpt: 'What buyers and vendors should prepare before a tender to keep the process clean, compliant and fast.' },
  { cat: 'ICT & Security', date: 'Apr 2026', icon: 'shield', title: 'Designing CCTV and access control that actually scales', excerpt: 'Common pitfalls in multi-site security deployments and how to avoid them from day one.' },
  { cat: 'Project Delivery', date: 'Mar 2026', icon: 'hard-hat', title: 'Reporting cadence: the quiet driver of on-time delivery', excerpt: 'Why a disciplined reporting rhythm matters more than heroics when delivering complex projects.' },
  { cat: 'Vendor Readiness', date: 'Feb 2026', icon: 'check-circle-2', title: 'Becoming a preferred vendor: the documents that matter', excerpt: 'The compliance and capability evidence that moves you up a buyer\'s shortlist.' },
  { cat: 'Company News', date: 'Jan 2026', icon: 'megaphone', title: 'Expanding our integrated services for 2026', excerpt: 'How we are deepening capability across procurement, ICT, security and project delivery this year.' },
  { cat: 'Logistics', date: 'Dec 2025', icon: 'truck', title: 'Tracking and confirmation: raising the bar on distribution', excerpt: 'Why handoff confirmation should be standard, not a premium add-on, in goods distribution.' }
];

CG.values = [
  { icon: 'shield-check', t: 'Reliability', d: 'We deliver what we commit to, on schedule and to specification.' },
  { icon: 'scale', t: 'Accountability', d: 'Documented processes and a clear trail on every engagement.' },
  { icon: 'wrench', t: 'Technical competence', d: 'Skilled, standards-based delivery across all our divisions.' },
  { icon: 'zap', t: 'Speed', d: 'Fast, responsive engagement from first contact to handover.' },
  { icon: 'file-check', t: 'Compliance', d: 'Fully registered and governed, ready for audit and tender review.' }
];

CG.leadership = [
  { name: 'Board of Directors', role: 'Corporate Governance', bio: 'Provides strategic direction and oversight in line with the company\u2019s articles of association.' },
  { name: 'Managing Director', role: 'Executive Leadership', bio: 'Leads day-to-day operations and the delivery of multi-service engagements.' },
  { name: 'Operations Lead', role: 'Service Delivery', bio: 'Coordinates procurement, ICT, security, logistics and construction divisions.' },
  { name: 'Compliance Officer', role: 'Governance & Compliance', bio: 'Maintains registration, documentation and compliance records.' }
];

CG.history = [
  { yr: '2007', t: 'Incorporated in Nigeria', d: 'Corporategate Limited is registered as a private company limited by shares, with a broad multi-service operating scope.' },
  { yr: '2010', t: 'Procurement & supply growth', d: 'Established general contracting, sourcing and vendor-management capability for corporate and public-sector clients.' },
  { yr: '2014', t: 'ICT & security divisions', d: 'Added ICT, telecommunications and security/surveillance systems to the integrated offering.' },
  { yr: '2018', t: 'Project delivery & construction', d: 'Expanded into construction management, design-and-build and joint-venture project delivery.' },
  { yr: '2026', t: 'Integrated multi-service gateway', d: 'Operating eight coordinated divisions across procurement, technology, logistics, training and projects.' }
];

CG.docs = [
  { t: 'Certificate of Incorporation', s: 'Company registration document', icon: 'file-badge' },
  { t: 'Company Profile', s: 'Overview of services and capabilities (PDF)', icon: 'file-text' },
  { t: 'Memorandum & Articles of Association', s: 'Constitutional documents', icon: 'scroll-text' },
  { t: 'Tax & Compliance Statements', s: 'Available on verified request', icon: 'file-check' },
  { t: 'Capability Statement', s: 'Division-by-division capability summary', icon: 'list-checks' }
];
