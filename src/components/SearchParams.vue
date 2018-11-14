<template>
  <div>
    <p>Params</p>

    <v-layout row>
      <v-flex shrink class="price-field">
        <v-text-field
          v-model="price[0]"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>

      <v-flex class="px-3">
        <v-range-slider
          v-model="price"
          @change="priceChanged"
          :max="maxPrice"
          :min="minPrice"
        ></v-range-slider>
      </v-flex>

      <v-flex shrink class="price-field">
        <v-text-field
          v-model="price[1]"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-btn-toggle max=5 mandatory v-model="category" @change="categoryChanged">
      <v-btn 
        flat
        v-for="category in categories"
        v-bind:key="category"
        :value="category">
        <span>{{category}}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
<script>

const maxPrice = 60000;
const minPrice = 0;

const categories = [
  "anillo",
  "argolla",
  "arete",
  "juegos",
  "broquel",
  "arracada",
  "huggie",
  "medalla",
  "cristo",
  "dije",
  "cadena",
  "esclava",
  "aro",
  "semanario",
  "reloj",
  "gargantilla",
  "rosario",
]

export default {
  name: 'SearchParams',
  data(){
    return {
      maxPrice,
      minPrice,
      categories,

      category: categories[0],
      price: [minPrice, maxPrice],
    };
  },
  methods: {
    categoryChanged() {
      this.$emit('change', {
        category: this.category,
        price: this.price,
      });
    },
    priceChanged() {
      this.$emit('change', {
        category: this.category,
        price: this.price,
      });
    }
  },
}
</script>

<style scoped>
.price-field {
  width: 40px
}
</style>
