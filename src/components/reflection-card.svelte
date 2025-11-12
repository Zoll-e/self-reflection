<script lang="ts">
  import { cardData, type CardData } from "../data/card-data";
  import NextButton from "./next-button.svelte";
  import BackButton from "./back-button.svelte";
  export let card: CardData;
  const { id, title, description, image } = card;
  const nextId = id >= cardData.length ? "contact" : `reflection-${id + 1}`;
  const prevId = id === 1 ? "feedbacks" : `reflection-${id - 1}`;
  const isRightPicture = id % 2 === 0;
</script>

<div
  id={`reflection-${id}`}
  class={`lg:h-[70vh] h-fit lg:w-7/12 mx-auto mt-10 lg:mt-32 mb-10 lg:mb-32 rounded-xl flex lg:flex-row space-y-3 lg:pb-0 pb-10 lg:space-y-0 flex-col bg-gray-800 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.01] ${
    isRightPicture && "lg:flex-row-reverse"
  }`}
>
  <div class="flex-1 lg:w-1/2 overflow-hidden">
    <img
      src={image}
      alt="won't load"
      class={`${
        isRightPicture
          ? "lg:rounded-r-xl lg:rounded-tl-none"
          : "lg:rounded-l-xl lg:rounded-tr-none"
      }  rounded-t-xl flex-1 lg:h-[70vh] w-[100%] bg-gray-500 object-cover transition-transform duration-500 hover:scale-110`}
    />
  </div>
  <div
    class={`flex-1 self-center lg:w-1/2  rounded-b-xl mx-auto space-y-10 ${
      isRightPicture ? "lg:rounded-r-xl" : "lg:rounded-l-xl"
    }`}
  >
    <div class="text-white px-10 space-y-5 lg:space-y-10">
      <h3 class="text-white text-2xl tracking-widest font-bold lg:text-3xl transition-colors duration-300 hover:text-gray-200">
        {title}
      </h3>
      <p id="description">
        {@html description.replace(/\n/g, "<br /> <br />")}
      </p>
      <div class="flex justify-between w-full gap-4">
        <BackButton id={prevId} />
        <NextButton id={nextId} />
      </div>
    </div>
  </div>
</div>
