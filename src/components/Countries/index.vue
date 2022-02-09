<template>
  <div>dsadsa</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Country",
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res));
  },
};
</script>

<style></style>
