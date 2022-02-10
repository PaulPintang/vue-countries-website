<template>
  <div>
    <div v-for="country in countries">
      <img :src="country.flags.png" alt="" />
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
    // .then((res) => console.log(res.data[1].flags.png));
  },
};
</script>

<style></style>
