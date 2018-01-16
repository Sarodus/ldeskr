<template>
  <div id="taskbar">
    <div v-for="item in $store.state.taskbar.appsOpened" :key="item._uid">
      <div class="app" v-on:click="selectItem(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'TaskBar',
  methods: {
    selectItem (item) {
      console.log(store.state.taskbar.appsOpened)
      store.dispatch('selectItem', item)
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
