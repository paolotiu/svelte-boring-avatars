<script lang="ts">
  import { getNumber, getRandomColor } from '../utils';
  import { DEFAULTS } from './CONSTANTS';

  const ELEMENTS = 4;
  const SIZE = 80;

  function generateColors(name: string, colors: string[]) {
    const numFromName = getNumber(name);
    const range = colors && colors.length;

    const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
      color: getRandomColor(numFromName + i, colors, range),
    }));

    return elementsProperties;
  }

  export let size = DEFAULTS.size;
  export let name = DEFAULTS.name;
  export let square = DEFAULTS.square;
  export let colors = DEFAULTS.colors;

  const properties = generateColors(name, colors);
  const _name = name.replace(/\s/g, '');
</script>

<svg
  viewBox={'0 0 ' + SIZE + ' ' + SIZE}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
>
  <mask id="mask__sunset" maskUnits="userSpaceOnUse" x={0} y={0} width={SIZE} height={SIZE}>
    <rect width={SIZE} height={SIZE} rx={square ? undefined : SIZE * 2} fill="white" />
  </mask>
  <g mask="url(#mask__sunset)">
    <path fill={'url(#gradient_paint0_linear_' + _name + ')'} d="M0 0h80v40H0z" />
    <path fill={'url(#gradient_paint1_linear_' + _name + ')'} d="M0 40h80v40H0z" />
  </g>
  <defs>
    <linearGradient
      id={'gradient_paint0_linear_' + _name}
      x1={SIZE / 2}
      y1={0}
      x2={SIZE / 2}
      y2={SIZE / 2}
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color={properties[0].color} />
      <stop offset={1} stop-color={properties[1].color} />
    </linearGradient>
    <linearGradient
      id={'gradient_paint1_linear_' + _name}
      x1={SIZE / 2}
      y1={SIZE / 2}
      x2={SIZE / 2}
      y2={SIZE}
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color={properties[2].color} />
      <stop offset={1} stop-color={properties[3].color} />
    </linearGradient>
  </defs>
</svg>
