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
                  Daftar Produk
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- modal tambah data-->
      <div
        class="modal fade"
        id="TambahProduk"
        tabindex="-1"
        role="dialog"
        aria-labelledby="TambahProdukLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="TambahProdukLabel">Tambah Produk</h5>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="KodeProduk">Kode Produk</label>
                  <input
                    class="form-control"
                    id="KodeProduk"
                    type="text"
                    placeholder="Kode Produk"
                  />
                </div>
                <div class="mb-3">
                  <label for="NamaProduk">Nama Produk</label>
                  <input
                    class="form-control"
                    id="NamaProduk"
                    type="text"
                    placeholder="Nama Produk"
                  />
                </div>
                <div class="mb-3">
                  <label for="HargaProduk">Harga (IDR)</label>
                  <input
                    class="form-control"
                    id="HargaProduk"
                    type="number"
                    placeholder="Harga"
                  />
                </div>
                <div class="mb-3">
                  <label for="GambarProduk">Gambar Produk</label>
                  <input
                    class="form-control"
                    id="GambarProduk"
                    type="file"
                    placeholder="Satuan Bahan"
                  />
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary float-end">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- modal Edit data-->
      <div
        class="modal fade"
        id="EditProduk"
        tabindex="-1"
        role="dialog"
        aria-labelledby="EditProdukLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="EditProdukLabel">Edit Produk</h5>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="KodeProduk">Kode Produk</label>
                  <input
                    class="form-control"
                    id="KodeProduk"
                    type="text"
                    placeholder="Kode Produk"
                  />
                </div>
                <div class="mb-3">
                  <label for="NamaProduk">Nama Produk</label>
                  <input
                    class="form-control"
                    id="NamaProduk"
                    type="text"
                    placeholder="Nama Produk"
                  />
                </div>
                <div class="mb-3">
                  <label for="HargaProduk">Harga (IDR)</label>
                  <input
                    class="form-control"
                    id="HargaProduk"
                    type="number"
                    placeholder="Harga"
                  />
                </div>
                <div class="mb-3">
                  <label for="GambarProduk">Gambar Produk</label>
                  <input
                    class="form-control"
                    id="GambarProduk"
                    type="file"
                    placeholder="Satuan Bahan"
                  />
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary float-end">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Main page content-->
      <div class="container-xl px-4 mt-n10">
        <div class="card mb-4">
          <div class="card-header">
            Extended DataTables
            <button
              class="btn btn-primary float-end"
              data-bs-toggle="modal"
              data-bs-target="#TambahProduk"
            >
              Tambah Produk
            </button>
          </div>
          <div class="card-body">
            <table id="myTable" class="table table-striped" style="width: 100%">
              <thead>
                <tr>
                  <th>Kode</th>
                  <th>Nama</th>
                  <th>Gambar</th>
                  <th>Kategori</th>
                  <th>Harga</th>
                  <th>Status</th>
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
              return `<button class="btn btn-info btn-sm" data-bs-toggle="modal"
              data-bs-target="#EditProduk">edit</button> <button class="btn btn-success btn-sm">print</button> <button class="btn btn-danger btn-sm">delete</button>`;
            },
          },
        ],
      });
    });
  },
};
</script>
