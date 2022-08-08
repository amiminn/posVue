<template>
  <div>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
          <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
              <div class="sidenav-menu-heading">POS</div>
              <!-- Sidenav Link (Charts)-->
              <router-link class="nav-link" to="/pos">
                <div class="nav-link-icon">
                  <i class="fas fa-store"></i>
                </div>
                POS
              </router-link>

              <div class="sidenav-menu-heading">Dashboard {{ isActive }}</div>
              <!-- Sidenav Link (Charts)-->
              <router-link class="nav-link" to="/">
                <div class="nav-link-icon">
                  <i class="fas fa-home"></i>
                </div>
                Dashboard
              </router-link>

              <!-- Sidenav Accordion (sales)-->
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#Sales"
                aria-expanded="false"
                aria-controls="Sales"
              >
                <div class="nav-link-icon">
                  <i class="fas fa-cart-shopping"></i>
                </div>
                Penjualan
                <div class="sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="Sales"
                data-bs-parent="#accordionSidenav"
              >
                <nav
                  class="sidenav-menu-nested nav accordion"
                  id="accordionSidenavPages"
                >
                  <router-link class="nav-link" to="/penjualan">
                    Penjualan Hari ini
                  </router-link>
                </nav>
              </div>
              <!-- Sidenav Accordion (Report)-->
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#Report"
                aria-expanded="false"
                aria-controls="Report"
              >
                <div class="nav-link-icon">
                  <i class="fas fa-file"></i>
                </div>
                Laporan
                <div class="sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="Report"
                data-bs-parent="#accordionSidenav"
              >
                <nav
                  class="sidenav-menu-nested nav accordion"
                  id="accordionSidenavPages"
                >
                  <router-link class="nav-link" to="/laporan">
                    Laporan Penjualan
                  </router-link>
                </nav>
              </div>

              <!-- Sidenav Accordion (Products)-->
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#Products"
                aria-expanded="false"
                aria-controls="Products"
              >
                <div class="nav-link-icon"><i class="fas fa-box"></i></div>
                Produk
                <div class="sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="Products"
                data-bs-parent="#accordionSidenav"
              >
                <nav
                  class="sidenav-menu-nested nav accordion"
                  id="accordionSidenavPages"
                >
                  <router-link class="nav-link" to="/produk">
                    Daftar Produk
                  </router-link>
                </nav>
              </div>
              <!-- Sidenav Accordion (Bahan)-->
              <a
                class="nav-link collapsed"
                href="javascript:void(0);"
                data-bs-toggle="collapse"
                data-bs-target="#Bahan"
                aria-expanded="false"
                aria-controls="Bahan"
              >
                <div class="nav-link-icon">
                  <i class="fas fa-shopping-basket"></i>
                </div>
                Bahan
                <div class="sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="Bahan"
                data-bs-parent="#accordionSidenav"
              >
                <nav
                  class="sidenav-menu-nested nav accordion"
                  id="accordionSidenavPages"
                >
                  <router-link class="nav-link" to="/bahan">
                    Daftar Bahan Mentah
                  </router-link>
                  <router-link class="nav-link" to="/bahan/pembelian">
                    Pembelian Bahan Mentah
                  </router-link>
                  <router-link class="nav-link" to="/bahan/persediaan">
                    Persediaan Bahan Mentah
                  </router-link>
                </nav>
              </div>
              <!-- Sidenav Heading (Addons)-->
              <div class="sidenav-menu-heading">Tambahan</div>
              <router-link class="nav-link" to="/pengajuan">
                <div class="nav-link-icon">
                  <i class="fas fa-bell"></i>
                </div>
                Pengajuan
              </router-link>
              <!-- Sidenav Link (Setting)-->
              <router-link class="nav-link" to="/setting">
                <div class="nav-link-icon">
                  <i class="fas fa-cogs"></i>
                </div>
                Pengaturan
              </router-link>
              <!-- Sidenav Heading (Addons)-->
            </div>
          </div>
          <!-- Sidenav Footer-->
          <div class="sidenav-footer">
            <div class="sidenav-footer-content">
              <div class="sidenav-footer-subtitle">Logged in as:</div>
              <div class="sidenav-footer-title">Valerie Luna</div>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <router-view />
        <footer class="footer-admin mt-auto footer-light">
          <div class="container-xl px-4">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div class="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideNav",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    myFilter() {
      this.isActive = !this.isActive;
    },
  },
  components: {},
};
</script>
