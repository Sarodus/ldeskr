import Vue from 'vue'
import store from '@/store'
import Desktop from '@/components/Desktop'
import TaskBar from '@/components/TaskBar'

import Editor from '@/components/Editor'
const mappedApps = {
  Editor
}

export default Vue.component('App', {
  render: function (createElement) {
    let runningApps = []
    store.state.taskbar.applications.forEach(appName => {
      const el = mappedApps[appName]
      store.dispatch('ensureOpen', el)
      runningApps.push(createElement(el))
    })
    return createElement('div', [
      createElement(Desktop),
      createElement(TaskBar),
      runningApps
    ])
  }
})
