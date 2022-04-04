<template>
  <div>
    <q-page class="column q-pa-md record-list-page">
      <div class="justify-between row">
        <div class="q-py-lg text-bold text-h4 text-white">Seja bem vindo {{userName}}</div>
        <div class="items-center row">
          <neon-btn :color="color" label="Adicionar" @click="goToCreateRecord" />
        </div>
      </div>
      <div class="col-grow q-col-gutter-md row">
        <div v-for="(item, index)  in recordsList" :key="index" class="col-3">
          <card class="text-white" :images="images" use-actions use-header>
            <template #default>
              <div class="col-12 q-col-gutter-md row">
                <div class="col-12 items-center q-gutter-md row">
                  <div class="text-bold text-h4">{{item.name}}</div>
                  <div class="text-subtitle1"> - {{item.player}}</div>
                </div>
                <div class="col-grow items-center q-gutter-md row">
                  <div class="text-subtitle1">{{item.class}}</div>
                  <div class="text-subtitle1">Level {{item.level}}</div>
                </div>
              </div>
            </template>
            <template #actions>
              <q-separator class="full-width" />
              <div class="full-width justify-around q-py-xs record-list-page__actions row">
                <q-btn color="primary" flat icon="visibility" round :to="{path: `/record/${item._id}`, params:{id: item._id }}" />
                <q-btn color="primary" flat icon="edit" round :to="{path: `/record/${item._id}/edit`, params:{id: item._id }}" />
                <q-btn color="primary" flat icon="delete" round @click="toogleDialog(item._id)" />
              </div>
            </template>  
          </card> 
        </div>
      </div>
       <div class="flex flex-center q-pa-lg">
        <q-pagination v-model="page" boundary-links color="primary" direction-links  :max="maxPages" @click="changePage"  />
       </div>
    </q-page>
    <q-dialog v-model="showDialog">
      <q-card class="q-pa-lg">
        <q-card-section class="items-center no-wrap q-col-gutter-sm row">
          <q-icon color="primary" name="warning" size="lg" text-color="white" />
          <span class="q-ml-sm text-bold text-h6">Você quer mesmo destruir esse personagem?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Cancel" />
          <q-btn v-close-popup color="primary" label="Destruir" @click="deleteSelectedRecord(idSelectedCard)" />
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
    ...mapGetters('records', ['getRecords', 'getRecordsCount']),
    ...mapGetters('users', ['loggedUser']),

    recordsList () {
      return this.getRecords
    },

    maxPages () {
      return Math.ceil(this.getRecordsCount / 12) 
    }
  },

  created () {
    this.getResults(this.recordsList)
    this.fetchRecords({page: this.page, limit: 12})
    this.getUser(localStorage.getItem('id'))

  },

  watch: {
    $route () {
      this.fetchRecords({page: this.page, limit: 10})
      this.setCurrentPage()
    }
  },

  methods: {
    ...mapActions('records', ['fetchRecords', 'deleteRecord']),

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