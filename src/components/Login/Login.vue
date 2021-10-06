<template>
  <div class="container-login">
    <SideIlustrator />
    <div class="form-registration">
      <Logo />
      <FormLogin />
    </div>
  </div>
</template>

<script>
import SideIlustrator from "./SideIlustrator.vue";
import Logo from "./Logo.vue";
import FormLogin from "./FormLogin.vue";

export default {
  name: "Login",
  components: {
    SideIlustrator,
    Logo,
    FormLogin,
  },
};
</script>

<style>
.container-login {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>