var Banner = require('./components/Banner.vue')
var Modal = require('./components/Modal.vue')
var NavBar = require('./components/NavBar.vue')

module.exports = {
  install: function (Vue) {
    Vue.component('banner', Banner)
    Vue.component('modal', Modal)
    Vue.component('nav-bar', NavBar)

    Vue.prototype.$modal = false
  }
}
