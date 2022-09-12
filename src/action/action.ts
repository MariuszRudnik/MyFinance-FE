export const removeItem = (itemType: any, id: any) => {
  return {
    type: 'REMOVE_ITEM,',
    payload: {
      itemType,
      id
    }
  };
};
