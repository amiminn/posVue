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
                  Persediaan Bahan Mentah
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
                  <th>Nama Bahan</th>
                  <th>Total supply</th>
                  <th>Terpakai</th>
                  <th>Sisa Stok</th>
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
          { data: "username" },
          { data: "email" },
          { data: "website" },
        ],
      });
    });
  },
};
</script>
