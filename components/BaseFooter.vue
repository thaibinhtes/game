<template>
  <footer class="base-footer text-white">
    <div class="base-footer__title text-center uppercase text-center">
      {{ $nuxt.$i18n.t('footer') }}
    </div>

    <div class="base-footer__intro text-center">
      {{ $nuxt.$i18n.t('introFooter')  }}
    </div>

    <div class="base-footer__contact">
      <div class="base-footer__title text-center uppercase text-center">
        {{ $nuxt.$i18n.t('contact') }}
      </div>

      <ul class="base-footer__list-contact flex gap-[20px]">
        <li class="base-footer__item-contact">
          <i class="icon-phone"></i>
        </li>
        <li class="base-footer__item-contact">
          <i class="icon-facebook"></i>
        </li>
        <li class="base-footer__item-contact">
          <i class="icon-mail"></i>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
  .base-footer {
    padding: 19px 0;
    &__title {
      font-weight: 700;
      font-size: 16px;
      line-height: 19.36px;
    }

    &__intro {
      padding: 15px 41px;
    }

    &__list-contact {
      padding: 17px 0;
      justify-content: center;
    }

    &__item-contact {
      i {
        font-size: 20px;
      }
    }
  }
</style>