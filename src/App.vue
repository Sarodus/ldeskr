<template>
  <div id="app">
    <router-view/>
    <TaskBar />
  </div>
</template>

<script>
import TaskBar from '@/components/TaskBar'

export default {
  name: 'App',
  components: {
    TaskBar: TaskBar
  }
}
</script>

<style>
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
