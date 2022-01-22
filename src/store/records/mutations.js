const setRecords = (state, records) => {
  state.records = records
}

const postRecord = (state, record) =>{
  state.records.push(record)
}

export {
  setRecords,
  postRecord
}