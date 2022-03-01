<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="header-menu">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-1"
    >
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

export default defineComponent({
  name: 'MainLayout',

  data(){
    return {
      isLogged: false
    }
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
          label: 'Players',
          icon: 'people',
          path: '/list'
        },
        {
          label: 'List',
          icon: 'school',
          path: '/list'
        }
      ]
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
  }
})
</script>

<style lang="scss">
  .header-menu {
    background: $menu-background;
    // background: #992625;
    //background: url('../assets/bg-3.jpeg');
    //background-size: cover;
  }
</style>