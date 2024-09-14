<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { initializeI18n, changeLocale } from '../i18n';
  import { t } from 'svelte-i18n';
  
  let localeReady = false;
  onMount(async () => {
    await initializeI18n();
    localeReady = true;
  });

  function handleChangeLocale(language) {
    changeLocale(language);
  }
</script>

{#if localeReady}
  <div class="flex flex-col min-h-screen bg-gray-900 text-gray-300">
    <header class="bg-gray-800 p-4 flex items-center justify-center md:justify-end">
      <div class="flex space-x-4 text-2xl">
        <button 
          type="button"
          class="cursor-pointer"
          on:click={() => handleChangeLocale('pt')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleChangeLocale('pt')}
          aria-label="Mudar para Português"
          title="Português">
          <img src="/flag-br.svg" alt="Português" class="w-8 h-8" />
        </button>
    
        <button 
          type="button"
          class="cursor-pointer"
          on:click={() => handleChangeLocale('en')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleChangeLocale('en')}
          aria-label="Mudar para Inglês"
          title="English">
          <img src="/flag-us.svg" alt="English" class="w-8 h-8" />
        </button>
    
        <button 
          type="button"
          class="cursor-pointer"
          on:click={() => handleChangeLocale('es')}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleChangeLocale('es')}
          aria-label="Mudar para Espanhol"
          title="Español">
          <img src="/flag-es.svg" alt="Español" class="w-8 h-8" />
        </button>
      </div>
    </header>

    <main class="flex-grow p-4">
      <slot />
    </main>

    <footer class="bg-gray-850 text-gray-400 p-4 text-center flex-shrink-0">
      <p>
        {$t('footer.madeBy')}
      </p>
    </footer>
  </div>
{:else}
  <div>Carregando...</div>
{/if}
