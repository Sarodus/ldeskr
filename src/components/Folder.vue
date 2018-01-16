<template>
  <div>
    <div class="folder" v-on:click="toggleOpen">
      <img src="../assets/img/folder-blue.svg">
      <span class="title">{{ name }}</span>
    </div>
    <Layout v-if="is_open" :onClose="closeFolder">
      <div slot="title">{{ name }}</div>
      <div v-for="item in current_tree" :key="item.id">
        <div class="folder" v-on:click="open(item)">
          <img v-if="item.type === 'folder'" src="../assets/img/folder-blue.svg">
          <img v-if="item.type === 'file'" src="../assets/img/file.svg">
          <span class="title">{{item.name}}</span>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from './Layout'
// import Editor from './Editor'
import store from '@/store'

export default {
  name: 'Folder',
  props: ['name'],
  components: {
    Layout
  },
  data () {
    return {
      is_open: false,
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
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
                },
                {
                  id: 4,
                  name: 'item1.1.2',
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
                },
                {
                  id: 5,
                  name: 'item1.1.3',
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
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
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
                },
                {
                  id: 8,
                  name: 'item1.2.2',
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
                },
                {
                  id: 9,
                  name: 'item1.2.3',
                  type: 'file',
                  title: 'file title',
                  content: 'file content here'
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
          type: 'file',
          title: 'file title',
          content: 'file content here'
        }
      ],
      current_tree: []
    }
  },
  methods: {
    toggleOpen: function () {
      this.is_open = !this.is_open
      if (this.is_open) {
        this.current_tree = this.tree
        store.dispatch('openItem', {app: this, key: this._uid})
      } else {
        store.dispatch('closeItem', this._uid)
      }
    },
    closeFolder: function () {
      this.is_open = false
      store.dispatch('closeItem', this._uid)
    },
    open: function (item) {
      switch (item.type) {
        case 'folder':
          this.current_tree = item.tree
          break
        case 'file':
          store.dispatch('openApplication', 'Editor')
          store.dispatch('editFile', item)
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
