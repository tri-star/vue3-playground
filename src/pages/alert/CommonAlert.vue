<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false)
const dialogRef = ref<HTMLDialogElement | null>(null)

const emits = defineEmits({
  close: null
})

function openDialog() {
  dialogRef.value?.showModal()
}

function closeDialog() {
  show.value = false
  dialogRef.value?.close()
}

function handleCloseClick() {
  closeDialog()
  emits('close')
}

defineExpose({
  openDialog,
  closeDialog
})

</script>

<template>
  <dialog ref="dialogRef">
    <div>test</div>
    <div>
      <button @click="handleCloseClick">OK</button>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  min-width: 300px;
}
</style>
