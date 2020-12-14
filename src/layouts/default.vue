<template>
  <el-container class="page-container">
    <el-header :height="topMenuheight + 'px'">
      <top-navigation />
    </el-header>

    <el-container>
      <el-aside :width="sideMenuWidth + 'px'">
        <side-navigation />
      </el-aside>

      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideNavigation from "@/components/navigation/SideNavigation.vue";
import TopNavigation from "@/components/navigation/TopNavigation.vue";

export default defineComponent({
  components: {
    SideNavigation,
    TopNavigation
  },

  props: {
    sideMenuWidth: {
      default: 250,
      type: Number
    },
    topMenuheight: {
      default: 60,
      type: Number
    }
  }
});
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
}

.el-header {
  padding: 0;
}
</style>
