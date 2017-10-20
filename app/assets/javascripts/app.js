$(function () {
  new Vue({
    el: '#app',
    data: {
      userInfo: {
        email: '',
        tel: '',
        userName: ''
      }
    },
    computed: {
      validation: function () {
        return (this.validateTel &&
                this.validateEmail &&
                this.validateUserName);
      },
      validateTel: function () {
        var pattern = /^\d+$/; // 1文字以上の整数のみ許容
        return pattern.test(this.userInfo.tel.trim());
      },
      validateEmail: function () {
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.userInfo.email);
      },
      validateUserName: function () {
        if (this.userInfo.userName.length === 0) {
          return true;
        } else {
          var pattern = /^\w+$/; // 大文字小文字英数字、アンダースコアのみ許容
          return pattern.test(this.userInfo.userName);
        }
      }
    }
  });
});
