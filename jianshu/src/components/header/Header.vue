<template>
  <div class="header">
    <div class="logo">
      <img class="logo-icon" src="../../../static/logo.png" alt="">
    </div>
    <div class="banner">
      <div class="index-download-search">
        <div class="index-page">首页</div>
        <div class="download">下载App</div>
        <input type="text" class="search-input" :class="[animationClass]" placeholder="搜索" @focus="onInputFocus" @blur="onInputBlur">
      </div>
      <div class="mode-login-buttons">
        <div class="mode-login">
          <div class="a-a">Aa</div>
          <div class="login">登陆</div>
        </div>
        <div class="buttons">
          <div class="write-button">写文章</div>
          <div class="register-button">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader',
    data() {
      return {
        inputWidth: '150px',
        animationClass: ''
      }
    },
    methods: {
      onInputFocus() {
        this.animationClass = 'input-wider'
      },
      onInputBlur() {
        this.animationClass = 'input-shorter'
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/colors.styl';
  @keyframes wider {
    0% {
      width 150px
    }
    100% {
      width 250px
    }
  }
  @keyframes shorter {
    0% {
      width 250px
    }
    100% {
      width 150px
    }
  }
  .input-wider
    animation wider .5s 1 forwards ease-in
  .input-shorter 
    animation shorter .5s 1 forwards ease-out
  .header
    width 100%
    height 56px
    border-bottom 1px solid $line-color
    display flex
    .logo
      width 100px
      height 56px
      flex 0 0 120px
      .logo-icon
        width 100px
        height 56px
    .banner
      display flex
      flex 1
      justify-content space-between
      align-items center
      .index-download-search
        display flex
        align-items center
        .index-page
          padding 15px
          font-size 17px
          color $theme-color
        .download
          padding 10px
          font-size 17px
          color $font-color
        .search-input
          height 35px
          margin 0 15px
          border-radius 10px
          border none
          background-color $search-color
          font-size 14px
          padding 0 10px
          outline none
          display block
      .mode-login-buttons
        display flex
        font-size 17px
        align-items center
        .mode-login
          display flex
          color $header-mode-color
          .a-a
            margin-right 30px
            cursor pointer
          .login
            cursor pointer
        .buttons
          display flex
          align-items center
          .write-button
            background-color $theme-color
            color #fff
            border-radius 20px
            padding 10px 20px
            cursor pointer
            margin 0 20px
          .register-button
            border 1px solid $theme-color
            color $theme-color
            border-radius 20px
            padding 10px 20px
            cursor pointer
            margin-right 20px
</style>