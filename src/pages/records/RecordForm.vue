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
          <q-input v-model="values.name" outlined label="Nome" class="q-ml-none" hide-bottom-space @blur="refreshErrors" :error="!!errors.name" :error-message="getErrorMessage(errors.name)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Jogador" v-model="values.player" hide-bottom-space @blur="refreshErrors" :error="!!errors.player" :error-message="getErrorMessage(errors.player)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Classe" v-model="values.class" hide-bottom-space @blur="refreshErrors" :error="!!errors.class" :error-message="getErrorMessage(errors.class)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Nível" v-model="values.level" hide-bottom-space @blur="refreshErrors" :error="!!errors.level" :error-message="getErrorMessage(errors.level)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Raça" v-model="values.race" hide-bottom-space @blur="refreshErrors" :error="!!errors.race" :error-message="getErrorMessage(errors.race)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Tendência" v-model="values.trend" hide-bottom-space @blur="refreshErrors" :error="!!errors.trend" :error-message="getErrorMessage(errors.trend)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Divindade" v-model="values.divinity" hide-bottom-space @blur="refreshErrors" :error="!!errors.divinity" :error-message="getErrorMessage(errors.divinity)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Tamanho" v-model="values.size" hide-bottom-space @blur="refreshErrors" :error="!!errors.size" :error-message="getErrorMessage(errors.size)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Idade" v-model="values.age" hide-bottom-space @blur="refreshErrors" :error="!!errors.age" :error-message="getErrorMessage(errors.age)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Sexo" v-model="values.sex" hide-bottom-space @blur="refreshErrors" :error="!!errors.sex" :error-message="getErrorMessage(errors.sex)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Peso" v-model="values.weight" hide-bottom-space @blur="refreshErrors" :error="!!errors.weight" :error-message="getErrorMessage(errors.weight)" />

          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Pontos de vida" v-model="values.healPoints" hide-bottom-space @blur="refreshErrors" :error="!!errors.healPoints" :error-message="getErrorMessage(errors.healPoints)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Classe de armadura" v-model="values.armorClass" hide-bottom-space @blur="refreshErrors" :error="!!errors.armorClass" :error-message="getErrorMessage(errors.armorClass)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Iniciativa" v-model="values.initiative" hide-bottom-space @blur="refreshErrors" :error="!!errors.initiative" :error-message="getErrorMessage(errors.initiative)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Toque" v-model="values.touch" hide-bottom-space @blur="refreshErrors" :error="!!errors.touch" :error-message="getErrorMessage(errors.touch)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Supresa" v-model="values.flatFooted" hide-bottom-space @blur="refreshErrors" :error="!!errors.flatFooted" :error-message="getErrorMessage(errors.flatFooted)" />

          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Força" v-model="values.strength" hide-bottom-space @blur="refreshErrors" :error="!!errors.strength" :error-message="getErrorMessage(errors.strength)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Destreza" v-model="values.dexterity" hide-bottom-space @blur="refreshErrors" :error="!!errors.dexterity" :error-message="getErrorMessage(errors.dexterity)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Constituição" v-model="values.constitution" hide-bottom-space @blur="refreshErrors" :error="!!errors.constitution" :error-message="getErrorMessage(errors.constitution)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Inteligência" v-model="values.intelligence" hide-bottom-space @blur="refreshErrors" :error="!!errors.intelligence" :error-message="getErrorMessage(errors.intelligence)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Sabedoria" v-model="values.wisdom" hide-bottom-space @blur="refreshErrors" :error="!!errors.wisdom" :error-message="getErrorMessage(errors.wisdom)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Carisma" v-model="values.charisma" hide-bottom-space @blur="refreshErrors" :error="!!errors.charisma" :error-message="getErrorMessage(errors.charisma)" />

          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Fortitude" v-model="values.fortitude" hide-bottom-space @blur="refreshErrors" :error="!!errors.fortitude" :error-message="getErrorMessage(errors.fortitude)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Reflexo" v-model="values.reflex" hide-bottom-space @blur="refreshErrors" :error="!!errors.reflex" :error-message="getErrorMessage(errors.reflex)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Vontade" v-model="values.will" hide-bottom-space @blur="refreshErrors" :error="!!errors.will" :error-message="getErrorMessage(errors.will)" />

          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Resesitência a magia" v-model="values.spellResistence" hide-bottom-space @blur="refreshErrors" :error="!!errors.spellResistence" :error-message="getErrorMessage(errors.spellResistence)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Agarrar" v-model="values.grapple" hide-bottom-space @blur="refreshErrors" :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Armas" v-model="values.weapons" hide-bottom-space @blur="refreshErrors" :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" />
          <q-input class="col-12 col-sm-6" bg-color="white"  outlined label="Equipamentos" v-model="values.equipament" hide-bottom-space @blur="refreshErrors" :error="!!errors.equipament" :error-message="getErrorMessage(errors.equipament)" />
        </div>
      </div>
      <div class="row justify-end q-gutter-sm full-width">
        <q-btn outline class="text-primary" label="Voltar" @click="goBack" />
        <q-btn unelevated v-if="values._id" label="Salvar" color="primary" text-color="white" @click="update" />
        <q-btn unelevated v-else label="Criar" color="primary" text-color="white" @click="createRecord" />
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
      values: {},
      errors: {}
    }
  },

  mounted () {
    if(this.createMode) return
    this.fetchRecord()
  },

  computed: {
    ...mapGetters('records', ['singleRecord']),

    recordId () {
      return this.$route.params.id
    },

    createMode () {
      return this.$route.path.split('/')[2] === 'new'
    }
  },

  methods: {
    ...mapActions('records', ['postRecord', 'fetchSingleRecord', 'updateRecord']),

    createRecord () {
      this.postRecord(this.values).then(()=>{
        this.$q.notify('Ficha criada!')
        this.$router.push({name: 'Records' })
      }).catch(err =>{
        this.errors = err.response?.data?.error
        debugger
        this.$q.notify('Existem erros no formulário!')
        
      })
    },

    async fetchRecord () {
      await this.fetchSingleRecord(this.recordId)
      this.values = {...this.singleRecord}
    },

    refreshErrors () {
      this.errors = ''
    },

    getErrorMessage (error) {
      return error?.message
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
