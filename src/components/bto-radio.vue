<template>
    <label class="bto-radio" :class="[{ 'is-active': value === label },{ 'is-disabled': isDisabled }
    ]">
        <input type="radio" @change="changeHandler" :disabled="disabled" :checked="checked"  style="display:none"/>
        <span class="bto-radio-text" v-if="!$slots.default">{{val}}</span>
        <span class="bto-radio-text" v-else><slot></slot></span>
    </label>
</template>

<script type="text/babel">
  export default {
    name: 'yd-radio',
    data () {
      return {
        checked: false
      }
    },
    props: {
      val: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeHandler (event) {
        if (this.disabled) return
        this.checked = event.target.checked
        this.$parent.change(this.val)
      },
      styles (size) {
        return {
          width: this.$parent.size / size + 'px',
          height: this.$parent.size / size + 'px'
        }
      }
    }
}
</script>
<style>
.bto-radio{
  border:1px solid #D3DCE6;
  padding:6px;
  border-radius:5px;
  margin-right:10px;
  display:inline-block;
}
</style>
