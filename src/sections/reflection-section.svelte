<script>
  import { cardData } from "../data/card-data";
  import ReflectionCard from "../components/reflection-card.svelte";
</script>

{#each cardData as card}
  <ReflectionCard {card} />
{/each}
