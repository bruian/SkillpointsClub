<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">SkillPoints.club</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/discret">
            Дискретная математика
          </b-nav-item>
          <b-nav-item to="/english">
            Английский язык
          </b-nav-item>
          <b-nav-item to="/about">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="main-layer">
      <b-row>
        <div style="height: 30px;"></div>
      </b-row>
      <b-row>
        <b-col md="8">
          <router-view/>
        </b-col>
        <b-col md="4" class='d-none d-sm-block'>
          <b-row>
            <b-col>
              <div v-if="(model != undefined) && (model.length > 0)">
                <tree-view :model="model"
                  category="children"
                  :selection="selection"
                  :onSelect="onSelect"
                  :display="display">
                </tree-view>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="dictionary">
                <h3>Словарь</h3>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/discret">Дискретная математика</router-link> |
    <router-link to="/english">Английский язык</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script>
import { TreeView } from '@bosket/vue'

export default {
  components: {
    'tree-view': TreeView
  },
  methods: {
    onSelect (newSelection) {
      this.selection = newSelection
    },
    display (item) {
      return item.label
    }
  },
  data () {
    return {
      msg: 'Bosket vue',
      selection: []
    }
  },
  computed: {
    model () {
      return this.$store.getters.contents
    }
  }
}
</script>

<style>
.dictionary {
  margin-top: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px #DADADA;
  white-space: wrap;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
