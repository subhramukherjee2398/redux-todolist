const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "Del":
      const new_list = state.list.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        list: new_list,
      };
    case "Clear":
      return {
        ...state,
        list : []
      }
    default:
      return state;
  }
};

export default todoReducer;
