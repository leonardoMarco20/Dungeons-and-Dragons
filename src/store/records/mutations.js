const setRecords = (state, records) => {
  state.records = records
}

const postRecord = (state, record) =>{
  state.records.push(record)
}

const setSingleRecord = (state, record) =>{
  state.currentRecord = record
}

const deleteRecord = (state, recordId) => {
  const index = state.records.findIndex(record => record._id == recordId)
  console.log(index)
  state.records.splice(index, 1)
}

export {
  setRecords,
  setSingleRecord,
  postRecord,
  deleteRecord
}