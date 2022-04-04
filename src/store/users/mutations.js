const setLoggedUser = (state, user) => {
  state.isLogged = !!user
}

const postUser = (state, user) => {
  state.users.push(user) 
}

export {
  postUser,
  setLoggedUser
}