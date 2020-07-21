<template>
<login-register
    :formSubmit="formSubmit"
    :formRender="formRender"
/>
</template>
<script>
import LoginRegister from '@/components/LoginRegister'

export default {
    components: { LoginRegister },

    data() {
        return {
            loginRender: {
                title: '登录',
                submit: '立即登录',
                fields: [
                    {
                        type: 'text',
                        field: 'username',
                        placeholder: '请输入用户名',
                        validate(value) {
                            return !!value
                        }
                    },
                    {
                        type: 'password',
                        field: 'password',
                        placeholder: '请输入密码',
                        validate(value) {
                            return value && value.length >= 6
                        }
                    }
                ]
            },

            registerRender: {
                title: '注册',
                submit: '立即注册',
                fields: [
                    {
                        type: 'text',
                        field: 'username',
                        placeholder: '请输入用户名',
                        validate(value) {
                            return !!value
                        }
                    },
                    {
                        type: 'password',
                        field: 'password',
                        placeholder: '请输入密码',
                        validate(value) {
                            return value && value.length >= 6
                        }
                    },
                    {
                        type: 'text',
                        field: 'tel',
                        maxLength: 11,
                        placeholder: '请输入手机号',
                        validate(value) {
                            return value && value.length === 11
                        }
                    },
                    {
                        type: 'passcode',
                        field: 'code',
                        wait: 10,
                        maxLength: 4,
                        disabled: false,
                        text: '获取验证码',
                        placeholder: '请输入验证码',
                        validate(value) {
                            return value && value.length === 4
                        },
                        submit() {
                            console.log('passcode submit')
                        }
                    }
                ]
            }
        }
    },

    methods: {
        loginSubmit(data) {
            console.log('Login:', data)
        },

        registerSubmit(data) {
            console.log('Register:', data)
        }
    },

    computed: {
        isLogin() {
            return this.$route.meta.status === 0
        },

        formRender() {
            return this.isLogin ? this.loginRender : this.registerRender
        },

        formSubmit() {
            return this.isLogin ? this.loginSubmit : this.registerSubmit
        }
    }
}
</script>
