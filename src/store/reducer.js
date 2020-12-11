const reducer = (
  state = [
    { id: "66tt", description: "Buy some milk", done: "false" },
    { id: "66ti", description: "Cook some food", done: "false" },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          done: false,
        },
      ];
      break;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
      break;
    case "EXECUTE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) todo.done = true;
        return todo;
      });
      break;
    default:
      return state;
  }
};

export default reducer;
