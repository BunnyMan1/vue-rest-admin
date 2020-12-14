<template>
  <el-menu
    class="el-menu-vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
        <el-menu-item index="1-4-2">item tow</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>Navigator Two</span>
    </el-menu-item>

    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span>Navigator Three</span>
    </el-menu-item>

    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { SideNavigationMenuItem } from "./interfaces";

export default defineComponent({
  props: {
    navigationItems: {
      type: Array as PropType<SideNavigationMenuItem[]>,
      default: (): Array<SideNavigationMenuItem> => []
    }
  }
});
</script>

<style lang="scss">
.el-menu-vertical {
  height: 100%;
}
</style>
