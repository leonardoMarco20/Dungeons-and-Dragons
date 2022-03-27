<template>
  <q-page class="profile-page flex items-center justify-center">
    <div class="row q-mt-sm profile-page__form q-gutter-md q-pa-md">
      <div class="full-width q-mt-none row items-center justify-center">
        <q-avatar class="cursor-pointer" color="primary" text-color="white" size="90px" font-size="52px" >
          <img v-if="values.avatar" :src="values.avatar" >
          <div v-else>
            {{geFirstLetter(values.name)}}
          </div>
        </q-avatar>
      </div>
      <div class="q-gutter-sm full-width q-ma-none">
        <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Nome completo" v-model="values.name" />
        <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Email" v-model="values.email" hide-bottom-space @blur="refreshErrors" :error="!!errors.email" :error-message="errors.email" />
                  
        <q-input bg-color="white"  v-model="values.password" outlined label="Nova senha" :type="passwordInputType">
          <template #append>
            <q-icon v-if="showPassword" name="visibility" @click="toggleShowPassword" />
            <q-icon v-else name="visibility_off" @click="toggleShowPassword" />
          </template>
        </q-input>       
        <q-select :rules="hasColor" popup-content-class="bg-white" :options="colors" bg-color="white" v-model="values.color" outlined label="Cor favorita" />   
      </div>
      <div class="full-width q-gutter-sm">
          <q-btn class="full-width" label="Salvar" color="primary" text-color="white" @click="update" />
          <q-btn outline class="full-width text-primary cursor-pointer" label="Voltar" @click="goBack" />
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
