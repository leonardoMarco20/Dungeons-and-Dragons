<template>
  <div>
    <q-page class="q-ma-md q-pa-md">
      <div class="no-wrap row">
        <div class="full-width text-bold text-h6 text-primary">Ficha de personagem</div>
        <q-btn class="flex justify-end" color="primary" icon="edit" round :to="{path: `/record/${recordId}/edit`, params:{id: recordId }}" />
      </div>
      <div class="bg-white q-mt-md q-pa-md rounded-borders row" :class="sizeClass">
        <div class="full-width q-gutter-sm row">
          <div class="col-12 col-md-3 row">
            <div class="q-mr-xs text-bold">Name:</div>
            <div>{{result.name}}</div>
          </div>
          <div class="col-12 col-md-3 row">
            <div class="q-mr-xs text-bold">Surname:</div>
            <div>{{result.surname}}</div>
          </div>
        </div>
      </div>  
    </q-page>
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

