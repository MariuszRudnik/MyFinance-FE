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
  walletOperations: [
    {
      id: 1,
      typeOfOperation: 'expenditure',
      title: 'Bread',
      price: 25,
      icon: '',
      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    },
    {
      id: 2,
      typeOfOperation: 'income',
      title: 'payment',
      price: 25,
      icon: '',
      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    },
    {
      id: 1,
      typeOfOperation: 'expenditure',
      title: 'Bread',
      price: 25,
      icon: '',
      data: '2022-12-12',
      category: 'Eat',
      description: 'opis'
    }
  ]
};
export default state;
