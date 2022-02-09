<template>
  <div>
    <div v-for="country in countries">
      <p>{{ country.name.common }}</p>
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
  },
};
</script>

<style></style>
