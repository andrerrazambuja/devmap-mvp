<script>
  import { t } from "svelte-i18n";
  export let courses = [];

  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function getRankEmoji(rank) {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    if (rank === "X") return "✨";
    return "";
  }

  function getFlag(language) {
    switch (language) {
      case "pt":
        return "/flag-br.svg";
      case "en":
        return "/flag-us.svg";
      case "es":
        return "/flag-es.svg";
      default:
        return "/flag-default.svg";
    }
  }
</script>

<!-- Botão para abrir o modal -->
<div class="flex justify-center items-center mt-4">
  <button
    class="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
    on:click={openModal}
  >
    {$t("courseRecommendations.viewCoursesButton")}
  </button>
</div>

<!-- Modal de recomendações -->
{#if showModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative"
    >
      <h2 class="text-3xl font-bold mb-4 text-white">
        {$t("courseRecommendations.modalTitle")}
      </h2>

      <ul class="space-y-4 mb-16">
        {#each courses.sort((a, b) => a.rank - b.rank) as course}
          <li class="flex justify-between items-center bg-gray-700 p-4 rounded">
            <div class="flex items-center">
              <img
                src={getFlag(course.language)}
                alt={course.language}
                class="w-6 h-6 mr-6"
              />
              <a
                href={course.url}
                target="_blank"
                rel="noopener"
                class="text-purple-300 hover:underline"
              >
                {course.name}
              </a>
            </div>
            <span class="text-lg">{getRankEmoji(course.rank)}</span>
          </li>
        {/each}
      </ul>

      <button
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition absolute bottom-4 right-4"
        on:click={closeModal}
      >
        {$t("courseRecommendations.closeButton")}
      </button>
    </div>
  </div>
{/if}

<style>
  .fixed {
    z-index: 50;
  }

  .transition {
    transition: background-color 0.3s ease;
  }
</style>
