<script>
  import CourseRecommendations from './CourseRecommendations.svelte'; // Importa o componente de cursos
  export let events = []; // Lista de passos do roadmap
</script>

<div class="">
  <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid max-w-screen-lg">
    {#each events as event, index}
      {#if index % 2 === 0}
        <div class="flex md:contents flex-row-reverse">
          <div
            class="relative p-4 my-6 text-gray-200 bg-gray-700 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
          >
            <h3 class="text-lg font-semibold lg:text-xl">{event.title}</h3>
            <p class="mt-2 leading-6">{event.description}</p>
            <!-- Passando corretamente o courses -->
            <CourseRecommendations courses={event.courses} />
          </div>
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div
                class="w-1 h-full bg-purple-400 rounded-t-full bg-gradient-to-b from-purple-400 to-purple-400"
              ></div>
            </div>
            <div
              class="absolute w-6 h-6 -mt-3 bg-gray-800 border-4 border-purple-400 rounded-full top-1/2"
            ></div>
          </div>
        </div>
      {:else}
        <div class="flex md:contents">
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div class="w-1 h-full bg-purple-400"></div>
            </div>
            <div
              class="absolute w-6 h-6 -mt-3 bg-gray-800 border-4 border-purple-400 rounded-full top-1/2"
            ></div>
          </div>
          <div
            class="relative p-4 my-6 text-gray-200 bg-gray-700 rounded-xl col-start-6 col-end-10 mr-auto"
          >
            <h3 class="text-lg font-semibold lg:text-xl">{event.title}</h3>
            <p class="mt-2 leading-6">{event.description}</p>
            <!-- Passando corretamente o courses -->
            <CourseRecommendations courses={event.courses} />
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .bg-gray-800 {
    background-color: #2d2d2d;
  }
  .bg-gray-700 {
    background-color: #3c3c3c;
  }
  .text-gray-200 {
    color: #d4d4d4;
  }
</style>
