<template>
  <div>
    <main>
      <header
        class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10"
      >
        <div class="container-xl px-4">
          <div class="page-header-content pt-4">
            <div class="row align-items-center justify-content-between">
              <div class="col-auto mt-4">
                <h1 class="page-header-title">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Main page content-->
      <div class="container-xl px-4 mt-n10">
        <!-- Area chart example-->
        <div class="card mb-4">
          <div class="card-header">Area Chart Example</div>
          <div class="card-body">
            <!-- <highcharts :options="chartOptions"></highcharts> -->
            <Bar :chart-data="chartData" />
          </div>
          <div class="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DashboardPage",
  components: Bar,
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12],
          },
        ],
      },
    };
  },
};
</script>
