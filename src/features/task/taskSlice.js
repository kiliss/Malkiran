import { createSlice } from '@reduxjs/toolkit'
import productos from '../../productos.json'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        productos: [],
        filterProductos: [],
        filter: 'Todo',
        search: '',
    },
    reducers: {
        addProduct: (state, action) => {
            state.productos.push(productos)
            state.filterProductos.push(productos)

        },
        filterProduct: (state, action) => {
            // filter product by categoria
            state.filter = action.payload
        },
        searchProduct: (state, action) => {
            // search product by name
            state.search = action.payload
        },
    }
})


export const { addProduct, filterProduct, getProduct, searchProduct } = taskSlice.actions
export default taskSlice.reducer