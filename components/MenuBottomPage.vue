<template>
  <div class="menu-bottom-page w-full">
    <ul class="menu-bottom-page__container">
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="{ 'menu-bottom-page__item': true, 'text-yellow-100': true,
        '--active': $route.path === item.link }"
      >
        <nuxt-link :to="item.link">
          <i :class="item.icon"></i>
          <span class="block w-full text-center uppercase">
            {{ item.label }}
          </span>
        </nuxt-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>


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