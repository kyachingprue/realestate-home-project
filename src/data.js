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

export const properties = [
  {
    id: 1,
    title: 'Modern Family Villa',
    location: 'Miami, Florida',
    type: 'Villa',
    status: 'For Sale',
    price: 1250000,
    beds: 4,
    baths: 3,
    area: 2850,
    rating: 4.9,
    reviews: 124,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 2,
    title: 'Luxury Ocean View Villa',
    location: 'Malibu, California',
    type: 'Villa',
    status: 'For Sale',
    price: 2850000,
    beds: 5,
    baths: 4,
    area: 4200,
    rating: 4.9,
    reviews: 98,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 3,
    title: 'Modern City Apartment',
    location: 'New York, USA',
    type: 'Apartment',
    status: 'For Rent',
    price: 3500,
    beds: 2,
    baths: 2,
    area: 1250,
    rating: 4.8,
    reviews: 76,
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 4,
    title: 'Countryside Farmhouse',
    location: 'Austin, Texas',
    type: 'House',
    status: 'For Sale',
    price: 890000,
    beds: 4,
    baths: 3,
    area: 3100,
    rating: 4.7,
    reviews: 54,
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 5,
    title: 'Premium Green Estate',
    location: 'Vancouver, Canada',
    type: 'Land',
    status: 'For Sale',
    price: 450000,
    beds: 0,
    baths: 0,
    area: 8500,
    rating: 4.8,
    reviews: 42,
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 6,
    title: 'Corporate Office Space',
    location: 'Chicago, Illinois',
    type: 'Commercial',
    status: 'For Sale',
    price: 1800000,
    beds: 0,
    baths: 4,
    area: 5200,
    rating: 4.6,
    reviews: 38,
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 7,
    title: 'Private Beach House',
    location: 'Honolulu, Hawaii',
    type: 'House',
    status: 'For Sale',
    price: 3200000,
    beds: 5,
    baths: 4,
    area: 3900,
    rating: 5.0,
    reviews: 86,
    image:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 8,
    title: 'Minimal Luxury Apartment',
    location: 'Dubai, UAE',
    type: 'Apartment',
    status: 'For Rent',
    price: 5200,
    beds: 3,
    baths: 2,
    area: 1850,
    rating: 4.9,
    reviews: 112,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 9,
    title: 'Mountain View Retreat',
    location: 'Denver, Colorado',
    type: 'House',
    status: 'For Sale',
    price: 975000,
    beds: 4,
    baths: 3,
    area: 3400,
    rating: 4.8,
    reviews: 65,
    image:
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 10,
    title: 'Skyline Penthouse',
    location: 'Los Angeles, California',
    type: 'Apartment',
    status: 'For Sale',
    price: 2450000,
    beds: 4,
    baths: 3,
    area: 2950,
    rating: 4.9,
    reviews: 91,
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 11,
    title: 'Contemporary Garden House',
    location: 'Seattle, Washington',
    type: 'House',
    status: 'For Sale',
    price: 1125000,
    beds: 4,
    baths: 3,
    area: 2780,
    rating: 4.7,
    reviews: 73,
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 12,
    title: 'Palm Residence Villa',
    location: 'Orlando, Florida',
    type: 'Villa',
    status: 'For Rent',
    price: 6800,
    beds: 5,
    baths: 4,
    area: 4100,
    rating: 4.8,
    reviews: 59,
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 13,
    title: 'Riverside Luxury Home',
    location: 'Portland, Oregon',
    type: 'House',
    status: 'For Sale',
    price: 1380000,
    beds: 4,
    baths: 3,
    area: 3250,
    rating: 4.9,
    reviews: 104,
    image:
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 14,
    title: 'Downtown Business Center',
    location: 'Boston, Massachusetts',
    type: 'Commercial',
    status: 'For Rent',
    price: 8500,
    beds: 0,
    baths: 3,
    area: 6800,
    rating: 4.6,
    reviews: 31,
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 15,
    title: 'Seaside Investment Land',
    location: 'San Diego, California',
    type: 'Land',
    status: 'For Sale',
    price: 725000,
    beds: 0,
    baths: 0,
    area: 12500,
    rating: 4.7,
    reviews: 27,
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 16,
    title: 'Elegant European Villa',
    location: 'Barcelona, Spain',
    type: 'Villa',
    status: 'For Sale',
    price: 1980000,
    beds: 5,
    baths: 4,
    area: 3650,
    rating: 4.9,
    reviews: 88,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 17,
    title: 'Smart Urban Apartment',
    location: 'Singapore',
    type: 'Apartment',
    status: 'For Rent',
    price: 4200,
    beds: 2,
    baths: 2,
    area: 1180,
    rating: 4.8,
    reviews: 137,
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 18,
    title: 'Luxury Lakefront Residence',
    location: 'Zurich, Switzerland',
    type: 'House',
    status: 'For Sale',
    price: 2750000,
    beds: 5,
    baths: 4,
    area: 4350,
    rating: 5.0,
    reviews: 118,
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 19,
    title: 'Modern Retail Complex',
    location: 'Toronto, Canada',
    type: 'Commercial',
    status: 'For Sale',
    price: 2150000,
    beds: 0,
    baths: 5,
    area: 7400,
    rating: 4.7,
    reviews: 46,
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 20,
    title: 'Tropical Paradise Villa',
    location: 'Bali, Indonesia',
    type: 'Villa',
    status: 'For Rent',
    price: 7500,
    beds: 4,
    baths: 4,
    area: 3800,
    rating: 4.9,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85',
    featured: true
  }
]

export const postsData = [
  {
    id: 1,
    title: 'How to Choose the Perfect Home for Your Family',
    excerpt:
      'Discover the most important things to consider before choosing a new home, from location and layout to lifestyle and long-term value.',
    category: 'Buying',
    author: 'Sophia Williams',
    date: 'Sep 12, 2026',
    readTime: '6 min read',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 2,
    title: '7 Things Every First-Time Home Buyer Should Know',
    excerpt:
      'Buying your first home can feel overwhelming. Here are practical tips to make the process easier and more confident.',
    category: 'Buying',
    author: 'Daniel Carter',
    date: 'Sep 08, 2026',
    readTime: '5 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 3,
    title: 'Simple Ways to Increase Your Property Value',
    excerpt:
      'Small improvements can make a meaningful difference when preparing your property for the market.',
    category: 'Selling',
    author: 'Emma Wilson',
    date: 'Sep 04, 2026',
    readTime: '4 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 4,
    title: 'The Best Interior Trends for Modern Homes',
    excerpt:
      'Explore modern interior ideas that combine comfort, functionality and timeless style.',
    category: 'Lifestyle',
    author: 'Olivia Martin',
    date: 'Aug 28, 2026',
    readTime: '7 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 5,
    title: 'Is Real Estate Still a Good Investment?',
    excerpt:
      'Understand the key factors investors should consider before entering the property market.',
    category: 'Investment',
    author: 'James Anderson',
    date: 'Aug 22, 2026',
    readTime: '8 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 6,
    title: 'How Location Impacts Property Value',
    excerpt:
      'Location remains one of the most important factors when evaluating a property. Here is what to look for.',
    category: 'Market',
    author: 'Sophia Williams',
    date: 'Aug 17, 2026',
    readTime: '6 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 7,
    title: 'Smart Home Features Buyers Love',
    excerpt:
      'From smart security to energy-efficient systems, discover the technology modern buyers are looking for.',
    category: 'Lifestyle',
    author: 'Michael Brown',
    date: 'Aug 10, 2026',
    readTime: '5 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 8,
    title: 'A Practical Guide to Selling Your Property',
    excerpt:
      'Learn how to prepare, market and present your property to attract serious buyers.',
    category: 'Selling',
    author: 'Emma Wilson',
    date: 'Aug 05, 2026',
    readTime: '7 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 9,
    title: 'How to Find the Right Neighborhood for Your Lifestyle',
    excerpt:
      'Learn how to compare neighborhoods based on schools, transportation, amenities, safety and your everyday lifestyle.',
    category: 'Buying',
    author: 'Michael Brown',
    date: 'Jul 30, 2026',
    readTime: '6 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 10,
    title: 'Understanding Property Market Trends in 2026',
    excerpt:
      'Explore the major factors influencing property prices, buyer demand and real estate activity in the current market.',
    category: 'Market',
    author: 'Daniel Carter',
    date: 'Jul 25, 2026',
    readTime: '8 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 11,
    title: 'Best Renovation Ideas Before Selling Your Home',
    excerpt:
      'Discover practical renovation projects that can improve presentation, functionality and buyer interest before listing.',
    category: 'Selling',
    author: 'Olivia Martin',
    date: 'Jul 20, 2026',
    readTime: '5 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 12,
    title: 'Creating a Comfortable and Modern Living Space',
    excerpt:
      'Simple design choices, smart furniture placement and natural light can transform an ordinary home into a welcoming space.',
    category: 'Lifestyle',
    author: 'Sophia Williams',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 13,
    title: 'Real Estate Investment Strategies for Beginners',
    excerpt:
      'A beginner-friendly overview of property investment concepts, risk factors and important questions to consider.',
    category: 'Investment',
    author: 'James Anderson',
    date: 'Jul 10, 2026',
    readTime: '9 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 14,
    title: 'What to Look for During a Property Viewing',
    excerpt:
      'Use this practical checklist to inspect rooms, structure, utilities, location and other important details during a viewing.',
    category: 'Buying',
    author: 'Emma Wilson',
    date: 'Jul 05, 2026',
    readTime: '6 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 15,
    title: 'How to Prepare Your Home for Professional Photography',
    excerpt:
      'Great property photography starts with preparation. Learn how to make every room look clean, bright and inviting.',
    category: 'Selling',
    author: 'Daniel Carter',
    date: 'Jun 29, 2026',
    readTime: '4 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 16,
    title: 'Energy-Efficient Home Improvements Worth Considering',
    excerpt:
      'Explore practical ways to improve energy efficiency and create a more comfortable home while reducing unnecessary energy use.',
    category: 'Lifestyle',
    author: 'Michael Brown',
    date: 'Jun 24, 2026',
    readTime: '7 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 17,
    title: 'Why Property Infrastructure Matters to Investors',
    excerpt:
      'Transportation, roads, commercial development and public facilities can all influence the long-term appeal of a location.',
    category: 'Investment',
    author: 'James Anderson',
    date: 'Jun 18, 2026',
    readTime: '7 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 18,
    title: 'The Role of Natural Light in Modern Home Design',
    excerpt:
      'Natural light can make rooms feel larger, brighter and more comfortable. Discover simple ways to maximize it.',
    category: 'Lifestyle',
    author: 'Olivia Martin',
    date: 'Jun 12, 2026',
    readTime: '5 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 19,
    title: 'Questions to Ask Before Making a Property Offer',
    excerpt:
      'Before making an offer, consider the property condition, market activity, costs and other factors that may affect your decision.',
    category: 'Buying',
    author: 'Sophia Williams',
    date: 'Jun 07, 2026',
    readTime: '6 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 20,
    title: 'The Future of Smart and Sustainable Properties',
    excerpt:
      'Discover how smart technology, sustainable materials and energy-conscious design are shaping the future of modern properties.',
    category: 'Market',
    author: 'Daniel Carter',
    date: 'Jun 01, 2026',
    readTime: '8 min read',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  }
]
