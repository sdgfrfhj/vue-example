<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名 :</span>
        <div class="g-form-input">
          <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码 :</span>
        <div class="g-form-input">
          <input type="password" v-model="pwd">
        </div>
        <span class="g-form-error">{{pwdErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">确认密码 :</span>
        <div class="g-form-input">
          <input type="password" v-model="confirmpwd">
        </div>
        <span class="g-form-error">{{confirmErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">邮箱 :</span>
        <div class="g-form-input">
          <input type="text" v-model="emial" placeholder="请输入邮箱">
        </div>
        <span class="g-form-error">{{emialErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onReg">注册</a>
        </div>
      </div>
      <p :style="{color: 'chocolate'}">{{errorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			username: '',
			pwd: '',
			confirmpwd: '',
			emial: '',
			errorText: ''
		}
	},
	computed: {
		userErrors(){
			let errorText,status
				if(!/[\u4e00-\u9fa5]/.test(this.username)){
					 status=false
					 errorText='必须输入中文'
				}else{
					status=true
					errorText= ''
				}
				if(this.username==''){
					status=false
					errorText= ''
				}
				return{
					errorText,
					status
				}
		},
		pwdErrors(){
			let errorText,status
			if(!/^\d{6}$/.test(this.pwd)){
				status=false
				errorText= '必须输入6位数字'
			}else{
				status=true
				errorText= ''
			}
			if(this.pwd==''){
				status=false
				errorText= ''
			}
			return{
				errorText,
				status
			}
		},
		confirmErrors(){
			let errorText,status
			if(this.pwd!=this.confirmpwd){
				status=false
				errorText= '两次密码不一致'
			}else{
				status=true
				errorText= ''
			}
			if(this.confirmpwd==''){
				status=false
				errorText= ''
			}
			return{
				errorText,
				status
			}
		},
		emialErrors(){
			let errorText,status
			if(!/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(this.emial)){
				status=false
				errorText= '邮箱格式不正确'
			}else{
				status=true
				errorText= ''
			}
			if(this.emial==''){
				status=false
				errorText= ''
			}
			return{
				errorText,
				status
			}
		}
	},
	methods:{
		onReg(){
			if(!this.userErrors.status || !this.pwdErrors.status || !this.confirmErrors.status || !this.emialErrors.status){
				status=false
				this.errorText= '信息不能为空'
			}else{
				this.errorText= ''
				alert("注册成功")
				this.$emit('reg-done')
			}
		}
	}
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
