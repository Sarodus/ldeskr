import Vue from 'vue'
import Vuex from 'vuex'

import editor from './editor'
import taskbar from './taskbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    editor,
    taskbar
  }
})
