<template>
  <div>
    <q-page class="q-ma-md q-pa-md record-single-page">
      <div class="no-wrap row">
        <div class="full-width text-bold text-h6 text-primary">Ficha de personagem</div>
        <q-btn class="flex justify-end" color="primary" icon="edit" round :to="{path: `/record/${recordId}/edit`, params:{id: recordId }}" />
      </div>

      <div class="bg-white q-mt-md q-pa-md record-single-page__sheet row" :class="sizeClass">
        <div class="full-width">
          <div class="full-width q-col-gutter-md row">
            <div class="col-12 q-col-gutter-md row">
              <div class="col-12 col-sm-6">
                <div class="text-bold">Nome:</div>
                <div >{{result.name}}</div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="text-bold">Jogador:</div>
                <div>{{result.player}}</div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="text-bold">Classe:</div>
                <div>{{result.class}}</div>
              </div>
              <div class="col-12 col-sm-3">
                <div class="text-bold">Nível:</div>
                <div>{{result.level}}</div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="text-bold">Raça:</div>
                <div>{{result.race}}</div>
              </div>  
              <div class="col-12 col-sm-2">
                <div class="text-bold">Tendência:</div>
                <div>{{result.trend}}</div>
              </div>  
              <div class="col-12 col-sm-2">
                <div class="text-bold">Divindade:</div>
                <div>{{result.divinity}}</div>
              </div>  
              <div class="col-12 col-sm-1">
                <div class="text-bold">Tamanho:</div>
                <div>{{result.size}}</div>
              </div>  
              <div class="col-12 col-sm-1">
                <div class="text-bold">Idade:</div>
                <div>{{result.age}}</div>
              </div>
              <div class="col-12 col-sm-2">
                <div class="text-bold">Gênero:</div>
                <div>{{result.gender}}</div>
              </div>  
              <div class="col-12 col-sm-2">
                <div class="text-bold">Altura:</div>
                <div>{{result.height}}</div>
              </div>  
              <div class="col-12 col-sm-1">
                <div class="text-bold">Peso:</div>
                <div>{{result.weight}}</div>
              </div>  
              <div class="col-12 col-sm-1">
                <div class="text-bold">Olhos:</div>  
                <div>{{result.eyes}}</div>
              </div>  
              <div class="col-12 col-sm-2">
                <div class="text-bold">Cabelo:</div>
                <div>{{result.hair}}</div>
              </div>  
              <div class="col-12 col-sm-2">
                <div class="text-bold">Cor da pele:</div>
                <div>{{result.skin}}</div>
              </div>  
            </div>

            <!-- HABILIDADES -->
            <div class="col-12 q-mt-lg row">
              <div class="col-4 q-col-gutter-md">
                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="flex justify-center">Habilidade</div>
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">FOR</div>
                      <div class="record-form-page__form--small-text text-caption">Força</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex justify-center">Valor</div>
                    <div class="flex full-height items-center justify-center">
                      <div class="bg-white">{{result.strength}}</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="col-4 flex justify-center">Mod. habilidade</div>
                    <div class="col-2 flex full-height items-center justify-center">
                      <div class="bg-white">{{result.strength}}</div>
                    </div>
                  </div>
                </div>

                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">DES</div>
                      <div class="record-form-page__form--small-text text-caption">Destreza</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex full-height items-center justify-center">
                      <div class="col-2">{{result.dexterity}}</div>
                    </div>
                  </div>
                  <div class="col-4 flex items-center justify-center">
                    <div class="col-2 items-center">
                      <div class="bg-white">{{result.dexterity}}</div>
                    </div>
                  </div>  
                </div>

                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">CON</div>
                      <div class="record-form-page__form--small-text text-caption">Constituição</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex full-height items-center justify-center">
                      <div class="col-2">{{result.constitution}}</div>
                      
                    </div>
                  </div>
                  <div class="col-4 flex items-center justify-center">
                    <div class="col-2 items-center">
                      <div class="col-2">{{result.constitution}}</div> 
                    </div>
                  </div>  
                </div>

                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">INT</div>
                      <div class="record-form-page__form--small-text text-caption">Inteligência</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex full-height items-center justify-center">
                      <div class="col-2">{{result.intelligence}}</div>
                    </div>
                  </div>
                  <div class="col-4 flex items-center justify-center">
                    <div class="col-2 items-center">
                      <div class="col-2">{{result.intelligence}}</div>
                    </div>
                  </div>  
                </div>
                
                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">SAB</div>
                      <div class="record-form-page__form--small-text text-caption">Sabedoria</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex full-height items-center justify-center">
                      <div class="col-2">{{result.wisdom}}</div>
                    </div>
                  </div>
                  <div class="col-4 flex items-center justify-center">
                    <div class="col-2 items-center">
                      <div class="col-2">{{result.wisdom}}</div>
                    </div>
                  </div>  
                </div>

                <div class="q-gutter-md row">
                  <div class="col-2 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">CAR</div>
                      <div class="record-form-page__form--small-text text-caption">Carisma</div>
                    </div>  
                  </div>
                  <div class="col-2">
                    <div class="flex full-height items-center justify-center">
                      <div class="col-2">{{result.charisma}}</div>
                    </div>
                  </div>
                  <div class="col-4 flex items-center justify-center">
                    <div class="col-2">
                      <div class="col-2">{{result.charisma}}</div>
                    </div>
                  </div>  
                </div>  
              </div>

              <!-- PONTOS DE VIDA -->
              <div class="col-4 q-col-gutter-md q-mt-xs">
                <div class="no-wrap q-gutter-md row">
                  <div class="col-4 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">PV</div>
                      <div class="record-form-page__form--small-text text-caption">Pontos de vida</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="flex items-center">
                      <div class="bg-white">{{result.healPoints}}</div>
                    </div>
                  </div>  
                </div>

                <div class="no-wrap q-gutter-md row">
                  <div class="col-4 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">CA</div>
                      <div class="record-form-page__form--small-text text-caption">Classe de armadura</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="flex items-center">
                      <div class="col-12 col-sm-6">{{result.armorClass}}</div>
                    </div>
                  </div>  
                </div>

                <div class="no-wrap q-gutter-md row">
                  <div class="col-4 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">INICIATIVA</div>
                      <div class="record-form-page__form--small-text text-caption">Modificador</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="flex items-center"> 
                      <div class="col-12 col-sm-6">{{result.initiative}}</div>
                    </div>
                  </div>  
                </div>

                <div class="no-wrap q-gutter-md row">
                  <div class="col-4 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">TOQUE</div>
                      <div class="record-form-page__form--small-text text-caption">Classe de armadura</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="flex items-center"> 
                      <div class="col-12 col-sm-6">{{result.touch}}</div>
                    </div>
                  </div>  
                </div>
                
                <div class="no-wrap q-gutter-md row">
                  <div class="col-4 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">SURPRESA</div>
                      <div class="record-form-page__form--small-text text-caption">Classe de armadura</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="flex items-center"> 
                      <div class="col-12 col-sm-6">{{result.flatFooted}}</div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- TESTES DE RESISTENCIA -->
              <div class="col-4 column q-col-gutter-md">
                <div class="full-width row">
                  <div class="col-6 text-bold">TESTES DE RESISTÊNCIA</div>
                  <div class="col-grow q-pl-lg text-bold">TOTAL</div>
                </div>
                <div class="no-wrap q-gutter-xs row">
                  <div class="col-6">
                    <div class="items-center justify-center">
                      <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                        <div class="text-bold">FORTITUDE</div>
                        <div class="record-form-page__form--small-text text-caption">(Constituição)</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-grow full-height items-center">
                    <div class="full-height items-center q-pl-lg row">
                      <div class="bg-white">{{result.fortitude}}</div> 
                    </div>
                  </div>  
                </div>
                <div class="no-wrap q-gutter-xs row">
                  <div class="col-6 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">REFLEXOS</div>
                      <div class="record-form-page__form--small-text text-caption">(Destreza)</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="full-height items-center q-pl-lg row"> 
                      <div class="bg-white">{{result.reflex}}</div>
                    </div>
                  </div>  
                </div>
                <div class="no-wrap q-gutter-xs row">
                  <div class="col-6 items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">VONTADE</div>
                      <div class="record-form-page__form--small-text text-caption">(Sabedoria)</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="full-height items-center q-pl-lg row"> 
                      <div class="bg-white">{{result.will}}</div>
                    </div>
                  </div>  
                </div>
              </div> 
            </div>

            <div class="col-12 q-mt-md row">
              <div class="col-3 items-center no-wrap q-gutter-md q-mr-md row">
                <div class="items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm rounded-borders text-white">
                    <div class="text-bold">BÔNUS BASE DE ATAQUE</div>
                  </div>  
                </div>
                <div class="col-3">
                  <div class="flex items-center">{{result.baseAttackBonus}}</div> 
                </div>  
              </div>

              <div class="col-3 items-center no-wrap q-gutter-md row">
                <div class="items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm rounded-borders text-white">
                    <div class="text-bold">RESISTÊNCIA À MAGIA</div>
                  </div>  
                </div>
                <div class="col-3">
                  <div class="flex items-center"> 
                    <div class="col-12 col-sm-6">{{result.spellResistence}}</div>
                  </div>
                </div>  
              </div>

              <div class="col-6 items-center no-wrap q-gutter-md row">
                <div class="col-3 items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center rounded-borders text-white">
                    <div class="text-bold">AGARRAR</div>
                    <div class="record-form-page__form--small-text text-caption">Modificador</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="flex items-center">
                    <div class="col-12 col-sm-6">{{result.grapple}}</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="flex items-center">
                    <div class="col-12 col-sm-6">{{result.grapple}}</div>
                    
                  </div>
                </div>  
                <div class="col-2">
                  <div class="flex items-center">
                    <div class="col-12 col-sm-6">{{result.grapple}}</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="flex items-center">
                    <div class="col-12 col-sm-6">{{result.grapple}}</div>
                  </div>
                </div>
              </div>

              <div v-for="(weapon, index) in 3" :key="index" class="col-8 q-mt-lg row">
                <div class="column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm record-form-page__form--title-rounded-left text-white">
                      <div class="text-bold">ATAQUE</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                    
                  </div>
                </div>
                <div class="column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                      <div class="text-bold">BÔNUS DE ATAQUE</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                    
                  </div>
                </div>
                <div class="column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                      <div class="text-bold">DANO</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                  </div>
                </div>
                <div class="col-grow column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm record-form-page__form--title-rounded-right text-white">
                      <div class="text-bold">SUCESSO DECISIVO</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                  </div>
                </div>
                <div class="column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                      <div class="text-bold">ALCANCE</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                  </div>
                </div>
                <div class="column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                      <div class="text-bold">TIPO</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                  </div>
                </div>
                <div class="col-grow column">
                  <div class="full-width items-center justify-center">
                    <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                      <div class="text-bold">NOTAS</div>
                    </div>  
                  </div>
                  <div class="col-grow">
                    <div class="col-12 col-sm-6">{{result.weapons}}</div>
                  </div>
                </div>
                
              </div>
              
              
              <!-- <div v-model="result.equipament" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.equipament" :error-message="getErrorMessage(errors.equipament)" hide-bottom-space outlined @blur="refreshErrors('equipament')" /> -->
            </div>

            <div class="col-4 items-center justify-center q-mt-md row">
              <div class="bg-dark col-12 column items-center justify-center rounded-borders text-white">
                <div class="text-bold">PERÍCIAS</div>
                <div class="record-form-page__form--small-text text-caption">Classe de armadura</div>
              </div> 
              <div class="text-bolder text-h6">Ainda trabalhando nas perícias</div>
              <q-img src="../../assets/working.svg" />
            </div>
          </div>
          <div class="full-width justify-end q-gutter-sm row">
            <q-btn class="text-primary" label="Voltar" outline @click="goBack" />
            <q-btn v-if="result._id" color="primary" label="Salvar" text-color="white" unelevated @click="update" />
            <q-btn v-else color="primary" label="Criar" text-color="white" unelevated @click="createRecord" />
          </div>
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

<style lang="scss">
  .record-single-page {
    &__sheet {
      border-radius: 8px;
    }
  }
</style>