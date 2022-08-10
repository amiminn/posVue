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
                <h1 class="page-header-title">
                  <div class="page-header-icon"></div>
                  Laporan Penjualan
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Main page content-->
      <div class="container-xl px-4 mt-n10">
        <div class="card mb-4">
          <div class="card-body">
            <table id="myTable" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Pelanggan</th>
                  <th>Barang</th>
                  <th>SubTotal</th>
                  <th>Pajak</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"; //kalian bisa import ini di main.js agar dapat digunakan secara global
import "datatables.net-bs5"; //kalian bisa import ini di main.js agar dapat digunakan secara global

export default {
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      $("#myTable").DataTable({
        data: response.data,
        columns: [
          { data: "name" },
          { data: "id" },
          { data: "id" },
          { data: "id" },
          { data: "id" },
          { data: "username" },
          {
            targets: -1,
            data: null,
            sorting: false,
            render: () => {
              return `<button class="btn btn-info btn-sm"><i class="fas fa-print"></i></button>`;
            },
          },
        ],
      });
    });
  },
};
</script>
