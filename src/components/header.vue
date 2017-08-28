<template>
  <div>
    <div class="mall-header">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">壹基因商城</x-header>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showMore: false
    }
  }
}
</script>

<style>

</style>
