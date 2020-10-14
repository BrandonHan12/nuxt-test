<template>
<div>
    <h4 v-for="customer in customers" :key="customer.id" class="customers">
        {{ customer.firstName }}
        {{ customer.birthDate }}
    </h4>
    <v-row>
        <v-col class="text-center">
            <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        </v-col>
    </v-row>
    <Table />

</div>
</template>

<script>
import Table from '~/components/table.vue'
import {
    mapState
} from 'vuex'
export default {
    components: {
        Table,
    },
    async fetch({
        store
    }) {
        await store.dispatch('loadCustomers');
    },
    computed: {
        ...mapState({
            customers: state => state.customers
        })
    },
    fetchOnServer: true
}
</script>
