type Action = {
  type: any;
  payload?: any;
};

const initialStates = {
  books: [
    { id: 1, title: 'Of Mice and Men', author: 'Jon', price: 25 },
    { id: 2, title: 'Eye of the Needle', author: 'Jon', price: 30 }
  ]
};

export const rootReducer = (state = initialStates, action: Action) => {
  return state;
};
