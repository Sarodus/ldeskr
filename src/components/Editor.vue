<template>
<div>
  <Layout v-if="$store.state.editor.editingFiles.length > 0" :onClose="closeEditor">
    <div slot="title">{{ $store.state.editor.currentFile.title }} ({{ $store.state.editor.editingFiles.length }})</div>
    {{ $store.state.editor.currentFile.content }}
  </Layout>
</div>
</template>

<script>
import Layout from './Layout'
import store from '@/store'

export default {
  name: 'Editor',
  components: {
    Layout
  },
  methods: {
    closeEditor () {
      store.dispatch('closeEditor')
    }
  }
}
</script>

<style lang="scss" scoped>
#editor {
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  position: fixed;
  background: white;
}
</style>
