<template>
  <div class="flex">
    <div class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="" id="" placeholder="Search for a country.." />
    </div>
    <div>
      <div class="card">
        <button @click="handleFilter" class="flex-icon">
          <p>Filter by Region</p>
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>

      <div v-if="show" class="items">
        <button>dsadasd</button>
        <button>dsad</button>
        <button>dasdas</button>
        <button>dsadasda</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleFilter() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.search i {
  position: relative;
  left: 30px;
  color: hsl(204, 2%, 49%);
}
.flex-icon {
  display: flex;
  align-items: center;
  gap: 25px;
}
.search {
  padding: 30px 0;
}
.items button {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6px;
}
.items button {
  width: 100%;
  position: relative;
}
</style>
