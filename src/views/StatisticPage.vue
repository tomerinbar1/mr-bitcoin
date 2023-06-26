<template>
  <section>
    <Line :data="chartData" :options="chartOptions" :style="lineStyle" />
    <div class="date-range-btns">
      <button @click="onSetDataRange('24hours')">1D</button>
      <button @click="onSetDataRange('1week')">1W</button>
      <button @click="onSetDataRange('1months')">1M</button>
      <button @click="onSetDataRange('3months')">3M</button>
      <button @click="onSetDataRange('6months')">6M</button>
      <button @click="onSetDataRange('1year')">1Y</button>
    </div>
  </section>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js'
import { utilService } from '../services/util.service.js'
import { bitcoinService } from '../services/bitcoinService.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'StatisticPage',
  components: {
    Line,
  },
  data() {
    return {
      labels: [],
      data: [],
    }
  },

  created() {
    this.onSetDataRange()
  },
  computed: {
    lineStyle() {
      return {
        width: '100%',
        height: '60vh',
      }
    },

    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'BTC/USD',
            data: this.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      }
    },

    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        reverse: true,
      }
    },
  },
  methods: {
    getLabels(range) {
      const labels = utilService.getMonthsLabels(range)
      this.labels = labels
    },
    onSetDataRange(range) {
      this.getLabels(range)
      bitcoinService.getMarketPriceHistory(range).then(res => {
        const data = res.data.values.map(value => value.y)
        this.data = data
      })
    },
  },
}
</script>

<style lang="scss"></style>
