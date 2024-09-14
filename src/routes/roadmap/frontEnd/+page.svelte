<script>
  import RoadmapComponent from "$lib/RoadmapComponent.svelte";
  import { t } from "svelte-i18n";

  let events;
  $: events = [];
</script>

<div class="text-center py-8">
  <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
    {#if $t('home.roadmaps.frontEnd.name')}
      {$t('home.roadmaps.frontEnd.name')}
    {/if}
  </h1>
  
  <p class="text-xl text-gray-300 max-w-2xl mx-auto">
    {#if $t('home.roadmaps.frontEnd.description')}
      {$t('home.roadmaps.frontEnd.description')}
    {/if}
  </p>
</div>

<RoadmapComponent {events} />
