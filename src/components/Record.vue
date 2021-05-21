<template>
  <div class="flex flex-col justify-center items-center">
    <input class="w-full h-12 p-3 ccard shadow-md cursor-pointer" placeholder="點此篩選日期" type="text" name="daterange"/>
    <line-chart v-if="loaded" :fetched-data="fetchedData" />
  </div>
</template>

<script>
import $ from "jquery";
import moment from "moment";
moment().format();
import "daterangepicker/daterangepicker";
import "daterangepicker/daterangepicker.css";
import axios from "axios";
import LineChart from "./Chart.vue";

export default {
  name: "Record",
  components: {
    LineChart
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      loaded: false,
      fetchedData: null,
    };
  },
  computed: {
    dateSpan() {
      let dates = [];
      //to avoid modifying the original date
      const theDateObj = new Date(this.startDate);
      const endDateObj = new Date(this.endDate);
      while (theDateObj <= endDateObj) {
        const dateEle_Y = new Date(theDateObj).getFullYear();
        const dateEle_M =
          (new Date(theDateObj).getMonth() + 1 < 10 ? "0" : "") +
          (new Date(theDateObj).getMonth() + 1);
        const dateEle_D =
          (new Date(theDateObj).getDate() < 10 ? "0" : "") +
          new Date(theDateObj).getDate();
        dates = [...dates, `${dateEle_Y}/${dateEle_M}/${dateEle_D}`];
        theDateObj.setDate(theDateObj.getDate() + 1);
      }

      return dates;
    }
  },
  props: {
    activeRunner: {
      type: Object
    }
  },
  methods: {
    initPicker() {
      $('input[name="daterange"]').daterangepicker({
        maxSpan: {
          days: 30
        },
        locale: {
          cancelLabel: "Clear"
        },
        autoUpdateInput: false,
        autoApply: true,
        showDropdowns: true
      });
    },
    bindEvent() {
      const that = this;
      $('input[name="daterange"]').on("apply.daterangepicker", function(
        e,
        picker
      ) {
        that.startDate = picker.startDate.format("YYYY/MM/DD");
        that.endDate = picker.endDate.format("YYYY/MM/DD");

        $(this).val(
          picker.startDate.format("YYYY/MM/DD") +
            " - " +
            picker.endDate.format("YYYY/MM/DD")
        );
      });
    },
    fetchRecordData(userId, dateSpan) {
      const that = this
      axios
        .get(
          `https://powerful-springs-52366.herokuapp.com/api/recordData?userId=${userId}&dateSpan=${dateSpan}`
        )
        .then(res => {
          console.log('get api data')
          that.fetchedData = res.data
        })
        .catch(err => console.log(err));

      this.loaded = true;
    }
  },
  watch: {
    // 輸入日期改變時重新拉取資料
    dateSpan(newValue) {
      console.log('watch dateSpan changed')

      //api拉回對應日期的records
      const userId = this.activeRunner.userId;
      const dateSpan = newValue.join(",");
      this.fetchRecordData(userId, dateSpan)
    },
    // 變換不同runner時重新拉取資料
    activeRunner(newValue) {
      const userId = newValue.userId;
      const dateSpan = this.dateSpan
      this.fetchRecordData(userId, dateSpan)
    }
  },
  mounted() {
    this.initPicker();
    this.bindEvent();
  }
};
</script>

<style scoped>
</style>
