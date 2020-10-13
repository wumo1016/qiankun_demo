<template>
  <div class="qiankun_container">
    <div class="qiankun_sidebar">
      <el-menu default-active="1">
        <el-menu-item index="1" @click="goto('/')">
          <i class="el-icon-menu"></i>
          <span slot="title">portal</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goto('/vue1')">
          <i class="el-icon-document"></i>
          <span slot="title">vue1</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="qiankun_content">
      <div id="vue1"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.qiankun_container{
  display: flex;
  .qiankun_sidebar{
    width: 200px;
  }
  .qiankun_content{
    padding: 20px;
  }
}
</style>
