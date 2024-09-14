<script>
  import RoadmapComponent from "$lib/RoadmapComponent.svelte";
  import { t } from "svelte-i18n";

  let events;
  $: events = [];
</script>

<div class="text-center py-8">
  <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
    {#if $t('home.roadmaps.ai.name')}
      {$t('home.roadmaps.ai.name')}
    {/if}
  </h1>
  
  <p class="text-xl text-gray-300 max-w-2xl mx-auto">
    {#if $t('home.roadmaps.ai.description')}
      {$t('home.roadmaps.ai.description')}
    {/if}
  </p>
</div>

<RoadmapComponent {events} />
