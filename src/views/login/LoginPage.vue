<template>
  <div>
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container-xl px-4">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <!-- Social login form-->
                <div class="card my-5">
                  <div class="card-body p-5">
                    <div class="text-center">
                      <h1><b>Sign In</b></h1>
                    </div>
                    <!-- Login form-->
                    <form>
                      <!-- Form Group (email address)-->
                      <div class="mb-3">
                        <label class="text-gray-600 small" for="emailExample"
                          >Email address</label
                        >
                        <input
                          class="form-control form-control-solid"
                          type="text"
                          placeholder=""
                          aria-label="Email Address"
                          aria-describedby="emailExample"
                        />
                      </div>
                      <!-- Form Group (password)-->
                      <div class="mb-3">
                        <label class="text-gray-600 small" for="passwordExample"
                          >Password</label
                        >
                        <input
                          class="form-control form-control-solid"
                          type="password"
                          placeholder=""
                          aria-label="Password"
                          aria-describedby="passwordExample"
                        />
                      </div>
                      <!-- Form Group (forgot password link)-->
                      <div class="mb-3">
                        <a class="small" href="auth-password-social.html"
                          >Forgot your password?</a
                        >
                      </div>
                      <!-- Form Group (login box)-->
                      <div
                        class="d-flex align-items-center justify-content-between mb-0"
                      >
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            id="checkRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label
                            class="form-check-label"
                            for="checkRememberPassword"
                            >Remember password</label
                          >
                        </div>
                        <route-link class="btn btn-primary" to="">
                          Login
                        </route-link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
// import { useRouter } from "vue-router";
export default {};
</script>
