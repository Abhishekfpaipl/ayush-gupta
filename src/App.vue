<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['ThankYou', 'free-trial',]
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style lang="scss">
body {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none; //ios safari
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  // --bg-primary: #02539E !important;
  --bg-secondary: #EB5E28;
  --bg-tertiary: #FEC007;
  --bg-forth: #ffffe7;
  --brand-color: #02539E
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.before-enter {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity .6s ease-out, transform .6s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.form-control {
  box-shadow: none !important;
}
</style>
