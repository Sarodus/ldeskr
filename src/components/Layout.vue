<template>
  <div id="layout" v-bind:style="[windowSizes, stateStyle]">
    <div id="title_bar">
      <div id="title">
        <slot name="title">Title</slot>
      </div>
        <div class="action minimize" v-on:click="minimize">_</div>
        <div class="action full_screen" v-on:click="toggle_fullscreen">☐</div>
        <div class="action close" v-on:click="onClose">x</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import store from '@/store'

function setDefaultLayoutSize () {
  return {
    width: window.innerWidth / 10 * 8 + 'px',
    height: window.innerHeight / 10 * 8 + 'px',
    left: window.innerWidth / 10 + 'px',
    top: window.innerHeight / 10 + 'px'
  }
}

function setLayoutFullscreen () {
  return {
    width: window.innerWidth + 'px',
    height: window.innerHeight - 40 + 'px',
    left: 0,
    top: 0
  }
}

export default {
  name: 'Layout',
  props: ['onClose'],
  data () {
    return {
      is_open: false,
      is_fullscreen: false,
      name: 'name',
      windowSizes: setDefaultLayoutSize()
    }
  },
  computed: {
    stateStyle: function () {
      return {
        zIndex: store.state.taskbar.currentApp === this.$parent ? 1000 : 100
      }
    }
  },
  methods: {
    toggle_fullscreen: function () {
      this.windowSizes = this.is_fullscreen ? setDefaultLayoutSize() : setLayoutFullscreen()
      this.is_fullscreen = !this.is_fullscreen
    },
    minimize: function () {
      alert('minimize')
    }
  }
}
</script>

<style lang="scss" scoped>
#layout {
  z-index: 100;
  background: white;
  position: fixed;
  border: 2px solid chocolate;

  #title_bar {
    height: 40px;
    background: chocolate;
    #title {
      padding-left: 10px;
      color: white;
      line-height: 40px;
    }
    .action {
      position: absolute;
      top: 0;
      line-height: 40px;
      padding: 0 20px;
      &.minimize {
        right: 100px;
      }
      &.full_screen {
        right: 50px;
      }
      &.close {
        right: 0;
      }
      &:hover {
        background: rgba(0, 0, 0, .3);
        cursor: pointer;
      }
    }
  }
}
</style>
