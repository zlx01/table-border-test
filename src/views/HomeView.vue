<template>
  <RouterLink to="/error">error</RouterLink>
  <br />
  <RouterLink to="/solution">solution</RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style>
a {
  font-size: 32px;
}
</style>
