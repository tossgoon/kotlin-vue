import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate)

Validator.extend('mobile', {
  getMessage: field => 'The ' + field + ' is not a phone number',
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})

//use chinese warning
//import cn from 'vee-validate/dist/locale/zh_CN'
//Validator.localize('cn', cn)
