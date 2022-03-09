export const addTodo = (data) => {
  return {
    type: "Add",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const delTodo = (id) => {
  console.log({ id });
  return {
    type: "Del",
    id: id,
  };
};

export const clearTodo = () => {
  return {
    type: "Clear",
  };
};
