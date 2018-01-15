<template>
  <div>
    <img id="folder" src="../assets/img/folder-blue.svg" v-on:click="toggle_open">
    <div id="inside" v-if="is_open">
      <div class="close" v-on:click="toggle_open">x</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Folder',
  data () {
    return {
      is_open: false
    }
  },
  methods: {
    toggle_open: function () {
      this.is_open = !this.is_open
    }
  }
}
</script>

<style scoped>
#folder {
  width: 50px;
  height: 50px;
  display: block;
  padding: 5px;
}
#folder:hover {
  background: rgba(0, 0, 0, .3);
}

#inside {
    background: white;
    width: 50%;
    height: 50vh;
    display: block;
    margin: auto;
}
#inside .close {
  position: relative;
  right: 10px;
  text-align: right;
}
</style>
