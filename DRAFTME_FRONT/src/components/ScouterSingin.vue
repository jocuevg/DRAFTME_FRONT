<script setup lang="ts">
const show = ref(false)

function showDialog() {
  show.value = true
}

defineExpose({
  showDialog
})
</script>
<template></template>