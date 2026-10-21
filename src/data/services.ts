import type { Category } from './projects';

export interface Service {
  slug: Category;
  name: string;
  /** Short label for cards and menus */
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  heroId: string;
  cardBlurb: string;
  intro: string[];
  offerings: { title: string; text: string }[];
  signsTitle?: string;
  signs?: string[];
  faqs: { q: string; a: string }[];
  galleryIds: string[];
  related: Category[];
}

export const services: Service[] = [
  {
    slug: 'hardscapes-patios',
    name: 'Hardscapes & Patios',
    short: 'Hardscapes & Patios',
    metaTitle: 'Hardscapes & Patios in Joplin, MO | CM Home Remedies',
    metaDescription:
      'Custom patios, pool decks, walkways, outdoor fireplaces and stone features in Joplin and the Four State Area. 25+ years of hands-on masonry. Call (417) 438-4330.',
    h1: 'Hardscapes & Patios in Joplin, MO',
    lede: 'Patios, pool decks, walkways, outdoor fireplaces and stonework that turn a yard into somewhere you actually want to spend time.',
    heroId: 'pool-deck-brick-columns',
    cardBlurb: 'Patios, pool decks, walkways, fire features and outdoor fireplaces built on a proper base.',
    intro: [
      'A good hardscape starts underground. Most patios and walkways that heave, sink or crack in Southwest Missouri were built on too little base, on clay that never drained, or without any thought to where the water goes. We excavate, build a compacted base sized to the job, set grade so water runs away from your house, and only then lay the finished surface.',
      'From a simple paver patio off the back door to a full backyard with a pool deck, brick columns, planting beds and an outdoor fireplace, we handle the masonry, the concrete and the landscaping so you deal with one crew from start to finish.',
    ],
    offerings: [
      { title: 'Patios', text: 'Paver, natural stone and concrete patios sized and graded for how you use your yard.' },
      { title: 'Pool decks', text: 'Concrete and stone pool surrounds that tie into fencing, columns and landscape beds.' },
      { title: 'Walkways & entries', text: 'Front walks, garden paths and entry landings that match the house.' },
      { title: 'Outdoor fireplaces & fire pits', text: 'Stone and brick fireplaces, fire pits and pavilion masonry built to burn safely.' },
      { title: 'Outdoor kitchens & grill islands', text: 'Stone and brick grill islands with countertops built for outdoor cooking.' },
      { title: 'Drainage & grading', text: 'Grading, drains and dry wells so water leaves the patio instead of pooling on it.' },
    ],
    faqs: [
      {
        q: 'Pavers, natural stone or concrete: which is best for a patio?',
        a: 'It depends on budget, look and use. Poured concrete is usually the most economical. Pavers handle freeze-thaw well and individual pieces can be lifted and reset. Natural stone has the most character. We will walk the site with you and show you samples before you decide.',
      },
      {
        q: 'How long does a patio project take?',
        a: 'Most residential patios take a few days to a couple of weeks depending on size, access and weather. We give you a schedule with your estimate and keep you updated if rain moves anything.',
      },
      {
        q: 'Can you build around an existing pool or deck?',
        a: 'Yes. We regularly tie new hardscape into existing pools, decks, fences and foundations, and plan the grading so water drains away from all of them.',
      },
    ],
    galleryIds: ['pool-deck-brick-columns', 'brick-outdoor-fireplace', 'brick-stone-fire-pit', 'stone-grill-island', 'outdoor-fireplace', 'brick-stone-fire-pit-patio'],
    related: ['retaining-walls', 'landscaping', 'concrete-steps'],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    short: 'Retaining Walls',
    metaTitle: 'Retaining Wall Contractor in Joplin, MO | CM Home Remedies',
    metaDescription:
      'Block and stone retaining walls built with proper base, drainage and backfill in Joplin, Webb City, Carthage and the Four State Area. Free estimates: (417) 438-4330.',
    h1: 'Retaining Wall Contractor in Joplin, MO',
    lede: 'Segmental block and stone retaining walls built to hold the hill, handle the water and look good doing it.',
    heroId: 'tiered-retaining-wall',
    cardBlurb: 'Block and stone walls with real drainage, built-in steps and clean caps.',
    intro: [
      'Retaining walls fail for a handful of predictable reasons: no compacted base, no drainage behind the wall, the wrong backfill, or a wall that is simply too tall for how it was built. Clay soil holds water, and water behind a wall is weight the wall was never designed for.',
      'We build every wall on a compacted gravel leveling pad, with drain pipe and clean drainage stone behind the block, and caps glued down to finish it. Where the yard needs a way through, we build the steps into the wall itself, like the brick-and-stone stairs on the project above.',
    ],
    offerings: [
      { title: 'Segmental block walls', text: 'Engineered interlocking block in a range of colors and textures.' },
      { title: 'Natural stone walls', text: 'Stacked and mortared stone for a more traditional look.' },
      { title: 'Built-in steps', text: 'Brick, block or stone stairs set into the wall with matching caps.' },
      { title: 'Terraced & stepped walls', text: 'Walls that step with the grade or terrace a steep slope into usable yard.' },
      { title: 'Drainage behind the wall', text: 'Perforated drain pipe, clean stone and outlets so water cannot build up.' },
      { title: 'Wall repair & rebuilds', text: 'Leaning, bulging or collapsed walls taken down and rebuilt correctly.' },
    ],
    signsTitle: 'Signs your existing wall needs attention',
    signs: [
      'The wall is leaning, bowing or bulging outward',
      'Blocks or stones have shifted, cracked or fallen out',
      'Soil or water is seeping through joints or the base',
      'The ground behind the wall is sinking or the top is separating',
    ],
    faqs: [
      {
        q: 'How tall can a retaining wall be?',
        a: 'Shorter landscape walls can usually be built without special design. Taller walls, walls holding back a driveway or structure, and walls on steep slopes often need geogrid reinforcement or an engineered design, and may need a permit. We will tell you up front what your wall requires.',
      },
      {
        q: 'Why does drainage matter so much?',
        a: 'Water-saturated soil pushes much harder on a wall than dry soil. Drain pipe and clean stone behind the wall give that water a way out, which is the single biggest factor in how long a wall lasts.',
      },
      {
        q: 'Can you fix my leaning wall instead of replacing it?',
        a: 'Sometimes a section can be taken down and rebuilt with proper base and drainage. If the whole wall was built wrong, rebuilding it is usually the better long-term value. We will show you what we find.',
      },
    ],
    galleryIds: ['tiered-retaining-wall', 'retaining-wall-steps', 'tiered-retaining-wall-curve', 'brick-steps-closeup', 'stepped-retaining-wall'],
    related: ['hardscapes-patios', 'concrete-steps', 'landscaping'],
  },
  {
    slug: 'brick-stone-masonry',
    name: 'Brick & Stone Masonry',
    short: 'Brick & Stone Masonry',
    metaTitle: 'Masonry Contractor in Joplin, MO | Brick & Stone | CM Home Remedies',
    metaDescription:
      'Brick and stone masonry in Joplin and the Four State Area: porch columns, pillars, steps, outdoor fireplaces, tuckpointing and repairs. Call (417) 438-4330.',
    h1: 'Masonry Contractor in Joplin, MO',
    lede: 'Columns, pillars, steps, fireplaces, tuckpointing and repairs, laid by hand by a mason with more than 25 years in the trades.',
    heroId: 'stone-porch-columns',
    cardBlurb: 'Porch columns, pillars, fireplaces, steps, tuckpointing and repairs.',
    intro: [
      'Masonry is the part of a house people notice first and the part that lasts longest when it is done right. We build new brick and stone work and repair what is already there, matching brick, stone and mortar color so repairs blend in instead of standing out.',
      'Whether it is replacing tired wood porch posts with stone columns, building brick pillars for a fence line, or laying up an outdoor fireplace under a pavilion, the work is done by hand with attention to the joints, the caps and the details that make masonry look finished.',
    ],
    offerings: [
      { title: 'Porch columns & pillars', text: 'Stone and brick columns, fence pillars and gate posts with stone caps.' },
      { title: 'Fireplaces', text: 'Indoor fireplace rebuilds and outdoor stone and brick fireplaces with mantels, hearths and arches.' },
      { title: 'Steps & stoops', text: 'Brick and stone steps with chiseled or cast stone treads.' },
      { title: 'Tuckpointing', text: 'Grinding out failing mortar and repointing joints to match the original.' },
      { title: 'Brick & stone repair', text: 'Replacing cracked, spalled or missing brick and stone.' },
      { title: 'Mailboxes & accents', text: 'Brick mailboxes, stone veneer and entry details that finish the front of a home.' },
    ],
    faqs: [
      {
        q: 'Can you match my existing brick or stone?',
        a: 'In most cases, yes. We source brick and stone to match size, color and texture as closely as possible, and tint mortar to blend with your existing joints.',
      },
      {
        q: 'What is tuckpointing and do I need it?',
        a: 'Tuckpointing is removing deteriorated mortar and replacing it with new. If your joints are crumbling, recessed or letting water in, repointing protects the brick and keeps small problems from becoming structural ones.',
      },
      {
        q: 'Do you build indoor fireplaces too?',
        a: 'Yes. We build and rebuild indoor fireplaces as well as outdoor ones, including rebuilding a fireplace from scratch after fire damage or demolition.',
      },
    ],
    galleryIds: ['stone-porch-columns', 'curved-brick-steps', 'brick-outdoor-fireplace', 'outdoor-fireplace-build', 'brick-mailbox', 'brick-pillars'],
    related: ['chimney-repair', 'hardscapes-patios', 'concrete-steps'],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    short: 'Landscaping',
    metaTitle: 'Landscaping in Joplin, MO | Grading, Sod & Drainage | CM Home Remedies',
    metaDescription:
      'Landscape beds, sod, grading, drainage and finish landscaping around new hardscapes in Joplin and the Four State Area. Call CM Home Remedies at (417) 438-4330.',
    h1: 'Landscaping in Joplin, MO',
    lede: 'Grading, drainage, sod and landscape beds that finish off the hardscape and make the whole yard look like one project.',
    heroId: 'brick-pillars',
    cardBlurb: 'Grading, sod, drainage and landscape beds that finish the job.',
    intro: [
      'A new wall or patio only looks finished when the ground around it does. We take projects all the way through: rough and finish grading, drainage, sod, edging, mulch and planting beds, so you are not left with a new patio surrounded by dirt.',
      'Because we build the hardscape too, the landscaping is planned with it from the start. Beds are edged to the patio line, sod is laid to the top of the wall, and grades are set so water moves away from the house.',
    ],
    offerings: [
      { title: 'Grading', text: 'Rough and finish grading to shape the yard and move water the right way.' },
      { title: 'Drainage solutions', text: 'French drains, downspout extensions and swales for soggy yards.' },
      { title: 'Sod installation', text: 'Fresh sod laid on prepared soil around new construction and hardscapes.' },
      { title: 'Landscape beds', text: 'Edged beds with mulch and planting around porches, patios and pools.' },
      { title: 'Bed edging', text: 'Paver, stone and block edging for clean, low-maintenance bed lines.' },
      { title: 'Site cleanup', text: 'Removing old beds, shrubs and debris before new work begins.' },
    ],
    faqs: [
      {
        q: 'Do you only do landscaping as part of a masonry project?',
        a: 'Landscaping is most often part of a larger hardscape or masonry job, which is where we add the most value. Call us with your project and we will tell you if it is a good fit.',
      },
      {
        q: 'My yard stays wet after it rains. Can you help?',
        a: 'Yes. Standing water usually comes down to grading or downspouts dumping next to the house. We find where the water is coming from and give it somewhere to go, with regrading, drains or both.',
      },
      {
        q: 'When is the best time to lay sod?',
        a: 'Spring and early fall are ideal in Southwest Missouri, but sod can be laid most of the growing season with proper watering. We will give you care instructions when the job is done.',
      },
    ],
    galleryIds: ['pool-deck-brick-columns', 'tiered-retaining-wall', 'stone-porch-columns', 'brick-pillars'],
    related: ['hardscapes-patios', 'retaining-walls', 'foundation-repair'],
  },
  {
    slug: 'foundation-repair',
    name: 'Foundation Repair',
    short: 'Foundation Repair',
    metaTitle: 'Foundation Repair in Joplin, MO | CM Home Remedies',
    metaDescription:
      'Foundation crack repair, excavation, waterproofing and drainage in Joplin and the Four State Area. Get to the source of the problem. Call (417) 438-4330.',
    h1: 'Foundation Repair in Joplin, MO',
    lede: 'Cracked, leaking or settling foundation walls dug out, repaired at the source and protected with drainage that keeps water away.',
    heroId: 'foundation-excavation',
    cardBlurb: 'Excavation, crack repair, waterproofing and drainage at the source.',
    intro: [
      'Most foundation problems in this area come back to water. Clay soils swell when they are wet and shrink when they dry out, heavy spring rains saturate the ground, and downspouts dumping next to the house push water right against the wall. Over time that pressure shows up as cracks, leaks and bowing.',
      'Rather than patching a crack from the inside and hoping, we excavate along the outside of the wall, expose the damage, repair it, and install drainage so the water that caused it has somewhere else to go.',
    ],
    offerings: [
      { title: 'Exterior excavation', text: 'Digging out along the foundation to see and reach the real damage.' },
      { title: 'Crack repair', text: 'Repairing cracked block and poured walls from the outside.' },
      { title: 'Waterproofing', text: 'Sealing exterior walls before backfill to keep moisture out.' },
      { title: 'Footing drains', text: 'Perforated drain pipe and stone at the footing to relieve water pressure.' },
      { title: 'Downspout & grade corrections', text: 'Moving roof water and regrading so it drains away from the house.' },
      { title: 'Foundation wall rebuilds', text: 'Replacing failing stone or brick foundations under older homes with new block walls.' },
    ],
    signsTitle: 'Signs of foundation trouble',
    signs: [
      'Cracks in foundation walls, especially wider at one end or stair-stepping through block',
      'Water or damp spots in the basement or crawl space after rain',
      'Doors and windows that stick or no longer latch',
      'Gaps around window frames or cracks in drywall above doors',
      'Walls that bow or lean inward',
    ],
    faqs: [
      {
        q: 'Is every foundation crack a serious problem?',
        a: 'No. Hairline shrinkage cracks are common in poured concrete. Cracks that are widening, letting in water, offset from one side to the other, or paired with sticking doors and bowing walls should be looked at. We will tell you honestly which kind you have.',
      },
      {
        q: 'Why repair from the outside?',
        a: 'Exterior repair lets us fix the crack, waterproof the wall and install drainage at the footing all at once, which deals with the cause rather than just the symptom.',
      },
      {
        q: 'Do you handle structural foundation work like piering?',
        a: 'Call us and describe what you are seeing. If your home needs an engineer or a specialized piering contractor, we will tell you so.',
      },
    ],
    galleryIds: ['block-foundation-wall', 'foundation-excavation', 'foundation-crack', 'foundation-trench'],
    related: ['landscaping', 'brick-stone-masonry', 'retaining-walls'],
  },
  {
    slug: 'chimney-repair',
    name: 'Chimney Repair',
    short: 'Chimney Repair',
    metaTitle: 'Chimney Repair & Rebuilds in Joplin, MO | CM Home Remedies',
    metaDescription:
      'Brick and stone chimney repair in Joplin and the Four State Area: rebuilds, new crowns and caps, tuckpointing and flashing. Call CM Home Remedies at (417) 438-4330.',
    h1: 'Chimney Repair & Rebuilds in Joplin, MO',
    lede: 'Brick and stone chimneys repointed, rebuilt and capped so they stop leaking and keep standing for decades.',
    heroId: 'stone-chimney-cap',
    cardBlurb: 'Rebuilds, crowns, caps, tuckpointing and flashing for brick and stone chimneys.',
    intro: [
      'A chimney takes more weather than any other part of the house. Rain soaks the crown, freeze-thaw cycles pop mortar out of the joints, and once water gets in, brick spalls and stone loosens. Left alone, a small crown crack becomes a leaning, leaking chimney.',
      'We work from lifts and scaffolding to repair chimneys properly: tuckpointing failing joints, rebuilding damaged sections from the roofline up, pouring new crowns, setting stone caps and covers, and making sure the flashing sheds water instead of funneling it inside.',
    ],
    offerings: [
      { title: 'Chimney rebuilds', text: 'Taking down and relaying damaged brick or stone, from the top courses to the roofline.' },
      { title: 'Crowns', text: 'New poured concrete crowns that overhang and shed water away from the brick.' },
      { title: 'Stone caps & covers', text: 'Stone caps and chimney covers to keep rain, animals and debris out.' },
      { title: 'Tuckpointing', text: 'Repointing failing mortar joints on brick and stone chimneys.' },
      { title: 'Flashing', text: 'Step and counter flashing that seals the chimney to the roof.' },
      { title: 'Stone chimney restoration', text: 'Resetting loose fieldstone and repointing to match the original look.' },
    ],
    signsTitle: 'Signs your chimney needs repair',
    signs: [
      'Crumbling or missing mortar between brick or stone',
      'Cracked or deteriorating crown on top of the chimney',
      'Water stains on ceilings or walls near the chimney',
      'Brick that is flaking, spalling or falling onto the roof',
      'A chimney that is visibly leaning',
    ],
    faqs: [
      {
        q: 'What is a chimney crown and why does it matter?',
        a: 'The crown is the concrete slab on top of the chimney around the flue. It is the chimney’s roof. When it cracks, water runs straight down into the masonry, which is one of the most common causes of chimney damage.',
      },
      {
        q: 'Do you do chimney sweeping or inspections of the flue?',
        a: 'We focus on the masonry: brick, stone, mortar, crowns, caps and flashing. For sweeping and flue inspections, a certified chimney sweep is the right call.',
      },
      {
        q: 'Can you repair a stone chimney without making it look patched?',
        a: 'Yes. We reset loose stones, source matching stone where needed, and tint mortar so repairs blend with the rest of the chimney.',
      },
    ],
    galleryIds: ['stone-chimney-cap', 'fieldstone-chimney', 'owner-chimney', 'brick-chimney-scaffold', 'brick-chimney-crown'],
    related: ['fireplace-repair', 'brick-stone-masonry', 'foundation-repair'],
  },
  {
    slug: 'fireplace-repair',
    name: 'Fireplace Repair & Construction',
    short: 'Fireplaces',
    metaTitle: 'Fireplace Repair in Joplin, MO | Indoor & Outdoor | CM Home Remedies',
    metaDescription:
      'Fireplace repair, rebuilds and new outdoor fireplaces in brick and stone across Joplin and the Four State Area. Fire-damaged and failing fireplaces rebuilt right. Call (417) 438-4330.',
    h1: 'Fireplace Repair & Construction in Joplin, MO',
    lede: 'Indoor fireplace repairs and rebuilds, and custom outdoor brick and stone fireplaces built to be the centerpiece of your patio.',
    heroId: 'brick-outdoor-fireplace',
    cardBlurb: 'Indoor fireplace repairs and rebuilds, plus custom outdoor fireplaces and fire pits.',
    intro: [
      'A fireplace takes more heat and weather than any other masonry in or around your home. Cracked firebox brick, loose or missing mortar, a crumbling hearth or a damaged surround are more than cosmetic: they let heat and moisture into places they should never reach.',
      'We repair and rebuild fireplaces in brick and stone, from resetting a firebox to rebuilding an entire fireplace after fire damage or a remodel gone wrong. Outside, we build custom outdoor fireplaces, pavilion fireplaces and fire pits with real masonry, matched to the house and built on a proper footing.',
    ],
    offerings: [
      { title: 'Fireplace repair', text: 'Cracked brick, failing mortar joints, loose stone and damaged hearths repaired and repointed.' },
      { title: 'Fireplace rebuilds', text: 'Complete rebuilds after fire damage, demolition or years of deterioration.' },
      { title: 'Firebox & hearth', text: 'Firebrick replacement and new hearths in brick, stone or cast stone.' },
      { title: 'Surrounds & mantels', text: 'Brick and stone surrounds and mantels refaced or built new.' },
      { title: 'Outdoor fireplaces', text: 'Freestanding and pavilion fireplaces with arches, niches and herringbone details.' },
      { title: 'Fire pits', text: 'Brick and stone fire pits built on a solid base for the patio.' },
    ],
    signsTitle: 'Signs your fireplace needs repair',
    signs: [
      'Cracked or crumbling firebrick inside the firebox',
      'Mortar joints that are recessed, sandy or falling out',
      'Loose, cracked or shifting hearth or surround stone',
      'Smoke or soot staining on the face of the fireplace',
      'Damage from a house fire, water leak or remodel',
    ],
    faqs: [
      {
        q: 'Can you rebuild a fireplace that was torn out or fire damaged?',
        a: 'Yes. We have rebuilt fireplaces from scratch after house fires and demolition, matching the original look or improving on it with new details.',
      },
      {
        q: 'Do you build outdoor fireplaces?',
        a: 'Yes. We build freestanding brick and stone outdoor fireplaces, fireplaces inside covered pavilions, and fire pits, all on a proper concrete footing so they stay level and solid.',
      },
      {
        q: 'Do you clean or inspect fireplace flues?',
        a: 'We focus on the masonry: firebox, hearth, surround, mantel and chimney exterior. For sweeping and flue inspections, a certified chimney sweep is the right call.',
      },
    ],
    galleryIds: ['brick-outdoor-fireplace', 'outdoor-fireplace-build', 'outdoor-fireplace', 'brick-stone-fire-pit', 'stone-grill-island'],
    related: ['chimney-repair', 'brick-stone-masonry', 'hardscapes-patios'],
  },
  {
    slug: 'concrete-steps',
    name: 'Concrete, Walkways & Steps',
    short: 'Concrete & Steps',
    metaTitle: 'Concrete Walkways & Steps in Joplin, MO | CM Home Remedies',
    metaDescription:
      'Concrete sidewalks, walkways, entry steps and brick and stone stairs in Joplin and the Four State Area. Built on a proper base. Call (417) 438-4330.',
    h1: 'Concrete Walkways & Steps in Joplin, MO',
    lede: 'Sidewalks, walkways, landings and entry steps in concrete, brick and stone, formed and finished to last.',
    heroId: 'curved-brick-steps',
    cardBlurb: 'Sidewalks, walkways, landings and brick or stone entry steps.',
    intro: [
      'Concrete is only as good as what is under it. We form every walkway and landing on compacted base, set the slope so water runs off, and finish the surface for traction, whether that is a long sidewalk on new construction or a front walk on a 1940s house.',
      'Steps are where masonry and concrete meet. We build brick and stone steps on solid concrete footings, with chiseled stone treads and brick risers that make an entry look intentional.',
    ],
    offerings: [
      { title: 'Sidewalks & walkways', text: 'New and replacement walks for homes and new construction.' },
      { title: 'Entry steps & stoops', text: 'Brick, block and stone steps with stone treads.' },
      { title: 'Landings & pads', text: 'Concrete landings at stairs, doors and equipment pads.' },
      { title: 'Tear-out & replacement', text: 'Removing cracked, sunken or heaved concrete and pouring new.' },
      { title: 'Stairs in retaining walls', text: 'Steps built into block walls to connect sidewalks and yards.' },
      { title: 'Finishes', text: 'Broom finishes for traction and clean tooled edges and joints.' },
    ],
    faqs: [
      {
        q: 'Why does concrete crack?',
        a: 'All concrete shrinks as it cures, which is why control joints are cut to tell it where to crack. Cracks beyond that usually come from a poor base, water underneath, or heavy loads. A compacted base and good drainage prevent most of it.',
      },
      {
        q: 'How soon can we walk on new concrete?',
        a: 'Foot traffic is usually fine after a day or two, depending on the weather. We will tell you when it is ready for heavier use.',
      },
      {
        q: 'Can you replace just my front steps?',
        a: 'Yes. Step replacement is one of our most common jobs, whether you want concrete steps or brick and stone.',
      },
    ],
    galleryIds: ['walkway-before', 'walkway-forms', 'walkway-after', 'curved-brick-steps', 'brick-steps-landing', 'brick-knee-walls', 'walkway-brick-step', 'concrete-sidewalk'],
    related: ['retaining-walls', 'brick-stone-masonry', 'hardscapes-patios'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
