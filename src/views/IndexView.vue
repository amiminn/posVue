<template>
  <div class="nav-fixed">
    <NavbarHeader />
    <SideNav />
  </div>
</template>
<script>
import NavbarHeader from "./components/NavbarHeader.vue";
import SideNav from "./components/SideNav.vue";
export default {
  name: "IndexView",
  data() {
    return {};
  },
  components: {
    NavbarHeader,
    SideNav,
  },
};
</script>
