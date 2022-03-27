<template>
  <q-btn ref="neon" v-bind="$attrs" class="neon text-primary" :label="label" :style='styles' /> 
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: '$primary'
    },

    height: {
      type: Number,
      default: 30
    }
  },

  computed: {
    styles() {
      return [
        `height: ${this.height}px;`,
        `border: ${this.color.value} 2px solid;`,
        `text-shadow: 0 0 2px hsl(0 0% 100% / 0.3), 0 0 0.45em ${this.color.value};`,
        `box-shadow: inset 0 0 0.5em 0 ${this.color.value}, 0 0 0.5em 0 ${this.color.value};`
      ]
    }
  }
}
</script>


<style lang="scss">
  .neon {
    font-size: 1rem;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    font-family: cursive;

    // border: $primary 0.125em solid;
    // text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em $primary;
    // box-shadow: inset 0 0 0.5em 0 $primary, 0 0 0.5em 0 $primary;
  }
</style>