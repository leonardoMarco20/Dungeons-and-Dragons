<template>
  <div>
    <q-page class="column record-list-page q-pa-md">
      <div class="row justify-between">
        <div class="q-py-lg text-h4 text-bold text-white">Seja bem vindo {{userName}}</div>
        <div class="row items-center">
          <neon-btn label="Adicionar" :color="color" @click="goToCreateRecord" />
        </div>
      </div>
      <div class="col-grow row q-col-gutter-md">
        <div v-for="(item, index)  in recordsList" :key="index" class="col-3">
          <card class=" text-white" use-header use-actions :images="images" @click="goToSingle(item._id)">
            <template #default>
              <div class="text-bold text-h4">{{item.name}}</div>
              <div class="text-subtitle1">{{item.surname}}</div>
            </template>
            <template #actions>
              <q-separator class="full-width" />
              <div class="record-list-page__actions q-py-xs row justify-around full-width">
                <q-btn flat icon="visibility" round color="primary" :to="{path: `/record/${item._id}`, params:{id: item._id }}" />
                <q-btn flat icon="edit" round color="primary" :to="{path: `/record/${item._id}/edit`, params:{id: item._id }}" />
                <q-btn flat icon="delete" round color="primary" @click="toogleDialog(item._id)" />
              </div>
            </template>  
          </card> 
        </div>
      </div>
       <div class="q-pa-lg flex flex-center">
        <q-pagination @click="changePage" color="primary" :max="maxPages" v-model="page"  boundary-links direction-links  />
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
          <q-btn label="Destruir" color="primary" v-close-popup @click="deleteSelectedRecord(idSelectedCard)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Card from 'components/Card.vue'
import NeonBtn from 'components/NeonBtn.vue'
import {mapActions, mapGetters} from 'vuex'
import axios from "axios"

export default ({
  name: 'List',

  data(){
    return {
      showDialog: false,
      idCard: '',
      page: 1,
      color: '',
      result: {},
      userName: '',
      images: ['https://1.bp.blogspot.com/--mgtxY8CNqg/W-NqyKm5gRI/AAAAAAAADgM/RVruchsFP7EMwv3ZWbaZM9ws-Qga-FWlgCLcBGAs/s640/an%25C3%25A3o-protetor-Help-RPG.jpg'],
    }
  },

  components:{
    Card,
    NeonBtn
  },

  computed: {
    ...mapGetters('records', ['getRecords', 'getRecordsLength']),
    ...mapGetters('users', ['loggedUser']),

    recordsList () {
      return this.getRecords
    },

    maxPages () {
      return Math.ceil(this.getRecordsLength / 10)
    }
  },

  created () {
    this.getResults(this.recordsList)
    this.fetchRecords({page: this.page, limit: 10})
    this.fetchAllRecords()
    this.getUser(localStorage.getItem('id'))

  },

  watch: {
    $route () {
      this.fetchRecords({page: this.page, limit: 10})
      this.setCurrentPage()
      this.fetchAllRecords()
    }
  },

  methods: {
    ...mapActions('records', ['fetchRecords', 'fetchAllRecords', 'deleteRecord']),

    goToCreateRecord() {
      this.$router.push({name: 'CreateRecord'})
    },

    getResults (results) {
      this.results = results
    },

     setCurrentPage () {
      this.page = parseInt(this.$route.query.page || 1)
    },

    changePage () {
      const query = { ...this.$route.query, page: this.page }
      this.$router.push({ query })
    },

    toogleDialog (id) {
      this.showDialog = !this.showDialog;
      this.idSelectedCard = id
    },

    goToSingle (id) {
      this.$router.push({path: `/record/${id}`, params:{ id }})
    },

    async deleteSelectedRecord (id) {
      this.showDialog = !this.showDialog;
      await this.deleteRecord(id)
    },

    async getUser (id) {
      const { data : { name, color }} = await axios.get(`http://localhost:3000/users/${id}`) 
      this.userName = name
      this.color = color
    },
  }
})
</script>

<style lang="scss">
  .record-list-page {
    &__actions {
      background: $menu-background;
    }
  }
</style>