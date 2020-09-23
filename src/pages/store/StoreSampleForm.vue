<template>
<div>
  <div>
    Name: <input type="text" v-model="state.name">
  </div>
  <div>
    Department Name: <input type="text" v-model="state.department.name">
  </div>
  <div>
    Name Length: {{ store.getNameLength() }}
  </div>
  <div>
    Department Name Length: {{ store.getDepartmentNameLength() }}
  </div>

  <div>
    Store: {{ store }}
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SampleStore } from "./SampleStore"

export default defineComponent({
  setup() {
    const store = new SampleStore()
    const state = store.getState()
    const department = ''

    return {
      store,
      state,
    }
  }
})

</script>
