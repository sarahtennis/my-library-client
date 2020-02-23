<template>
  <div class="home-container">
    <Authentication />
  </div>
</template>

<script>
import Authentication from "../components/Authentication.vue";

export default {
  name: "Home",
  components: {
    Authentication
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container {
  width: 100vw;
  min-width: 250px;
  height: 100vh;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/svg/background.svg") no-repeat center center fixed;
  background-size: cover;
}
</style>
