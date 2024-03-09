<template>
  <div class="base-input w-full">
    <div class="base-input__icon-after">
				<slot name="append" />
		</div>

    <input 
      type="text" 
      class="base-input__container w-full" 
      :value="modelValue" 
      @input="emitInput($event.target.value)"
      :readonly="preventEdit"
			v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    },
    preventEdit: {
      type: Boolean,
      default: false
    },
		validationRules: String
  },



  methods: {
    emitInput(value) {
      if (!this.preventEdit) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>

<style lang="scss">
.base-input {
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	height: 36px;

	&__icon-after {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 8px;
		font-size: 16px;

		* {
			font-size: 16px;
		}
	}

	&__container {
		padding: 9px;
		padding-left: 10px;
		height: 100%;

		&.\--has-append {
			padding-left: 34px;
		}
	}
}
/* Add your CSS styles here */
</style>
