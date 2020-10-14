<template>
  <div>
    <v-card elevation="24" max-width="800" class="mx-auto">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          hide-delimiter-background
          height="300"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://images.unsplash.com/photo-1602395714062-ac1feb0c7506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src:
            'https://images.unsplash.com/photo-1602329027317-69b722eeb8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
