<template>
  <div class="search">
    <div class="flex">
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="" id="" placeholder="Search for a country.." />
      </div>
      <div>
        <button @click="handleFilter">
          <p>Filter by Region</p>
        </button>
        <div v-if="show" class="items">
          <button>dsadasd</button>
          <button>dsad</button>
          <button>dasdas</button>
          <button>dsadasda</button>
        </div>
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
.flex {
  align-items: unset;
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
