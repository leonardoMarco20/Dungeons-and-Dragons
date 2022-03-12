<template>
  <q-page class="login-page flex items-center justify-center">
    <div v-if="isRegisterForm" class="relative-position row login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <!-- REGISTRATION -->
      <div class="full-width row items-center justify-center">
        <div class="text-bold text-primary text-h6">Crie sua conta</div>
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

    <!-- ESQUECI A SENHA -->
    <div v-if="isForgotPassForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="column full-width items-center justify-center q-gutter-sm">
        <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="account_circle" />
        <div class="text-bold text-primary text-h6">Atualização de senha</div>
      </div>
      <div class="full-width">
          <q-input bg-color="white" v-model="values.email" outlined label="Email" />
      </div>
      <div class="full-width q-gutter-sm">
        <q-btn class="full-width" label="Atualizar senha" color="primary" text-color="white" />
        <q-btn outline class="full-width text-primary cursor-pointer" @click="toggleForgotPassForm" label="Voltar" />
      </div>
    </div>

<!-- LOGIN -->
    <div v-if="isLoginForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="row items-center justify-center q-gutter-sm">
        <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="account_circle" />
      </div>
      <div class="q-gutter-md q-ma-none">
        <q-input :rules="[emailError]" :error-message="emailError"  bg-color="white" v-model="values.email" outlined label="Email" type="email" icon="account_circle" />
        <q-input bg-color="white" v-model="values.password" outlined label="Senha" :type="passwordInputType">
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
      errors: {},
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
    },

    emailError () {
      return this.errors?.email
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
      .then(()=>{
        this.$router.push('/records')
      }).catch((err)=>{
        this.errors = err.response?.data?.error
        console.log(this.errors['email'].message)
        return
      })
      
    }
  }
})
</script>

<style lang="scss">
.login-page{
  &__form {
    width: 380px;
    background: $secondary;
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
