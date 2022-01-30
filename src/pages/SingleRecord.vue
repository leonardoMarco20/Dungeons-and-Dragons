<template>
  <div>
    <q-page class="q-pa-md q-ma-md">
      <div class="row full-width q-py-md">
        <div class="col-grow text-h4">Ficha de personagem</div>
        <div class="q-gutter-sm">
          <q-btn icon="edit" round color="primary" class="record-page__btn-actions" :to="{path: `/record/${recordId}/edit`, params:{id: recordId }}" />
          <q-btn icon="delete" round  color="primary" class="record-page__btn-actions" @click="toogleDialog" />
        </div>
      </div>
      <div class="bg-white rounded-borders row q-pa-md" :class="sizeClass">
        <div class="row q-gutter-sm full-width">
          <div class="row col-md-3 col-12">
            <div class="text-bold q-mr-xs">Name:</div>
            <div>{{result.name}}</div>
          </div>
          <div class="row col-md-3 col-12">
            <div class="text-bold q-mr-xs">Surname:</div>
            <div>{{result.surname}}</div>
          </div>
        </div>
      </div>  
    </q-page>
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
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default ({
  name: 'FormRecord',

  data(){
    return {
      result: {},
      showDialog: false
    }
  },

  mounted () {
    this.fetchRecord()
  },

  computed: {
    ...mapGetters('records', ['singleRecord']),

    recordId () {
      return this.$route.params.id
    }
  },

  methods: {
    ...mapActions('records', ['fetchSingleRecord', 'deleteRecord']),

    async fetchRecord () {
      await this.fetchSingleRecord(this.recordId)
      this.result = {...this.singleRecord}
    },

    async deleteCurrentRecord () {
      this.showDialog = !this.showDialog;
      await this.deleteRecord(this.recordId)
      this.$router.push({ path:'/records' })
    },

    toogleDialog () {
      this.showDialog = !this.showDialog
    }
  }
})
</script>

