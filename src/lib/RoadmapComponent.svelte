<script>
  import CourseRecommendations from "./CourseRecommendations.svelte";

  export let events = [];
  export let checkedStates = {};
  export let local_name = "";

  function toggleCheckedState(index) {
    checkedStates[index] = !checkedStates[index];
    localStorage.setItem(local_name, JSON.stringify(checkedStates));
  }
</script>

<div class="roadmap-container">
  <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid max-w-screen-lg">
    {#each events as event, index}
      {#if index % 2 === 0}
        <div class="flex md:contents flex-row-reverse">
          <div
            class="card relative p-4 my-6 text-gray-200 bg-gray-700 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto
              {checkedStates[index] ? 'checked-event' : ''}"
          >
            <button
              class="toggle-button"
              on:click={() => toggleCheckedState(index)}
            >
              {checkedStates[index] ? "✖" : "✔"}
            </button>
            <h3 class="text-lg font-semibold lg:text-xl">{event.title}</h3>
            <p class="mt-2 leading-6">{event.description}</p>
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
            class="card relative p-4 my-6 text-gray-200 bg-gray-700 rounded-xl col-start-6 col-end-10 mr-auto
              {checkedStates[index] ? 'checked-event' : ''}"
          >
            <button
              class="toggle-button"
              on:click={() => toggleCheckedState(index)}
            >
              {checkedStates[index] ? "✖" : "✔"}
            </button>
            <h3 class="text-lg font-semibold lg:text-xl">{event.title}</h3>
            <p class="mt-2 leading-6">{event.description}</p>
            <CourseRecommendations courses={event.courses} />
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .card {
    position: relative;
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .bg-gray-800 {
    background-color: #2d2d2d;
  }
  .bg-gray-700 {
    background-color: #3c3c3c;
  }
  .text-gray-200 {
    color: #d4d4d4;
  }
  .checked-event {
    background-color: #2d2d2d;
    box-shadow: 0 0 0 4px rgb(82, 201, 82);
    filter: brightness(1.1);
  }
  .checked-event::before {
    content: "✔";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: rgb(82, 201, 82);
    z-index: 1;
  }
  .card:hover {
    background-color: #2b2b2b;
    box-shadow: 0 0 0 4px rgba(82, 201, 82, 0.8);
  }
  .toggle-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    color: #d4d4d4;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .toggle-button:hover {
    color: rgb(82, 201, 82);
  }
</style>
