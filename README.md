# Svelte-Boring-Avatars

A Svelte port of [Boring Avatars](https://github.com/boringdesigners/boring-avatars).

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
