<template>
  <div>
    <q-page class="q-pa-md q-ma-md">
      <div class="row no-wrap">
        <div class="text-bold text-primary text-h6 full-width">Ficha de personagem</div>
        <q-btn class="flex justify-end" icon="edit" round color="primary" :to="{path: `/record/${recordId}/edit`, params:{id: recordId }}" />
      </div>
      <div class="bg-white rounded-borders row q-pa-md q-mt-md" :class="sizeClass">
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

