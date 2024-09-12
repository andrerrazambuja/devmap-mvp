<script>
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen bg-gray-900 text-gray-300">
  <main class="flex-grow p-4">
    <slot />
  </main>

  <footer class="bg-gray-850 text-gray-400 p-4 text-center flex-shrink-0">
    <p>
      Made with 🔥 by <a
        href="https://github.com/andrerrazambuja"
        class="underline text-gray-300 hover:text-purple-400"
        >@andrerrazambuja</a
      >
    </p>
  </footer>
</div>
