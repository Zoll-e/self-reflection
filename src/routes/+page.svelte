<script>
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
  import Contact from "../sections/contact.svelte";
  import Feedbacks from "../sections/feedback-section.svelte";
  import Hero from "../sections/hero-section.svelte";
  import ReflectionSection from "../sections/reflection-section.svelte";
</script>

<body>
  <Hero />
  <Feedbacks />
  <ReflectionSection />
  <Contact />
  <Footer />
</body>

<style>
  :global html,
  body {
    scroll-behavior: smooth;
    width: 100%;
    user-select: none;
    overflow-x: hidden;
    font-family: "Inter", sans-serif;
  }
  :global(body) {
    background: #171717;
    overflow-x: hidden;
    width: 100%;
  }
  @media (min-width: 768px) {
    :global(body) {
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0;
    }
    :global html,
    body {
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
</style>
