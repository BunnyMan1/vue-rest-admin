<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DefaultLayout from "@/layouts/default.vue";

export default defineComponent({
  components: {
    DefaultLayout
  }
});
</script>

<style lang="scss"></style>
