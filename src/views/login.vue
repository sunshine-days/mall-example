<template>
<div>
  <div>
    <box gap="30px 10px">
        <group title="手机号" class="weui-cells_form">
      <x-input placeholder="请输入手机号" class="weui-vcode">
      </x-input>
    </group>
    <group title="验证码" class="weui-cells_form">
      <x-input placeholder="请输入验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
    <box gap="30px 0px">
        <x-button type="primary">登录</x-button>
    </box>
    </box>
  </div>
</div>
</template>

<script>
import tabbars from '@/components/tabbar'
import { XInput, Group, XButton, Box } from 'vux'
export default {
  components: {
    tabbars, XInput, Group, XButton, Box
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      results: [],
      value: 'test'
    }
  },
  methods: {}
}
</script>

<style>

</style>
