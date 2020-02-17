<template>
  <div class="hello">
    <component :is="validateComponent()"></component>
    <div v-on:click="component = 'sign-in'">Sign in</div>
    <div v-on:click="component = 'register'">Register</div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import Register from "./Register.vue";

export default {
  name: "Authentication",
  components: {
    SignIn,
    Register
  },
  methods: {
    validateComponent: function() {
      switch (this.component) {
        case "sign-in":
          return this.component;
        case "register":
          return this.component;
        default:
          this.component = "sign-in";
          return this.component;
      }
    }
  },
  data: function() {
    return {
      component: "sign-in"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  transition: all 0.5s ease;
  div {
    background: red;
  }
}
</style>
