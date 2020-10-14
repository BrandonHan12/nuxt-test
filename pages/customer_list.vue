<template>
<div>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        DOB
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id" class="customers">
                    <td>{{ customer.firstName }}</td>
                    <td> {{ customer.lastName }}</td>
                    <td> {{ customer.birthDate }}</td>
                    <td> {{ customer.gender }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {

    components: {},
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
}
</script>
