import axios from "axios"
// const resource_uri = 'http://localhost:3000/register'

const registerUser = async ({commit}, payload) => {
  await axios.post('http://localhost:3000/auth/register', payload)
  commit('postUser', payload)
}

const authenticateUser = async ({commit}, payload) => {
  try {
    const result = await axios.post('http://localhost:3000/auth/authenticate', payload)
    console.log(result)
    localStorage.setItem('token', result.data.token)
    localStorage.setItem('email', result.data.user.email)

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
    return localStorage.setItem('user', user.data.name) 
  }  
  
  catch (error) {
    if(error.response)  throw error
  }  
}

const logout = async ({commit}) => {
  localStorage.clear()
  commit('setLoggedUser', {})
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
  authenticateUser,
  logout
}
