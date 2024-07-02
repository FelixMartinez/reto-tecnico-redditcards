<template>
  <div class="home-container d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h1 class="mb-3">Bienvenido</h1>
      <p class="lead mb-5">
        Explora las entradas principales de Reddit de una manera fácil y rápida.
      </p>
      <button class="btn btn-primary btn-lg" @click="goToRedditEntries">
        Ingresar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToRedditEntries() {
      this.$router.push({ name: "no-entry-selected" });
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/background.webp") no-repeat center center;
  background-size: cover;
}

h1 {
  color: #ffffff;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p.lead {
  color: #ffffff;
  font-size: 1.25rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn-primary {
  background-color: #d93900;
  border-color: #d93900;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}

.btn-primary:hover {
  background-color: #ae2c00;
  border-color: #ae2c00;
}
</style>
