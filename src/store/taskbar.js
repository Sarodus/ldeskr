export default {
  state: {
    appsOpened: [],
    applications: [],
    currentApp: null
  },
  mutations: {
    ensureOpen (state, app) {
      if (state.appsOpened.indexOf(app) === -1) {
        state.appsOpened.push(app)
      }
    },
    openItem (state, app) {
      if (state.appsOpened.indexOf(app) === -1) {
        state.appsOpened.push(app)
      }
      state.currentApp = app
    },
    closeItem (state, app) {
      const index = state.appsOpened.indexOf(app)
      if (index > -1) {
        state.appsOpened.splice(index, 1)
      }
      if (state.currentApp === app) {
        state.currentApp = null
      }
    },
    selectItem (state, app) {
      state.currentApp = app
    },

    openApplication (state, app) {
      if (state.applications.indexOf(app) === -1) {
        state.applications.push(app)
      }
      state.currentApp = app
    }
  },
  actions: {
    ensureOpen: (context, app) => {
      context.commit('ensureOpen', app)
    },
    openItem: (context, app) => {
      context.commit('openItem', app)
    },
    closeItem: (context, app) => {
      context.commit('closeItem', app)
    },
    selectItem: (context, app) => {
      context.commit('selectItem', app)
    },
    openApplication: (context, app) => {
      context.commit('openApplication', app)
    }
  },
  getters: {}
}
