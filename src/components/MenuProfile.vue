<template>
  <div class="profile">
     <div class='col-grow row items-center relative-position'>
        <q-avatar class="profile__avatar cursor-pointer" color="primary" text-color="white" size="24">
          <img v-if="user.avatar" :src="user.avatar" >
          <div v-else>
            {{geFirstLetter(user)}}
          </div>
        </q-avatar>
        <q-chip color="secondary" class="relative-position cursor-pointer text-white text-subtitle1 q-pl-xl">
          {{ user.name }}

          <q-menu class="full-width profile__menu text-white bg-secondary">
            <q-list style="profile__menu__list">
              <q-item class="row q-col-gutter-xs items-center" clickable v-close-popup>
                <q-icon name="account_circle" size="sm" />
                <q-item-section :to="{ name: 'Profile', params: {id: user.id} }">Perfil</q-item-section>
              </q-item>
              <q-item class="row q-col-gutter-xs items-center" clickable v-close-popup>
                <q-icon name="logout" size="sm" />
                <q-item-section @click="endSession">Logout</q-item-section>
              </q-item>  
            </q-list>
          </q-menu>    
        </q-chip>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',

  data(){
    return {}
  },

  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },


  methods: {
    ...mapActions('users', ['logout']),

    geFirstLetter (user) {
      return user.name.slice(0,1)
    },

    endSession () {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
  .profile {
    max-width: 200px;
    position: relative;

    &__avatar {
      position: absolute;
      z-index: 1;
      background-size: cover;
    }

    &__menu {
      margin: 0px 0 0 40px  !important;
      max-width: 200px;
    }
  }
</style>