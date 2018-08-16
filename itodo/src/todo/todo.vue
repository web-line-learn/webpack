<template>
  <section class="real-app">
    <input 
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="next what to do?"
        @keyup.enter="addTodo"
    />
  </section>
  
</template>
<script>
import Item from "./item.vue"
import Tabs from "./tabs.vue"

export default {
  data () {
    return {
      todo:{
        id:1,
        completed:false,
        content:''
      }
    }
  },
  components: {
    Item
  },
  methods: {
    addTodo(){

    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
