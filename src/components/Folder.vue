<template>
  <div>
    <div class="folder" v-on:click="toggle_open">
      <img src="../assets/img/folder-blue.svg">
      <span class="title">{{ name }}</span>
    </div>
    <div id="inside" v-if="is_open" v-bind:style="windowSizes">
      <div id="title_bar">
        <div id="title">TITLE</div>
          <div class="action minimize" v-on:click="minimize">_</div>
          <div class="action full_screen" v-on:click="toggle_fullscreen">☐</div>
          <div class="action close" v-on:click="toggle_open">x</div>
        <div v-for="item in current_tree" :key="item.id">
          <div class="folder" v-on:click="open(item)">
            <img v-if="item.type === 'folder'" src="../assets/img/folder-blue.svg">
            <img v-if="item.type === 'file'" src="../assets/img/file.svg">
            <span class="title">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Folder',
  data () {
    return {
      is_open: false,
      name: 'name',
      windowSizes: {
        width: window.innerWidth / 10 * 8 + 'px',
        height: window.innerHeight / 10 * 8 + 'px',
        left: window.innerWidth / 10 + 'px',
        top: window.innerHeight / 10 + 'px'
      },
      tree: [
        {
          id: 1,
          name: 'item1',
          type: 'folder',
          tree: [
            {
              id: 2,
              name: 'item1.1',
              type: 'folder',
              tree: [
                {
                  id: 3,
                  name: 'item1.1.1',
                  type: 'file'
                },
                {
                  id: 4,
                  name: 'item1.1.2',
                  type: 'file'
                },
                {
                  id: 5,
                  name: 'item1.1.3',
                  type: 'file'
                }
              ]
            },
            {
              id: 6,
              name: 'item1.2',
              type: 'folder',
              tree: [
                {
                  id: 7,
                  name: 'item1.2.1',
                  type: 'file'
                },
                {
                  id: 8,
                  name: 'item1.2.2',
                  type: 'file'
                },
                {
                  id: 9,
                  name: 'item1.2.3',
                  type: 'file'
                },
                {
                  id: 10,
                  name: 'item1.2.4',
                  type: 'image'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'item2',
          type: 'file'
        }
      ],
      current_tree: []
    }
  },
  methods: {
    toggle_open: function () {
      this.is_open = !this.is_open
      this.current_tree = this.tree
    },
    toggle_fullscreen: function () {
      alert('toggle_fullscreen')
    },
    minimize: function () {
      alert('minimize')
    },
    open: function (item) {
      switch (item.type) {
        case 'folder':
          this.current_tree = item.tree
          break
        case 'file':
          alert('EDIT ' + item.name)
          break
        case 'image':
          alert('SEE IMAGE ' + item.name)
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.folder {
  width: 50px;
  min-height: 50px;
  display: block;
  padding: 8px;
  float: left;
  &:hover {
    background: rgba(0, 0, 0, .3);
  }
  .title {
    font-size: .9em;
    position: relative;
    bottom: 10px;
    text-align: center;
    margin: auto;
    display: block;
  }
}

#inside {
  z-index: 100;
  background: white;
  position: fixed;
  border: 2px solid chocolate;
}
</style>
