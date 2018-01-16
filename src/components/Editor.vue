<template>
  <Layout v-if="$store.state.editor.editingFiles.length > 0" :onClose="clearEditor">
    <div slot="title">{{ $store.state.editor.currentFile.title }} ({{ $store.state.editor.editingFiles.length }})</div>
    asdasdasdasdzxczxcqweqwe
  </Layout>
</template>

<script>
import Layout from './Layout'
import store from '@/store'

export default {
  components: {
    Layout: Layout
  },
  methods: {
    clearEditor () {
      store.dispatch('clearEditor')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
