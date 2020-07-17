<template>
  <div>
    <v-img :src="imagePath" class="mx-auto"></v-img>
    <v-card class="mx-auto">
      <v-toolbar dark color="teal lighten-1">
        <v-toolbar-title>Motor de Busca</v-toolbar-title>
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="O que procuras?"
          solo-inverted
        ></v-autocomplete>
      </v-toolbar>
      <v-list v-if="state != 0">
        <div v-if="state == 1">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Não foram encontrados resultados</v-list-item-title>
              <v-list-item-subtitle>tenta outra vez...</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-if="state == 2">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>A pesquisar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      state: 0,
      search: null,
      select: null,
      states: [],
      imagePath: require("@/assets/finder.png")
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      this.state = 2;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
        this.state = 1;
      }, 2000);
    }
  }
};
</script>
