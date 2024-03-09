<template>
  <div class="menu-bottom-page w-full">
    <ul class="menu-bottom-page__container">
      <li class="menu-bottom-page__item text-yellow-100 --active">
        <i class="icon-home"></i>
        <span class="block w-full text-center uppercase">
          {{ $nuxt.$i18n.t('home') }}
        </span>
      </li>
      <li class="menu-bottom-page__item text-yellow-100">
       <nuxt-link to="/promo">
        <i class="icon-gift"></i>
        <span class="block w-full text-center uppercase">
          {{ $nuxt.$i18n.t('promo') }}
        </span>
       </nuxt-link>
        
      </li>
      <li class="menu-bottom-page__item text-yellow-100">
        <i class="icon-chat"></i>
        <span class="block w-full text-center uppercase">
          {{ $nuxt.$i18n.t('contactUs') }}
        </span>
      </li>

      <li class="menu-bottom-page__item text-yellow-100">
        <i class="icon-user-cricle"></i>
        <span class="block w-full text-center uppercase">
          {{ $nuxt.$i18n.t('profile') }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .menu-bottom-page {
    background-color: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 12px;
    

    &__container {
      display: flex;
      gap: 11px;
    }

    &__item {
      padding: 11px 14px;
      flex: 1;
      align-items: center;
      text-align: center;

      &.\--active, &:hover {
        background-color: #333333;
      }
      
      i {
        font-size: 30px;
      }

      span {
        margin-top: 7px;
        font-weight: 400;
        font-size: 10px;
        line-height: 12.1px;
      }
    }
  }
</style>