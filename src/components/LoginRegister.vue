<template>
<div class="login-register-wrapper">
    <div class="form-wrapper">
        <div class="cover"></div>
        <div class="form">
            <div class="inner">
                <div class="label">{{ formRender.title }}</div>
                <div
                    class="form-item"
                    v-for="({ type, field, placeholder, text, disabled, maxLength }, i) in formRender.fields"
                    :key="i">
                    <template v-if="type !== 'passcode'">
                        <input
                            class="input"
                            v-model="form[field]"
                            :type="type"
                            :maxLength="maxLength"
                            :placeholder="placeholder"
                            @focus="focus(field)">
                        <span v-if="formValid[field]" class="tips">{{ tip }}</span>
                    </template>
                    <template v-else>
                        <div class="flexbox">
                            <input
                                type="text"
                                class="input passcode"
                                v-model="form[field]"
                                :maxLength="maxLength || 4"
                                :placeholder="placeholder"
                                @focus="focus(field)">
                            <button class="btn passcode" :disabled="disabled" @click="passcodeResolver(formRender.fields[i])">{{ text }}</button>
                        </div>
                        <span v-if="formValid[field]" class="tips">{{ tip }}</span>
                    </template>
                </div>
                <div class="btn-group">
                    <button class="btn" @click="formResolver">{{ formRender.submit }}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: {
        formRender: Object,
        formSubmit: Function,
    },

    data() {
        return {
            tip: null,

            // 表单数据
            form: {},

            // 表单验证
            formValid: {},
        }
    },

    created() {
        this.createFormObject()
    },

    methods: {

        focus(field) {
            this.formValid[field] = false
        },

        async map(array, fn) {
            const tmp = []
            for(let i = 0; i < array.length; i++) {
                tmp[i] = await fn(array[i], i)
            }
            return tmp
        },

        // 表单提交预处理
        async formResolver() {
            try {
                await this.map(this.formRender.fields, async(item) => {
                    if (item.validate && !(await item.validate(this.form[item.field]))) {
                        this.tip = item.placeholder
                        this.formValid[item.field] = true
                        throw new Error(item.placeholder)
                    }
                })
                this.formSubmit(this.form)
            }
            catch(err) {
                console.warn(err.message)
            }
        },

        // 表单自定义数据结构
        // 表单自定义数据验证
        createFormObject() {
            this.formRender.fields.map(item => {
                this.$set(this.form, item.field, null)
                this.$set(this.formValid, item.field, null)
            })
        },

        // 处理验证码等待时间
        passcodeResolver(passcode) {
            passcode.submit()
            const text = passcode.text
            passcode.disabled = true
            passcode.text = `${passcode.wait} 秒后重试`
            // 等待重试
            let i = passcode.wait
            let t = setInterval(() => {
                i--
                passcode.text = `${i} 秒后重试`
                if (i <= 0) {
                    clearInterval(t)
                    passcode.text = text
                    passcode.disabled = false
                }
            }, 1000)
        }
    },
}
</script>
<style scoped>
.login-register-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #272C35;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

.form-wrapper {
    position: fixed;
    display: flex;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 860px;
    height: 600px;
    margin: auto;
    overflow: hidden;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
}

.cover {
    width: 600px;
    height: 100%;
    background: white url(../assets/cover.jpg) no-repeat;
    background-position: center;
    background-size: 80% auto;
}

.form {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #284B9F;
}

.form .inner {
    width: 100%;
    margin: 0 26px;
    padding-bottom: 40px;
}

.form-item {
    margin-bottom: 16px;
}

.label {
    color: white;
    padding: 16px 0;
}

.btn,
.input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 2px;
    border: none;
    outline: none;
    box-sizing: border-box;
}

.input.passcode {
    flex: 1;
    border-radius: 2px 0 0 2px;
}

.btn {
    color: white;
    cursor: pointer;
    font-size: 13px;
    box-sizing: content-box;
    background: #2f59bf;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13);
    box-sizing: border-box;
}

.btn[disabled="disabled"] {
    opacity: 0.5;
    box-shadow: none;
    background: #2f59bf !important;
}

.btn:hover,
.btn:active {
    background: #396eef;
}

.btn-group {
    padding: 12px 0
}

.flexbox {
    width: auto;
    display: flex;
}

.btn.passcode {
    flex: 1;
    border-radius: 0 2px 2px 0;
}

.tips {
    display: block;
    color: #ff6060;
    text-align: left;
    font-size: 14px;
    padding-top: 4px;
}
</style>
