// ─────────────────────────────────────────────────────────────
// Business info — edit here and it updates across the whole site
// (header, footer, schema markup, contact page, CTAs).
// Anything in [BRACKETS] still needs a real value from the client.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'CM Home Remedies',
  legalName: 'CM Home Remedies',
  tagline: 'Custom Masonry Specialist & More',
  url: 'https://cmhomeremedies.com', // live domain (also set in astro.config.mjs)
  phone: '(417) 438-4330',
  phoneHref: 'tel:+14174384330',
  email: 'mccservices00@yahoo.com',
  city: 'Joplin',
  region: 'MO',
  regionName: 'Missouri',
  country: 'US',
  // Service-area business: no street address is published on purpose.
  geo: { latitude: 37.0842, longitude: -94.5133 }, // Joplin city center
  // TODO: add real hours. Leave empty to hide hours everywhere. Example:
  // { days: 'Monday – Friday', schemaDays: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '17:00', label: '7:00 am – 5:00 pm' },
  hours: [] as { days: string; schemaDays: string[]; opens: string; closes: string; label: string }[],
  stats: {
    years: '25+',
    projects: '100+',
    rating: '4.9',
  },
  googleReviewsUrl: 'https://share.google/f5uufY5gp4ynkWiZs', // Google Business Profile link
  facebookUrl: '', // TODO: optional
  // FormSubmit (same as the J&B Electric site): form submissions go to Phillips Digital.
  // The FIRST submission sends a one-time "activate form" email to this address — click it.
  formEndpoint: 'https://formsubmit.co/natalee@phillipsdigitalsolutions.com',
  ownerName: 'Chris Muse',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Our Work', href: '/our-work/' },
  { label: 'Contact', href: '/contact/' },
];

// Towns listed on the Service Areas page and in schema "areaServed".
// TODO: confirm how far the client actually travels.
export const serviceAreas = [
  {
    state: 'Missouri',
    abbr: 'MO',
    primary: true,
    towns: ['Joplin', 'Webb City', 'Carthage', 'Carl Junction', 'Neosho', 'Duenweg', 'Duquesne', 'Oronogo', 'Airport Drive', 'Sarcoxie', 'Seneca', 'Diamond', 'Granby'],
  },
  { state: 'Kansas', abbr: 'KS', towns: ['Pittsburg', 'Galena', 'Baxter Springs', 'Columbus', 'Frontenac'] },
  { state: 'Oklahoma', abbr: 'OK', towns: ['Miami', 'Quapaw', 'Commerce', 'Grove', 'Afton'] },
  { state: 'Arkansas', abbr: 'AR', towns: ['Bentonville', 'Bella Vista', 'Gravette'] },
];
