<template>
  <div class="auth-container" :style="style">
    <div ref="component" class="component-container" :style="componentStyle">
      <component :is="validateComponent()" :onClick="onClick"></component>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import Register from "./Register.vue";
import ForgotPassword from "./ForgotPassword.vue";

export default {
  name: "Authentication",
  components: {
    SignIn,
    Register,
    ForgotPassword
  },
  methods: {
    onClick: function(component) {
      this.opacity = 0;
      setTimeout(() => {
        this.component = component;
      }, 500);
    },
    validateComponent: function() {
      switch (this.component) {
        case "sign-in":
          return this.component;
        case "register":
          return this.component;
        case "forgot-password":
          return this.component;
        default:
          this.component = "sign-in";
          return this.component;
      }
    }
  },
  mounted: function() {
    this.height = this.$refs.component.clientHeight;
  },
  data: function() {
    return {
      component: "sign-in",
      height: 0,
      opacity: 1
    };
  },
  watch: {
    component: function() {
      console.log("changed");
      this.$nextTick(function() {
        this.height = this.$refs.component.clientHeight;
        setTimeout(() => {
          this.opacity = 1;
        }, 500);
      });
    }
  },
  computed: {
    style: function() {
      return {
        height: this.height + "px"
      };
    },
    componentStyle: function() {
      return {
        opacity: this.opacity
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.auth-container {
  width: 400px;
  max-width: 90%;
  overflow-y: hidden;
  transition: all 0.5s ease;
  background: white;
  border-radius: 4px;
}

.component-container {
  opacity: 1;
  transition: opacity 0.5s ease;
  padding: 30px;
}

.fade {
  opacity: 0;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
}

.footer-nav div:hover {
  cursor: pointer;
}

.auth-logo {
  width: 100px;
  height: auto;
}

.auth-h2 {
  width: 100%;
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.auth-button {
  background: #56a800;
  color: white;
  outline: none;
  border: 2px solid transparent;
}

.auth-button:focus {
  box-shadow: 0 0 0 1px #0039a6;
}

.auth-button:hover {
  border: 2px solid #56a800;
  background: white;
  color: #56a800;
}
</style>
