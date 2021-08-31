<script lang="ts">
  import AvatarBauhaus from './AvatarBauhaus.svelte';
  import AvatarBeam from './AvatarBeam.svelte';
  import AvatarMarble from './AvatarMarble.svelte';
  import AvatarPixel from './AvatarPixel.svelte';
  import AvatarRing from './AvatarRing.svelte';
  import AvatarSunset from './AvatarSunset.svelte';
  const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'] as const;
  const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' } as const;

  type DeprecatedVariantsKeys = keyof typeof deprecatedVariants;
  type Variants = typeof variants;

  export let variant: Variants[number] = 'marble';
  export let colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];
  export let name = 'Clara Barton';
  export let square = false;
  export let size = 40;

  let finalVariant: Variants[number] = 'bauhaus';

  const avatars = {
    bauhaus: AvatarBauhaus,
    beam: AvatarBeam,
    ring: AvatarRing,
    marble: AvatarMarble,
    pixel: AvatarPixel,
    sunset: AvatarSunset,
  };

  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(variant)) {
      finalVariant = deprecatedVariants[variant as DeprecatedVariantsKeys];
      return;
    }

    if (variants.includes(variant)) {
      finalVariant = variant;
      return;
    }

    finalVariant = 'marble';
  };

  const props = { variant, colors, name, square, size };
  checkedVariant();
</script>

<svelte:component this={avatars[finalVariant]} {...props} />
