const initialState = {
    products: [],
    orders: []
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_PRODUCTS":
            const productData = action.payload;
            return { ...state, products: productData };

        case "INITIALIZE_ORDERS":
            const orderData = action.payload;
            return { ...state, orders: orderData };

        default:
            return state;
    }
}

export { initialState, dataReducer };