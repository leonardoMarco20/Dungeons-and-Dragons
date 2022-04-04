<template>
  <div class="col-8 q-mt-xl row">
    <div class="column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm record-form-page__form--title-rounded-left text-white">
          <div class="text-bold">ATAQUE</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white"  class="col-12 col-sm-6" dense :error="!!errors.weapon" :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.attack" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
          <div class="text-bold">BÔNUS DE ATAQUE</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white"  class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.bonusAttack" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
          <div class="text-bold">DANO</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white"  class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.damage" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="col-grow column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm record-form-page__form--title-rounded-right text-white">
          <div class="text-bold">SUCESSO DECISIVO</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.critic" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
          <div class="text-bold">ALCANCE</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.range" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
          <div class="text-bold">TIPO</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.type" @blur="refreshErrors('weapon')" />
      </div>
    </div>
    <div class="col-grow column">
      <div class="full-width items-center justify-center">
        <div class="bg-dark column flex items-center justify-center q-pa-sm text-white">
          <div class="text-bold">NOTAS</div>
        </div>  
      </div>
      <div class="col-grow">
        <q-input bg-color="white" class="col-12 col-sm-6" dense :error="!!errors.weapon"  :error-message="getErrorMessage(errors.weapon)" hide-bottom-space outlined square :value="weapon.notes" @blur="refreshErrors('weapon')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weapon: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>