<template>
  <q-page class="login-page flex items-center justify-center">
    <div class="relative-position row login-page__form q-gutter-md q-pa-md">
      <div class="full-width row items-center justify-center">
        <q-avatar class="profile__avatar cursor-pointer" color="primary" text-color="white" size="24">
          <pre>{{user}}</pre>
          <img v-if="user.avatar" :src="user.avatar" >
          <div v-else>
            {{geFirstLetter(user)}}
          </div>
        </q-avatar>
      </div>
      <div class="q-gutter-sm full-width q-ma-none">
        <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Nome completo" v-model="values.name" />
        <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Email" v-model="values.email" />
                  
        <q-input bg-color="white"  v-model="values.password" outlined label="Senha" :type="passwordInputType">
          <template #append>
            <q-icon v-if="showPassword" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>
        <q-input bg-color="white"  outlined label="Confirmar senha" v-model="values.confirmPassword" />
          
      </div>
      <div class="full-width q-gutter-sm">
          <q-btn class="full-width" label="Cadastrar" color="primary" text-color="white" @click="register" />
          <q-btn outline class="full-width text-primary cursor-pointer" @click="toggleRegisterForm" label="Voltar" />
      </div>
    </div>
  </q-page>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      values: {},
      errors: {}
    }
  },

  computed: {
    ...mapGetters('users', ['loggedUser']),
   
    user() {
      console.log(this.loggedUser)
      debugger
      return this.loggedUser
    }
  },

  methods: {
    geFirstLetter (user) {
      debugger
      return user.name.slice(0,1)
    }
  }
}
</script>