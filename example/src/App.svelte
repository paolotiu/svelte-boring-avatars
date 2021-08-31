<script lang="ts">
  import Avatar from 'svelte-boring-avatars';

  export let name = 'John Doe';
  export let size = 100;
</script>

<main style={`--size: ${size}px`}>
  <Avatar variant="bauhaus" {size} {name} />
  <Avatar variant="beam" {size} {name} />
  <Avatar variant="marble" {size} {name} />
  <Avatar variant="pixel" {size} {name} />
  <Avatar variant="ring" {size} {name} />
  <Avatar variant="sunset" {size} {name} />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--size), 1fr));
    gap: 1rem;
  }
</style>
