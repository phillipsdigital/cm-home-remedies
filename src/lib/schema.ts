import { site, serviceAreas } from '../data/site';
import { services } from '../data/services';

const abs = (path: string) => new URL(path, site.url).toString();

export const businessId = abs('/#business');

/** Site-wide LocalBusiness entity, output on every page. */
export function businessSchema() {
  const areaServed = serviceAreas.flatMap((s) =>
    s.towns.map((t) => ({ '@type': 'City', name: `${t}, ${s.abbr}` })),
  );

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': businessId,
    name: site.name,
    slogan: site.tagline,
    url: abs('/'),
    telephone: '+1-417-438-4330',
    logo: abs('/icon-512.png'),
    image: abs('/og-default.jpg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { '@type': 'GeoCoordinates', ...site.geo },
    areaServed,
    founder: { '@type': 'Person', name: site.ownerName, jobTitle: 'Owner' },
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Masonry & Hardscape Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs(`/services/${s.slug}/`) },
      })),
    },
  };

  if (site.email && !site.email.startsWith('[')) data.email = site.email;
  const sameAs = [site.facebookUrl].filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;
  if (site.hours.length) {
    data.openingHoursSpecification = site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.schemaDays,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return data;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs('/'),
    name: site.name,
    publisher: { '@id': businessId },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.href),
    })),
  };
}

export function serviceSchema(s: { name: string; slug: string; metaDescription: string }, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: abs(`/services/${s.slug}/`),
    image,
    provider: { '@id': businessId },
    areaServed: [
      { '@type': 'City', name: 'Joplin, MO' },
      { '@type': 'AdministrativeArea', name: 'Four State Area (MO, KS, OK, AR)' },
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
