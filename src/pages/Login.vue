<template>
  <q-page class="login-page flex items-center justify-center">
    <div v-if="isRegisterForm" class="row login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <!-- REGISTRATION -->
      <div class="full-width row items-center justify-center q-gutter-sm">
        <div class="text-bold text-primary text-h6">Crie sua conta</div>
      </div>
      <div class="q-gutter-sm q-ma-none">
        <q-input outlined label="Nome completo" v-model="values.name" />
        <q-input outlined label="Email" v-model="values.email" />
        <div class="row full-width no-wrap">
          <div class="q-mr-sm">            
            <q-input v-model="values.password" outlined label="Senha" :type="passwordInputType">
            <template #append>
              <q-icon v-if="showPassword" name="visibility" @click="toggleShowPassword" />
              <q-icon v-else name="visibility_off" @click="toggleShowPassword" />
            </template>
          </q-input>
          </div>
          <div>
            <q-input outlined label="Confirmar senha" v-model="values.confirmPassword" />
          </div>
        </div>
      </div>
      <div class="full-width">
        <q-btn class="full-width" label="Cadastrar" color="primary" text-color="white" @click="register" />
      </div>
    </div>

    <!-- ESQUECI A SENHA -->
    <div v-if="isForgotPassForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="column full-width items-center justify-center q-gutter-sm">
        <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="account_circle" />
        <div class="text-bold text-primary text-h6">Crie sua conta</div>
      </div>
      <div class="full-width q-col-gutter-sm">
          <q-input v-model="values.email" outlined label="Email" />
      </div>
      <div class="full-width">
        <q-btn class="full-width" label="Atualizar senha" color="primary" text-color="white" />
      </div>
    </div>

<!-- LOGIN -->
    <div v-if="isLoginForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="column items-center justify-center q-gutter-sm">
        <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="account_circle" />
      </div>
      <div class="q-gutter-md q-ma-none">
        <q-input v-model="values.email" outlined label="Email" type="email" icon="account_circle" />
        <q-input v-model="values.password" outlined label="Senha" :type="passwordInputType">
          <template #append>
            <q-icon v-if="showPassword" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>
      </div>
      <q-btn label="Esqueci minha senha" class="text-bold q-mx-none" @click="toggleForgotPassForm" dense padding="none" size="sm" flat text-color="primary" />
      <div class="full-width row justify-center items-center">
        <q-btn class="full-width" label="Entrar" color="primary" text-color="white" @click="authenticate" />
        <div class="text-primary text-caption row items-center q-mt-md q-gutter-xs">
          <div>Não possui um cadastro?</div>
          <div class="cursor-pointer" @click="toggleRegisterForm">Criar conta</div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default ({
  name: 'List',

  data(){
    return {
      values: {},
      list: 5,
      isRegisterForm: false,
      isForgotPassForm: false,
      showPassword: false
    }
  },

  computed: {
    sizeClass () {
      return !this.isRegisterForm && 'login-page__form--small'
    },

    isLoginForm () {
      return !this.isRegisterForm && !this.isForgotPassForm
    },

    passwordInputType () {
      return this.showPassword ? 'text' : 'password'
    }
  },

  methods: {
    ...mapActions('users', ['registerUser', 'authenticateUser']),

    toggleRegisterForm () {
      return this.isRegisterForm = !this.isRegisterForm
    },

    toggleForgotPassForm () {
      return this.isForgotPassForm = !this.isForgotPassForm
    },

    toggleShowPassword () {
      return this.showPassword = !this.showPassword
    },

    register () {
      this.registerUser(this.values)
      this.toggleRegisterForm()
    },

    authenticate () {
      this.authenticateUser(this.values)
      this.$router.push('/records')
    }
  }
})
</script>

<style lang="scss">
.login-page{
  &__form {
    height: 90vh;
    width: 380px;
    background: #fff;
    border-radius: 8px;

    &--small {
      height: auto;
    }
  }

  .q-field {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
