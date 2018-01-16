export default {
  state: {
    editingFiles: [],
    currentFile: null
  },
  mutations: {
    editFile (state, item) {
      if (state.editingFiles.indexOf(item) === -1) {
        state.editingFiles.push(item)
      }
      state.currentFile = item
    },
    clearEditor (state) {
      state.editingFiles = []
      state.currentFile = null
    }
  },
  actions: {
    editFile: (context, item) => {
      context.commit('editFile', item)
    },
    clearEditor: ({commit}) => {
      commit('clearEditor')
    }
  },
  getters: {}
}
