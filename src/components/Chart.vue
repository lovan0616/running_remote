<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveData } = mixins;

export default {
  extends: Line,
  mixins: [reactiveData],
  props: {
    fetchedData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      chartData: "",
      options: {
        responsive: true
      }
    };
  },
  mounted() {
    console.log('mounted renderChart')
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    fetchedData(newValue) {
      console.log('watch fetchedData changed')

      const data = this.getDescriptionArray(newValue);
      const dates = this.getDatesArray(newValue)

      this.chartData = {
        labels: dates,
        datasets: [
          {
            label: '跑跑紀錄',
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1,
          }
        ]
      };
    }
  },
  methods: {
    getDescriptionArray(data) {
      return [...Array(data.records.length)].map((ele, index) => {
        return data.records[index].description;
      });
    },
    getDatesArray(data) {
      return [...Array(data.records.length)].map((ele, index) => {
    return data.records[index].date
  })
    }
  }
};
</script>