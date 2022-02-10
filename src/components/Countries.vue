<template>
  <div class="flex">
    <!-- <router-link :to="{ name: 'ContactDetails', params: { id: contact.id } }> -->
    <div v-for="country in countries" class="card">
      <div class="flags-container">
        <img :src="country.flags.png" alt="" />
      </div>
      <div class="card-container">
        <h3>{{ country.name.common }}</h3>
        <div class="c">
          <p>
            <span>Population:</span> {{ country.population.toLocaleString() }}
          </p>
          <p><span>Region:</span> {{ country.region }}</p>
          <p><span>Capital:</span> {{ country.capital }}</p>
        </div>
      </div>
    </div>
    <!-- </router-link> -->
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
};
</script>

<style scoped>
h3 {
  padding-bottom: 13px;
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
/* .flags-container {
} */
.flags-container img {
  width: 250px;
  height: 170px;
  border-radius: 8px 8px 0 0;
}
</style>
