import ApiService from '@/middleware/ApiService'

export const state = () => ({
    customers: []
})

export const mutations ={
    SET_CUSTOMERS(state,customers){
        state.customers = customers
    }
}

export const actions ={
    async loadCustomers({commit}){
    let req = await ApiService.getCustomers()

    
    req.forEach(c =>{
        c.id = c.id;
    })
    commit('SET_CUSTOMERS',req)
    
    }
    
}