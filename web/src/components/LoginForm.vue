<template>
  <div class="login-form-wrapper">
    <div class="login-form-header">
      <h1>密码登录</h1>
    </div>
    <div class="login-form-body">
      <form action="/login" method="post">
        <div class="form-item">
          <input v-model="username" type="text" placeholder="输入账号" name="username" required>
        </div>
        <div class="form-item">
          <input v-model="password" type="password" placeholder="输入登录密码" name="password" required>
        </div>
      </form>
    </div>
    <div class="login-form-footer">
      <button @click="loginHandler">登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const username = ref<String>('');
const password = ref<String>('');

const loginHandler = () => {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/login', true);
  xhr.responseType = 'json';

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Response:', xhr.response);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Network error');
  };

  xhr.send(JSON.stringify({
    username: username.value,
    password: password.value,
  }));
};

</script>

<style lang="less" scoped>
  .login-form-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    width: 20vw;
    min-height: 15vw;
    border-radius: 10px;
    box-shadow: 0 .46875vw 1.458333vw .416667vw rgba(0,0,0,.05), 0 .3125vw .833333vw rgba(0,0,0,.08),0 .15625vw .3125vw -.208333vw rgba(0,0,0,.12);
    padding: 20px 0px;

    .login-form-header {
      h1 {
        color: #262626 !important;
        font-size: 1.458333vw;
        font-weight: 500;
        line-height: 1.875vw;
        text-align: center;
      }
    }

    .login-form-body {
      height: 0;
      flex: 1;
      display: flex;
      align-items: center;
      margin: 20px 20px;

      form {
        width: 100%;

        input {
          height: 3vw;
          width: 100%;
          background-color: #eee;
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 0 20px;
        }

        .form-item + .form-item {
          margin-top: 20px;
        }
      }
    }

    .login-form-footer {
      button {
        font-size: 1.041667vw;
        font-weight: 500;
        margin: 0 auto;
        width: 14vw;
        height: 2.5vw;
        box-shadow: none;
            border-radius: 0.625vw;
            padding-left: 1.041667vw;
        padding-right: 1.041667vw;
        text-shadow: none;
        background: #262626;
        border-color: #262626;
        color: #fff;
        border: 1px solid #d9d9d9;
      }
    }
  }
</style>
