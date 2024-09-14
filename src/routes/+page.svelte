<script>
  import { t } from "svelte-i18n";

  let roadmaps;
  $: roadmaps = [
    {
      name: $t("home.roadmaps.beginner.name"),
      description: $t("home.roadmaps.beginner.description"),
      titleColor: "text-green-400",
      route: "/roadmap/beginner", 
    },
    {
      name: $t("home.roadmaps.frontEnd.name"),
      description: $t("home.roadmaps.frontEnd.description"),
      titleColor: "text-yellow-400",
      route: "/roadmap/frontEnd", 
    },
    {
      name: $t("home.roadmaps.backEnd.name"),
      description: $t("home.roadmaps.backEnd.description"),
      titleColor: "text-yellow-400",
      route: "/roadmap/backEnd", 
    },
    {
      name: $t("home.roadmaps.fullStack.name"),
      description: $t("home.roadmaps.fullStack.description"),
      titleColor: "text-orange-400",
      route: "/roadmap/fullStack", 
    },
    {
      name: $t("home.roadmaps.database.name"),
      description: $t("home.roadmaps.database.description"),
      titleColor: "text-orange-400",
      route: "/roadmap/database", 
    },
    {
      name: $t("home.roadmaps.ai.name"),
      description: $t("home.roadmaps.ai.description"),
      titleColor: "text-purple-400",
      route: "/roadmap/ai", 
    },
  ];
</script>

<div
  class="flex flex-col items-center justify-start bg-gray-900 text-gray-300 pt-8 fira-code"
>
  <h1
    class="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
  >
    devmap
  </h1>

  <p class="text-center text-gray-400 text-base md:text-xl mb-12">
    {$t("home.description")}
  </p>

  <!-- Roadmaps List -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-16 justify-items-center align-items-center"
  >
    {#each roadmaps as roadmap}
      <a
        class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between w-full md:w-auto cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:ring-4"
        href={roadmap.route}
      >
        <h2 class="text-2xl font-bold mb-5 {roadmap.titleColor}">
          {roadmap.name}
        </h2>
        <p class="text-gray-100">{roadmap.description}</p>
      </a>
    {/each}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap");

  .fira-code {
    font-family: "Fira Code", monospace;
  }
</style>
