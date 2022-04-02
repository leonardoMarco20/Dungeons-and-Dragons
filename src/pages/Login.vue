<template>
  <q-page class="flex items-center justify-center login-page">
    <div v-if="isRegisterForm" class="login-page__form q-gutter-md q-pa-md relative-position row" :class="sizeClass">
      <!-- REGISTRATION -->
      <div class="full-width items-center justify-center row">
        <div class="text-bold text-h6 text-primary">Crie sua conta</div>
      </div>
      <div class="full-width q-gutter-sm q-ma-none">
        <q-input v-model="values.name" bg-color="white" class="col-12 col-sm-6" :error="!!errors.name" :error-message="errors.name" hide-bottom-space  label="Nome completo" outlined @blur="refreshErrors" />
        <q-input v-model="values.email" bg-color="white" class="col-12 col-sm-6" :error="!!errors.email" :error-message="errors.email" hide-bottom-space label="Email" outlined @blur="refreshErrors" />
                  
         <q-input v-model="values.password" bg-color="white" :error="!!errors.password" :error-message="errors.password" hide-bottom-space label="Senha" outlined :type="passwordInputType" @blur="refreshErrors">
          <template #append>
            <q-icon v-if="showPassword" class="cursor-pointer" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else class="cursor-pointer" name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>
        <q-input v-model="values.confirmPassword" bg-color="white" :error="!!errors.confirmPassword" :error-message="errors.confirmPassword" hide-bottom-space label="Confirmar senha" outlined :type="confirmPasswordInputType" @blur="refreshErrors">
          <template #append>
            <q-icon v-if="showConfirmPassword" class="cursor-pointer" name="visibility" @click="toggleShowConfirmPassword" />
            <q-icon v-else class="cursor-pointer" name="visibility_off" @click="toggleShowConfirmPassword" />
          </template>
        </q-input>     
        <q-select v-model="values.color" bg-color="white" label="Cor favorita" :options="colors" outlined popup-content-class="bg-white" :rules="hasColor" />   
      </div>
      <div class="full-width q-gutter-sm">
          <q-btn class="full-width" color="primary" label="Cadastrar" text-color="white" @click="register" />
          <q-btn class="cursor-pointer full-width text-primary" label="Voltar" outline @click="toggleRegisterForm" />
      </div>
    </div>

    <!-- ESQUECI A SENHA -->
    <div v-if="isForgotPassForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="column full-width items-center justify-center q-gutter-sm">
        <q-avatar color="primary" font-size="52px" icon="account_circle" size="80px" text-color="white" />
        <div class="text-bold text-h6 text-primary">Atualização de senha</div>
      </div>
      <div class="full-width">
          <q-input v-model="values.email" bg-color="white" label="Email" outlined />
      </div>
      <div class="full-width q-gutter-sm">
        <q-btn class="full-width" color="primary" label="Atualizar senha" text-color="white" />
        <q-btn class="cursor-pointer full-width text-primary" label="Voltar" outline @click="toggleForgotPassForm" />
      </div>
    </div>

<!-- LOGIN -->
    <div v-if="isLoginForm" class="login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <div class="items-center justify-center q-gutter-sm row">
        <q-avatar color="primary" font-size="52px" icon="account_circle" size="80px" text-color="white" />
      </div>
      <div class="q-gutter-md q-ma-none">
        <q-input v-model="values.email" bg-color="white" :error="hasEmailErrors" :error-message="emailErrors"  hide-bottom-space icon="account_circle" label="Email" outlined type="email" @blur="refreshErrors('email')" />
        <q-input v-model="values.password" bg-color="white" :error="hasPasswordErrors" :error-message="passwordErrors" hide-bottom-space label="Senha" outlined :type="passwordInputType" @blur="refreshErrors('password')">
          <template #append>
            <q-icon v-if="showPassword" class="cursor-pointer" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else class="cursor-pointer" name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>
      </div>
      <q-btn class="q-mx-none text-bold" dense flat label="Esqueci minha senha" padding="none" size="sm" text-color="primary" @click="toggleForgotPassForm" />
      <div class="full-width items-center justify-center row">
        <q-btn class="full-width" color="primary" label="Entrar" text-color="white" @click="authenticate" />
        <div class="items-center q-gutter-xs q-mt-md row text-caption text-primary">
          <div>Não possui um cadastro?</div>
          <div class="cursor-pointer" @click="toggleRegisterForm">Criar conta</div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { setCssVar  } from 'quasar'

export default ({
  name: 'List',

  data(){
    return {
      values: {},
      errors: {},
      list: 5,
      isRegisterForm: false,
      isForgotPassForm: false,
      showPassword: false,
      showConfirmPassword: false,
      colors: [
        {
          label: 'Vermelho',
          value:'red'
        },
        {
          label: 'Laranja',
          value:'orange'
        },
        {
          label: 'Amarelo',
          value:'yellow'
        },
        {
          label: 'Verde',
          value:'green'
        },
        {
          label: 'Azul',
          value:'blue'
        },
        {
          label: 'Roxo',
          value:'purple'
        }  
      ]
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

    confirmPasswordInputType () {
      return this.showConfirmPassword ? 'text' : 'password'
    },

    hasEmailErrors () {
      return this.errors.email && 'email' in this.errors 
    },

    hasPasswordErrors () {
      return this.errors.password && 'password' in this.errors
    },

    emailErrors () {
      return this.errors.email?.message
    },

    passwordErrors () {
      return this.errors.password?.message
    }
  },

  created() {
    setCssVar('primary', '#27e8a7')
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

    toggleShowConfirmPassword () {
      return this.showConfirmPassword = !this.showConfirmPassword
    },

    refreshErrors () {
      this.errors = ''
    },

    register () {
      this.registerUser(this.values).then(()=>{
        this.toggleRegisterForm()
      })
        .catch((err)=>{
          this.errors = err.response?.data?.error
          this.$q.notify('Houve um erro na tentativa de cadastro!')
        })
    },

    authenticate () {
      this.authenticateUser(this.values)
        .then(()=>{
          this.$router.push('/records')
        })
        .catch((err)=>{
          this.errors = err.response?.data?.error
          if (this.hasEmailErrors) return this.$q.notify(this.errors.email)
          if (this.hasPasswordErrors) return this.$q.notify(this.errors.password)
          return this.$q.notify(this.errors)
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
