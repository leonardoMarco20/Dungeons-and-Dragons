<template>
  <q-page class="record-page q-pa-md q-ma-md">
    <div class="row full-width q-py-md">
      <div class="col-grow text-h4">Ficha de personagem</div>
      <div class="q-gutter-sm">
        <q-btn icon="edit" round text-color="white" class="record-page__btn-actions" :to="{path: `/record/${recordId}/edit`, params:{id: recordId }}" />
        <q-btn icon="delete" round text-color="white" class="record-page__btn-actions" />
      </div>
    </div>
    <div class="record-page__content rounded-borders row q-pa-md" :class="sizeClass">
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
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default ({
  name: 'FormRecord',

  data(){
    return {
      result: {}
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
    ...mapActions('records', ['fetchSingleRecord']),

    async fetchRecord () {
      await this.fetchSingleRecord(this.recordId)
      this.result = {...this.singleRecord}
    }
  }
})
</script>

<style lang="scss">
.record-page {
  &__content {
    background: #fff;
  }

  &__btn-actions {
    background: $tertiary;
  }
}
</style>
