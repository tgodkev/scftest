<script>
  import { fly } from "svelte/transition";
  /** @type {import('./$types').PageData } */
  export let data;

  export let { phones, laptops, decor } = data;
  $: ({ phones, laptops, decor } = data);

  let showInfo = [];
  console.log(phones.products, "<---- phones");
</script>

<section class="py-44">
  <div class="flex justify-start px-5 md:px-20">
    <h2 class="text-white text-4xl font-bold pb-10">Phones</h2>
  </div>
  <div
    class="flex overflow-auto md:flex-wrap md:justify-center md:overflow-hidden   "
  >
    {#each phones.products as phone, i}
      <div
        on:mouseenter={() => (showInfo[i] = !showInfo[i])}
        on:mouseleave={() => (showInfo[i] = !showInfo[i])}
        on:focus={() => (showInfo[i] = !showInfo[i])}
        class=" md:overflow-hidden"
      >
        <div
          class="flex flex-col items-center rounded-2xl  h-[25rem] w-[25rem] bg-cover bg-center hover:shadow-md hover:shadow-white my-2 mx-2"
          style="background-image: url({phone.images[2]});"
        >
          {#if showInfo[i]}
            <div
              in:fly={{ y: 700, duration: 900 }}
              out:fly={{ y: -700, duration: 900 }}
            >
              <h3 class="text-2xl font-bold text-white">{phone.title}</h3>
              <p class="text-xl font-bold text-black">{phone.description}</p>
              <p class="text-xl font-bold text-white">${phone.price}</p>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
