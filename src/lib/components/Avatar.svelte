<script lang="ts">
  import AvatarBauhaus from './AvatarBauhaus.svelte';
  import AvatarBeam from './AvatarBeam.svelte';
  import AvatarMarble from './AvatarMarble.svelte';
  import AvatarPixel from './AvatarPixel.svelte';
  import AvatarRing from './AvatarRing.svelte';
  import AvatarSunset from './AvatarSunset.svelte';
  import { DEFAULTS } from './CONSTANTS';
  const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'] as const;
  const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' } as const;

  type DeprecatedVariantsKeys = keyof typeof deprecatedVariants;
  type Variants = typeof variants;

  export let variant: Variants[number] = 'marble';
  export let colors = DEFAULTS.colors;
  export let name = DEFAULTS.name;
  export let square = DEFAULTS.square;
  export let size = DEFAULTS.size;

  let props = { colors, name, square, size };

  let finalVariant: Variants[number] = 'bauhaus';

  const avatars = {
    bauhaus: AvatarBauhaus,
    beam: AvatarBeam,
    ring: AvatarRing,
    marble: AvatarMarble,
    pixel: AvatarPixel,
    sunset: AvatarSunset,
  };

  const checkedVariant = (_variant: Variants[number]) => {
    if (Object.keys(deprecatedVariants).includes(_variant)) {
      finalVariant = deprecatedVariants[_variant as DeprecatedVariantsKeys];
      return;
    }

    if (variants.includes(_variant)) {
      finalVariant = _variant;
      return;
    }

    finalVariant = 'marble';
  };

  // Reacts to prop changes creating a new object
  // Thus, rerendering the Child beacuse of the key-block
  $: props = { colors, name, square, size };
  $: checkedVariant(variant);
</script>

{#key props}
  {#key finalVariant}
    <svelte:component this={avatars[finalVariant]} {...props} />
  {/key}
{/key}
