const COLORS = {
  OFF: '#111',
  WHITE: '#f0f0f0',

  DARKRED: '#8B2635',       // Dark medical red
  RED: '#E71D36',           // Emergency red
  BRIGHTRED: '#FF6B6B',     // Light alert red

  DARKBLUE: '#1F487E',      // Deep medical blue
  BLUE: '#3A86FF',          // Hospital blue
  BRIGHTBLUE: '#8BB8FF',    // Light medical blue

  YELLOW: '#FFD166',        // Medical alert yellow

  UI_ACCENT: '#06AED5',     // Medical teal
  UI_ACCENT2: '#F75C03'     // Safety orange
};

COLORS.schemes = {
  default: {
    name: 'Super Medium',
    off: '#111',
    primary: COLORS.RED,
    primarybright: COLORS.BRIGHTRED,
    secondary: COLORS.BLUE,
    secondarybright: COLORS.BRIGHTBLUE,
    tertiary: COLORS.YELLOW
  },

  blue: {
    name: 'Star Warrior',
    off: '#111',
    primary: '#1F487E',      // Medical navy
    primarybright: '#3A86FF', // Hospital blue
    secondary: '#FF9F1C',    // Safety orange
    secondarybright: '#FFD166', // Warning yellow
    tertiary: '#d7fdf9'
  },

  purple: {
    name: 'Galactic Royal',
    off: '#111',
    primary: '#540D6E',      // Deep medical purple
    primarybright: '#9B5DE5', // Light medical purple
    secondary: '#06D6A0',    // Medical teal
    secondarybright: '#8BB8FF', // Light medical blue
    tertiary: '#50FFF2'
  },

  green: {
    name: 'Space Joker',
    off: '#111',
    primary: '#1B512D',      // Surgical green
    primarybright: '#4CB963', // Light medical green
    secondary: '#3A86FF',    // Hospital blue
    secondarybright: '#8BB8FF', // Light medical blue
    tertiary: '#FAFAFA'
  },

  yellow: {
    name: 'Solar Flare',
    off: '#111',
    primary: '#FF9F1C',      // Safety yellow-orange
    primarybright: '#FFD166', // Warning yellow
    secondary: '#E71D36',    // Emergency red
    secondarybright: '#FF6B6B', // Light alert red
    tertiary: '#278ECC'
  },

  red: {
    name: 'Trail Blazer',
    off: '#111',
    primary: '#E71D36',      // Emergency red
    primarybright: '#FF6B6B', // Light alert red
    secondary: '#DADADA',
    secondarybright: '#EFEFEF',
    tertiary: '#666'
  },

  rgb: {
    name: 'Mint Choco',
    off: '#111',
    primary: '#06D6A0',      // Medical teal
    primarYBRIGht: '#07F5B5', // Bright medical teal
    secondary: '#3A86FF',    // Hospital blue
    secondarybright: '#8BB8FF', // Light medical blue
    tertiary: '#eb3434'
  },

  cheetah: {
    name: 'Cheetah SoL',
    off: '#111',
    primary: '#F75C03',      // Safety orange
    primarYBright: '#FB8500', // Bright safety orange
    secondary: '#635c54',
    secondarybright: '#8a857f',
    tertiary: '#ebebeb'
  },

  black: {
    name: 'Ash Nova',
    off: '#111',
    primary: '#495057',      // Medical gray
    primarybright: '#ADB5BD', // Light medical gray
    secondary: '#FFF',
    secondarybright: '#FFF',
    tertiary: '#B8B8B8'
  }
};

COLORS.options = Object.keys(COLORS.schemes);

if (typeof localStorage === 'undefined') {
  COLORS.initial = 'default';
} else {
  COLORS.initial = COLORS.schemes[localStorage.getItem('colorScheme') || 'default'];
}

module.exports = COLORS;