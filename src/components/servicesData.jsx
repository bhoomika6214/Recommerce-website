import {
  FiBookOpen,
  FiPackage,
  FiMic,
  FiBarChart2,
  FiZap,
  FiGitBranch,
  FiFileText,
  FiVideo,
  FiUsers,
} from 'react-icons/fi';

// Same nine services as the current Services section (smaller images for cards).
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=75`;

export const services = [
  {
    id: '01',
    title: 'Training & Workshops',
    description:
      'Hands-on capability building programs that equip teams to implement circular economy principles at scale.',
    image: img('1552664730-d307ca884978'),
    icon: <FiBookOpen />,
  },
  {
    id: '02',
    title: 'Expo',
    description: 'Showcasing innovations and solutions driving circular progress.',
    image: img('1511578314322-379afb476865'),
    icon: <FiPackage />,
  },
  {
    id: '03',
    title: 'Conference',
    description:
      'Global thought-leadership forums connecting policymakers, industry experts, and sustainability innovators.',
    image: img('1475721027785-f74eccf877e2'),
    icon: <FiMic />,
  },
  {
    id: '04',
    title: 'Market Research & Analysis',
    description:
      'Data-backed market intelligence to uncover circular opportunities, trends, and strategic growth pathways.',
    image: img('1460925895917-afdab827c52f'),
    icon: <FiBarChart2 />,
  },
  {
    id: '05',
    title: 'Product Launches',
    description:
      'End-to-end launch management for circular products that resonate with markets and stakeholders.',
    image: img('1521737604893-d14cc237f11d'),
    icon: <FiZap />,
  },
  {
    id: '06',
    title: 'Supply Chain Project Management',
    description:
      'Cross-functional execution of sustainable supply chain transformations with measurable business outcomes.',
    image: img('1566576721346-d4a3b4eaeb55'),
    icon: <FiGitBranch />,
  },
  {
    id: '07',
    title: 'Green Reporting',
    description:
      'Transparent ESG and sustainability reporting frameworks aligned with global compliance and impact metrics.',
    image: img('1454165804606-c3d57bc86b40'),
    icon: <FiFileText />,
  },
  {
    id: '08',
    title: 'Webinar & Seminar',
    description:
      'Engaging digital and in-person knowledge sessions to accelerate awareness, adoption, and innovation.',
    image: img('1591115765373-5207764f72e7'),
    icon: <FiVideo />,
  },
  {
    id: '09',
    title: 'Community Engagement',
    description:
      'Purpose-driven campaigns and partnerships that mobilize communities for long-term circular impact.',
    image: img('1522202176988-66273c2fd55f'),
    icon: <FiUsers />,
  },
];

export const enquiryLink = (title) =>
  `mailto:info@recommerceeco.com?subject=${encodeURIComponent(`Enquiry: ${title}`)}`;
