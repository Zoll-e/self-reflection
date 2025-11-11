<script lang="ts">
  import ChevronRight from "svelte-material-icons/ChevronRight.svelte";

  export let id = "";
  export let arrowUp = false;
  export let label = "tovább";

  const jumpToCenter = (id: string) => {
    if (typeof document === "undefined") return;
    const target = document.querySelector(`#${id}`);
    if (target?.clientHeight && target?.clientHeight > window.innerHeight) {
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    target?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  let style = "steady";
  const handleMouseOver = () => {
    if (arrowUp) {
      style = "rotate-up";
    } else {
      style = "rotate";
    }
  };
  const handleMouseOut = () => {
    style = "steady";
  };
</script>

<button
  on:click={() => jumpToCenter(id)}
  on:focus
  on:mouseover={handleMouseOver}
  on:blur
  on:mouseout={handleMouseOut}
>
  <span class={`${style}`}
    ><ChevronRight size={"2em"} color={"black"} height={"3rem"} /></span
  >
  <span class="text-black">{label}</span>
</button>

<style>
  button {
    display: inline-flex;
    width: 15rem;
    height: 3rem;
    line-height: 3rem;
    padding: 0 0.5rem;
    letter-spacing: 0.1rem;
    font-family: "Inter", sans-serif;
    font-size: 1em;
    font-weight: 700;
    background: white;
    border-radius: 2rem;
    flex-direction: row-reverse;
  }
  .rotate {
    transform: rotate(90deg);
    transition: transform 0.25s ease;
  }
  .rotate-up {
    transform: rotate(-90deg);
    transition: transform 0.25s ease;
  }
  .steady {
    transition: transform 0.25s ease;
    transform: rotate(0deg);
  }
</style>
