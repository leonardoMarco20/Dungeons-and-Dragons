<template>
  <q-layout view="hHh Lpr lFf">
    <q-header v-show="hasNotLogin" elevated class="row no-wrap items-center header-menu justify-between">
      <q-toolbar>
        <div class="row no-wrap">
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            Dungeons and dragons
          </q-toolbar-title>
        </div>
      </q-toolbar>
      <menu-profile class="col-grow" :user="user"/>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1">
      <q-list bordered separator>
        <q-item :to="link.path" active-class="text-orange" class="text-grey-8" v-for="(link, index) in linksList" :key="index" clickable v-ripple>
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{link.label}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @user-change="getUser()" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from "axios"
import MenuProfile from '../components/MenuProfile.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuProfile
  },

  data(){
    return {
      user: {}
    }
  },

  mounted() {
    this.getUser()
  },

  computed: {
    linksList () {
      return [
        {
          label: 'Records',
          icon: 'list',
          path: '/records'
        },
        {
          label: 'List',
          icon: 'school',
          path: '/list'
        }
      ]
    },

    hasNotLogin () {
      return this.$route.name !== 'Login'
    }
  },

  watch: {
    $route () {
      this.getUser()
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods:{
    async getUser () {
      if(!this.hasNotLogin) return
      console.log('caiu')
      const { data } = await axios.get('http://localhost:3000/projects', 
        {
          headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        } 
      )
    
      const { data : { _id, email, name }} = await axios.get(`http://localhost:3000/users/${data.user}`)  
      this.user = { id: _id, email, name }
    }
  }
})
</script>

<style lang="scss">
  .header-menu {
    height: 60px;
    background: $menu-background;
  }
</style>