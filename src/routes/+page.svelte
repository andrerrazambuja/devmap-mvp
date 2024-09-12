<script>
  const roadmaps = [
    {
      name: "Front-End Developer",
      description:
        "Learn the skills necessary to build beautiful and responsive user interfaces using HTML, CSS, and JavaScript.",
    },
    {
      name: "Back-End Developer",
      description:
        "Focus on building APIs, working with databases, and server-side logic with languages like Node.js, Python, or Java.",
    },
    {
      name: "Full-Stack Developer",
      description:
        "Become proficient in both front-end and back-end development, enabling you to build complete applications from start to finish.",
    }
  ];
</script>

<div
  class="flex flex-col items-center justify-start bg-gray-900 text-gray-300 pt-8"
>
  <h1
    class="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
  >
    DevMap
  </h1>

  <!-- Roadmaps List -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-16 justify-items-center align-items-center"
  >
    {#each roadmaps as roadmap}
      <div
        class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between w-full md:w-auto"
      >
        <h2 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">{roadmap.name}</h2>
        <p class="text-gray-400">{roadmap.description}</p>
      </div>
    {/each}
  </div>
</div>
