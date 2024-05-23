// Class for general global variables.

export const MODULE_ID = 'foundryvtt-actor-studio';
export const LOG_PREFIX = 'ACTOR STUDIO | ';
export const MYSTERY_MAN = 'icons/svg/mystery-man.svg';
export const NONE_ICON = 'icons/svg/cancel.svg';

export const enum DEFAULT_PACKS {
  RACES = 'dnd5e.races',
  RACE_FEATURES = 'dnd5e.races',
  CLASSES = 'dnd5e.classes',
  CLASS_FEATURES = 'dnd5e.classfeatures',
  SUBCLASSES = 'dnd5e.subclasses',
  ITEMS = 'dnd5e.items',
  SPELLS = 'dnd5e.spells',
  RULES = 'dnd5e.rules',
  BACKGROUNDS = 'dnd5e.backgrounds',
}

export const DEFAULT_SOURCES = {
  races: [DEFAULT_PACKS.RACES],
  racialFeatures: [DEFAULT_PACKS.RACE_FEATURES],
  classes: [DEFAULT_PACKS.CLASSES],
  subclasses: [DEFAULT_PACKS.SUBCLASSES],
  backgrounds: [DEFAULT_PACKS.BACKGROUNDS],
  spells: [DEFAULT_PACKS.SPELLS],
  feats: [],
  items: [DEFAULT_PACKS.ITEMS],
};

export const INTEGRATION = {
  TOKENIZER: {
    VERSION: '3.3.0',
  },
};

export const MERGE_OPTIONS = {
  insertKeys: true,
  insertValues: true,
  overwrite: true,
  recursive: true,
  inplace: false,
};

export type CLASS_LEVEL = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;