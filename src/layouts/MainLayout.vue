<template>
  <q-layout view="hHh Lpr lFf">
    <q-header v-if="hasLoggedUser" elevated class="row no-wrap items-center header-menu justify-between">
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { mapGetters } from 'vuex'
import MenuProfile from '../components/MenuProfile.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuProfile
  },

  data(){
    return {
      isLogged: false,
      userMock: {
        name: 'Leonardo da Silva Marco',
        avatar: 'https://w7.pngwing.com/pngs/238/464/png-transparent-bart-simpson-s-guide-to-life-homer-simpson-marge-simpson-lisa-simpson-los-simpson.png'
      }
    }
  },

  computed: {
    ...mapGetters('users', ['loggedUser']),

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

    hasLoggedUser () {
      return this.getLoggedUser() && !!localStorage.getItem('token')
    },

    user () {
      return this.loggedUser
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
    async getLoggedUser () {
      return !!this.loggedUser
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