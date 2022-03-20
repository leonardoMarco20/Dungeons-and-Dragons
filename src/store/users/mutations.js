const setLoggedUser = (state, user) => {
  state.isLogged = !!user
}

const postUser = (state, user) => {
  state.users.push(user) 
}



// const setRecords = (state, records) => {
//   state.records = records.results
// }

// const setRecordsLength = (state, records) => {
//   state.recordsLength = records.results.length
// }

// const setSingleRecord = (state, record) =>{
//   state.currentRecord = record
// }

// const deleteRecord = (state, recordId) => {
//   const index = state.records.findIndex(record => record._id == recordId)
//   state.records.splice(index, 1)
// }

export {
  postUser,
  setLoggedUser
}