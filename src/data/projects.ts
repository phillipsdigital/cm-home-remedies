import type { ImageMetadata } from 'astro';

// Finished projects only. Anything marked `inProgress` (foundation work, which is
// buried once it's done) shows on its own service page but never in Our Work or on the home page.
import entryWalkway from '../assets/projects/brick-entry-steps-walkway.jpg';
import stoneEntry from '../assets/projects/stone-veneer-entry-brick-steps.jpg';
import stoneExterior from '../assets/projects/stone-veneer-home-exterior.jpg';
import indoorFireplace from '../assets/projects/indoor-stacked-stone-fireplace.jpg';
import mailboxHerringbone from '../assets/projects/brick-mailbox-herringbone.jpg';
import brickFireplace from '../assets/projects/brick-outdoor-fireplace-finished.jpg';
import flagCloseup from '../assets/projects/flagstone-brick-border-closeup.jpg';
import flagCurve from '../assets/projects/flagstone-walkway-brick-border.jpg';
import flagDrive from '../assets/projects/flagstone-walkway-to-driveway.jpg';
import entranceWall from '../assets/projects/brick-stone-entrance-wall.jpg';
import flagSteps from '../assets/projects/flagstone-walkway-steps.jpg';
import flagStepsClose from '../assets/projects/flagstone-steps-closeup.jpg';
import porch from '../assets/projects/stone-porch-columns-joplin-mo.jpg';
import poolDeck from '../assets/projects/pool-deck-brick-columns.jpg';
import retainingSteps from '../assets/projects/retaining-wall-brick-stone-steps.jpg';
import stepsTreads from '../assets/projects/brick-steps-stone-treads.jpg';
import brickPillars from '../assets/projects/brick-pillars-stone-caps.jpg';
import pavilionFireplace from '../assets/projects/outdoor-stone-fireplace-pavilion.jpg';
import fieldstoneChimney from '../assets/projects/fieldstone-chimney-rebuild.jpg';
import stoneChimneyCap from '../assets/projects/stone-chimney-new-cap.jpg';
import ownerChimney from '../assets/projects/owner-on-stone-chimney-repair.jpg';
import brickChimneyCrown from '../assets/projects/brick-chimney-new-crown.jpg';
import walkwayStep from '../assets/projects/concrete-walkway-brick-step.jpg';
import brickStep from '../assets/projects/brick-step-stone-cap.jpg';
import tieredWall from '../assets/projects/tiered-block-retaining-wall.jpg';
import tieredWallCurve from '../assets/projects/tiered-retaining-wall-curve.jpg';
import firePit from '../assets/projects/brick-stone-fire-pit.jpg';
import firePitPatio from '../assets/projects/brick-stone-fire-pit-patio.jpg';
import grillIsland from '../assets/projects/stone-grill-island.jpg';
import mailbox from '../assets/projects/brick-mailbox-stone-cap.jpg';
import brickLanding from '../assets/projects/brick-steps-brick-landing.jpg';
import blockFoundation from '../assets/projects/block-foundation-wall-rebuild.jpg';
import foundationDig from '../assets/projects/foundation-excavation-repair.jpg';
import firePitFinished from '../assets/projects/brick-stone-fire-pit-patio-finished.jpg';
import fieldstoneVeneer from '../assets/projects/fieldstone-veneer-exterior.jpg';
import fireplaceWood from '../assets/projects/indoor-stone-fireplace-wood-ceiling.jpg';
import foundationCrack from '../assets/projects/foundation-wall-crack-excavated.jpg';

export type Category =
  | 'hardscapes-patios'
  | 'retaining-walls'
  | 'brick-stone-masonry'
  | 'foundation-repair'
  | 'chimney-repair'
  | 'fireplace-repair'
  | 'concrete-steps';

export interface Project {
  id: string;
  image: ImageMetadata;
  title: string;
  alt: string;
  categories: Category[];
  /** Focal point for cropped thumbnails (CSS object-position). */
  focus?: string;
  /** Work-in-progress shot: only shown on its service page. */
  inProgress?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  'hardscapes-patios': 'Hardscapes & Patios',
  'retaining-walls': 'Retaining Walls',
  'brick-stone-masonry': 'Brick & Stone Masonry',
  'fireplace-repair': 'Fireplaces',
  'chimney-repair': 'Chimney Repair',
  'concrete-steps': 'Walkways & Steps',
  'foundation-repair': 'Foundation Repair',
};

export const allProjects: Project[] = [
  {
    id: 'brick-stone-fire-pit-finished',
    image: firePitFinished,
    title: 'Brick and stone fire pit on a backyard patio',
    alt: 'Square fire pit with stacked limestone sides and a red brick cap on a backyard concrete patio with seating',
    categories: ['hardscapes-patios', 'fireplace-repair', 'brick-stone-masonry'],
    focus: '50% 60%',
  },
  {
    id: 'fieldstone-veneer-exterior',
    image: fieldstoneVeneer,
    title: 'Natural fieldstone exterior with brick soldier course',
    alt: 'Home exterior wall and porch column faced in natural fieldstone veneer with a red brick soldier course under the eave',
    categories: ['brick-stone-masonry'],
    focus: '40% 50%',
  },
  {
    id: 'indoor-fireplace-wood-ceiling',
    image: fireplaceWood,
    title: 'Stacked stone fireplace wall with timber mantel',
    alt: 'Full-height stacked stone fireplace wall with a timber mantel, raised stone hearth and wood stove insert under a vaulted pine ceiling',
    categories: ['fireplace-repair', 'brick-stone-masonry'],
    focus: '50% 70%',
  },
  {
    id: 'brick-entry-walkway',
    image: entryWalkway,
    title: 'Brick entry steps, knee walls & bordered walkway',
    alt: 'Curved red brick entry steps with stone-capped brick knee walls and a brick-bordered concrete walkway leading to an arched brick and stone front entry',
    categories: ['brick-stone-masonry', 'concrete-steps'],
    focus: '50% 55%',
  },
  {
    id: 'flagstone-walkway-drive',
    image: flagDrive,
    title: 'Flagstone walkway with brick soldier border',
    alt: 'Long mortared flagstone walkway with a curved brick soldier-course border running from the driveway',
    categories: ['concrete-steps'],
    focus: '50% 60%',
  },
  {
    id: 'brick-outdoor-fireplace',
    image: brickFireplace,
    title: 'Freestanding brick outdoor fireplace',
    alt: 'Tall freestanding brick outdoor fireplace with corbelled chimney, cast stone mantel cap and brick hearth seating on a concrete patio',
    categories: ['fireplace-repair', 'brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 45%',
  },
  {
    id: 'indoor-stone-fireplace',
    image: indoorFireplace,
    title: 'Floor-to-ceiling stacked stone fireplace',
    alt: 'Floor-to-ceiling stacked stone fireplace with a rustic wood beam mantel and stone hearth in a vaulted living room',
    categories: ['fireplace-repair', 'brick-stone-masonry'],
    focus: '50% 55%',
  },
  {
    id: 'flagstone-walkway-curve',
    image: flagCurve,
    title: 'Curved flagstone walkway and brick landing',
    alt: 'Curving mortared flagstone walkway with brick soldier border meeting a brick landing at the front door',
    categories: ['concrete-steps'],
    focus: '50% 50%',
  },
  {
    id: 'stone-porch-columns',
    image: porch,
    title: 'Stone porch columns & stone-capped steps',
    alt: 'Front porch with new split-face stone columns, stone-capped steps and paver edging on a home in Joplin, MO',
    categories: ['brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 45%',
  },
  {
    id: 'stone-veneer-exterior',
    image: stoneExterior,
    title: 'Stacked stone exterior with brick accents',
    alt: 'Home exterior clad in stacked stone veneer with brick window surrounds and brick entry steps',
    categories: ['brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'stone-veneer-entry',
    image: stoneEntry,
    title: 'Stone veneer entry with brick steps',
    alt: 'Covered front entry with stacked stone veneer walls, brick soldier-course header and wide red brick steps',
    categories: ['brick-stone-masonry', 'concrete-steps'],
    focus: '50% 60%',
  },
  {
    id: 'tiered-retaining-wall',
    image: tieredWall,
    title: 'Two-tier block retaining wall on new construction',
    alt: 'Two-tier segmental block retaining wall holding a sloped front yard below a new farmhouse-style home',
    categories: ['retaining-walls'],
    focus: '50% 45%',
  },
  {
    id: 'pool-deck-brick-columns',
    image: poolDeck,
    title: 'Pool deck and brick fence columns',
    alt: 'Backyard pool with stained concrete deck and brick fence columns with stone caps',
    categories: ['hardscapes-patios', 'brick-stone-masonry'],
    focus: '50% 55%',
  },
  {
    id: 'brick-stone-entrance',
    image: entranceWall,
    title: 'Brick and stone entrance wall',
    alt: 'Driveway entrance wall with brick pillars, stone caps and stacked stone panels topped with brick',
    categories: ['brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'brick-mailbox-herringbone',
    image: mailboxHerringbone,
    title: 'Brick mailbox with herringbone panel',
    alt: 'Brick mailbox column with herringbone brick panel, soldier border and rock-face stone cap',
    categories: ['brick-stone-masonry'],
    focus: '50% 45%',
  },
  {
    id: 'retaining-wall-steps',
    image: retainingSteps,
    title: 'Block retaining wall with brick & stone steps',
    alt: 'Segmental block retaining wall along a street with brick risers, stone stair treads and a new concrete landing',
    categories: ['retaining-walls', 'concrete-steps'],
    focus: '50% 42%',
  },
  {
    id: 'flagstone-walkway-steps',
    image: flagSteps,
    title: 'Flagstone walkway and steps',
    alt: 'Mortared flagstone front walkway with flagstone steps leading up to a porch',
    categories: ['concrete-steps'],
    focus: '50% 55%',
  },
  {
    id: 'outdoor-fireplace',
    image: pavilionFireplace,
    title: 'Pavilion fireplace with stone and brick arches',
    alt: 'Outdoor limestone fireplace with cast stone mantel, brick arch and brick knee walls under a covered pavilion',
    categories: ['fireplace-repair', 'brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 45%',
  },
  {
    id: 'brick-stone-fire-pit',
    image: firePit,
    title: 'Brick and limestone fire pit',
    alt: 'Square fire pit with stacked limestone sides and a red brick cap on a concrete patio',
    categories: ['hardscapes-patios', 'fireplace-repair', 'brick-stone-masonry'],
    focus: '50% 55%',
  },
  {
    id: 'tiered-retaining-wall-curve',
    image: tieredWallCurve,
    title: 'Curved terraced retaining wall',
    alt: 'Curved two-level block retaining wall wrapping a front porch with stacked stone veneer',
    categories: ['retaining-walls'],
    focus: '50% 40%',
  },
  {
    id: 'flagstone-closeup',
    image: flagCloseup,
    title: 'Flagstone set in mortar with brick border',
    alt: 'Close-up of mortared natural flagstone with a brick soldier-course border',
    categories: ['concrete-steps'],
    focus: '50% 50%',
  },
  {
    id: 'stone-grill-island',
    image: grillIsland,
    title: 'Stone grill island with tile countertop',
    alt: 'Outdoor grill island with tan stone veneer, brick accent course and tile countertop on a concrete patio',
    categories: ['hardscapes-patios', 'brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'fieldstone-chimney',
    image: fieldstoneChimney,
    title: 'Fieldstone chimney rebuild',
    alt: 'Rebuilt natural fieldstone chimney with a new cap rising beside yellow vinyl siding',
    categories: ['chimney-repair', 'brick-stone-masonry'],
    focus: '50% 30%',
  },
  {
    id: 'stone-chimney-cap',
    image: stoneChimneyCap,
    title: 'Stone chimney with new cap & flashing',
    alt: 'Stone chimney on a shingled roof with new stone cap, chimney cover and step flashing',
    categories: ['chimney-repair'],
    focus: '45% 50%',
  },
  {
    id: 'brick-chimney-crown',
    image: brickChimneyCrown,
    title: 'New chimney crown & cap',
    alt: 'Freshly poured concrete chimney crown with flue tile and stainless steel cap on a brick chimney',
    categories: ['chimney-repair'],
    focus: '50% 40%',
  },
  {
    id: 'owner-chimney',
    image: ownerChimney,
    title: 'Finishing a stone chimney from the lift',
    alt: 'Chris Muse, owner of CM Home Remedies, on a lift beside a repointed stone chimney with a new cap',
    categories: ['chimney-repair'],
    focus: '60% 40%',
  },
  {
    id: 'brick-steps-landing',
    image: brickLanding,
    title: 'Brick entry steps and landing',
    alt: 'Rebuilt red brick front steps with a new brick landing at the sidewalk',
    categories: ['concrete-steps', 'brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'brick-steps-closeup',
    image: stepsTreads,
    title: 'Brick risers with chiseled stone treads',
    alt: 'Close-up of new steps with red brick risers and rock-face stone treads set between block retaining walls',
    categories: ['concrete-steps', 'brick-stone-masonry', 'retaining-walls'],
    focus: '50% 55%',
  },
  {
    id: 'flagstone-steps-closeup',
    image: flagStepsClose,
    title: 'Flagstone step detail',
    alt: 'Close-up of mortared flagstone walkway and step with thick natural stone edges',
    categories: ['concrete-steps'],
    focus: '50% 50%',
  },
  {
    id: 'brick-stone-fire-pit-patio',
    image: firePitPatio,
    title: 'Fire pit on a backyard patio',
    alt: 'Limestone and brick fire pit surrounded by patio chairs on a backyard concrete patio',
    categories: ['hardscapes-patios', 'fireplace-repair'],
    focus: '50% 40%',
  },
  {
    id: 'brick-pillars',
    image: brickPillars,
    title: 'Brick pillars with stone caps',
    alt: 'Row of new brick pillars with stone caps along a property line beside a large block wall',
    categories: ['brick-stone-masonry'],
    focus: '50% 60%',
  },
  {
    id: 'brick-mailbox',
    image: mailbox,
    title: 'Brick mailbox with stone cap',
    alt: 'Brick mailbox column with arched brick detail, newspaper slot and rock-face stone cap at a curb',
    categories: ['brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'walkway-brick-step',
    image: walkwayStep,
    title: 'Concrete walkway & brick entry step',
    alt: 'New broom-finished concrete walkway leading to a brick step with stone cap at a front porch',
    categories: ['concrete-steps', 'brick-stone-masonry'],
    focus: '50% 50%',
  },
  {
    id: 'brick-step',
    image: brickStep,
    title: 'Brick step with stone cap',
    alt: 'Brick entry step with two-piece rock-face stone cap set on a new concrete walkway',
    categories: ['concrete-steps', 'brick-stone-masonry'],
    focus: '50% 45%',
  },
  // Foundation work is underground once finished, so these stay on the Foundation Repair page only.
  {
    id: 'block-foundation-wall',
    image: blockFoundation,
    title: 'New block foundation wall under an older home',
    alt: 'New concrete block foundation wall laid under the floor framing of an older house to replace a failing stone foundation',
    categories: ['foundation-repair'],
    focus: '50% 55%',
    inProgress: true,
  },
  {
    id: 'foundation-excavation',
    image: foundationDig,
    title: 'Foundation excavation & crack repair',
    alt: 'Excavated foundation wall with a visible crack and new drain pipe as a crew works in the trench',
    categories: ['foundation-repair'],
    focus: '40% 50%',
    inProgress: true,
  },
  {
    id: 'foundation-crack',
    image: foundationCrack,
    title: 'Exposing a cracked foundation wall',
    alt: 'Foundation wall dug out to the footing showing a vertical crack before repair',
    categories: ['foundation-repair'],
    focus: '40% 45%',
    inProgress: true,
  },
];

/** Finished work only: used by Our Work and the home page. */
export const projects = allProjects.filter((p) => !p.inProgress);

export const byId = (id: string) => {
  const p = allProjects.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project id: ${id}`);
  return p;
};

export const forCategory = (c: Category) => projects.filter((p) => p.categories.includes(c));
