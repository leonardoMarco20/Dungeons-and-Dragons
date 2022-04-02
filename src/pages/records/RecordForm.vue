<template>
  <q-page class="q-ma-md q-pa-md record-form-page">
    <div class="no-wrap row">
      <div class="full-width items-center row">
        <div v-if="values._id" class="text-bold text-h6 text-primary">Edição de personagem</div>
        <div v-else class="text-bold text-h6 text-primary">Criação de personagem</div>
      </div>
      <q-btn class="" color="primary"  icon="delete" round @click="toogleDialog" />
    </div>
    <div class="q-mt-md q-pa-md record-form-page__form row" :class="sizeClass">
      <div class="full-width">
        <div class="full-width q-col-gutter-sm row">
          <q-input v-model="values.name" class="q-ml-none row" :error="!!errors.name" :error-message="getErrorMessage(errors.name)" hide-bottom-space label="Nome" @blur="refreshErrors('name')" />
          <q-input v-model="values.player" bg-color="white" class="col-12 col-sm-6" :error="!!errors.player" :error-message="getErrorMessage(errors.player)" hide-bottom-space label="Jogador" @blur="refreshErrors('player')" />
          <q-input v-model="values.class" bg-color="white" class="col-12 col-sm-6" :error="!!errors.class" :error-message="getErrorMessage(errors.class)" hide-bottom-space label="Classe" @blur="refreshErrors('class')" />
          <q-input v-model="values.level" bg-color="white" class="col-12 col-sm-6" :error="!!errors.level" :error-message="getErrorMessage(errors.level)" hide-bottom-space label="Nível" @blur="refreshErrors('level')" />
          <q-input v-model="values.race" bg-color="white" class="col-12 col-sm-6" :error="!!errors.race" :error-message="getErrorMessage(errors.race)" hide-bottom-space label="Raça" @blur="refreshErrors('race')" />
          <q-input v-model="values.trend" bg-color="white" class="col-12 col-sm-6" :error="!!errors.trend" :error-message="getErrorMessage(errors.trend)" hide-bottom-space label="Tendência" @blur="refreshErrors('trend')" />
          <q-input v-model="values.divinity" bg-color="white" class="col-12 col-sm-6" :error="!!errors.divinity" :error-message="getErrorMessage(errors.divinity)" hide-bottom-space label="Divindade" @blur="refreshErrors('divinity')" />
          <q-input v-model="values.size" bg-color="white" class="col-12 col-sm-6" :error="!!errors.size" :error-message="getErrorMessage(errors.size)" hide-bottom-space label="Tamanho" @blur="refreshErrors('size')" />
          <q-input v-model="values.age" bg-color="white" class="col-12 col-sm-6" :error="!!errors.age" :error-message="getErrorMessage(errors.age)" hide-bottom-space label="Idade" @blur="refreshErrors('age')" />
          <q-input v-model="values.sex" bg-color="white" class="col-12 col-sm-6" :error="!!errors.sex" :error-message="getErrorMessage(errors.sex)" hide-bottom-space label="Sexo" @blur="refreshErrors('sex')" />
          <q-input v-model="values.weight" bg-color="white" class="col-12 col-sm-6" :error="!!errors.weight" :error-message="getErrorMessage(errors.weight)" hide-bottom-space label="Peso" @blur="refreshErrors('weight')" />

          <q-input v-model="values.healPoints" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.healPoints" :error-message="getErrorMessage(errors.healPoints)" hide-bottom-space label="Pontos de vida" outlined @blur="refreshErrors('healPoints')" />
          <q-input v-model="values.armorClass" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.armorClass" :error-message="getErrorMessage(errors.armorClass)" hide-bottom-space label="Classe de armadura" outlined @blur="refreshErrors('armorClass')" />
          <q-input v-model="values.initiative" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.initiative" :error-message="getErrorMessage(errors.initiative)" hide-bottom-space label="Iniciativa" outlined @blur="refreshErrors('initiative')" />
          <q-input v-model="values.touch" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.touch" :error-message="getErrorMessage(errors.touch)" hide-bottom-space label="Toque" outlined @blur="refreshErrors('touch')" />
          <q-input v-model="values.flatFooted" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.flatFooted" :error-message="getErrorMessage(errors.flatFooted)" hide-bottom-space label="Supresa" outlined @blur="refreshErrors('flatFooted')" />

          <q-input v-model="values.strength" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.strength" :error-message="getErrorMessage(errors.strength)" hide-bottom-space label="Força" outlined @blur="refreshErrors('strength')" />
          <q-input v-model="values.dexterity" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.dexterity" :error-message="getErrorMessage(errors.dexterity)" hide-bottom-space label="Destreza" outlined @blur="refreshErrors('dexterity')" />
          <q-input v-model="values.constitution" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.constitution" :error-message="getErrorMessage(errors.constitution)" hide-bottom-space label="Constituição" outlined @blur="refreshErrors('constitution')" />
          <q-input v-model="values.intelligence" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.intelligence" :error-message="getErrorMessage(errors.intelligence)" hide-bottom-space label="Inteligência" outlined @blur="refreshErrors('intelligence')" />
          <q-input v-model="values.wisdom" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.wisdom" :error-message="getErrorMessage(errors.wisdom)" hide-bottom-space label="Sabedoria" outlined @blur="refreshErrors('wisdom')" />
          <q-input v-model="values.charisma" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.charisma" :error-message="getErrorMessage(errors.charisma)" hide-bottom-space label="Carisma" outlined @blur="refreshErrors('charisma')" />

          <q-input v-model="values.fortitude" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.fortitude" :error-message="getErrorMessage(errors.fortitude)" hide-bottom-space label="Fortitude" outlined @blur="refreshErrors('fortitude')" />
          <q-input v-model="values.reflex" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.reflex" :error-message="getErrorMessage(errors.reflex)" hide-bottom-space label="Reflexo" outlined @blur="refreshErrors('reflex')" />
          <q-input v-model="values.will" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.will" :error-message="getErrorMessage(errors.will)" hide-bottom-space label="Vontade" outlined @blur="refreshErrors('will')" />

          <q-input v-model="values.spellResistence" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.spellResistence" :error-message="getErrorMessage(errors.spellResistence)" hide-bottom-space label="Resesitência a magia" outlined @blur="refreshErrors('spellResistence')" />
          <q-input v-model="values.grapple" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" hide-bottom-space label="Agarrar" outlined @blur="refreshErrors('grapple')" />
          <q-input v-model="values.weapons" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space label="Armas" outlined @blur="refreshErrors('weapons')" />
          <q-input v-model="values.equipament" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.equipament" :error-message="getErrorMessage(errors.equipament)" hide-bottom-space label="Equipamentos" outlined @blur="refreshErrors('equipament')" />
        </div>
      </div>
      <div class="full-width justify-end q-gutter-sm row">
        <q-btn class="text-primary" label="Voltar" outline @click="goBack" />
        <q-btn v-if="values._id" color="primary" label="Salvar" text-color="white" unelevated @click="update" />
        <q-btn v-else color="primary" label="Criar" text-color="white" unelevated @click="createRecord" />
      </div>
    </div>
    <q-dialog v-model="showDialog">
      <q-card class="q-pa-lg">
        <q-card-section class="items-center no-wrap q-col-gutter-sm row">
          <q-icon color="primary" name="warning" size="lg" text-color="white" />
          <span class="q-ml-sm text-bold text-h6">Você quer mesmo destruir esse personagem?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Cancel" />
          <q-btn v-close-popup color="primary" label="Destruir" @click="deleteCurrentRecord(idSelectedCard)" />
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

    refreshErrors (field) {
      this.errors[field] = ''
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
