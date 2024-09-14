<script>
  import RoadmapComponent from "$lib/RoadmapComponent.svelte";
  import { t } from "svelte-i18n";

  let events;
  $: events = [
    {
      title: $t("roadmaps.beginner.events.logic.title"),
      description: $t("roadmaps.beginner.events.logic.description"),
      courses: [
        { name: "Curso de JavaScript", url: "https://cursojs.com", language: "pt", rank: 1 },
        { name: "React for Beginners", url: "https://reactcourse.com", language: "en", rank: 2 },
        { name: "Curso Avançado de Git", url: "https://cursogit.com", language: "es", rank: 3 },
        { name: "Especial Python", url: "https://especialpython.com", language: "pt", rank: 'X' }
      ]
    },
    {
      title: $t("roadmaps.beginner.events.dataStructures.title"),
      description: $t("roadmaps.beginner.events.dataStructures.description"),
    },
    {
      title: $t("roadmaps.beginner.events.algorithms.title"),
      description: $t("roadmaps.beginner.events.algorithms.description"),
    },
    {
      title: $t("roadmaps.beginner.events.webDevelopment.title"),
      description: $t("roadmaps.beginner.events.webDevelopment.description"),
    },
    {
      title: $t("roadmaps.beginner.events.git.title"),
      description: $t("roadmaps.beginner.events.git.description"),
    },
  ];

 let checkedStates = JSON.parse(localStorage.getItem('checkedStates_beginner')) || {};
</script>

<div class="text-center py-8">
  <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
    {#if $t('home.roadmaps.beginner.name')}
      {$t('home.roadmaps.beginner.name')}
    {/if}
  </h1>
  
  <p class="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
    {#if $t('home.roadmaps.beginner.description')}
      {$t('home.roadmaps.beginner.description')}
    {/if}
  </p>
</div>

<RoadmapComponent {events} {checkedStates} />
