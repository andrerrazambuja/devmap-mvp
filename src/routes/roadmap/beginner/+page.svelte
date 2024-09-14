<script>
  import RoadmapComponent from "$lib/RoadmapComponent.svelte";
  import { t } from "svelte-i18n";

  let events;
  $: events = [
    {
      title: $t("roadmaps.beginner.events.logic.title"),
      description: $t("roadmaps.beginner.events.logic.description"),
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
</script>

<RoadmapComponent {events} />
