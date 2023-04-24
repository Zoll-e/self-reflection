export type CardData = {
  id: number;
  title: string;
  description: string;
  image: string;
};
export const cardData: CardData[] = [
  {
    id: 1,
    title: "Önkép",
    description:
      'Napról napra küzdöm le a nálam nagyon erősen jelenlévő önbizalomhiányt azzal, hogy folyamatosan fejlesztem magam, és azzal, hogy látom az eredményeimen és a visszajelzéseken, hogy jó, amit csinálok. Ahogy kedvenc mentorom mondaná: "egyszer odaérünk"',
    image: "src/assets/images/fb.jpeg",
  },
  {
    id: 2,
    title: "Programozás",
    description:
      "Gyorsan látok át új rendszereket és problémákat. Kevés kontextussal is el tudok indulni önállóan egy-egy feladaton, mint például a FoxAndBox C.O.D. szelleme, ahol csupán az igény megfogalmazásából, egy óra alatt lefejlesztettem. Ha a szigorúen nézett 'hard-coding skill'-ben van is hova fejlődnöm, általában elég egy refactor az egyébként működő megoldásra",
    image: "src/assets/images/hackerman.jpeg",
  },
  {
    id: 3,
    title: "Út",
    description:
      'Amikor Apexes lettem, nagyon mélyvíz volt, bármerre nyúltam, vadidegen terület volt számomra. Először kódolni tanultam meg jól, köszönhetően Németh Petinek, akivel sokszor estig kódoltunk, akkor is, ha nem munka volt, mert egyszerűen jólesett. Kesőbb Ricsitől pedig nagyon-nagyon sokat tanultam az adminisztráció és precizitás területén. "Egy task nem branch-csel indul, és nem a PR-ral ér véget"',
    image: "src/assets/images/road.png",
  },
  {
    id: 4,
    title: "HelloMoso",
    description:
      "Elvittük a projectet, többnyire jó megoldásokkal, az ügyfél maximális elégedettségével. Ebből rengeteget tudtam tanulni. Például azt hogy, ha nem hallatom a hangom, a hattérbe szorulok, és lehetek akármilyen jó fejlesztő, nem ez fog látszni",
    image: "src/assets/images/hellomoso.png",
  },
  {
    id: 5,
    title: "Következő lépések",
    description:
      "Elfogadni azt, hogy a kollégáim kivancsiak rám, hogy szívesen segítenek, amikor tudnak, hiszen én is ilyen vagyok, és nem félni tanácsot kérni",
    image: "src/assets/images/next-steps.jpeg",
  },
  {
    id: 6,
    title: "Köszönet",
    description:
      "Az életem egy olyan időszakában érkeztem ide, amikor minden nagyon kilátástalannak tűnt. Itt újra célt találtam, és egy olyan közösséget, ahol nem kell félnem vagy megjátszanom magam, mert hasonló gondolkodású emberek vesznek körbe. Szó szerint megváltoztatta az Apex az életem, köszönöm! \r\n*Nem találtam ezt a logót jobb felbontásban",
    image: "src/assets/images/apex-logo.png",
  },
];
