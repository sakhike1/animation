<template>
  <div class="login">
    <LoginForm />
    <Footer />
  </div>
</template>

<script  setup >
import LoginForm from "../components/LoginForm.vue";
import Footer from "../components/Footer.vue";

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
