<template>
  <header class="header">
    <div class="container mx-auto pl-[15px] pr-[15px]">
      <div class="grid grid-cols-12 items-center pt-[8px] pb-[6px]">
        <div class="col-span-4 header__logo">
          <img src="~/assets/images/logo.png" alt="logo">
        </div>

        <div class="col-span-8 text-right">
          <button class="btn bg-green header__btn text-white">
            {{ $nuxt.$i18n.t('signUp') }}
          </button>
        </div>
      </div>

      <div class="flex items-center header__bottom gap-[12px]">
        <div class="w-[78.6%]">
          <div class="grid grid-cols-12 gap-[12px]">
            <div class="col-span-6">
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
            </div>

            <div class="col-span-6">
              <BaseInput class="--has-append" v-model="user.password"
                type="text"
                :placeholder="$nuxt.$i18n.t('password')">
                <template #append>
                  <div class="header__input-password">
                    <span class="icon-lock"></span>
                  </div>
                </template>
              </BaseInput>
            </div>
          </div>

        </div>

        <div class="w-[21.4%] text-right">
          <button class="btn bg-blue text-white header__btn">
            {{ $nuxt.$i18n.t('login') }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  inject: ['$t'],

  data: () => ({
    user: {
      username: ''
    }
  })
}
</script>

<style lang="scss">
  .header {
    &__bottom {
      padding: 8px 0;
    }

    &__btn {
      width: 100%;
      max-width: 92px;
    }
  }
</style>