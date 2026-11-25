// Contact details and the logic that turns the contact form into an email.

export const GENERAL_EMAIL = 'info@recommerceeco.com';

// The team. `topic` is what the visitor picks in the form; the message goes to that person.
export const TEAM = [
  {
    topic: 'Sponsor & Exhibitor',
    title: 'Sponsor & Exhibitor Reach Out',
    name: 'Ms. Kavitha Jayaraman',
    phone: '+91 7022250709',
    email: 'kavitha@recommerceeco.com',
  },
  {
    topic: 'Speaker',
    title: 'Speaker Acquisition Reach Out',
    name: 'Ms. Sarita Pradhan',
    phone: '+91 9606025447',
    email: 'sarita@urdhvamanagement.com',
  },
  {
    topic: 'Delegate',
    title: 'Delegates Reach Out',
    name: 'Ms. Jennifer',
    phone: '+91 7338674797',
    email: 'jennifer@recommerceeco.com',
  },
  {
    topic: 'Media & Association',
    title: 'Media & Association Reach Out',
    name: 'Ms. Bhagyashree Chinchansoor',
    phone: '+91 7338674789',
    email: 'bhagyashree@urdhvamanagement.com',
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
