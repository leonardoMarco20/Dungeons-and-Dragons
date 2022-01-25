import axios from "axios"

const resource_uri = 'http://localhost:3000/record'

const fetchRecords = async ({commit}) => {
  const { data } = await axios.get(resource_uri)
  commit('setRecords', data);
}

const fetchSingleRecord = async ({commit}, id) => {
  const { data } = await axios.get(`${resource_uri}/${id}`)
  commit('setSingleRecord', data);
}

const postRecord = async ({commit}, payload) => {
  await axios.post(resource_uri, payload)
  commit('postRecord', payload)
}

const updateRecord = async ({commit}, payload) => {
  await axios.patch(`${resource_uri}/${payload._id}`, payload)
}

const deleteRecord = async ({commit}, id) => {
  await axios.delete(`${resource_uri}/${id}`)
  commit('deleteRecord', id)
}

export {
  fetchRecords,
  fetchSingleRecord,
  postRecord,
  updateRecord,
  deleteRecord
}
