import type { Category } from './projects';

// Real customer reviews copied from Google and Facebook.
// Names shortened to first name + last initial for privacy.
// Displayed as plain quotes only (no review schema): Google does not show
// review stars for reviews a business publishes about itself.
export interface Review {
  name: string;
  source: 'Google' | 'Facebook';
  text: string;
  /** Short project label shown under the name */
  project?: string;
  services: Category[];
}

export const reviews: Review[] = [
  {
    name: 'Christopher A.',
    source: 'Google',
    project: 'Retaining wall & stairs',
    text: 'Needed my retaining wall replaced. Spoke with Chris and he came right out. Did an absolutely amazing job, talked me through the process and had excellent communication with me. He had ideas of how to update the stairs and provided options. This was a great experience and the wall and stairs never looked better. For a reasonable price and the peace of mind of someone that keeps you in the loop of what they are doing, there is no better.',
    services: ['retaining-walls', 'concrete-steps'],
  },
  {
    name: 'Heather',
    source: 'Google',
    project: 'Fireplace rebuild · Granby, MO',
    text: 'We live in Granby MO, had a house fire in October and our home had to be entirely gutted. The demo crew mistakenly ripped our fireplace out during the demo process. CM Home Remedies rebuilt our fireplace and did a fantastic job! The details he added in are just awesome. I would definitely recommend this company to anyone needing any type of masonry work or home improvements.',
    services: ['fireplace-repair', 'brick-stone-masonry', 'chimney-repair'],
  },
  {
    name: 'Marion F.',
    source: 'Google',
    project: 'Retaining wall & stonework',
    text: 'We couldn’t be more pleased with the exceptional stone masonry work Chris completed for us. From start to finish, his professionalism, craftsmanship, and attention to detail truly set him apart.',
    services: ['retaining-walls', 'brick-stone-masonry', 'hardscapes-patios'],
  },
  {
    name: 'Lee H.',
    source: 'Google',
    text: 'Chris did everything he said he would do and more. We ran into a small problem but he handled it with true professionalism. I would highly recommend him.',
    services: ['foundation-repair', 'landscaping'],
  },
  {
    name: 'Brian L.',
    source: 'Facebook',
    text: 'Recommend this company and their work. Repairs done well, timely, and within quote. Professional, courteous, and knowledgeable.',
    services: ['foundation-repair', 'chimney-repair'],
  },
  {
    name: 'Leslie R.',
    source: 'Google',
    text: 'Chris did a awesome job, did as promised and his communication thru out the project was spot on. Will definitely be calling him back for more projects.',
    services: ['concrete-steps', 'landscaping', 'hardscapes-patios'],
  },
  {
    name: 'Brian P.',
    source: 'Google',
    text: 'Chris is always super knowledgeable and timely. He’s got great attention to detail.',
    services: ['chimney-repair', 'foundation-repair'],
  },
  {
    name: 'Cody M.',
    source: 'Facebook',
    text: 'Highly recommend! Great guy! Honest work! No disappointments!',
    services: ['hardscapes-patios', 'landscaping'],
  },
];

export const reviewsFor = (c: Category, n = 2) => reviews.filter((r) => r.services.includes(c)).slice(0, n);
