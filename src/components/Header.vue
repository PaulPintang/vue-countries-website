<template>
  <div class="header">
    <div class="flex container">
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div class="flex">
        <i class="fa-regular fa-moon"></i>
        <p>Darkmode</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  height: 75px;
  background: hsl(0, 0%, 100%);
}
.flex {
  gap: 5px;
}
</style>
