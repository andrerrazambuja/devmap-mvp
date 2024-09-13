<script>
    import "../../app.css";
    import { goto } from "$app/navigation";
  
    function voltarParaHome() {
      goto("/");
    }
  </script>
  
  <!-- Ícone de seta para o botão, centralizado -->
  <div class="flex justify-center mb-4">
    <button
      class="text-gray-400 hover:text-gray-600 transition"
      on:click={voltarParaHome}
      aria-label="Voltar ao Menu"
    >
      Home 
    </button>
    /Roadmaps
  </div>
  
  <slot />
  