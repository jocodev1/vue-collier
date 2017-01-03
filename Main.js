var Banner = require('./components/Banner.vue')
var Modal = require('./components/Modal.vue')

module.exports = {
  install: function (Vue) {
    Vue.component('banner', Banner)
    Vue.component('modal', Modal)

    Vue.prototype.$modal = false
  }
}
