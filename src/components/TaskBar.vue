<template>
  <div id="taskbar">
    <div v-for="item in $store.state.taskbar.appsOpened" :key="item[0]">
      <div class="app" v-on:click="selectItem(item[0])">
        {{ item[0] }}
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'TaskBar',
  methods: {
    selectItem (key) {
      store.dispatch('selectItem', {key})
    }
  }
}
</script>

<style lang="scss" scoped>
#taskbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, .7);
  color: white;
  .app {
    background: red;
    width: 50px;
    height: 40px;
    display: block;
    float: left;
    &:hover {
      opacity: .7;
      cursor: pointer;
    }
  }
}
</style>
