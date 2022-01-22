<template>
  <q-page class="login-page flex items-center justify-center">
    <div class="row login-page__form q-gutter-md q-pa-md" :class="sizeClass">
      <!-- REGISTRATION -->
      <div class="full-width row items-center justify-center q-gutter-sm">
        <div class="text-bold text-primary text-h6">Criação de personagem</div>
      </div>
      <div class="row full-width">
        <div class="full-width q-gutter-sm">
          <q-input v-model="values.name" outlined label="Nome" class="q-ml-none" />
          <q-input v-model="values.surname" outlined label="Sobrenome" class="q-ml-none" />
        </div>
      </div>
      <div class="full-width">
        <q-btn class="full-width" label="Criar" color="primary" text-color="white" @click="createRecord" />
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapActions} from 'vuex'

export default ({
  name: 'RegisterREcord',

  data(){
    return {
      values: {}
    }
  },

  computed: {
    sizeClass () {
      return !this.isRegisterForm && 'login-page__form--small'
    }
  },

  methods: {
    ...mapActions('records', ['postRecord']),

    createRecord(){
      this.postRecord(this.values)
      this.$router.push('List')
    }
  }
})
</script>

<style lang="scss">
.login-page{
  &__form {
    height: 90vh;
    background: #fff;
    border-radius: 8px;

    &--small {
      height: auto;
    }
  }
}
</style>
