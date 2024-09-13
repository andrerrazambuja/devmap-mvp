<script>
  import { t } from 'svelte-i18n';
</script>

<div class="p-8">
  <h1 class="text-2xl font-bold mb-4 text-red-500">404 - {$t('error.pageNotFound')}</h1>
  <p class="text-gray-500">{$t('error.pageDescription')}</p>
  <a href="/" class="text-blue-500 underline">{$t('error.backToMenu')}</a>
</div>
