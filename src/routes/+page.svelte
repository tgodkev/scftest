<script>
  /** @type {import('./$types').PageData } */
  export let data;

  export let { phones, laptops, decor } = data;
  $: ({ phones, laptops, decor } = data);

  let showInfo = [];
  console.log(phones, "<---- phones");
</script>

<section class="py-44">
  <div class="flex justify-center">
    <h2 class="text-white text-4xl font-bold pb-10">Phones</h2>
  </div>
  <div class="flex overflow-auto md:flex-wrap md:justify-center ">
    {#each phones.products as phone, i}
      <div
        on:mouseenter={() => (showInfo[i] = !showInfo[i])}
        on:mouseleave={() => (showInfo[i] = !showInfo[i])}
        on:focus={() => (showInfo[i] = !showInfo[i])}
        class="hover:shadow-md hover:shadow-white my-2 mx-10 border-[2px] border-white p-20"
      >
        <div
          class="flex flex-col items-center  h-[25rem] w-[25rem] bg-cover bg-center"
          style="background-image: url({phone.images[0]});"
        >
          {#if showInfo[i]}
            <div>
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
