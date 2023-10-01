<script setup lang="ts">
import { ref } from 'vue';
import CommonAlert from './CommonAlert.vue';

const alertRef = ref<typeof CommonAlert | undefined>(undefined)

function handleOpenClick() {
  alertRef.value?.openDialog()
}

</script>

<template>
  <CommonAlert ref="alertRef" />
  <button @click="handleOpenClick">Open</button>
</template>

<style scoped></style>
