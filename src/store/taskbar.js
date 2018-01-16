function searchIndex (name, list) {
  // return index or -1
  let index = -1
  list.forEach((element, i) => {
    if (name === element[0]) {
      index = i
    }
  })
  return index
}

function addInList (name, item, list) {
  // Add [name, item] in list
  // return true if added
  // return false if already
  const index = searchIndex(name, list)
  if (index === -1) {
    list.push([name, item])
    return true
  }
  return false
}

function deleteFromList (name, list) {
  // Remove [name, item] from list
  // return true if removed
  // return False if not removed
  const index = searchIndex(name, list)
  if (index > -1) {
    list.splice(index, 1)
    return true
  }
  return false
}

export default {
  state: {
    appsOpened: [],
    applications: [],
    appsOpenLen: 0,
    currentApp: null
  },
  mutations: {
    ensureOpen (state, {app, key}) {
      addInList(key, app, state.appsOpened)
    },
    closeItem (state, key) {
      if (deleteFromList(key, state.appsOpened) && state.currentApp === key) {
        state.currentApp = null
      }
    },
    selectItem (state, {key}) {
      state.currentApp = key
    },
    openApplication (state, key) {
      if (state.applications.indexOf(key) === -1) {
        state.applications.push(key)
        addInList(key, {name: key}, state.appsOpened)
      }
      state.currentApp = key
    },
    closeApplication (state, key) {
      const index = state.applications.indexOf(key)
      if (index > -1) {
        state.applications.splice(index, 1)
      }
      deleteFromList(key, state.appsOpened)
      if (state.currentApp === key) {
        state.currentApp = null
      }
    }
  },
  actions: {
    ensureOpen: (context, payload) => {
      context.commit('ensureOpen', payload)
    },
    openItem: (context, payload) => {
      context.commit('ensureOpen', payload)
      context.commit('selectItem', payload)
    },
    closeItem: (context, payload) => {
      context.commit('closeItem', payload)
    },
    selectItem: (context, payload) => {
      context.commit('selectItem', payload)
    },
    openApplication: (context, payload) => {
      context.commit('openApplication', payload)
    },
    closeApplication: (context, payload) => {
      context.commit('closeApplication', payload)
    }
  },
  getters: {}
}
