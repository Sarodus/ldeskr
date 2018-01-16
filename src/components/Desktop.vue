<template>
  <div id="desktop">
    <!-- FOR EACH OF FOLDERS AND ICONS -->
    <Folder :name="'hola'" />
    <Folder :name="'que'" />
    <Folder :name="'tal'" />
  </div>
</template>

<script>
import Folder from './Folder'

export default {
  name: 'Desktop',
  components: {
    Folder
  }
}
</script>

<style lang="scss">
#desktop {
  background-color: cyan;
  width: 100%;
  height: 100vh;
  display: block;
  margin: none;
}

html, body {
  margin: 0;
}

#app {
  margin: none;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
