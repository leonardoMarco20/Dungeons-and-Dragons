const setRecords = (state, records) => {
  state.records = records
}

const postRecord = (state, record) =>{
  state.records.push(record)
}

const setSingleRecord = (state, record) =>{
  state.currentRecord = record
}

export {
  setRecords,
  setSingleRecord,
  postRecord
}