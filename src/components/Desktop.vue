<template>
  <div id="desktop">
    <Folder />
    <Folder />

    <Editor />
  </div>
</template>

<script>
import Folder from './Folder'
import Editor from './Editor'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Folder: Folder,
    Editor: Editor
  }
}
</script>

<style scoped>
#desktop {
  background-color: cyan;
  width: 100%;
  height: 100vh;
  display: block;
  margin: none;
}
</style>
