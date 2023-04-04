export default (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,

        products: [action.payload, ...state.products],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "EDIT_PRODUCT":
      const updatedTransac = action.payload;
      const updatedTransaction = state.products.map((product) => {
        if (product.id === updatedTransac.id) {
          return updatedTransac;
        }
        return product;
      });

      return {
        ...state,
        products: updatedTransaction,
      };
    default:
      return state;
  }
};
