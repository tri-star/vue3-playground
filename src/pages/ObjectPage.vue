<template>
<div>
  <div class="row">
    <p>Name</p>
    <input type="text" v-model="user.name">
  </div>
  <div class="row">
    <p>Department</p>
    <input type="text" v-model="user.department.name">
  </div>
  <div class="row">
    <p>Tags</p>
    <button @click="addTag()">add tag</button>
  </div>
  <div class="row">
    <p>Change</p>
    <button @click="changeUser()">change user</button>
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
  public department: Department
  
  constructor() {
    this.name = ''
    this.job = ''
    this.age = 0
    this.tags = []
    this.department = new Department()
  }
}

class Department {
  public name: String

  constructor() {
    this.name = ''
  }
}


export default defineComponent({

  setup() {

    let user: User = reactive(new User)

    const addTag = () => {
      user.tags.push('aaa')
    }
    const changeUser = () => {
      const user2:User = new User()
      user2.name = 'user2'
      user.name = user2.name
    }
    
    return {
      user,
      addTag,
      changeUser
    }
  }

})

</script>