<script>
  import RoadmapComponent from '$lib/RoadmapComponent.svelte';

  let events = [
  { 
    title: "Aprender Lógica de Programação", 
    description: "Antes de mergulhar no código, é importante entender como resolver problemas de forma lógica. Estude conceitos como variáveis, loops, e condições." 
  },
  { 
    title: "Familiarize-se com Estruturas de Dados Simples", 
    description: "Aprenda sobre arrays, listas, e dicionários (ou objetos), que são fundamentais para organizar e processar dados em programação." 
  },
  { 
    title: "Entenda os Conceitos de Algoritmos", 
    description: "Estude algoritmos comuns, como ordenação e busca, que são amplamente utilizados em soluções de problemas reais no mundo da programação." 
  },
  { 
    title: "Aprenda sobre Desenvolvimento Web Básico", 
    description: "Familiarize-se com HTML, CSS e JavaScript para entender os fundamentos de como as páginas da web funcionam e são desenvolvidas." 
  },
  { 
    title: "Domine o Controle de Versão com Git", 
    description: "O Git é uma ferramenta essencial para qualquer programador. Aprenda a versionar seu código e compartilhar projetos no GitHub." 
  },
];

</script>

<RoadmapComponent {events} />
