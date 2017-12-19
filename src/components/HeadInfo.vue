<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path:'/total'}">
          <img src="../assets/logo.png" alt="logo" :style="{float: 'left'}">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-if="username =='' || username==undefined" @click="logCLick">登录</li>
            <li v-if="!username ==''" class="nav-pile">|</li>
            <li v-if="!username ==''" @click="logOut">退出</li>
            <li v-if="username =='' || username==undefined" class="nav-pile">|</li>
            <li v-if="username =='' || username==undefined" @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <template v-if="username=='' || username==undefined">
    	<div class="app-content">
    	<index-info></index-info>
    	</div>
    </template>
    <template v-else>
    	<div class="app-content delay">
    	<nav-info></nav-info>
      <transition name="component-fade" mode="out-in">
  		<router-view></router-view>
  		</transition>
    	</div>
    </template>
		
    <about-form :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </about-form>

    <about-form  :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <login-form @has-log="onSuccessLog"></login-form>
    </about-form>

    <about-form  :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form @reg-done="onSuccessReg"></reg-form>
    </about-form> 
    
    <div class="app-foot">
      <p>&copy 2017 Aman MIT</p>
    </div>
  </div>
</template>

<script>
  import NavInfo from '../components/NavInfo'
  import AboutForm from '../components/head/AboutForm'
  import RegForm from '../components/head/RegForm'
  import LoginForm from '../components/head/LoginForm'
  import IndexInfo from '../components/IndexInfo'
  
  export default {
    components: {
      NavInfo,
      AboutForm,
      RegForm,
      LoginForm,
      IndexInfo
    },
    data () {
      return {
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: sessionStorage.username
      }
    },
    methods: {
      logCLick () {
          this.isShowLogDialog = true;
      },
      logOut () {
      		sessionStorage.clear();
          this.username = ''
          this.$router.push('/total');
      },
      regClick () {
          this.isShowRegDialog= true
      },
      aboutClick () {
          this.isShowAboutDialog = true
      },
      closeDialog (dialog) {
          this[dialog] = false
      },
      onSuccessLog (data) {
        this.closeDialog ('isShowLogDialog')
        sessionStorage.username=data.username
        this.username=data.username
      },
      onSuccessReg () {
        this.closeDialog ('isShowRegDialog')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 600px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
  }
  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }
  .app-content{
  	padding-top: 30px;
  }
  .app-content p{
  	background: -webkit-linear-gradient(left,#FF6347,#FFD700 30%,#3CB371 80%,#FF8C00);
		-webkit-background-clip:text;
		-webkit-text-fill-color:transparent;
		line-height: 45px;
  	font-size: 24px;
  	font-family: cursive;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
    position: fixed;
    bottom: 0;
    z-index: 99;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form-line {
    padding: 15px 0;
    overflow: hidden;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
    float: left;
  }
  .g-form-input {
    display: inline-block;
    float: left;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
    float: left;
  }
  .g-form-btn {
    padding-left: 100px;
    clear: both;
    text-align: left;
  }
  .g-form-error {
    color: chocolate;
    padding-left: 15px;
    float: left;
  }
  .delay{
		-webkit-animation-name:mytranslate;
		-webkit-animation-timing-function:ease-in-out;
		-webkit-animation-duration:1.5s;
	}
	@-webkit-keyframes mytranslate{
    0%{transform: translateX(-2000px);}
    100%{opacity: 1;transform: translateX(0px);}
  }
</style>
