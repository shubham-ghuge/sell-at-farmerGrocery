const initialState = {
    loading: false,
    products: [],
    orders: [],
    categories: []
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: !state.loading };
        case "INITIALIZE_PRODUCTS":
            const productData = action.payload;
            return { ...state, products: productData };

        case "INITIALIZE_ORDERS":
            const orderData = action.payload;
            return { ...state, orders: orderData };

        case "INITIALIZE_CATEGORIES":
            const categoryData = action.payload;
            return { ...state, categories: categoryData };
        case "DELETE_PRODUCT":
            const productId = action.payload;
            return { ...state, products: state.products.filter((i) => i._id !== productId) }
        default:
            return state;
    }
}

export { initialState, dataReducer };