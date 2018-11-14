<template>
  <div>
    <b-container>
      <img alt="Vue logo" src="../assets/logo.png">
      <search-params @change="onParamsChange"></search-params>
    </b-container>
    <suggestion-item
      v-for="product in results"
      v-bind:key="product.id"
      v-bind:product="product"></suggestion-item>
  </div>
</template>

<script>
import SearchParams from './SearchParams'
import SuggestionItem from './SuggestionItem'
import API from '../api'

const api = new API();

export default {
  name: 'Home',
  components: { SuggestionItem, SearchParams },
  data() {
    return {
      query: {
        minPrice: null,
        maxPrice: null,
        category: null,
      },
      results: [],
    }
  },
  methods: {
    onParamsChange() {
      api.getSuggestions(this.query)
      .then(this.updateResults)
      .catch(this.$log);
    },
    updateResults(results) {
      this.results = results;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar {
  margin: 10px;
}
</style>
