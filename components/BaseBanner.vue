<template>
  <div class="base-banner">
    <swiper v-show="isShow" class="base-banner__container" :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <!-- <img :src="image.src" :alt="image.alt"> -->
        <div class="base-banner__background">

        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    images: {
      type: Array,
      default: () => ([])
    }
  },

  components: {
    Swiper,
    SwiperSlide
  },

  data: () => ({
    swiperOptions: {
      // Swiper options
      // For example:
      // autoplay: {
      //   delay: 5000,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),

  computed: {
    isShow () {
      return this.images.length > 0
    }
  }
}
</script>


<style lang="scss">
  .base-banner {
    padding: 8px 12px;

    &__background {
      border-radius: 10px;
      padding-top: 56.15%;
      background-color: #D9D9D9;
    }
  }
</style>