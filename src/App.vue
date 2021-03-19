<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="logo"
            transition="scale-transition"
            width="40"
          />
      </div>
    </v-app-bar>

    <v-main>
      <template>
        <app-contact :items="items"></app-contact>
        <v-btn
                v-show="!hidden"
                color="pink"
                dark
                absolute
                bottom
                left
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-main>
  </v-app>
</template>

<script>
import AppContacts from './components/app-contacts-list'

export default {
  name: 'App',
  components: {
    'app-contact': AppContacts
  },
  data: () => ({
    logo: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
    ],
  }),
};
</script>
<style>
  .v-main__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5a4672;
  }
</style>
