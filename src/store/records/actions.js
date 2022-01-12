import axios from "axios"

const resource_uri = 'http://localhost:3000/record'

const fetchRecords = async ({commit}) => {
  
  const { data } = await axios.get(resource_uri)
  commit('setRecords', data);
}

export {
  fetchRecords
}
