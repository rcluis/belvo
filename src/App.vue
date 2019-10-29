<template>
  <v-app id="app">
    <v-content>
      <v-container>
        <v-row no-gutters justify="center">
          <v-col sm="12" md="10" lg="8">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
