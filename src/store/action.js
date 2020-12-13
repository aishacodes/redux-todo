export const addTodo = (id, description) => ({
  type: "ADD_TODO",
  payload: {
    id,
    description,
  },
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: {
    id,
  },
});
