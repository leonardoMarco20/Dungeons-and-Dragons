import axios from "axios"

const resource_uri = 'http://localhost:3000/record'

const fetchRecords = async ({commit}) => {
  const { data } = await axios.get(resource_uri)
  commit('setRecords', data);
}

const postRecord = async ({commit}, payload) =>{
  await axios.post(resource_uri, payload)
  commit('postRecord', payload)
}

export {
  fetchRecords,
  postRecord
}
