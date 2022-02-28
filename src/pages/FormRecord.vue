<template>
  <q-page class="record-form-page  q-pa-md q-ma-md">
    <div class="record-form-page__form row q-gutter-md q-pa-md" :class="sizeClass">
      <div class="full-width row items-center justify-center q-gutter-sm">
        <div v-if="values._id" class="text-bold text-primary text-h6">Edição de personagem</div>
        <div v-else class="text-bold text-primary text-h6">Criação de personagem</div>
      </div>
      <div class="full-width">
        <div class="row full-width q-col-gutter-sm">
          <q-input v-model="values.name" outlined label="Nome" class="q-ml-none" />
          <q-input v-model="values.surname" outlined label="Sobrenome" class="q-ml-none" />
        </div>
      </div>
      <div class="row justify-end full-width">
        <q-btn v-if="values._id" label="Salvar" color="primary" text-color="white" @click="update" />
        <q-btn v-else label="Criar" color="primary" text-color="white" @click="create" />
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default ({
  name: 'FormRecord',

  data(){
    return {
      values: {}
    }
  },

  mounted () {
    this.fetchRecord()
  },

  computed: {
    ...mapGetters('records', ['singleRecord']),

    recordId () {
      return this.$route.params.id
    },

    
  },

  methods: {
    ...mapActions('records', ['postRecord', 'fetchSingleRecord', 'updateRecord']),

    create () {
      this.postRecord(this.values)
      this.$router.push({ path:'/records' })
    },

    async fetchRecord () {
      await this.fetchSingleRecord(this.recordId)
      this.values = {...this.singleRecord}
    },

    update () {
      this.updateRecord(this.values)
      this.$router.push({ path:'/records' })
    }
  }
})
</script>

<style lang="scss">
.record-form-page{
  &__form {
    background: #fff;
    border-radius: 8px;

    &--small {
      height: auto;
    }
  }
}
</style>
