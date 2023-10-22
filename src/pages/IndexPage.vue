<template>
  <h1>INICIO</h1>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      separator: ref('vertical'),
      separatorOptions: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' }
      ]
    }
  }
}
</script>
