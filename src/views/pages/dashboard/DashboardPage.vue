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
            <div class="chart-area">
              <div class="chartjs-size-monitor">
                <div class="chartjs-size-monitor-expand">
                  <div class=""></div>
                </div>
                <div class="chartjs-size-monitor-shrink">
                  <div class=""></div>
                </div>
              </div>
              <canvas
                id="myAreaChart"
                width="765"
                height="240"
                style="display: block; width: 765px; height: 240px"
                class="chartjs-render-monitor"
              ></canvas>
            </div>
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
export default {
  name: "DashboardPage",
};
</script>
