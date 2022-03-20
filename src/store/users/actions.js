import axios from "axios"

const registerUser = async ({commit}, payload) => {
  await axios.post('http://localhost:3000/auth/register', payload)
}

const updateUser = async ({commit}, {payload, id}) => {
  await axios.patch(`http://localhost:3000/auth/register/${id}`, payload)
}

const authenticateUser = async ({commit}, payload) => {
  try {
    const result = await axios.post('http://localhost:3000/auth/authenticate', payload)
    
    localStorage.setItem('token', result.data.token)
    localStorage.setItem('id', result.data.user._id)

    const {data} = await axios.get('http://localhost:3000/projects', 
      // {
      //   "to": payload.recipientDid,
      //   "message": payload.message
      // },
      {
        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
          "Authorization": `Bearer ${result.data.token}`
        }
      } 
    )
    
    const user = await axios.get(`http://localhost:3000/users/${data.user}`)  

    commit('setLoggedUser', user.data)
  }  
  
  catch (error) {
    if(error.response)  throw error
  }  
}

const logout = async ({commit}) => {
  localStorage.clear()
  commit('setLoggedUser', false)
}


// {
//   "to": payload.recipientDid,
//   "message": payload.message
// },
// {
//   headers: {
//     "Accept": 'application/json',
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${payload.accessToken}`
//   }
// } 
export {
  registerUser,
  updateUser,
  authenticateUser,
  logout
}
