  
const getRecords = state => {
  return state.records
}

const getRecordsLength = state => {
  return state.recordsLength
}

const singleRecord = state => {
  return state.currentRecord
}

export {
  getRecords,
  getRecordsLength,
  singleRecord
}