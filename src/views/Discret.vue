<template>
  <div class="discret">
    <h1>Дискретная математика</h1>
    Формула следующая <span v-katex="'\\forall'"></span>
    <!-- <div v-katex="{ expression: , options: { throwOnError: false }}"></div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  /* @import "../../node_modules/katex/dist/katex.min.css" */
</style>
