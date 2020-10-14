export { default as Card } from '../..\\components\\card.vue'
export { default as Carousel } from '../..\\components\\carousel.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Table } from '../..\\components\\table.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyCard = import('../..\\components\\card.vue' /* webpackChunkName: "components_card" */).then(c => c.default || c)
export const LazyCarousel = import('../..\\components\\carousel.vue' /* webpackChunkName: "components_carousel" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyTable = import('../..\\components\\table.vue' /* webpackChunkName: "components_table" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
