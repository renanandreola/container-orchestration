const defaultValues = {
  min: 7,
  max: 30,
};

export const numberReducer = function (state = defaultValues, action) {
  switch (action.type) {
    case "@update_number":
      return {
        ...state,
        min: action.payload,
      };

    default:
      return state;
  }
};
