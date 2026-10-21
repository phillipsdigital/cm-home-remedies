import type { ImageMetadata } from 'astro';

import porch from '../assets/projects/stone-porch-columns-joplin-mo.jpg';
import retainingSteps from '../assets/projects/retaining-wall-brick-stone-steps.jpg';
import stepsTreads from '../assets/projects/brick-steps-stone-treads.jpg';
import steppedWall from '../assets/projects/stepped-block-retaining-wall.jpg';
import ownerChimney from '../assets/projects/owner-on-stone-chimney-repair.jpg';
import brickPillars from '../assets/projects/brick-pillars-new-sod.jpg';
import stoneChimneyCap from '../assets/projects/stone-chimney-new-cap.jpg';
import fieldstoneChimney from '../assets/projects/fieldstone-chimney-rebuild.jpg';
import sidewalkNew from '../assets/projects/concrete-sidewalk-new-construction.jpg';
import walkwayStep from '../assets/projects/concrete-walkway-brick-step.jpg';
import brickStep from '../assets/projects/brick-step-stone-cap.jpg';
import foundationDig from '../assets/projects/foundation-excavation-repair.jpg';
import foundationCrack from '../assets/projects/foundation-wall-crack-excavated.jpg';
import foundationTrench from '../assets/projects/foundation-drainage-trench.jpg';
import brickChimneyScaffold from '../assets/projects/brick-chimney-rebuild-scaffold.jpg';
import brickChimneyCrown from '../assets/projects/brick-chimney-new-crown.jpg';
import fireplace from '../assets/projects/outdoor-stone-fireplace-pavilion.jpg';
import poolDeck from '../assets/projects/pool-deck-landscaping-brick-columns.jpg';
import curvedSteps from '../assets/projects/curved-brick-steps-stone-caps.jpg';
import fireplaceBuild from '../assets/projects/outdoor-fireplace-herringbone-build.jpg';
import brickFireplace from '../assets/projects/freestanding-brick-outdoor-fireplace.jpg';
import grillIsland from '../assets/projects/stone-grill-island.jpg';
import mailbox from '../assets/projects/brick-mailbox-stone-cap.jpg';
import tieredWall from '../assets/projects/tiered-block-retaining-wall.jpg';
import tieredWallCurve from '../assets/projects/tiered-retaining-wall-curve.jpg';
import firePit from '../assets/projects/brick-stone-fire-pit.jpg';
import firePitPatio from '../assets/projects/brick-stone-fire-pit-patio.jpg';
import kneeWalls from '../assets/projects/brick-knee-walls-concrete-steps.jpg';
import walkBefore from '../assets/projects/walkway-before-flagstone.jpg';
import walkForms from '../assets/projects/walkway-forms-steps.jpg';
import walkAfter from '../assets/projects/walkway-after-concrete.jpg';
import brickLanding from '../assets/projects/brick-steps-brick-landing.jpg';
import blockFoundation from '../assets/projects/block-foundation-wall-rebuild.jpg';

export type Category =
  | 'hardscapes-patios'
  | 'retaining-walls'
  | 'brick-stone-masonry'
  | 'landscaping'
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
}

export const categoryLabels: Record<Category, string> = {
  'hardscapes-patios': 'Hardscapes & Patios',
  'retaining-walls': 'Retaining Walls',
  'brick-stone-masonry': 'Brick & Stone Masonry',
  landscaping: 'Landscaping',
  'foundation-repair': 'Foundation Repair',
  'chimney-repair': 'Chimney Repair',
  'fireplace-repair': 'Fireplaces',
  'concrete-steps': 'Concrete & Steps',
};

export const projects: Project[] = [
  {
    id: 'stone-porch-columns',
    image: porch,
    title: 'Stone porch columns, steps & landscape beds',
    alt: 'Front porch with new split-face stone columns, stone-capped steps and paver-edged landscape beds on a home in Joplin, MO',
    categories: ['brick-stone-masonry', 'landscaping', 'hardscapes-patios'],
    focus: '50% 45%',
  },
  {
    id: 'pool-deck-brick-columns',
    image: poolDeck,
    title: 'Pool deck, brick fence columns & landscaping',
    alt: 'Backyard pool with stained concrete deck, brick fence columns with stone caps and new landscape beds',
    categories: ['hardscapes-patios', 'landscaping', 'brick-stone-masonry'],
    focus: '50% 55%',
  },
  {
    id: 'retaining-wall-steps',
    image: retainingSteps,
    title: 'Block retaining wall with brick & stone steps',
    alt: 'Segmental block retaining wall along a street with brick risers, stone stair treads and a new concrete landing',
    categories: ['retaining-walls', 'concrete-steps', 'hardscapes-patios'],
    focus: '50% 42%',
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
    id: 'stepped-retaining-wall',
    image: steppedWall,
    title: 'Stepped retaining wall, mid-build',
    alt: 'Gray segmental block retaining wall stepping down with the grade during construction beside a pool deck',
    categories: ['retaining-walls', 'hardscapes-patios'],
    focus: '50% 55%',
  },
  {
    id: 'brick-pillars',
    image: brickPillars,
    title: 'Brick pillars with stone caps',
    alt: 'Row of new brick pillars with stone caps along a property line beside fresh sod and a large block wall',
    categories: ['brick-stone-masonry', 'landscaping'],
    focus: '50% 60%',
  },
  {
    id: 'outdoor-fireplace',
    image: fireplace,
    title: 'Outdoor stone fireplace & pavilion masonry',
    alt: 'Outdoor limestone fireplace with cast stone mantel, brick arch and brick knee walls under a covered pavilion',
    categories: ['fireplace-repair', 'brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 45%',
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
    id: 'owner-chimney',
    image: ownerChimney,
    title: 'On the lift finishing a stone chimney',
    alt: 'Chris, owner of CM Home Remedies, on a lift beside a repointed stone chimney with a new cap',
    categories: ['chimney-repair'],
    focus: '60% 40%',
  },
  {
    id: 'brick-chimney-scaffold',
    image: brickChimneyScaffold,
    title: 'Brick chimney rebuild',
    alt: 'Tall brick chimney being rebuilt with scaffolding, owner standing on top',
    categories: ['chimney-repair', 'brick-stone-masonry'],
    focus: '50% 40%',
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
    id: 'foundation-excavation',
    image: foundationDig,
    title: 'Foundation excavation & crack repair',
    alt: 'Excavated foundation wall with a visible crack and new drain pipe as a crew works in the trench',
    categories: ['foundation-repair'],
    focus: '40% 50%',
  },
  {
    id: 'foundation-crack',
    image: foundationCrack,
    title: 'Exposing a cracked foundation wall',
    alt: 'Foundation wall dug out to the footing showing a vertical crack before repair',
    categories: ['foundation-repair'],
    focus: '40% 45%',
  },
  {
    id: 'foundation-trench',
    image: foundationTrench,
    title: 'Foundation drainage trench',
    alt: 'Long trench along a foundation wall with perforated drain pipe and a mini excavator',
    categories: ['foundation-repair'],
    focus: '50% 50%',
  },
  {
    id: 'concrete-sidewalk',
    image: sidewalkNew,
    title: 'Concrete sidewalk on new construction',
    alt: 'Freshly finished concrete sidewalk in forms along a newly framed building',
    categories: ['concrete-steps'],
    focus: '50% 55%',
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
  {
    id: 'curved-brick-steps',
    image: curvedSteps,
    title: 'Curved brick steps with stone-capped knee walls',
    alt: 'Curved red brick front steps with brick knee walls and chiseled stone caps leading to an arched brick and stone entry',
    categories: ['brick-stone-masonry', 'concrete-steps'],
    focus: '50% 55%',
  },
  {
    id: 'tiered-retaining-wall',
    image: tieredWall,
    title: 'Two-tier block retaining wall on new construction',
    alt: 'Two-tier segmental block retaining wall holding a sloped front yard below a new farmhouse-style home',
    categories: ['retaining-walls', 'landscaping'],
    focus: '50% 45%',
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
    id: 'brick-outdoor-fireplace',
    image: brickFireplace,
    title: 'Freestanding brick outdoor fireplace',
    alt: 'Tall freestanding brick outdoor fireplace and chimney with corbelled top and brick hearth wings on a new patio',
    categories: ['fireplace-repair', 'brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 40%',
  },
  {
    id: 'outdoor-fireplace-build',
    image: fireplaceBuild,
    title: 'Pavilion fireplace with herringbone brick, mid-build',
    alt: 'Outdoor pavilion fireplace under construction with stacked stone, arched wood niches and herringbone brick panels',
    categories: ['fireplace-repair', 'brick-stone-masonry', 'hardscapes-patios'],
    focus: '50% 50%',
  },
  {
    id: 'brick-stone-fire-pit',
    image: firePit,
    title: 'Brick and limestone fire pit',
    alt: 'Square fire pit with stacked limestone sides and a red brick cap on a concrete patio',
    categories: ['hardscapes-patios', 'brick-stone-masonry'],
    focus: '50% 55%',
  },
  {
    id: 'brick-stone-fire-pit-patio',
    image: firePitPatio,
    title: 'Fire pit on a backyard patio',
    alt: 'Limestone and brick fire pit surrounded by patio chairs on a backyard concrete patio',
    categories: ['hardscapes-patios'],
    focus: '50% 40%',
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
    id: 'brick-mailbox',
    image: mailbox,
    title: 'Brick mailbox with stone cap',
    alt: 'Brick mailbox column with arched brick detail, newspaper slot and rock-face stone cap at a curb',
    categories: ['brick-stone-masonry'],
    focus: '50% 50%',
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
    id: 'brick-knee-walls',
    image: kneeWalls,
    title: 'Brick knee walls with concrete steps',
    alt: 'New concrete steps framed by dark red brick knee walls with rowlock brick caps',
    categories: ['concrete-steps', 'brick-stone-masonry'],
    focus: '50% 40%',
  },
  {
    id: 'walkway-before',
    image: walkBefore,
    title: 'Before: overgrown flagstone walkway',
    alt: 'Before photo of a weedy, uneven flagstone walkway beside a house',
    categories: ['concrete-steps', 'landscaping'],
    focus: '50% 55%',
  },
  {
    id: 'walkway-forms',
    image: walkForms,
    title: 'During: walkway and steps formed with rebar',
    alt: 'Wood forms and rebar set for a new concrete walkway with steps down a sloped backyard',
    categories: ['concrete-steps'],
    focus: '50% 50%',
  },
  {
    id: 'walkway-after',
    image: walkAfter,
    title: 'After: new concrete walkway',
    alt: 'Freshly finished concrete walkway replacing an old flagstone path through a shaded backyard',
    categories: ['concrete-steps'],
    focus: '50% 45%',
  },
  {
    id: 'block-foundation-wall',
    image: blockFoundation,
    title: 'New block foundation wall under an older home',
    alt: 'New concrete block foundation wall laid under the floor framing of an older house to replace a failing stone foundation',
    categories: ['foundation-repair'],
    focus: '50% 55%',
  },
];

export const byId = (id: string) => {
  const p = projects.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project id: ${id}`);
  return p;
};

export const forCategory = (c: Category) => projects.filter((p) => p.categories.includes(c));
