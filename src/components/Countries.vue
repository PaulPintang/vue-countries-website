<template>
  <div class="flex">
    <div v-for="country in countries" :key="country.id">
      <div v-if="countries.length">
        <div class="card">
          <div class="flags-container">
            <img :src="country.flags.png" alt="" />
          </div>
          <div class="card-container">
            <h3>{{ country.name.common }}</h3>
            <div class="c">
              <p>
                <span>Population:</span>
                {{ country.population.toLocaleString() }}
              </p>
              <p><span>Region:</span> {{ country.region }}</p>
              <p><span>Capital:</span> {{ country.capital }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>loading...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Country",
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => (this.countries = res.data));
    console.log(this.countries);
  },
  computed: {
    sortedCountry() {
      // return this.countries.sort();
      // return this.countries.filter((country) => country.region === "Asia");
    },
  },
};
</script>

<style scoped>
h3 {
  padding-bottom: 13px;
  max-width: 200px;
}
span {
  font-weight: 600;
}
.card {
  border-radius: 8px;
}
.c-info {
  padding: 0 23px 23px 23px;
}
.card-container {
  padding: 16px 25px 25px 25px;
}
.flex {
  flex-wrap: wrap;
  row-gap: 30px;
}
.flags-container img {
  width: 230px;
  height: 170px;
  border-radius: 8px 8px 0 0;
}
</style>
