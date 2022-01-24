  
const getRecords = state => {
  return state.records
}

const singleRecord = state => {
  return state.currentRecord
}

export {
  getRecords,
  singleRecord
}