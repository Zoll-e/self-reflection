<script lang="ts">
  // @ts-nocheck

  import GardientBackground from "../components/gardient-background.svelte";
  import NextButton from "../components/next-button.svelte";
  import BackButton from "../components/back-button.svelte";
  import { cardData } from "../data/card-data";
  let name = "";
  let message = "";
  let messageSent = false;
  let characters = message.length;
  $: characters = message.length;
  const lastReflectionId = `reflection-${cardData.length}`;
  
  async function handleSubmit(event: Event) {
    event.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    if (response.ok) {
      messageSent = true;
    } else {
      alert("Bad UX, de valami nem okés :(");
    }
  }
</script>

<GardientBackground>
  <div
    id="contact"
    class="lg:h-screen flex flex-col lg:flex-row items-center justify-center w-full mx-auto lg:p-14 p-10"
  >
    {#if messageSent}
      <div class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="text-white text-3xl lg:text-4xl mb-10">Köszönöm a visszajelzést!</h1>
        <div class="flex gap-4 mt-10">
          <BackButton id={lastReflectionId} />
          <NextButton id="header" arrowUp label="tetejére" />
        </div>
      </div>
    {:else}
      <div class="w-[100%] flex-1 text-white space-y-10 lg:max-w-2xl">
        <h1 class="lg:text-4xl text-3xl">Üzenj valamit!</h1>
        <p class="lg:text-lg text-base">
          <s>Az itt írt üzenetek eljutnak hozzám</s>, nagyon szerettem volna egy
          pet projectet és mivel szembejött velem a baromi érdekes Svelte-kit,
          az önreflexiónak pedig nem volt kötött formája ezért összekötöttem a
          kellemest a hasznossal!
        </p>
      </div>
      <form
        on:submit={handleSubmit}
        class="flex-1 w-[100%] text-white items-center lg:max-w-2xl"
      >
        <input
          type="text"
          bind:value={name}
          required
          disabled={messageSent}
          class="bg-transparent lg:w-full placeholder-ml-2 lg:h-12 text-white lg:my-5 my-4 rounded-lg w-full border-2 border-white/30 focus:border-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 placeholder:text-white/50 px-4"
          placeholder="   Név"
        />
        <textarea
          bind:value={message}
          placeholder="   Üzenet"
          required
          maxlength="500"
          disabled={messageSent}
          class="bg-transparent placeholder-ml-2 lg:w-full lg:h-32 h-24 w-full my-5 flex-1 text-white resize-none rounded-lg border-2 border-white/30 focus:border-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 placeholder:text-white/50 px-4 py-2"
        ></textarea>
        <div class="flex justify-between items-center my-5">
          <span class="text-white/80 text-sm">{`${characters}`}/500</span>
          <button
            class="bg-white text-sm h-10 w-28 text-black font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={messageSent}
          >küldés</button>
        </div>
        <div class="flex justify-between gap-4 mt-8">
          <BackButton id={lastReflectionId} />
          <NextButton id="header" arrowUp label="tetejére" />
        </div>
      </form>
    {/if}
  </div>
</GardientBackground>
