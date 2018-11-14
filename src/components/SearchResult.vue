<template>
  <div>
    <b-link class="result" href="#" v-bind:to="`/tournament/${tournament.id}`">{{tournament.id}}. {{tournament.name}}</b-link>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['tournament']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
  width: auto;
  margin-left: 12%;
  margin-right: 12%;
  display: block;
}
</style>
