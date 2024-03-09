
<template>
<div class="layout bg-black">
  <BaseHeader />
  <div class="layout__content">
    <slot />
  </div>
  <MenuBottomPage :menu="menu" />
</div>
</template>

<script>
export default {
  data: (vm) => ({
    menu: [
      {
        icon: 'icon-home',
        label: vm.$nuxt.$i18n.t('home'),
        link: '/'
      },
      {
        icon: 'icon-gift',
        label: vm.$nuxt.$i18n.t('promo'),
        link: '/promo'
      },
      {
        icon: 'icon-chat',
        label: vm.$nuxt.$i18n.t('chat'),
        link: '/contact-us'
      },
      {
        icon: 'icon-user-cricle',
        label: vm.$nuxt.$i18n.t('profile'),
        link: '/profile'
      }
    ]
  })
}
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>