<template>
  <el-menu
    class="el-menu-horizontal el-menu-horizontal__bg-color"
    mode="horizontal"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-submenu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">
      <a href="https://www.ele.me" target="_blank">Orders</a>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.el-menu-horizontal__bg-color {
  // previously #545c64
  background-color: $--color-text-primary !important;
}
</style>
