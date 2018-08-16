<template>
  <div class="helper">
    <span class="left">2 items left</span>
    <span class="tabs">
      <span
          v-for="state in states"
          :key="state"
          :class="[state,filter===state?'active':'']"
          @click="toggleFilter(state)"
      >
      {{state}}
      </span>
    </span>
    <span class="clear" @click="clearCompleted"></span>
  </div>
</template>
<script>
export default {
  props: {
    filters: {
      
    }
  },methods: {
    toggleFilter(){},
    clearCompleted(){

    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
