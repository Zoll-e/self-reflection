<script lang="ts">
  import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte";

  export let id = "";
  export let label = "vissza";

  const jumpToCenter = (id: string) => {
    if (typeof document === "undefined") return;
    const target = document.querySelector(`#${id}`) as HTMLElement;
    if (!target) return;
    
    const targetHeight = target.clientHeight;
    const viewportHeight = window.innerHeight;
    
    // For sections that are approximately screen height, scroll to start for perfect alignment
    // Allow a small tolerance (50px) for sections that are close to viewport height
    if (targetHeight >= viewportHeight - 50) {
      // Use scrollIntoView with start for screen-height sections
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // For smaller sections, use scrollIntoView with center
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  let style = "steady";
  const handleMouseOver = () => {
    style = "rotate-left";
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
><ChevronLeft size={"2em"} color={"black"} height={"3rem"} /></span
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
    flex-direction: row;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
  }
  
  button:hover::before {
    left: 100%;
  }
  
  .rotate-left {
    transform: rotate(-90deg);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .steady {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0deg);
  }
</style>

