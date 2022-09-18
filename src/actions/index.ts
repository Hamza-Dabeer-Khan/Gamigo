export const setFilter = (value: number) => {
  return {
    type: "SET_FILTER",
    payload: value,
  };
};
