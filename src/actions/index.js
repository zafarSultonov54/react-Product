export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
});
export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const clearTodo = (id) => ({
  type: 'CLEAR_TODO',
  id,
});

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
});
export const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id,
});
