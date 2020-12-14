<template>
  <!-- Submenu Item -->
  <el-submenu v-if="hasSubMenu" :index="itemData.index">
    <template #title>
      <i v-if="itemData.icon" :class="itemData.icon"></i>
      <span>{{ itemData.label }}</span>
    </template>

    <el-menu-item-group title="Group One">
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
    </el-menu-item-group>

    <!-- TODO: Use this component recursively -->

    <el-submenu index="1-4">
      <template #title>item four</template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
      <el-menu-item index="1-4-2">item tow</el-menu-item>
    </el-submenu>
  </el-submenu>

  <!-- Direct Menu Item -->
  <el-menu-item v-else :index="itemData.index" :disabled="itemData.disabled">
    <i v-if="itemData.icon" :class="itemData.icon"></i>
    <span>{{ itemData.label }}</span>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { SideNavigationMenuItem } from "./interfaces";

export default defineComponent({
  name: "DynamicMenuItem",
  computed: {
    hasSubMenu(): boolean {
      if (this.itemData.subMenu && this.itemData.subMenu.length > 0)
        return true;
      else return false;
    }
  },

  props: {
    itemData: {
      type: Object as PropType<SideNavigationMenuItem>,
      required: true
    }
  }
});
</script>

<style></style>
