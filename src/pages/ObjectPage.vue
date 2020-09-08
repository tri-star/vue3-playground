<template>
<div>
  <div class="row">
    <p>Name</p>
    <input type="text" v-model="user.name">
  </div>
  <div class="row">
    <p>Tags</p>
    <button @click="addTag()">add tag</button>
  </div>
  <div class="row">
    <p>Dump</p>
    <p>{{ user }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";


class User {
  public name: string
  public job: string
  public age: Number
  public tags: String[]
  
  constructor() {
    this.name = ''
    this.job = ''
    this.age = 0
    this.tags = []
  }
}

export default defineComponent({

  setup() {

    const user: User = reactive(new User)

    const addTag = () => {
      user.tags.push('aaa')
    }
    
    return {
      user,
      addTag
    }
  }

})

</script>