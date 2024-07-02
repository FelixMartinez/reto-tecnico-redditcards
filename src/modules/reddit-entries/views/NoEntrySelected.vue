<template>
  <div class="selection-screen">
    <div class="icon-container">
      <i class="fas fa-arrow-circle-up"></i>
    </div>
    <h1>Selecciona una entrada</h1>
    <p>Por favor, selecciona una entrada de la lista para ver los detalles.</p>
  </div>
</template>

<script>
export default {
  name: "SelectionScreen",
};
</script>

<style scoped>
.selection-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #50636a;
  background-color: #f9f9f9;
}

.icon-container {
  font-size: 4rem;
  color: #007bff;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #6c757d;
}
</style>
