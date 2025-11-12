<script>
  import GardientBackground from "../components/gardient-background.svelte";
  import NextButton from "../components/next-button.svelte";
  import BackButton from "../components/back-button.svelte";
  const src = "/images/csenge.jpg";
  const bsrc = "/images/balint.jpeg";
</script>

<GardientBackground>
  <div
    id="feedbacks"
    class="lg:h-screen flex-wrap lg:w-[80vw] w-full mx-auto lg:flex-row items-center flex"
  >
    <div class=" lg:h-[75%] lg:flex-1 content-center p-5">
      <h1 class="lg:text-4xl text-4xl mb-10 text-white">Kollégák véleménye</h1>
      <p class="lg:text-md text-[#FFFFFFAB]">
        Kik is adhatnának jobb feedbacket, mint azok, akikkel dolgozom?
      </p>
      <br />
      <p class="lg:text-md text-[#FFFFFFAB]">
        Az elmúlt időszakban főleg a MyLocal-on dolgoztam, először csak a dark
        mode implementálásban segítettem, majd később már válogatás nélkül
        minden taskon. Eleinte aggódtam, hogy nem fog menni, hiszen "én csak
        junior vagyok", de nem jött szembe olyan task, amit ne tudtam volna
        megoldani. Ez már önmagában is egy nagyon pozitív élmény volt, ami
        megerősített abban, hogy folyamatosan fejlődök és jó az irány.
      </p>
    </div>

    <div class="lg:h-[75%] lg:flex-1 content-center p-5">
      <img
        {src}
        alt="palacsinta"
        class="mb-10 lg:w-full w-full object-fill h-[18rem] rounded-lg"
      />

      <p class="lg:text-md text-base text-[#FFFFFFAB]">
        Csengével nagyon szeretek együtt dolgozni, mert őszinte és egyenes, ami
        nagyon motiváló a mindennapokban, és Ő pontosan látja a fejlődési ívem a
        korábbi FoxAndBox project miatt.
      </p>
    </div>
    <div class="lg:flex-1 lg:h-[75%] content-center p-5">
      <img
        src={bsrc}
        alt="palacsinta"
        class="mb-10 h-[18rem] w-full rounded-lg"
      />
      <p class="text-md text-[#FFFFFFAB]">
        Lehet Bálint véleménye azóta változott, de jó érzés volt, hogy ilyen
        volt az első benyomás.
      </p>
    </div>
    <div class="mt-10 flex justify-between w-full gap-4">
      <BackButton id="header" />
      <NextButton id="reflection-1" />
    </div>
  </div>
</GardientBackground>

<style>
  h1 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.05rem;
    width: 100%;
    line-height: 1.375;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  p {
    text-align: justify;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Source Sans Pro", sans-serif;
    line-height: 1.75;
    font-weight: 400;
  }
  
  img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  img:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
  }
</style>
