  
const getRecords = state => {
  return state.records
}

const getRecordsCount = state => {
  return state.count
}

const singleRecord = state => {
  return state.currentRecord
}

export {
  getRecords,
  getRecordsCount,
  singleRecord
}