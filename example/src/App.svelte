<script>
  import Avatar from 'svelte-boring-avatars';

  let name = 'John Doe';
  let size = 50;
  let square = false;
  let colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];

  let selectedColor = '#000';
  let variant = 'marble';

  function removeItemByIndex(arr, i) {
    const copy = [...arr];
    copy.splice(i, 1);
    return copy;
  }

  $: console.log(variant);
</script>

<div class="inputs">
  <div class="input-with-">
    <label for="name"> <h3>Name</h3> </label>
    <input bind:value={name} id="name" />
  </div>

  <div class="input-with-label">
    <label for="size"> <h3>Size</h3></label>
    <div class="range">
      <input type="range" bind:value={size} min={0} max={200} list="marks" id="size" />
      <datalist id="marks">
        <option value="0" label="0" />
        <option value="100" label="100" />
        <option value="200" label="200" />
      </datalist>
    </div>
  </div>
  <div class="input-with-label flex">
    <label for="square"> <h3>Squared</h3></label>
    <input type="checkbox" bind:checked={square} />
  </div>

  <div class="input-with-label">
    <label for="variant"> <h3>Variant</h3></label>
    <select name="variant" id="variant" bind:value={variant}>
      <option value="marble">Marble</option>
      <option value="bauhaus">Bauhaus</option>
      <option value="pixel">Pixel</option>
      <option value="beam">Beam</option>
      <option value="ring">Ring</option>
      <option value="sunset">Sunset</option>
    </select>
  </div>

  <div class="color-container">
    <div>
      <h3>Color</h3>
      <div class="input-with-label flex">
        <input type="color" bind:value={selectedColor} />
        <button on:click={() => (colors = [...colors, selectedColor])}> Add color </button>
      </div>
    </div>

    <div class="color-square-container">
      {#each colors as color, i}
        <div class="color">
          <div class="color-square" style="background-color: {color};" />
          <p>
            {color}
          </p>

          <button
            class="delete"
            on:click={() => {
              colors = removeItemByIndex(colors, i);
            }}
          >
            &#10006;
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="avatar">
  <Avatar {name} {size} {square} {colors} {variant} />
</div>

<style>
  h3 {
    margin: unset;
    font-size: 1rem;
    margin-bottom: 0.2rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    padding: 0;
  }

  input {
    margin: 0;
    padding: 0.3rem 0.4rem;
  }

  input[type='color'] {
    padding: 0;
  }
  select {
    margin: unset;
    max-width: fit-content;
  }

  button {
    font-size: 14px;
    padding: 0.2rem 0.4rem;
    margin: unset;
  }

  datalist {
    display: flex;
    padding: 0 0.4rem;
    font-size: 0.85rem;
    justify-content: space-between;
  }

  .delete {
    position: absolute;
    top: -10%;
    right: -10%;
    padding: 0;
    width: 18px;
    height: 18px;
    font-size: 10px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }
  .delete:hover {
    cursor: pointer;
  }

  .color:hover .delete {
    display: flex;
  }
  .color-square {
    width: 50px;
    height: 50px;
  }

  .color {
    font-size: 0.75rem;
    font-weight: 500;
    position: relative;
  }

  .color-container {
    display: grid;
    gap: 1rem;
  }
  .color-square-container {
    display: flex;
    gap: 1rem;
  }
  .inputs {
    display: grid;
    gap: 2rem;
    padding: 1rem;
  }

  .input-with-label {
    display: grid;
    gap: 0.2rem;
  }

  .avatar {
    padding-top: 2rem;
    padding-left: 1rem;
  }

  .range {
    width: fit-content;
  }
  .flex {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }
</style>
