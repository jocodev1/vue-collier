<template>
  <nav :class="{
    horz: true,
    fixed: options.fixed
  }">
    <!-- Small screen -->
    <div class="collapse" v-if="collapse">
      <div class="u-pull-right toggle" v-on:click="openCollapse = !openCollapse">
        <span><i class="fa fa-bars"></i></span> Menu
      </div>
      <ul class="stacked" v-if="openCollapse">
        <li v-for="link in links">
          <router-link :to="link.to" v-if="link.router">{{ link.display }}</router-link>
        </li>
      </ul>
    </div>
    <!-- Large screen -->
    <ul v-else>
      <li v-for="link in links">
        <router-link :to="link.to" v-if="link.router">{{ link.display }}</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
  export default {
    name: 'nav',
    props: {
      options: {
        fixed: {
          type: Boolean,
          default: false
        }
      },
      links: {
        type: Array,
        default () {
          return []
        }
      },
      breakpoint: {
        type: Number,
        default: 750
      }
    },
    data () {
      return {
        width: null,
        openCollapse: false
      }
    },
    computed: {
      collapse () {
        var bool = this.width < this.breakpoint

        if (!bool && this.openCollapse) {
          this.openCollapse = false
        }

        return bool
      }
    },
    created () {
      this.width = window.innerWidth
      this.watchWindowSize()
    },
    methods: {
      watchWindowSize () {
        var self = this
        window.addEventListener('resize', function (event) {
          self.width = event.target.innerWidth
        })
      }
    }
  }
</script>

<style>
  
</style>