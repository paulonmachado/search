<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid style="margin-top:-100px;">
        <v-row justify="center">
          <v-col class="text-center" cols="6">
            <v-img :src="imagePath"></v-img>
            <v-card class="mx-auto">
              <v-toolbar dark color="blue darken-3">
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
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      state: 0,
      itemss: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
      search: null,
      select: null,
      states: [],
      imagePath: require("@/assets/quem.jpg")
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
