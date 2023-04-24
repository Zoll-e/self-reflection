<script lang="ts">
  import { cardData, type CardData } from "../data/card-data";
  import NextButton from "./next-button.svelte";
  export let card: CardData;
  const { id, title, description, image } = card;
  const nextId = id >= cardData.length ? "contact" : `reflection-${id + 1}`;
  const isRightPicture = id % 2 === 0;
</script>

<div
  id={`reflection-${id}`}
  class={`lg:h-[50vh] h-fit lg:w-7/12 mx-auto mt-10 lg:mt-32 rounded-lg flex lg:flex-row space-y-3 lg:pb-0 pb-10 lg:space-y-0 flex-col bg-gray-800 ${
    isRightPicture && "lg:flex-row-reverse"
  }`}
>
  <div class="flex-1 lg:w-1/2">
    <img
      src={image}
      alt="won't load"
      class={`${
        isRightPicture
          ? "lg:rounded-r-lg lg:rounded-tl-none"
          : "lg:rounded-l-lg lg:rounded-tr-none"
      }  rounded-t-lg flex-1 lg:h-[50vh] w-[100%] bg-gray-500`}
    />
  </div>
  <div
    class={`flex-1 self-center lg:w-1/2  rounded-b-lg mx-auto space-y-10 ${
      isRightPicture ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
    }`}
  >
    <div class="text-white px-10 space-y-5 lg:space-y-10">
      <h3 class="text-white text-2xl tracking-widest font-bold lg:text-3xl">
        {title}
      </h3>
      <p id="description">
        {@html description.replace(/\n/g, "<br /> <br />")}
      </p>
      <div class="flex self-end">
        <NextButton id={nextId} />
      </div>
    </div>
  </div>
</div>
