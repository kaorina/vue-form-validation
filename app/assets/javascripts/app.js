$(function () {
  new Vue({
    el: '#app',
    data: {
      userInfo: {
        email: '',
        tel: ''
      }
    },
    computed: {
      isBlank: function () {
        // 未入力かどうかのチェック
        var userInfo = this.userInfo;
        for (key in userInfo) {
          if (userInfo[key].trim().length === 0) return true;
        };
      },
      validationTel: function () {
        // 空白削除後、数値かどうかのチェック(正規表現を使うべき？？)
        return (isNaN(this.userInfo.tel.trim())) ? false : true;
      }
    }
  });
});
