<template>
  <div>
    <ul class="card-panel w-100 h-72 overflow-scroll p-0">
      <HistoryCard class="ccard" v-for="(data, index) in historyData" :key="index" :card-route="data.route" />
      <div class="observe-target"></div>
    </ul>
  </div>
</template>

<script>
import HistoryCard from "../components/HistoryCard"

const dummyHistoryData = {
        a001: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路247號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ],
        a002: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路20號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ],
        a003: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路105號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ],
        a004: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路247號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ],
        a005: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路247號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ],
        a006: [
          {
            id: "000",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "10491台北市中山區林森北路247號",
                lat: 25.05428663144419,
                lng: 121.525606990611783,
                fuelRemaining: 62.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "康樂里",
                lat: 25.052329,
                lng: 121.525461,
                fuelRemaining: 62.2,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "10491台北市中山區林森北路159-167",
                lat: 25.051810277304103,
                lng: 121.52533533561287,
                fuelRemaining: 62,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "10491台北市中山區林森北路",
                lat: 25.049550457892806,
                lng: 121.52473316037454,
                fuelRemaining: 61.8,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:38",
                location: "10442台北市中山區長安東路一段22號",
                lat: 25.04899302056738,
                lng: 121.52469771039154,
                fuelRemaining: 61.6,
                avgConsumption: 2.6
              },
              {
                time: "2021/03/30 18:40",
                location: "10491台北市中山區長安東路一段22之16號2樓",
                lat: 25.048856694283188,
                lng: 121.52538291098458,
                fuelRemaining: 61.3,
                avgConsumption: 2.3
              }
            ]
          },
          {
            id: "001",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:30",
                location: "116台北市文山區環山二道",
                lat: 24.984408565752414,
                lng: 121.57669641728204,
                fuelRemaining: 61.3,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:32",
                location: "116台北市文山區指南路二段109-105",
                lat: 24.987919159644555,
                lng: 121.57601498986143,
                fuelRemaining: 60,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:34",
                location: "116台北市文山區道南橋",
                lat: 24.988084531545773,
                lng: 121.57124891999469,
                fuelRemaining: 59.7,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:36",
                location: "116台北市文山區指南路一段61-55",
                lat: 24.988045634680706,
                lng: 121.5711416304645,
                fuelRemaining: 59.4,
                avgConsumption: 2.3
              },
              {
                time: "2021/03/30 18:38",
                location: "116台北市文山區指南路一段30號",
                lat: 24.987830807283153,
                lng: 121.56962064871055,
                fuelRemaining: 59.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:44",
                location: "116台北市文山區保儀路",
                lat: 24.985782537090962,
                lng: 121.56744724815113,
                fuelRemaining: 58.9,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "116台北市文山區木柵路三段66巷8-1號",
                lat: 24.987002637654445,
                lng: 121.56665648897958,
                fuelRemaining: 58.5,
                avgConsumption: 2.7
              }
            ]
          },
          {
            id: "002",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.5,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "104台北市中山區長春路176號",
                lat: 25.055284516305385,
                lng: 121.53455970918776,
                fuelRemaining: 58.1,
                avgConsumption: 2.5
              }
            ]
          },
          {
            id: "003",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 58.1,
                avgConsumption: 2.4
              },
              {
                time: "2021/03/30 18:46",
                location: "111台北市士林區中山北路五段505巷1號",
                lat: 25.095099838856427,
                lng: 121.52725444182207,
                fuelRemaining: 57.5,
                avgConsumption: 2.6
              }
            ]
          },
          {
            id: "004",
            page: 1,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "005",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "006",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "007",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "008",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "009",
            page: 2,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "010",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "011",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "012",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "013",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "014",
            page: 3,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          },
          {
            id: "015",
            page: 4,
            route: [
              {
                time: "2021/03/30 18:46",
                location: "105台北市松山區饒河街",
                lat: 25.052360242795938,
                lng: 121.57781832576033,
                fuelRemaining: 50.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "306新竹縣關西鎮中山東路9號",
                lat: 24.791533522405906,
                lng: 121.1836616889118,
                fuelRemaining: 35.6,
                avgConsumption: 2.7
              },
              {
                time: "2021/03/30 18:46",
                location: "946屏東縣恆春鎮墾丁路海濱巷5號",
                lat: 21.94871122032709,
                lng: 120.79577693187917,
                fuelRemaining: 19.8,
                avgConsumption: 2.4
              }
            ]
          }
        ]
      };


export default {
  name: "History",
  components: {
    HistoryCard
  },
  data() {
    return {
      historyData: [],
      page: 1
    };
  },
  props: {
    activeRunner: {
      type: Object
    }
  },
  methods: {
    fetchByPage(activeRunner) {
      const observeTarget = document.querySelector(".observe-target");
      const options = { threshold: 0 };
      //Todo: 修改code，使API能拉回totalPage的資料
      const totalPage = 4;
      const that = this

      //Infinite Scroll: 監聽observeTarget，當其進入可見範圍時，動態產生card
      const observer = new IntersectionObserver(renderByPage, options);
      observer.observe(observeTarget);

      function renderByPage(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(fetchingHistoryData(activeRunner.userId, that.page))
            //根據當下頁碼，抓回對應頁碼的route資料
            that.historyData = that.historyData.concat(fetchingHistoryData(activeRunner.userId, that.page));
            //頁碼+1
            that.page += 1;
            //拉完所有資料後，停止監聽變化
            if (that.page > totalPage) observer.unobserve(entry.target);
          }
        });
      }
      function fetchingHistoryData(userId, page) {
      return dummyHistoryData[userId].filter(data => data.page === page )
    }
    },
  },
  mounted() {
    this.fetchByPage(this.activeRunner)
  },
  watch: {
    activeRunner(newValue) {
      this.historyData = []
      this.page = 1
      this.fetchByPage(newValue)
    }
  }
};
</script>

<style scoped>


</style>