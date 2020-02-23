<template>
  <div id="forgot-password">
    <Logo class="auth-logo"></Logo>
    <h2 class="auth-h2">Forgot Password</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="required" />
      </div>
      <button class="auth-button">Reset Password</button>
      <div class="footer-nav">
        <div @click="onClick('sign-in')">Sign-In</div>
        <div @click="onClick('register')">Register</div>
      </div>
    </form>
  </div>
</template>

<script>
import Logo from "../assets/vue/logo.vue";
export default {
  name: "Register",
  components: {
    Logo
  },
  props: {
    onClick: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background: green;
}
</style>
