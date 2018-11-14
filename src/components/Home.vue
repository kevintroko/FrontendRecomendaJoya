<template>
  <div>
    <b-container>
      <img alt="Vue logo" src="../assets/logo.png">
      <b-form-input class="search-bar"
                    type="text"
                    v-model="query"
                    placeholder="Search tournament..."></b-form-input>
    </b-container>
    <search-result
      v-for="tournament in tournaments"
      v-bind:key="tournament.id"
      v-bind:tournament="tournament"></search-result>
  </div>
</template>

<script>
import SearchResult from './SearchResult'
import axios from 'axios';

export default {
  name: 'Home',
  components: { SearchResult },
  data() {
    return {
      query: '',
      tournaments: [],
    }
  },
  updated() {
    axios.get(`http://localhost:3000/tournament/search/${this.query}`)
      .then(response => {
        const tournaments = response.data || [];
        tournaments.sort((a, b) => b.id - a.id)
        this.tournaments = tournaments;
      })
      .catch(err => {
        this.$log.error(err);
        this.tournaments = [];
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar {
  margin: 10px;
}
</style>
