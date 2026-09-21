import {
  FaHome,
  FaBuilding,
  FaKey,
  FaHandshake,
  FaCity,
  FaTree,
  FaCrown,
  FaShieldAlt,
  FaUserTie,
  FaGlobeAmericas,
  FaAward
} from 'react-icons/fa'
export const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`
export const IMG = {
  hero: '1600585154340-be6161a56a0c',
  interior: '1600210492486-724fe5c67fb0',
  city: '1477959858617-67f85cf4f1df',
  beach: '1512917774080-9991f1c4c750'
}
export const nav = [
  ['Home', '/'],
  ['Properties', '/properties'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Blog', '/blog'],
  ['Contact', '/contact']
]
export const cats = [
  'All',
  'Residential',
  'Commercial',
  'Land',
  'Villa',
  'Apartment'
]
export const props = [
  {
    id: 1,
    title: 'Modern Family Home',
    type: 'Residential',
    tag: 'For Sale',
    loc: 'Los Angeles, USA',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    area: '2,800',
    img: '1564013799919-ab600027ffc6'
  },
  {
    id: 2,
    title: 'Luxury Villa with Ocean View',
    type: 'Villa',
    tag: 'For Sale',
    loc: 'Miami, USA',
    price: '$2,850,000',
    beds: 5,
    baths: 5,
    area: '4,200',
    img: '1613490493576-7fde63acd811'
  },
  {
    id: 3,
    title: 'Modern Apartment',
    type: 'Apartment',
    tag: 'For Rent',
    loc: 'New York, USA',
    price: '$3,500 / month',
    beds: 2,
    baths: 2,
    area: '1,200',
    img: '1545324418-cc1a3fa10c00'
  },
  {
    id: 4,
    title: 'Countryside Farmhouse',
    type: 'Residential',
    tag: 'For Sale',
    loc: 'Austin, USA',
    price: '$980,000',
    beds: 3,
    baths: 2,
    area: '2,500',
    img: '1568605114967-8130f3a36994'
  },
  {
    id: 5,
    title: 'Prime Land for Investment',
    type: 'Land',
    tag: 'For Sale',
    loc: 'Orlando, USA',
    price: '$450,000',
    beds: 0,
    baths: 0,
    area: '5 acres',
    img: '1500382017468-9049fed747ef'
  },
  {
    id: 6,
    title: 'Commercial Office Space',
    type: 'Commercial',
    tag: 'For Sale',
    loc: 'Chicago, USA',
    price: '$1,800,000',
    beds: 0,
    baths: 0,
    area: '9,000',
    img: '1486406146926-c627a92ad1ab'
  }
]
export const collections = [
  [FaCrown, 'Luxury Villas', 'Exclusive & high-end living'],
  [FaBuilding, 'Modern Apartments', 'Stylish & convenient'],
  [FaCity, 'Commercial Spaces', 'For your business growth'],
  [FaTree, 'Land & Plots', 'Build your future']
]
export const why = [
  [FaUserTie, 'Expert Guidance', 'Professional advice at every step'],
  [FaHome, 'Wide Selection', 'Residential, commercial & land'],
  [FaShieldAlt, 'Transparent Process', 'No hidden fees, no surprises'],
  [FaGlobeAmericas, 'Global Network', 'Properties in top locations worldwide']
]
export const trust = [
  [FaShieldAlt, 'Verified Listings', '100% Genuine'],
  [FaUserTie, 'Trusted Agents', 'Professional Support'],
  [FaHandshake, 'Secure Deals', 'Safe & Transparent'],
  [FaGlobeAmericas, 'Global Reach', 'Local Expertise']
]
export const services = [
  [
    FaHome,
    'Buy Property',
    'Find the perfect home or investment with guided tours, market analysis and honest advice.'
  ],
  [
    FaKey,
    'Sell Property',
    'Get the best price with professional marketing, staging and skilled negotiation.'
  ],
  [
    FaBuilding,
    'Rent Property',
    'Flexible rental options with verified tenants, quick paperwork and fair terms.'
  ],
  [
    FaAward,
    'Property Management',
    'We handle upkeep, tenants and reporting so your property keeps earning.'
  ]
]
export const reviews = [
  {
    n: 'James Carter',
    r: 'Property Investor, USA',
    t: "Realestate.com made the entire process so easy and stress-free. Their team is professional, responsive, and truly cares about their clients. I found my dream home and couldn't be happier!",
    i: '1507003211169-0a1dd7228f2d'
  },
  {
    n: 'Emma Wilson',
    r: 'Homeowner, Canada',
    t: 'From the first viewing to the final signature, every detail was handled with care. The agent knew the neighbourhood inside out and negotiated a great price for us.',
    i: '1494790108377-be9c29b29330'
  },
  {
    n: 'Daniel Kim',
    r: 'Business Owner, UK',
    t: 'We needed an office fast. They shortlisted three spaces in two days and closed the deal in a week. Clear, honest and quick.',
    i: '1472099645785-5658abf4ff4e'
  }
]
export const agents = [
  {
    n: 'Sarah Mitchell',
    r: 'Real Estate Agent',
    p: '+1 (555) 123-4567',
    i: '1438761681033-6461ffad8d80'
  },
  {
    n: 'David Wilson',
    r: 'Property Consultant',
    p: '+1 (555) 987-6543',
    i: '1472099645785-5658abf4ff4e'
  },
  {
    n: 'Emily Davis',
    r: 'Sales Manager',
    p: '+1 (555) 456-7890',
    i: '1494790108377-be9c29b29330'
  },
  {
    n: 'Michael Brown',
    r: 'Investment Advisor',
    p: '+1 (555) 321-1987',
    i: '1507003211169-0a1dd7228f2d'
  }
]
export const posts = [
  {
    t: '5 Things to Check Before Buying a House',
    c: 'Buying Guide',
    d: 'Mar 20, 2026',
    i: '1560518883-ce09059eeffa'
  },
  {
    t: 'Real Estate Market Trends in 2026',
    c: 'Market Trends',
    d: 'Mar 12, 2026',
    i: IMG.beach
  },
  {
    t: 'Is Real Estate a Good Investment in 2026?',
    c: 'Investment',
    d: 'Mar 02, 2026',
    i: '1580587771525-78b9dba3b914'
  }
]
export const stats = [
  ['10,000+', 'Happy clients'],
  ['2,500+', 'Listed properties'],
  ['120+', 'Expert agents'],
  ['25+', 'Countries']
]
