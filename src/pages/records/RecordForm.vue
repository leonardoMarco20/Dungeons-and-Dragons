<template>
  <q-page class="record-form-page q-pa-md q-ma-md">
    <div class="row no-wrap">
      <div class="full-width row items-center">
        <div v-if="values._id" class="text-bold text-primary text-h6">Edição de personagem</div>
        <div v-else class="text-bold text-primary text-h6">Criação de personagem</div>
      </div>
      <q-btn icon="delete" round  color="primary" class="" @click="toogleDialog" />
    </div>
    <div class="record-form-page__form q-mt-md row q-pa-md" :class="sizeClass">
      <div class="full-width">
        <div class="row full-width q-col-gutter-sm">
          <q-input v-model="values.name" outlined label="Nome" class="q-ml-none" />
          <q-input v-model="values.surname" outlined label="Sobrenome" class="q-ml-none" />
        </div>
      </div>
      <div class="row justify-end q-gutter-sm full-width">
        <q-btn outline class="text-primary" label="Voltar" @click="goBack" />
        <q-btn unelevated v-if="values._id" label="Salvar" color="primary" text-color="white" @click="update" />
        <q-btn unelevated v-else label="Criar" color="primary" text-color="white" @click="create" />
      </div>
    </div>
    <q-dialog v-model="showDialog">
      <q-card class="q-pa-lg">
        <q-card-section class="row no-wrap items-center q-col-gutter-sm">
          <q-icon size="lg" name="warning" color="primary" text-color="white" />
          <span class="q-ml-sm text-bold text-h6">Você quer mesmo destruir esse personagem?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" v-close-popup />
          <q-btn label="Destruir" color="primary" v-close-popup @click="deleteCurrentRecord(idSelectedCard)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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

    goBack () {
      this.$router.go(-1)
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
