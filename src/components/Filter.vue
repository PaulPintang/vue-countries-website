<template>
  <div class="flex">
    <div class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for a country..."
        v-model="country"
      />
    </div>
    <span>{{ this.country }}</span>
    <div class="filter">
      <div class="card">
        <button @click="handleFilter" class="flex-icon">
          <p>Filter by Region</p>
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div v-if="show" class="items">
        <div class="regions">
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
      country: null,
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
  position: absolute;
  left: 25px;
  top: 46px;
  color: hsl(204, 2%, 49%);
}
.flex-icon {
  display: flex;
  align-items: center;
  gap: 25px;
}
.flex {
  align-items: center;
}
.search {
  padding: 30px 0;
  position: relative;
}
.items {
  position: relative;
}
.regions {
  position: absolute;
  top: 8px;
}
.regions button {
  width: 100%;
  text-align: left;
}

.filter {
  position: relative;
}
</style>
