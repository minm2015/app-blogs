<template>
  <div id='blog'>
    <app-nav/>
    <app-search/>
    <transition name="router-fade">
      <router-view></router-view>
    </transition>
    <app-footer/>
  </div>
</template>
<script>
import AppSearch from '@/components/search'
import AppFooter from '@/components/footer'
import AppNav from '@/components/nav'
export default {
  name: 'app',
  components: {
    AppSearch, AppFooter, AppNav
  },
  created () {
    this.$router.replace('/home')
  }
}
</script>
