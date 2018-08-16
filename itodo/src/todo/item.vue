<template>
  <div :class="['todo-item',todo.compeleted?'completed':'']">
    <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    />

    <label>{{todo.label}}</label>
    <button class="destory" @click="deleteTode"></button>
  </div>
</template>
<script>
export default {
  props: {
    todo:{
      type:Object,
      required:true
    },
    methods: {
      deleteTodo(){

      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
