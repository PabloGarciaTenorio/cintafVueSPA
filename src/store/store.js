import Vue from 'vue'
import Vuex from 'Vuex'
import services from './services'

Vue.use(Vuex)

const state = {
  services
}

export default new Vuex.Store({
  state
})

import Axios from 'axios'
import exampleService from '../services/ExampleService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
  exampleService: new exampleService(Axios)
}
