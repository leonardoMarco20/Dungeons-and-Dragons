<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-4">
        <card @click="goToCreateRecord" :images="addImages" class="fit cursor-pointer position-relative">
          <template #default>
            <div class="absolute-full row justify-center items-center">
              <q-icon class="row fit" name="add_box" size="100px" color="primary" />
            </div>
          </template>
        </card>  
      </div>
      <div v-for="(item, index)  in recordsList" :key="index" class="col-4">
        <card use-header use-actions :images="images">
          <template #default>
            <div class="text-bold text-h4">{{item.name}}</div>
            <div class="text-subtitle1">{{item.surname}}</div>
          </template>
          <template #actions>
            <q-btn class="full-width" label="Ver mais" :to="{path: `/record/${item._id}`, params:{id: item._id }}"/>
          </template>  
        </card> 
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from 'components/Card.vue'
import {mapActions, mapGetters} from 'vuex'

export default ({
  name: 'List',

  data(){
    return {
      images: ['https://1.bp.blogspot.com/--mgtxY8CNqg/W-NqyKm5gRI/AAAAAAAADgM/RVruchsFP7EMwv3ZWbaZM9ws-Qga-FWlgCLcBGAs/s640/an%25C3%25A3o-protetor-Help-RPG.jpg'],
    }
  },

  components:{
    Card
  },

  computed: {
    ...mapGetters('records', ['getRecords']),

    recordsList () {
      return this.getRecords
    }
  },

  created () {
    this.fetchRecords()
  },

  methods: {
    ...mapActions('records', ['fetchRecords']),

    goToCreateRecord() {
      this.$router.push({name: 'CreateRecord'})
    }
  }
})
</script>