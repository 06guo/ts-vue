<template>
  <div id="memos" class="container">
      <memoItem v-for="item in filterArr()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
// 导入vue
import { Component, Vue } from 'vue-property-decorator'
import ItemDate from '../model/ItemData'
import MemoItem from './MemoItem.vue'
// 编写组件类
@Component({
    components: {
        MemoItem
    }
})
export default class ItemList extends Vue{
    // 声明笔记数组（方便在当前组件中调用）
    memoArr: Array<ItemDate> = this.$store.state.aHelper.memoList
    filterArr () {
        if (this.$store.state.filterId === -1) {
            return this.memoArr
        } else {
            console.log();
            
            return this.memoArr.filter((item: any) => {
                return item.categoryId === this.$store.state.filterId
            })
        }
    }
}
</script>

<style scoped>

</style>