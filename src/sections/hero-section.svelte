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
    background-position: center;
    width: 100vw !important;
    transition: opacity 0.25s ease;
    transition-delay: 1s;
    position: relative;
    animation: fadeIn 1s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    line-height: 1.25;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2);
    animation: slideUp 0.8s ease-out 0.2s both;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  p {
    color: #ffffff;
    line-height: 1.5;
    font-weight: 600;
    opacity: 0.9;
    animation: slideUp 0.8s ease-out 0.4s both;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
</style>
