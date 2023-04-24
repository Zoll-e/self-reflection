<script>
  import NextButton from "../components/next-button.svelte";
</script>

<section id="header" class="h-screen items-center">
  <div
    class="flex flex-col justify-center h-screen lg:w-10/12 w-full lg:p-14 p-2"
  >
    <p class=" m:text-lg">//made with svelte-kit</p>
    <h2 class=" lg:text-7xl text-2xl w-screen pb-[5rem]">
      Debreceni Zoltán self reflection
    </h2>
    <NextButton id={"feedbacks"} />
  </div>
</section>

<style>
  section {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/images/mustang.jpeg") no-repeat;
    background-size: cover;
    width: 100vw !important;
    transition: opacity 0.25s ease;
    transition-delay: 1s;
  }

  h2 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    /* letter-spacing: 0.35rem; */

    line-height: 1.25;
    font-weight: 600;
    text-shadow: 0.088rem 0.088rem 0.5625rem rgba(0, 0, 0, 0.188);
  }
  p {
    color: #ffffff;
    line-height: 1.5;
    font-weight: 600;
  }
</style>
