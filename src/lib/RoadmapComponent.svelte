<script>
  import CourseRecommendations from './CourseRecommendations.svelte'; 

  export let events = [];
  export let checkedStates = {};
  export let local_name = "";

  function toggleCheckedState(index) {
    // Toggle the checked state
    checkedStates[index] = !checkedStates[index];
    // Save checked states directly to localStorage
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
            on:click={() => toggleCheckedState(index)}
          >
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
            on:click={() => toggleCheckedState(index)}
          >
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
  .roadmap-container {
    /* Styles for the roadmap container if needed */
  }

  .card {
    cursor: pointer; /* Change cursor to pointer */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
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
    position: relative;
    background-color: #2d2d2d; /* Darker background to highlight checked state */
    box-shadow: 0 0 0 4px rgb(82, 201, 82); /* Green border */
    filter: brightness(1.1); /* Slightly brighter to give a green hue effect */
  }
  .checked-event::before {
    content: '✔'; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px; 
    color: rgb(82, 201, 82); 
    z-index: 1;
  }
  .card:hover {
    background-color: #2b2b2b; /* Slightly lighter background on hover */
    box-shadow: 0 0 0 4px rgba(82, 201, 82, 0.8); /* Slightly lighter green border on hover */
  }
</style>
