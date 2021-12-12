<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div v-for="(item, index)  in list" :key="index" class="col-4">
        <card use-header use-actions :images="images">
          <template #default>
            <div class="text-bold text-h4">Gloin</div>
            <div class="text-subtitle1">Anão Guerreiro</div>
          </template>
          <template #actions>
            <q-btn class="full-width" label="Ficha"/>
          </template>  
        </card>  
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from 'components/Card.vue'

export default ({
  name: 'List',

  data(){
    return {
      images: ['https://1.bp.blogspot.com/--mgtxY8CNqg/W-NqyKm5gRI/AAAAAAAADgM/RVruchsFP7EMwv3ZWbaZM9ws-Qga-FWlgCLcBGAs/s640/an%25C3%25A3o-protetor-Help-RPG.jpg'],
      list: 5
    }
  },

  components: {
    Card
    }
})
</script>
