<template>
  <q-page class="flex items-center justify-center profile-page">
    <div class="profile-page__form q-gutter-md q-mt-sm q-pa-md row">
      <div class="full-width items-center justify-center q-mt-none row">
        <q-avatar class="cursor-pointer" color="primary" font-size="52px" size="90px" text-color="white" >
          <img v-if="values.avatar" :src="values.avatar" >
          <div v-else>
            {{geFirstLetter(values.name)}}
          </div>
        </q-avatar>
      </div>
      <div class="full-width q-gutter-sm q-ma-none">
        <q-input v-model="values.name" bg-color="white"  class="col-12 col-sm-6" label="Nome completo" outlined />
        <q-input v-model="values.email" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.email" :error-message="errors.email" hide-bottom-space label="Email" outlined @blur="refreshErrors" />
                  
        <q-input v-model="values.password"  bg-color="white" label="Nova senha" outlined :type="passwordInputType">
          <template #append>
            <q-icon v-if="showPassword" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>       
        <q-select v-model="values.color" bg-color="white" label="Cor favorita" :options="colors" outlined popup-content-class="bg-white" :rules="hasColor" />   
      </div>
      <div class="full-width q-gutter-sm">
          <q-btn class="full-width" color="primary" label="Salvar" text-color="white" @click="update" />
          <q-btn class="cursor-pointer full-width text-primary" label="Voltar" outline @click="goBack" />
      </div>
    </div>
    
  </q-page>  
</template>

<script>
import axios from "axios"
import { setCssVar  } from 'quasar'
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      values: {},
      errors: '',
      showPassword: false,
      colors: [
        {
          label: 'Vermelho',
          value:'red'
        },
        {
          label: 'Laranja',
          value:'#F76E11'
        },
        {
          label: 'Amarelo',
          value:'yellow'
        },
        {
          label: 'Verde',
          value:'#27e8a7'
        },
        {
          label: 'Azul',
          value:'#00B4D8'
        },
        {
          label: 'Roxo',
          value:'purple'
        }  
      ]   
    }
  },

  watch: {
    'values.color'(color) {
      if(color?.value) setCssVar('primary', color?.value)
    }
  },

  computed: {
    userId () {
      return this.$route.params.id
    },

    passwordInputType () {
      return this.showPassword ? 'text' : 'password'
    }
  },

  mounted() {
    this.getUser(this.userId)
  },

  methods: {
    ...mapActions('users', ['updateUser']),

    geFirstLetter (name) {
      return name?.slice(0,1)
    },
    
    toggleShowPassword () {
      return this.showPassword = !this.showPassword
    },

    hasColor (val) {
      return [val => val.length > 0 || 'Please select a color!']
    },

    async getUser (id) {   
      const { data : { email, name, color }} = await axios.get(`http://localhost:3000/users/${id}`) 
      this.values = { email, name, color }
    },

    goBack () {
      this.$router.go(-1)
    },

    refreshErrors () {
      this.errors = ''
    },

    update () {
      this.updateUser({payload: this.values, id: this.userId }).then(()=>{
        this.$q.notify('Perfil atualizado!')
        this.$router.push({name: 'Records' })
      }).catch(err =>{
        this.errors = err.response?.data?.error
        this.$q.notify('Houve um erro ao atualizar os dados!')
        
      })
      
    }
  }
}
</script>

<style lang="scss">
.profile-page {
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
