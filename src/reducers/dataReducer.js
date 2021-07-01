const initialState = {
    products: [],
    orders: [],
    categories: []
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_PRODUCTS":
            const productData = action.payload;
            return { ...state, products: productData };

        case "INITIALIZE_ORDERS":
            const orderData = action.payload;
            return { ...state, orders: orderData };

        case "INITIALIZE_CATEGORIES":
            const categoryData = action.payload;
            return { ...state, categories: categoryData };

        default:
            return state;
    }
}

export { initialState, dataReducer };