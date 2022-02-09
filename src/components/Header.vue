<template>
  <div class="header">
    <div class="flex">
      <div>
        <h1>Where in the world</h1>
      </div>
      <div>
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
  height: 100px;
}
.header .flex {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
