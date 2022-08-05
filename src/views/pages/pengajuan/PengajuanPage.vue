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
                  <div class="page-header-icon">
                    <i data-feather="sunset"></i>
                  </div>
                  Pengajuan
                </h1>
                <div class="page-header-subtitle">
                  Shadow utilities add depth and elevation to your content
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Main page content-->
      <div class="container-xl px-4 mt-n10">
        <div class="row">
          <div class="col-lg-9">
            <!-- Default Shadows-->
            <div id="default">
              <div class="card mb-4">
                <div class="card-header">Default Bootstrap Shadows</div>
                <div class="card-body">
                  <div class="border border-lg rounded">
                    <div class="p-4 border-bottom">
                      <div class="bg-light p-3 shadow-none mb-4">
                        .shadow-none
                      </div>
                      <div class="bg-white p-3 shadow-sm mb-4">.shadow.sm</div>
                      <div class="bg-white p-3 shadow mb-4">.shadow</div>
                      <div class="bg-white p-3 shadow-lg">.shadow-lg</div>
                    </div>
                    <div class="bg-light p-4 small">
                      The SCSS variables that define the intensity of the box
                      shadow can be modified by overriding the values set in the
                      <code>../variables/_components.scss</code>
                      file.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Sticky Navigation-->
          <div class="col-lg-3">
            <div class="nav-sticky">
              <div class="card">
                <div class="card-body">
                  <ul class="nav flex-column" id="stickyNav">
                    <li class="nav-item">
                      <a class="nav-link" href="#default">Default</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#extended">Extended</a>
                    </li>
                  </ul>
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
export default {
  name: "DashboardPage",
};
</script>
