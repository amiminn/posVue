<template>
  <div>
    <NavbarHeader />
    <main>
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body">
              <div class="min-height">
                <div class="makanan">makanan</div>
                <div class="minuman">minuman</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <div class="min-height">
                <div>
                  <div class="header">
                    <h1><b>Cart</b></h1>
                  </div>
                  <div class="body">
                    <div class="card p-3 mb-2">
                      Makanan 1
                      <div class="d-inline">
                        Rp 8500
                        <div class="float-end">
                          <button @click="min" class="btn btn-primary btn-xs">
                            -
                          </button>
                          {{ val }}
                          <button @click="plus" class="btn btn-primary btn-xs">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <hr />
                  <div class="row mb-2">
                    <div class="col-sm-6">subTotal</div>
                    <div class="col-sm-6">
                      <div class="float-end">20.000</div>
                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-sm-6">Diskon</div>
                    <div class="col-sm-6">
                      <div class="float-end">1000</div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-sm-6">Total</div>
                    <div class="col-sm-6">
                      <div class="float-end">19.000</div>
                    </div>
                  </div>
                  <hr />
                  <div class="text-center">
                    <button class="btn btn-primary px-5">Bayar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import NavbarHeader from "../../components/NavbarHeader.vue";
export default {
  data() {
    return {
      val: 0,
    };
  },
  methods: {
    min() {
      this.val = this.val - 1;
    },
    plus() {
      this.val = this.val + 1;
    },
  },
  components: {
    NavbarHeader,
  },
};
</script>
<style>
.min-height {
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
