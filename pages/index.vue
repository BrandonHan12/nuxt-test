<template>
  <div>
    <Carousel />
    <br />
    <div class="d-flex flex-row justify-space-around">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Carousel from '~/components/carousel.vue'
import Card from '~/components/card.vue'
import ApiService from '@/middleware/ApiService.js'
export default {
  components: {
    Logo,
    VuetifyLogo,
    Carousel,
    Card,
  },
  methods: {},
}
</script>
