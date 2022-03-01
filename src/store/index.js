import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import records from './records'
import users from './users'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      records,
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
