export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
        //findIndex finds the first item of that id and return it,
        //if we would have used to filter the basket by action.id,
        //it would have returned all the items with that id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        //array.splice(index, howmany, item1, ....., itemX)
        //index:Required. An integer that specifies at what position to add/remove items,
        // Use negative values to specify the position from the end of the array
        //howmany:Optional. The number of items to be removed. If set to 0, no items will be removed
        //item1, ..., itemX:Optional. The new item(s) to be added to the array
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
