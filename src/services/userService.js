const user = {
  name: 'Tomer Inbar',
  balance: 100,
  transactions: [],
}

const getUser = () => {
  return Promise.resolve(user)
}

export const userService = {
  getUser,
}
