Login-register-uikit
---
简单实用的登录注册页

## Setup
```sh
npm i login-register-uikit
```

### Usage
路由配置示例
```js
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { status: 0 }
  },
  {
    path: '/register',
    name: 'register',
    component: Login,
    meta: { status: 1 }
  },
]
```
Login.vue
```vue
<template>
<login-register
    ref="loginRegister"
    :status="status"
    :loginSubmit="loginSubmit"
    :registerSubmit="registerSubmit"
/>
</template>
<script>
import LoginRegister from 'login-register-uikit'

export default {
    components: { LoginRegister },

    methods: {
        loginSubmit() {
            // 处理登录
            console.log('Login:', this.$refs.loginRegister.login)
        },

        registerSubmit() {
            // 处理注册
            console.log('Register:', this.$refs.loginRegister.register)
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
}
</script>

```

### Preview

![](login.png)  
![](register.png)  
