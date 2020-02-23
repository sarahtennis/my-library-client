<template>
  <div id="sign-in">
    <Logo class="auth-logo"></Logo>
    <h2 class="auth-h2">Sign In</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="required" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required="required" />
      </div>
      <button class="auth-button">Sign In</button>
      <div class="footer-nav">
        <div @click="onClick('register')">Register</div>
        <div @click="onClick('forgot-password')">Forgot Password</div>
      </div>
    </form>
  </div>
</template>

<script>
import Logo from "../assets/vue/logo.vue";

export default {
  name: "SignIn",
  components: {
    Logo
  },
  props: {
    onClick: Function
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
