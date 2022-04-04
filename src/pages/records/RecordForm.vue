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
        <div class="full-width q-col-gutter-md row">
          <div class="col-12 q-col-gutter-md row">
            <q-input v-model="values.name" bg-color="white" class="col-12 col-sm-6" :error="!!errors.name" :error-message="getErrorMessage(errors.name)" hide-bottom-space label="Nome" @blur="refreshErrors('name')" />
            <q-input v-model="values.player" bg-color="white" class="col-12 col-sm-6" :error="!!errors.player" :error-message="getErrorMessage(errors.player)" hide-bottom-space label="Jogador" @blur="refreshErrors('player')" />
            <q-input v-model="values.class" bg-color="white" class="col-12 col-sm-3" :error="!!errors.class" :error-message="getErrorMessage(errors.class)" hide-bottom-space label="Classe" @blur="refreshErrors('class')" />
            <q-input v-model="values.level" bg-color="white" class="col-12 col-sm-3" :error="!!errors.level" :error-message="getErrorMessage(errors.level)" hide-bottom-space label="Nível" @blur="refreshErrors('level')" />
            <q-input v-model="values.race" bg-color="white" class="col-12 col-sm-2" :error="!!errors.race" :error-message="getErrorMessage(errors.race)" hide-bottom-space label="Raça" @blur="refreshErrors('race')" />
            <q-input v-model="values.trend" bg-color="white" class="col-12 col-sm-2" :error="!!errors.trend" :error-message="getErrorMessage(errors.trend)" hide-bottom-space label="Tendência" @blur="refreshErrors('trend')" />
            <q-input v-model="values.divinity" bg-color="white" class="col-12 col-sm-2" :error="!!errors.divinity" :error-message="getErrorMessage(errors.divinity)" hide-bottom-space label="Divindade" @blur="refreshErrors('divinity')" />
            <q-input v-model="values.size" bg-color="white" class="col-12 col-sm-1" :error="!!errors.size" :error-message="getErrorMessage(errors.size)" hide-bottom-space label="Tamanho" @blur="refreshErrors('size')" />
            <q-input v-model="values.age" bg-color="white" class="col-12 col-sm-1" :error="!!errors.age" :error-message="getErrorMessage(errors.age)" hide-bottom-space label="Idade" @blur="refreshErrors('age')" />
            <q-input v-model="values.gender" bg-color="white" class="col-12 col-sm-2" :error="!!errors.gender" :error-message="getErrorMessage(errors.gender)" hide-bottom-space label="Gênero" @blur="refreshErrors('gender')" />
            <q-input v-model="values.height" bg-color="white" class="col-12 col-sm-2" :error="!!errors.height" :error-message="getErrorMessage(errors.height)" hide-bottom-space label="Altura" @blur="refreshErrors('height')" />
            <q-input v-model="values.weight" bg-color="white" class="col-12 col-sm-1" :error="!!errors.weight" :error-message="getErrorMessage(errors.weight)" hide-bottom-space label="Peso" @blur="refreshErrors('weight')" />
            <q-input v-model="values.eyes" bg-color="white" class="col-12 col-sm-1" :error="!!errors.eyes" :error-message="getErrorMessage(errors.eyes)" hide-bottom-space label="Olhos" @blur="refreshErrors('eyes')" />
            <q-input v-model="values.hair" bg-color="white" class="col-12 col-sm-2" :error="!!errors.hair" :error-message="getErrorMessage(errors.hair)" hide-bottom-space label="Cabelo" @blur="refreshErrors('hair')" />
            <q-input v-model="values.skin" bg-color="white" class="col-12 col-sm-2" :error="!!errors.skin" :error-message="getErrorMessage(errors.skin)" hide-bottom-space label="Cor da pele" @blur="refreshErrors('skin')" />
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
                  <div>Valor</div>
                  <div class="flex items-center">
                    <q-input v-model="values.strength" bg-color="white" dense :error="!!errors.strength" :error-message="getErrorMessage(errors.strength)" hide-bottom-space outlined @blur="refreshErrors('strength')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-4">Mod. habilidade</div>
                  <div class="col-2 items-center">
                    <q-input v-model="values.strength" bg-color="white" dense :error="!!errors.strength" :error-message="getErrorMessage(errors.strength)" hide-bottom-space outlined @blur="refreshErrors('strength')" />
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
                  <div class="flex items-center">
                    <q-input v-model="values.dexterity" bg-color="white" class="col-2"  dense :error="!!errors.dexterity" :error-message="getErrorMessage(errors.dexterity)" hide-bottom-space outlined @blur="refreshErrors('dexterity')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-2 items-center">
                    <q-input v-model="values.strength" bg-color="white" dense :error="!!errors.strength" :error-message="getErrorMessage(errors.strength)" hide-bottom-space outlined @blur="refreshErrors('strength')" />
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
                  <div class="flex items-center">
                    <q-input v-model="values.constitution" bg-color="white" class="col-2"  dense :error="!!errors.constitution" :error-message="getErrorMessage(errors.constitution)" hide-bottom-space outlined @blur="refreshErrors('constitution')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-2 items-center">
                    <q-input v-model="values.constitution" bg-color="white" class="col-2"  dense :error="!!errors.constitution" :error-message="getErrorMessage(errors.constitution)" hide-bottom-space outlined @blur="refreshErrors('constitution')" />
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
                  <div class="flex items-center">
                    <q-input v-model="values.intelligence" bg-color="white" class="col-2"  dense :error="!!errors.intelligence" :error-message="getErrorMessage(errors.intelligence)" hide-bottom-space outlined @blur="refreshErrors('intelligence')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-2 items-center">
                    <q-input v-model="values.intelligence" bg-color="white" class="col-2"  dense :error="!!errors.intelligence" :error-message="getErrorMessage(errors.intelligence)" hide-bottom-space outlined @blur="refreshErrors('intelligence')" />
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
                  <div class="flex items-center">
                    <q-input v-model="values.wisdom" bg-color="white" class="col-2"  dense :error="!!errors.wisdom" :error-message="getErrorMessage(errors.wisdom)" hide-bottom-space outlined @blur="refreshErrors('wisdom')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-2 items-center">
                    <q-input v-model="values.wisdom" bg-color="white" class="col-2"  dense :error="!!errors.wisdom" :error-message="getErrorMessage(errors.wisdom)" hide-bottom-space outlined @blur="refreshErrors('intelligence')" />
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
                  <div class="flex items-center">
                    <q-input v-model="values.charisma" bg-color="white" class="col-2"  dense :error="!!errors.charisma" :error-message="getErrorMessage(errors.charisma)" hide-bottom-space outlined @blur="refreshErrors('charisma')" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="col-2 items-center">
                    <q-input v-model="values.charisma" bg-color="white" class="col-2"  dense :error="!!errors.charisma" :error-message="getErrorMessage(errors.charisma)" hide-bottom-space outlined @blur="refreshErrors('intelligence')" />
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
                    <q-input v-model="values.healPoints" bg-color="white" dense :error="!!errors.healPoints" :error-message="getErrorMessage(errors.healPoints)" hide-bottom-space outlined @blur="refreshErrors('healPoints')" />
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
                    <q-input v-model="values.armorClass" bg-color="white" class="col-12 col-sm-6"  dense :error="!!errors.armorClass" :error-message="getErrorMessage(errors.armorClass)" hide-bottom-space outlined @blur="refreshErrors('armorClass')" />
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
                    <q-input v-model="values.initiative" bg-color="white" class="col-12 col-sm-6"  dense :error="!!errors.initiative" :error-message="getErrorMessage(errors.initiative)" hide-bottom-space outlined @blur="refreshErrors('initiative')" />
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
                    <q-input v-model="values.touch" bg-color="white" class="col-12 col-sm-6"  dense :error="!!errors.touch" :error-message="getErrorMessage(errors.touch)" hide-bottom-space outlined @blur="refreshErrors('touch')" />
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
                    <q-input v-model="values.flatFooted" bg-color="white" class="col-12 col-sm-6"  dense :error="!!errors.flatFooted" :error-message="getErrorMessage(errors.flatFooted)" hide-bottom-space outlined @blur="refreshErrors('flatFooted')" />
                  </div>
                </div>  
              </div>
            </div>

            <!-- TESTES DE RESISTENCIA -->
            <div class="col-4 column q-col-gutter-md">
              <div class="no-wrap q-gutter-md row">
                <div class="col-6">
                  <div class="text-bold">TESTES DE RESISTÊNCIA</div>
                  <div class="items-center justify-center">
                    <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                      <div class="text-bold">FORTITUDE</div>
                      <div class="record-form-page__form--small-text text-caption">(Constituição)</div>
                    </div>  
                  </div>
                </div>
                <div class="col-grow">
                  <div class="text-bold">TOTAL</div>
                  <div class="items-center row"> 
                    <q-input v-model="values.fortitude" bg-color="white" dense :error="!!errors.fortitude" :error-message="getErrorMessage(errors.fortitude)" hide-bottom-space outlined @blur="refreshErrors('fortitude')" />
                  </div>
                </div>  
              </div>
              <div class="no-wrap q-gutter-md row">
                <div class="col-6 items-center justify-center">
                  <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                    <div class="text-bold">REFLEXOS</div>
                    <div class="record-form-page__form--small-text text-caption">(Destreza)</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <div class="flex items-center"> 
                    <q-input v-model="values.reflex" bg-color="white" dense :error="!!errors.reflex" :error-message="getErrorMessage(errors.reflex)" hide-bottom-space outlined @blur="refreshErrors('reflex')" />
                  </div>
                </div>  
              </div>
              <div class="no-wrap q-gutter-md row">
                <div class="col-6 items-center justify-center">
                  <div class="bg-dark col-2 column items-center justify-center rounded-borders text-white">
                    <div class="text-bold">VONTADE</div>
                    <div class="record-form-page__form--small-text text-caption">(Sabedoria)</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <div class="flex items-center"> 
                    <q-input v-model="values.will" bg-color="white" dense :error="!!errors.will" :error-message="getErrorMessage(errors.will)" hide-bottom-space outlined @blur="refreshErrors('will')" />
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
                <q-input v-model="values.baseAttackBonus" bg-color="white" class="flex items-center" dense :error="!!errors.baseAttackBonus" :error-message="getErrorMessage(errors.baseAttackBonus)" hide-bottom-space outlined @blur="refreshErrors('spellResistence')" />
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
                  <q-input v-model="values.spellResistence" bg-color="white" class="col-12 col-sm-6"  dense :error="!!errors.spellResistence" :error-message="getErrorMessage(errors.spellResistence)" hide-bottom-space outlined @blur="refreshErrors('spellResistence')" />
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
                  <q-input v-model="values.grapple" bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" hide-bottom-space outlined @blur="refreshErrors('grapple')" />
                </div>
              </div>
              <div class="col-2">
                <div class="flex items-center">
                  <q-input v-model="values.grapple" bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" hide-bottom-space outlined @blur="refreshErrors('grapple')" />
                </div>
              </div>  
              <div class="col-2">
                <div class="flex items-center">
                  <q-input v-model="values.grapple" bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" hide-bottom-space outlined @blur="refreshErrors('grapple')" />
                </div>
              </div>
              <div class="col-2">
                <div class="flex items-center">
                  <q-input v-model="values.grapple" bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.grapple" :error-message="getErrorMessage(errors.grapple)" hide-bottom-space outlined @blur="refreshErrors('grapple')" />
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
                  <q-input v-model="values.weapons"  bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                    <div class="text-bold">BÔNUS DE ATAQUE</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons"  bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                    <div class="text-bold">DANO</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons"  bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="col-grow column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm record-form-page__form--title-rounded-right text-white">
                    <div class="text-bold">SUCESSO DECISIVO</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons" bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                    <div class="text-bold">ALCANCE</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons" bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                    <div class="text-bold">TIPO</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons" bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              <div class="col-grow column">
                <div class="full-width items-center justify-center">
                  <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
                    <div class="text-bold">NOTAS</div>
                  </div>  
                </div>
                <div class="col-grow">
                  <q-input v-model="values.weapons" bg-color="white" class="col-12 col-sm-6" dense  :error="!!errors.weapons" :error-message="getErrorMessage(errors.weapons)" hide-bottom-space outlined square @blur="refreshErrors('weapons')" />
                </div>
              </div>
              
            </div>
            
            
            <!-- <q-input v-model="values.equipament" bg-color="white"  class="col-12 col-sm-6" :error="!!errors.equipament" :error-message="getErrorMessage(errors.equipament)" hide-bottom-space outlined @blur="refreshErrors('equipament')" /> -->
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

    createRecord () {
      this.postRecord(this.values).then(()=>{
        this.$q.notify('Ficha criada!')
        this.$router.push({name: 'Records' })
      }).catch(err =>{
        this.errors = err.response?.data?.error
        this.$q.notify('Existem erros no formulário!')
      })
    },

    update () {
      this.$q.notify('Ficha atualizada!')
      this.updateRecord(this.values).then(() => {
        this.$router.push({ name: 'RecordSingle', params: {id: this.values._id} })
      })
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

    &--small-text {
      font-size: 8px;
    }
    
    &--title-rounded-left {
      border-top-left-radius: 8px;
    }

    &--title-rounded-right {
      border-top-right-radius: 8px;
    }
  }
}
</style>
