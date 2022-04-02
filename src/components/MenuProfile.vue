<template>
  <div class="profile">
     <div class="col-grow items-center relative-position row">
        <q-avatar class="cursor-pointer profile__avatar" color="primary" size="24" text-color="white">
          <img v-if="user.avatar" :src="user.avatar" >
          <div v-else>
            {{geFirstLetter(user)}}
          </div>
        </q-avatar>
        <q-chip class="cursor-pointer q-pl-xl relative-position text-subtitle1 text-white" color="secondary">
          {{ user.name }}

          <q-menu class="bg-secondary full-width profile__menu text-white">
            <q-list style="profile__menu__list">
              <q-item v-close-popup class="items-center q-col-gutter-xs row" clickable  :to="{ name: 'Profile', params: {id: user.id} }">
                <q-icon name="account_circle" size="sm" />
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-item v-close-popup class="items-center q-col-gutter-xs row" clickable>
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
      return user.name?.slice(0,1)
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