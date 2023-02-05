const state: any = {
  login: {
    login: false,
    data: {
      first_name: null,
      last_name: null,
      email: null
    },
    request: {
      pending: false,
      error: false,
      success: false
    }
  },
  wallet: {
    walletList: [],
    category: [],
    parentCategory: []
  },

  walletOperations: [
    {
      id: 1,
      typeOfOperation: 'expenditure',
      icon: 'Bread',
      price: 25,

      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    },
    {
      id: 2,
      typeOfOperation: 'income',
      icon: 'payment',
      price: 25,

      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    },
    {
      id: 1,
      typeOfOperation: 'expenditure',
      icon: 'Bread',
      price: 25,

      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    }
  ]
};
export default state;
