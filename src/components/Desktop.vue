<template>
  <div id="desktop">
    <Folder />
  </div>
</template>

<script>
import Folder from './Folder'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Folder: Folder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#desktop {
  background-color: cyan;
  width: 100%;
  height: 100vh;
  display: block;
  margin: none;
}
</style>
