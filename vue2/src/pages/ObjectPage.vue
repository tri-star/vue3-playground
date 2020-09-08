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
    <p>Dump</p>
    <p>{{ user }}</p>
  </div>
</div>
</template>

<script>

export default {

  data() {
    return {
      user: {
        name: '',
        department: {
          name: ''
        },
        tags: [],
      }
    }
  },

  methods: {
    addTag() {
      this.user.name = 'changed'
      this.user.tags.push('aaa')
    }
  }

}

</script>