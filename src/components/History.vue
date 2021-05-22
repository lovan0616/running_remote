<template>
  <div>
    <ul class="card-panel w-100 h-72 lg:h-550px overflow-scroll p-0">
      <HistoryCard
        class="ccard"
        v-for="(data, index) in historyData"
        :key="index"
        :card-route="data.route"
      />
      <div class="observe-target"></div>
    </ul>
  </div>
</template>

<script>
import HistoryCard from "../components/HistoryCard";
import axios from "axios";

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
      const that = this;

      //Infinite Scroll: 監聽observeTarget，當其進入可見範圍時，動態產生card
      const observer = new IntersectionObserver(renderByPage, options);
      observer.observe(observeTarget);

      function renderByPage(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            //根據當下頁碼，apui抓回對應頁碼的route資料
            axios
              .get(
                `http://powerful-springs-52366.herokuapp.com/api/historyData?userId=${activeRunner.userId}&page=${that.page}`
              )
              .then(res => {
                const { data } = res;
                //將拉回的route資料，新增進變數中
                that.historyData = that.historyData.concat(data);
                //頁碼+1
                that.page += 1;
                //拉完所有資料後，停止監聽變化
                if (that.page > totalPage) observer.unobserve(entry.target);
              })
              .catch(err => console.log(err));
          }
        });
      }
    }
  },
  mounted() {
    this.fetchByPage(this.activeRunner);
  },
  watch: {
    activeRunner(newValue) {
      this.historyData = [];
      this.page = 1;
      this.fetchByPage(newValue);
    }
  }
};
</script>