<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/logo.webp" alt="Reddit Logo" class="navbar-logo" />
      <span class="navbar-title">Reto Tecnico Reddit</span>
    </div>
    <div class="navbar-right">
      <span class="navbar-time">{{ currentTime }}</span>
      <span class="navbar-user">Felix Martinez</span>
      <button class="btn btn-outline-light btn-sm" @click="$router.go(-1)">
        Regresar
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      currentTime: "",
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
    },
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, #007bff 0%, #00c6ff 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar-left {
  display: flex;
  align-items: center;
}
.navbar-logo {
  height: 40px;
  margin-right: 10px;
}
.navbar-title {
  font-size: 20px;
  font-weight: bold;
}
.navbar-right {
  display: flex;
  align-items: center;
}
.navbar-time {
  margin-right: 15px;
  font-size: 18px;
}
.navbar-user {
  margin-right: 15px;
  font-size: 18px;
}
.btn-outline-light {
  border: 1px solid white;
  color: white;
}
.btn-outline-light:hover {
  background: white;
  color: #007bff;
}
</style>
