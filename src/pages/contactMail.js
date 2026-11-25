// Contact details and the logic that turns the contact form into an email.

export const GENERAL_EMAIL = 'info@recommerceeco.com';

// The enquiry form used by every "Enquire Now" button on the site.
export const ENQUIRY_URL = 'https://events.recommerceeco.com/?f=r6GLjfFNemQAVNai05mp&e=O4XrnthpX51ToWC48v5y';

// The team. `topic` is what the visitor picks in the form; the message goes to that person.
export const TEAM = [
  {
    topic: 'Sponsorship & Exhibitor',
    role: 'Sponsorship & Exhibitor',
    name: 'Janani Gowda',
    first: 'Janani',
    desc: 'Contact Janani for sponsorship and exhibitor opportunities.',
    phone: '+91 7338674800',
    email: 'janani@recommerceeco.com',
  },
  {
    topic: 'Delegate',
    role: 'Delegates',
    name: 'Jennifer Lawrence',
    first: 'Jennifer',
    desc: 'Reach out to Jennifer for delegate registration and attendance.',
    phone: '+91 7338674797',
    email: 'jennifer@recommerceeco.com',
  },
  {
    topic: 'Speaker',
    role: 'Speaker Acquisition',
    name: 'Sarita Pradhan',
    first: 'Sarita',
    desc: 'Speak with Sarita about speaker opportunities and participation.',
    phone: '+91 9606025447',
    email: 'sarita@recommerceeco.com',
  },
  {
    topic: 'Media & Associate Partner',
    role: 'Media & Associate Partner',
    name: 'Shruti D S',
    first: 'Shruti',
    desc: 'Get in touch with Shruti for media and associate partnerships.',
    phone: '+91 7338674799',
    email: 'shruthi@recommerceeco.com',
  },
];

/**
 * Builds the mailto: address for a form submission.
 * `fields` = { name, email, phone, company, topic, message } (strings).
 * Returns { to, url }.
 */
export function buildMailto(fields) {
  const member = TEAM.find((t) => t.topic === fields.topic);
  const to = member ? member.email : GENERAL_EMAIL;
  const subject = `Website enquiry${fields.topic ? `: ${fields.topic}` : ''}`;
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.phone ? `Phone: ${fields.phone}` : null,
    fields.company ? `Organisation: ${fields.company}` : null,
    '',
    fields.message,
  ]
    .filter((line) => line !== null)
    .join('\n');
  return { to, url: `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
