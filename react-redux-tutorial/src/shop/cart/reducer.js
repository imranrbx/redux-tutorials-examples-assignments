import actions from "./actions";
const cartReducer = (
	state = { products: [], count: 0, total: 0 },
	action = {}
) => {
	switch (action.type) {
		case actions.ADD_TO_CART:
			const product_exist = state.products.find(
				(product) => product.id === action.payload.id
			);
			const products =
				product_exist !== undefined
					? state.products.map((product) =>
							product.id === product_exist.id
								? {
										...product,
										qty:
											product.qty +
											product_exist.qty,
										total:
											product.total +
											product.price *
												product_exist.qty,
								  }
								: product
					  )
					: [...state.products, action.payload];
			return { ...state, products: products };
		case actions.EMPTY_CART:
			return { ...state, products: [], count: 0, total: 0 };
		case actions.REMOVE_FROM_CART:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.id
				),
			};
		case actions.COUNT_CART:
			return {
				...state,
				count: state.products.length,
			};
		case actions.TOTAL_CART:
			return {
				...state,
				total: state.products
					.map((product) => product.total)
					.reduce((a, b) => a + b, 0),
			};
		case actions.INCREMENT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.id
						? {
								...product,
								qty: product.qty + 1,
								total: (product.qty + 1) * product.price,
						  }
						: product
				),
			};
		case actions.DECREMENT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.id && product.qty > 1
						? {
								...product,
								qty: product.qty - 1,
								total: (product.qty - 1) * product.price,
						  }
						: product
				),
			};
		default:
			return state;
	}
};
export default cartReducer;
