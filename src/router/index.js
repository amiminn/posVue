import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import LoginPage from "../views/login/LoginPage.vue";
import PosPage from "../views/pages/pos/PosPage.vue";
import DashboardPage from "../views/pages/dashboard/DashboardPage.vue";
import SettingPage from "../views/pages/setting/SettingPage.vue";
import PenjualanHarian from "../views/pages/penjualan/PenjualanHarian.vue";
import LaporanPenjualan from "../views/pages/laporan/LaporanPenjualan.vue";
import ProdukPage from "../views/pages/produk/ProdukPage.vue";
import BahanMentah from "../views/pages/bahan/BahanMentah.vue";
import PembelianBahanMentah from "../views/pages/bahan/PembelianBahanMentah.vue";
import PersediaanBahanMentah from "../views/pages/bahan/PersediaanBahanMentah.vue";
import PengajuanPage from "../views/pages/pengajuan/PengajuanPage.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/pos",
    name: "POS",
    component: PosPage,
  },
  {
    path: "/",
    name: "home",
    component: IndexView,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: DashboardPage,
      },
      {
        path: "/setting",
        name: "Setting",
        component: SettingPage,
      },
      {
        path: "/penjualan",
        name: "Penjualan Harian",
        component: PenjualanHarian,
      },
      {
        path: "/laporan",
        name: "Laporan Penjualan",
        component: LaporanPenjualan,
      },
      {
        path: "/produk",
        name: "Produk",
        component: ProdukPage,
      },
      {
        path: "/bahan",
        name: "Bahan",
        component: BahanMentah,
      },
      {
        path: "/bahan/pembelian",
        name: "Pembelian",
        component: PembelianBahanMentah,
      },
      {
        path: "/bahan/persediaan",
        name: "Persediaan",
        component: PersediaanBahanMentah,
      },
      {
        path: "/pengajuan",
        name: "Pengajuan",
        component: PengajuanPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuth = JSON.parse(localStorage.getItem("auth"));
//   if (to.name !== "login" && !isAuth) next({ name: "login" });
//   if (to.name === "login" && isAuth) next({ name: "dashboard" });
//   next();
// });

export default router;
