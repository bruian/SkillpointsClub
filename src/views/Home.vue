<template>
  <div class="home">
    <HelloWorld msg="SkillPoints.club"/>
    <h2>Доступное обучение</h2>
    <b-button @click="onClick">Load JSON</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import utils from '@/main/utils.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    onClick: function () {
    }
  }
}
</script>
