<template>
  <div class="popup-login bg-black-100">
    <div class="popup-login__container">
      <div class="popup-login__header text-center">
        <img class="mx-auto" :src="logo" alt="logo" />
      </div>


      <Form class="popup-login__form">
        <BaseInput class="--has-append"
          v-model="user.username" type="text"
          :placeholder="$nuxt.$i18n.t('username')"
        >
          <template #append>
            <div class="header__input-username">
              <span class="icon-user"></span>
            </div>
          </template>
        </BaseInput>


        <BaseInput class="--has-append" v-model="user.password"
          type="text"
          :placeholder="$nuxt.$i18n.t('password')">
          <template #append>
            <div class="header__input-password">
              <span class="icon-lock"></span>
            </div>
          </template>
        </BaseInput>

        <div class="popup-login__remember-password flex w-full items-center gap-[15px]">
          <input type="checkbox">
          
          <span class="text-white">
            {{ $nuxt.$i18n.t('remember_password') }}
          </span>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import srcLogoDefault from "~/assets/images/logo.png";

export default {
  props: {
    logo: {
      type: String,
      default: srcLogoDefault
    }
  },

  data: () => ({
    user: {
      username: '',
      password: ''
    }
  })
}
</script>

<style lang="scss">
  .popup-login {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    &__header {
      padding-bottom: 21px;
    }

    &__container {
      padding: 37px 80px 67px;
    }

    &__form {
      .base-input {
        margin-bottom: 16px;
      }
    }
  }
</style>