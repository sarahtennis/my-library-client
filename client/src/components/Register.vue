<template>
  <div id="sign-in">
    <Logo class="auth-logo"></Logo>
    <h2 class="auth-h2">Register</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="required" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required="required" />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" required="required" />
      </div>
      <button class="auth-button">Register</button>
      <div class="footer-nav">
        <div @click="onClick('sign-in')">Sign-In</div>
        <div @click="onClick('forgot-password')">Forgot Password</div>
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
