<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid style="margin-top:-100px;">
        <v-row justify="center">
          <v-col class="text-center" cols="6">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
