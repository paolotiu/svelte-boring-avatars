# Svelte-Boring-Avatars

A Svelte port of [Boring Avatars](https://github.com/boringdesigners/boring-avatars).

## Demo

[REPL](https://svelte.dev/repl/889946205a7542a4a6e0e1e7e98f37ba?version=3.42.4)

## Installation

```bash
npm install vue-boring-avatars

# or

yarn add vue-boring-avatars
```

## Usage

```svelte
<script lang="ts">
  import Avatar from 'svelte-boring-avatars';
</script>

<Avatar
  size={40}
  name="Maria Mitchell"
  variant="marble"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>
```

## Props

| Prop    | Type                                                     | Default                                                   |
| ------- | -------------------------------------------------------- | --------------------------------------------------------- |
| size    | number                                                   | 40                                                        |
| square  | boolean                                                  | false                                                     |
| variant | `"bauhaus", "beam", "marble", "pixel", "ring", "sunset"` | `"marble"`                                                |
| colors  | string[]                                                 | `["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]` |

## Reducing Bundle Size

This library is small as it is, but if you want to shave off some more load you can import a specific variant.

All the props stay the same except for the exclusion of `variant`.

```svelte
<script>
  import { AvatarBeam } from 'svelte-boring-avatars';
</script>

<AvatarBeam
  size={40}
  name="Maria Mitchell"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>
```
