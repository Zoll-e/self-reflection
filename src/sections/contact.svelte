<script lang="ts">
  // @ts-nocheck

  import GardientBackground from "../components/gardient-background.svelte";
  let name = "";
  let message = "";
  let messageSent = false;
  let characters = message.length;
  $: characters = message.length;
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
  {#if messageSent}
    <div class="flex flex-col items-center justify-center mt-32 !h-[40vh]">
      <h1 class="text-white text-3xl">Köszönöm a visszajelzést!</h1>
    </div>
  {/if}
  {#if !messageSent}
    <div
      class="flex lg:!h-[40vh] flex-col lg:flex-row p-10 mt-32 items-center mx-auto w-[100vw]"
      id="contact"
    >
      <div class="w-[100%] flex-1 text-white space-y-10">
        <h1 class="lg:text-3xl lg:px-10">Üzenj valamit!</h1>
        <p class="lg:px-10">
          <s>Az itt írt üzenetek eljutnak hozzám</s>, nagyon szerettem volna egy
          pet projectet és mivel szembejött velem a baromi érdekes Svelte-kit,
          az önreflexiónak pedig nem volt kötött formája ezért összekötöttem a
          kellemest a hasznossal!
        </p>
      </div>
      <form
        on:submit={handleSubmit}
        class="flex-1 w-[100%] text-white items-center"
      >
        <input
          type="text"
          bind:value={name}
          required
          disabled={messageSent}
          class="bg-transparent lg:w-4/5 placeholder-ml-2 lg:h-12 text-white lg:m-10 my-5 rounded-lg w-full border-2"
          placeholder="   Név"
        />
        <textarea
          bind:value={message}
          placeholder="   Üzenet"
          required
          maxlength="500"
          disabled={messageSent}
          class=" bg-transparent placeholder-ml-2 lg:w-4/5 lg:h-24 w-full lg:mx-10 my-5 flex-1 text-white resize-none rounded-lg border-2"
        />
        <span class="text-white mx-10">{`${characters}`}/500</span>
        <button
          class="bg-white text-xs h-10 w-24 text-black font-bold py-2 px-4 rounded-full"
          type="submit">küldés</button
        >
      </form>
    </div>
  {/if}
</GardientBackground>
